<style>
@import '~milligram/dist/milligram.min.css';
.flexcontainer {
  display: flex;
  flex-wrap: wrap;
}

.h3size {
  height: 5rem;
}

.button {
  font-size: 1.1rem;
  height: 3.2rem;
  line-height: 3rem;
  padding: 0 2.3rem;
}
</style>

<template>
  <div id="char-metadata">
    <h3 class="">Oswald Struck</h3>
    <small><a class="button" href="#" @click="navEdit()">edit</a></small>
    <br />
    <br />
    <span>HP: {{ Oz.data.hp}} / {{ Oz.data.maxHP }} </span>
    <br />
    <span>Ki: {{ Oz.data.ki }} / {{ Oz.data.maxKi }} </span>
    <br />
    <br />
    <a class="button" href="#" @click="navCombat()">Combat</a>
    <!-- TODO -->
    <div v-if="false">
      <span>Status Effects:</span>
      <ul>
        <li v-for="statusEffect in Oz.data.statusEffects">{{ statusEffect }}</li>
      </ul>
      <br />
      <br />
    </div>

    <h4>Ability Saves</h4>
    <div class="container row">
      <div v-for="ability in Object.keys(Oz.data.abilityScores)">
        <AbilitySave :ability=ability />
      </div>
    </div>
    <br />
    <h4>Skill Checks</h4>
    <div class="flexcontainer">
      <div v-for="skill in Object.keys(Oz.data.skills)">
        <SkillCheck class="skill" :skill="skill" />
      </div>
    </div>
    <br />
    <FrameReload />
  </div>
</template>

<script lang="ts" src="./Home.ts"></script>
