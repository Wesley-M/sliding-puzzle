<script setup>
import TheBoard from './TheBoard.vue';
import Instructions from './Instructions.vue';
import BaseButton from '../ui/BaseButton.vue';
import GameStats from "./GameStats.vue";
import { BOARD_SIDE_EM } from '../../config/config'
import YouWin from './YouWin.vue'
</script>

<template>
    <div class="header">
        <img src="../../assets/logo.svg" style="width: 45%">
        <div style="flex: 1"></div>
        <BaseButton @click="setInstructionsVisibility">
            ?
        </BaseButton>
    </div>
    <div class="game" :style="{ minWidth: BOARD_SIDE_EM + 'em' }">
        <GameStats :moves="moves" :progress="progress"/>
        <TheBoard :board="board" />
        <Instructions v-if="instructionsAreVisible && !won" @closeInstructions="setInstructionsVisibility" />
        <YouWin v-if="won" />
    </div>
</template>

<style scoped>
.header {
    display: flex;
    margin-bottom: 1.5em;
    place-items: center;
}

.game {
    background-color: var(--color-background-dark);
    border-radius: 0.25em;
    padding: 0.5em;
    position: relative;
    z-index: 1;
    display: flex;
    place-items: center;
    flex-direction: column;
}
</style>

<script>
export default {
    emits: ['freeze', 'unfreeze', 'increaseBoardSize', 'decreaseBoardSize', 'reset'],
    data() {
        return {
            instructionsAreVisible: false
        }
    },
    methods: {
        setInstructionsVisibility() {
            this.instructionsAreVisible = !this.instructionsAreVisible;
            if (this.instructionsAreVisible) {
                this.$emit("freeze");
            } else {
                this.$emit("unfreeze");
            }
        }
    },
    props: ["board", "moves", "progress", "won"]
}
</script>