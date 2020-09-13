<template>
  <div id="char-metadata">
    <span>HP: {{ Oz.data.hp}} / {{ Oz.data.maxHP }} </span>
    <br />
    <span>Ki: {{ Oz.data.ki }} / {{ Oz.data.maxKi }} </span>
    <br />
    <h3>Ability Saves</h3>
    <div v-for="(value, name) in Oz.data.abilities">
      <AbilitySave :name=name :value=value />
    </div>
  </div>
</template>

<script lang="ts" src="./Home.ts"></script>
