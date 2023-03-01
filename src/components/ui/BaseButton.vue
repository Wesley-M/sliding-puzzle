<template>
    <button><slot></slot></button>
</template>

<style scoped>
    button {
        width: 1.4em;
        height: 1.4em;
        border-radius: 1em;
        border: none;
        color: white;
        font-size: 1.3em;
        background-color: var(--pz-c-cerulean-light-2);
        transition: all 200ms ease;
    }

    button:hover {
        background-color: var(--pz-c-cerulean-light-1);
        cursor: pointer;
    }
</style>