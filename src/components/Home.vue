<style>
@import '~milligram/dist/milligram.min.css';
</style>

<template>
  <main>
    <div id="char-metadata">
      <h3 class="">Oswald Struck</h3>&nbsp;
      <small><a class="button" href="#" @click="navEdit()">edit</a></small>
      <br />
      <br />
      <span>HP: {{ Oz.data.hp}} / {{ Oz.data.maxHP }} </span>
      <br />
      <span>Ki: {{ Oz.data.ki }} / {{ Oz.data.maxKi }} </span>
      <br />
      <br />
      <span>Status Effects:</span>
      <ul>
        <li v-for="statusEffect in Oz.data.statusEffects">{{ statusEffect }}</li>
      </ul>
      <a href="#">Add status effect</a>

      <br />
      <br />
      <h4>Ability Saves</h4>
      <div class="container row">
        <div v-for="ability in Object.keys(Oz.data.abilityScores)">
          <AbilitySave :ability=ability />
        </div>
      </div>
    </div>
    <br />
    <FrameReload />
  </main>
</template>

<script lang="ts" src="./Home.ts"></script>
