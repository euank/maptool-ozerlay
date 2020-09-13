<style scoped>
.button {
  font-size: 0.8rem;
  height: 2.5rem;
  line-height: 2.5rem;
  padding: 0 1.0rem;
  margin: 0.25rem;
}
</style>

<template>
  <div>
    <a class="button button-outline" v-on:click="runSave()" href="#">
      {{ this.ability }} (+ {{ this.mod() }})
    </a>
  </div>
</template>

<script lang="ts" src="./AbilitySave.ts">
</script>
