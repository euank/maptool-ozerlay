<template>
  <button v-on:click="runSave()">
    {{ this.ability }} save (+ {{ this.mod() }})
  </button>
</template>

<script lang="ts" src="./AbilitySave.ts">
</script>
