<script setup>
import BaseButton from '../ui/BaseButton.vue'
</script>

<template>
  <div class="win-container">
    <div class="win" style="z-index: 20">
      <p>You Win!</p>
      <BaseButton>
        <v-icon name="md-restartalt" @click="$parent.$emit('reset')"/>
      </BaseButton>
    </div>
  </div>
</template>

<style scoped>
p {
  font-family: 'Sirin Stencil', cursive;
  font-size: 4em;
  width: 100%;
  text-align: center;
  margin-top: 2em;
}

.win-container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 15;
}

.win-container:before {
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

.win {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  place-items: center;
  flex-direction: column;
}
</style>