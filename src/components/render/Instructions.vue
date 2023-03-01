<script setup>
import BaseButton from '../ui/BaseButton.vue';
</script>

<template>
    <div class="instructions-container">
        <div class="instructions" style="z-index: 20">
            <div class="header">
                <p>Instructions</p>
                <div style="flex: 1"></div>
                <BaseButton @click="$emit('closeInstructions')">x</BaseButton>
            </div>
            <ul>
                <li>Use the arrow keys to order the grid from 1 to 15;</li>
                <li>Or use swipe gestures to do the same.</li>
            </ul>
        </div>
    </div>
</template>

<style>
.header {
    display: flex;
    margin-bottom: 1.5em;
    place-items: center;
}

p {
    font-family: 'Sirin Stencil', cursive;
    font-size: 1.5em;
}

ul li {
    font-family: 'Sirin Stencil', cursive;
    font-size: 1.2em;
    margin-bottom: 1em;
}

.instructions-container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 15;
}

.instructions-container:before {
    content: '';
    width: 100%;
    height: 100%;
    filter: blur(5px);
    background-color: var(--pz-c-cyan-light-1);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
}

.instructions {
    padding: 2em;
}
</style>