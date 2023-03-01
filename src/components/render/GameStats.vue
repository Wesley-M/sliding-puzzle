<template>
  <div class="stats">
    <div class="stat">
      <p class="stat-label">MOVES</p>
      <p class="stat-display">{{ moves }}</p>
    </div>
    <div class="stat">
      <p class="stat-label">PROGRESS</p>
      <p class="stat-display">{{ (progress * 100).toFixed(2) }}%</p>
    </div>
    <div style="flex: 1"></div>
    <div class='controls'>
      <BaseButton @click="$parent.$emit('decreaseBoardSize')"><v-icon name='md-remove'/></BaseButton>
      <BaseButton @click="$parent.$emit('increaseBoardSize')"><v-icon name='md-add'/></BaseButton>
      <BaseButton @click="$parent.$emit('reset')"><v-icon name='md-restartalt'/></BaseButton>
    </div>
  </div>
</template>

<style scoped>
.stats {
  display: flex;
  margin: 0.3em 0.3em 1em;
  place-items: flex-end;
}

.stat {
  display: inline-flex;
  flex-direction: column;
  margin-right: 0.5em;
  min-width: 25%;
}

.stat-label {
  font-size: 0.65em;
  opacity: 0.8;
  font-weight: bold;
  margin-bottom: 0.2em;
  font-family: "Roboto", sans-serif;
}

.stat-display {
  font-family: "Roboto", sans-serif;
  font-size: 1.1em;
  font-weight: bold;
  padding: 0.1em 1.3em;
  border-radius: 0.2em;
  opacity: 0.7;
  background-color: var(--pz-c-cerulean-light-2);
  text-align: center;
}

.controls {
  display: flex;
  gap: 0.4em;
}
</style>

<script>

import BaseButton from '../ui/BaseButton.vue'

export default {
  components: { BaseButton },
  data() {},
  props: ["moves", "progress"]
}

</script>