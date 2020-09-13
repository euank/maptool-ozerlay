<style>
@import '~milligram/dist/milligram.min.css';
</style>

<template>
  <div id="app">
    <h2>Oswald Struck</h2>
    <Router :routes="routes" v-bind:current-route="currentRoute" />
    <br />
    <FrameReload />
  </div>
</template>

<script lang="ts" src="./App.ts" />
