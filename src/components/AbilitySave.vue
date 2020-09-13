<template>
  <button v-on:click="runSave()">
    {{ name }} save (+ {{ mod(value) }})
  </button>
</template>

<script lang="ts" src="./AbilitySave.ts">
</script>
