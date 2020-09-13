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
      </fieldset>
      <input type="submit" value="save" @click="save()"></input>
    </form>
  </div>
</template>

<script lang="ts" src="./Edit.ts"></script>
