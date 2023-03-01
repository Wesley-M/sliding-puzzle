<script setup>
import { new_board, is_solved, board_progress, keyboard_move, gesture_move } from '../utils/game'
import { BOARD_SIDE, MIN_BOARD_SIDE, MAX_BOARD_SIDE } from '../config/config'
import * as Hammer from 'hammerjs'
import Renderer from './render/TheRenderer.vue'

import { computed } from 'vue'
</script>

<template>
  <Renderer
    :board='board'
    :moves='moves'
    :progress='progress'
    :won='won'
    @freeze='freeze'
    @unfreeze='unfreeze'
    @reset='reset'
    @decreaseBoardSize='decreaseBoardSize'
    @increaseBoardSize='increaseBoardSize'
  />
</template>

<script>
// Setting up gesture support
let hammertime = new Hammer(document.body)

// Enabling vertical swipe event listeners
hammertime.get('swipe').set({ direction: Hammer.DIRECTION_ALL })

export default {
  data() {
    return {
      n: BOARD_SIDE,
      board: new_board(BOARD_SIDE),
      moves: 0,
      freezed: false,
      won: false
    }
  },
  created() {
    window.addEventListener('keydown', (e) => this.handleInput('keyboard', e))
    hammertime.on('swipeleft swiperight swipeup swipedown', (e) => this.handleInput('gesture', e))
  },
  unmounted() {
    window.removeEventListener('keydown', (e) => this.handleInput('keyboard', e))
    hammertime.off('swipeleft swiperight swipeup swipedown', (e) => this.handleInput('gesture', e))
  },
  methods: {
    handleInput(type, ev) {
      if (this.freezed) return

      let moved = (type === 'keyboard') ? keyboard_move(this.board, ev) : gesture_move(this.board, ev)

      if (moved) this.moves++
    },
    freeze() {
      this.freezed = true;
    },
    unfreeze() {
      this.freezed = false;
    },
    reset() {
      this.board = new_board(this.n);
      this.unfreeze();
    },
    decreaseBoardSize() {
      this.n = Math.max(MIN_BOARD_SIDE, this.n - 1);
    },
    increaseBoardSize() {
      this.n = Math.min(MAX_BOARD_SIDE, this.n + 1);
    }
  },
  computed: {
    progress() {
      return board_progress(this.board)
    }
  },
  watch: {
    n() {
      this.board = new_board(this.n)
    },
    board: {
      handler() {
        this.won = is_solved(this.board);
        if (this.won) this.freeze();
      },
      deep: true
    }
  },
  provide(){
    return {
      board_side: computed(() => this.n)
    }
  }
}
</script>