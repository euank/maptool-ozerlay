<style>
.flex-overflow {
  flex-wrap: wrap;
}

.together {
display: flex;
}

.h3size {
  height: 5rem;
}
</style>

<template>
  <div id="edit">
    <h3 class="">Oswald Struck</h3>
    <form>
      <fieldset class="container">
        <div class="row">
          <label>Level:
            <input type="number" v-model.number="char.level">
          </label>
          <label>Proficiency Bonus:
            <input type="number" v-model.number="char.proficiencyBonus">
          </label>
          <label>HP:
            <input type="number" v-model.number="char.hp">
          </label>
          <label>MaxHP:
            <input type="number" v-model.number="char.maxHP">
          </label>
        </div>
        <div class="row">
          <label>Martial arts die:
            <input v-model="char.martialArtDie">
          </label>
        </div>
        <div class="row">
          <label>Ki:
            <input type="number" v-model.number="char.ki">
          </label>
          <label>MaxKi:
            <input type="number" v-model.number="char.maxKi">
          </label>
        </div>
        <hr />
        <label class="row">Ability Scores</label>
        <div class="row flex-overflow">
          <div v-for="abil in Object.keys(char.abilityScores)">
            <label>{{ abil }}:
              <input type="checkbox" v-model="char.saveProficiencies[abil]">
              <input type="number" v-model.number="char.abilityScores[abil]">
            </label>
          </div>
        </div>
        <hr />
        <label class="row">Skills</label>
        <div class="row flex-overflow">
          <div v-for="skill in Object.keys(char.skills)">
            <label>{{ skill }}:
              <div class="together">
                <input type="checkbox" v-model="char.skills[skill].trained">
                <input type="number" v-model.number="char.skills[skill].points">
              </div>
            </label>
          </div>
        </div>
      </fieldset>
      <input type="submit" value="save" @click="save()"></input>
    </form>
  </div>
</template>

<script lang="ts" src="./Edit.ts"></script>
