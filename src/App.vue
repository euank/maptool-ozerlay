<template>
  <div id="app">
  <link rel="stylesheet" href="~sass-basis/dist/css/basis.min.css">
    <h2>Oswald Struck</h2>
    <Router :routes="routes" v-bind:current-route="currentRoute" />
    <br />
    <FrameReload />
  </div>
</template>

<script lang="ts" src="./App.ts" />
