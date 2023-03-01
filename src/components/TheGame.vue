<script setup>
import { new_board, keyboard_move, gesture_move } from '../utils/game'
import { BOARD_SIDE } from '../config/config'
import * as Hammer from 'hammerjs'
import Renderer from './render/TheRenderer.vue'
</script>

<template>
  <Renderer
    :board='board'
    :moves='moves'
    :progress='progress'
    @freeze='freeze'
    @unfreeze='unfreeze'
  />
</template>

<script>
// Setting up gesture support
import { board_progress } from '../utils/game'

let hammertime = new Hammer(document.body)

// Enabling vertical swipe event listeners
hammertime.get('swipe').set({ direction: Hammer.DIRECTION_ALL })

export default {
  data() {
    return {
      board: new_board(BOARD_SIDE),
      moves: 0,
      freezed: false
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
      this.board = new_board(BOARD_SIDE)
    }
  },
  computed: {
    progress() {
      return board_progress(this.board)
    }
  }
}
</script>