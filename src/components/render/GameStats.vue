<template>
  <div class="stats">
    <div class="stat">
      <p class="moves-label">MOVES</p>
      <p class="moves-display">{{ moves }}</p>
    </div>
    <div class="stat">
      <p class="moves-label">PROGRESS</p>
      <p class="moves-display">{{ (progress * 100).toFixed(2) }}%</p>
    </div>
  </div>
</template>

<style scoped>
.stats {
  margin: 0.3em 0.3em 1em;
}

.stat {
  display: inline-flex;
  flex-direction: column;
  margin-right: 0.5em;
  min-width: 25%;
}

.moves-label {
  font-size: 0.65em;
  opacity: 0.8;
  font-weight: bold;
  margin-bottom: 0.2em;
  font-family: "Roboto", sans-serif;
}

.moves-display {
  font-family: "Roboto", sans-serif;
  font-size: 1.2em;
  font-weight: bold;
  padding: 0.1em 1em;
  border-radius: 0.2em;
  opacity: 0.7;
  background-color: var(--pz-c-cerulean-light-2);
  text-align: center;
  width: 100%;
}
</style>

<script>

export default {
  data() {},
  props: ["moves", "progress"]
}

</script>