<style>
</style>

<template>
  <div id="combat">
    <h3 class="">Combat</h3>
    <br />
    <label class="label-inline">
      Toggle Advantage
      <input type="checkbox" v-model="hasAdvantage"></input>
    </label>
    <label class="label-inline">
      Toggle Disadvantage
      <input type="checkbox" v-model="hasDisadvantage"></input>
    </label>
    <br />
    <a href="#" class="button" @click="unarmedStrike()">Unarmed Strike</a>
    <p>TODO: add a bunch more stuff</p>
  </div>
</template>

<script lang="ts" src="./Combat.ts"></script>
