<style>
.breadcrumb {
  list-style-type: none;
}

.breadcrumb > li {
  float: left;
}
</style>

<template>
  <div class="container">
    <ul class="breadcrumb">
      <li v-for="route in history">
        <a href="#" @click="routeTo(route.id)">{{ route.name }}</a>
      </li>
    </ul>
    <br />

    <slot></slot>
  </div>
</template>

<script lang="ts" src="./Main.ts"></script>
