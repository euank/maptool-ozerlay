<style scoped>
.button {
  font-size: 0.8rem;
  height: 2.6rem;
  line-height: 2.5rem;
  padding: 0 1.0rem;
  margin: 0 0.25rem;
}
</style>

<template>
  <div>
    <a class="button button-outline" @click="runSave()" href="#">
      {{ this.trainedPrefix }} {{ this.skill }} (+ {{ this.mod }})
    </a>
  </div>
</template>

<script lang="ts" src="./SkillCheck.ts">
</script>
