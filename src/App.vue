<template>
  <div id="app">
    <h2>Oswald Struck</h2>
    <Router v-bind:state="state" :routes="routes" v-bind:current-route="currentRoute" />
    <br />
    <FrameReload />
  </div>
</template>

<script>
import FrameReload from "@/components/FrameReload";
import Router from "@/components/Router";
import Home from "@/components/Home";

const routes = {
  '/': Home,
}

export default {
  name: "App",
  data() {
    return {
      state: window.data,
      routes,
      currentRoute: '/',
    }
  },
  components: {
    FrameReload,
    Router,
  }
};
</script>
