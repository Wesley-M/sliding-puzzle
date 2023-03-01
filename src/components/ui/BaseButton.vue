<template>
    <button><slot></slot></button>
</template>

<style scoped>
    button {
        line-height: 50%;
        width: 1.6em;
        height: 1.6em;
        border-radius: 50%;
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