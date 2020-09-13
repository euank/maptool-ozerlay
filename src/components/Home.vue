<template>
  <div id="char-metadata">
    <span>HP: {{ Oz.data.hp}} / {{ Oz.data.maxHP }} </span>
    <br />
    <span>Ki: {{ Oz.data.ki }} / {{ Oz.data.maxKi }} </span>
    <br />
    <h3>Ability Saves</h3>
    <div class="container row">
      <div v-for="ability in Object.keys(Oz.data.abilityScores)">
        <AbilitySave :ability=ability />
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./Home.ts"></script>
