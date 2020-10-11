<style>
</style>

<template>
  <div id="combat">
    <h3 class="">Flurry of Blows</h3>
    <span>Cost: 1 ki</span>
    <p>
      Attack with a flurry of blows! <br />
      After an Attack action, you may make two unarmed strikes as a bonus
      action.
      <br />
      Alternatively, you may substitute the second flurry for a Hands of
      Healing at no extra ki cost!
    </p>
    <br />
    <br />
    <label for="secondAttack">Second Attack</label>
    <select v-model="secondAttack" id="secondAttack">
      <option value="unarmed">Unarmed Strike</option>
      <option value="heal">Hands of Healing</option>
    </select>
    {{ this.secondAttack }}
    <a href="#" class="button" @click="run()">Do It</a>
  </div>
</template>

<script lang="ts" src="./FlurryOfBlows.ts"></script>
