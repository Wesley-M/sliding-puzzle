<template>
    <td
        :class="{ 'is-correct': visible && isCorrect, 'piece': visible && !isCorrect }"
    >
        <p>{{ visible ? n : '' }}</p>
    </td>  
</template>

<style scoped>
    td {
        display: inline-flex;
        place-items: center;
        margin: 0.2em;
        border-radius: 0.25em;
        width: 5em;
        height: 5em;
    }
    p {
        width: 100%;
        text-align: center;
        font-size: 1.8em;
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
    props: {
        isCorrect: {
            type: Boolean,
            default: false
        },
        n: {
            type: Number
        }
    },
    computed: {
        visible() {
            return this.n !== 0;
        }
    }
}
</script>