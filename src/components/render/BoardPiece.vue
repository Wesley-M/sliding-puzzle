<script setup>
import { BOARD_SIDE_EM, FONT_SCALING_FACTOR } from '../../config/config'
</script>

<template>
  <td
    :class="{ 'is-correct': visible && isCorrect, 'piece': visible && !isCorrect }"
    :style="{ width: (BOARD_SIDE_EM / n) + 'em', height: (BOARD_SIDE_EM / n) + 'em'}"
    @click="$parent.$parent.$emit('pieceTap', value)"
  >
    <p :style='{ fontSize: (FONT_SCALING_FACTOR / n) + "em" }'>{{ visible ? value : '' }}</p>
  </td>
</template>

<style scoped>
td {
  display: inline-flex;
  place-items: center;
  margin: 0.2em;
  border-radius: 0.25em;
}

p {
  width: 100%;
  text-align: center;
  font-family: 'Sirin Stencil', cursive;
}

.is-correct {
  background-color: var(--pz-c-orange);
}

.piece {
  background-color: var(--pz-c-cerulean);
}
</style>

<script>
export default {
  emits: [ 'pieceTap' ],
  props: {
    isCorrect: {
      type: Boolean,
      default: false
    },
    value: {
      type: Number
    }
  },
  computed: {
    visible() {
      return this.value !== 0
    },
    n() {
      return this.board_side
    }
  },
  inject: ['board_side']
}
</script>