<script setup>
import { in_correct_position } from '../../utils/game';
import BoardPiece from './BoardPiece.vue';
</script>

<template>
    <table>
        <tbody>
            <tr v-for="(row, i) in board" :key="i">
                <BoardPiece
                    v-for="piece in row" 
                    :key="piece" 
                    :value="piece"
                    :isCorrect="in_correct_position(board, piece)"
                />
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
  emits: [ 'pieceTap' ],
  props: ["board"]
}
</script>