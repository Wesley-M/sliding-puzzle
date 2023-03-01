<script setup>
import TheBoard from './TheBoard.vue';
import Instructions from './Instructions.vue';
import BaseButton from '../ui/BaseButton.vue';
import GameStats from "./GameStats.vue";
</script>

<template>
    <div class="header">
        <img src="../../assets/logo.svg" style="width: 45%">
        <div style="flex: 1"></div>
        <BaseButton @click="setInstructionsVisibility">
            ?
        </BaseButton>
    </div>
    <div class="game">
        <GameStats :moves="moves" :progress="progress"/>
        <TheBoard :board="board" />
        <Instructions v-if="instructionsAreVisible" @closeInstructions="setInstructionsVisibility" />
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
}
</style>

<script>
export default {
    emits: ['freeze', 'unfreeze'],
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
    props: ["board", "moves", "progress"]
}
</script>