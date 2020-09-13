<style>
.flex-overflow {
  flex-wrap: wrap;
}

.together {
display: flex;
}
</style>

<template>
  <div id="edit">
    <h3>Oswald Struck</h3>
    <form>
      <fieldset class="container">
        <div class="row">
          <label>Level:
            <input type="number" v-model="char.level">
          </label>
          <label>HP:
            <input type="number" v-model="char.hp">
          </label>
          <label>MaxHP:
            <input type="number" v-model="char.maxHP">
          </label>
        </div>
        <div class="row">
          <label>Ki:
            <input type="number" v-model="char.ki">
          </label>
          <label>MaxKi:
            <input type="number" v-model="char.maxKi">
          </label>
        </div>
        <hr />
        <label class="row">Ability Scores</label>
        <div class="row flex-overflow">
          <div v-for="abil in Object.keys(char.abilityScores)">
            <label>{{ abil }}:
              <input type="number" v-model="char.abilityScores[abil]">
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
                <input type="number" v-model="char.skills[skill].points">
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
