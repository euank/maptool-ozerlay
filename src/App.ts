import Vue from 'vue';
import FrameReload from "./components/FrameReload.vue";
import Router from "./components/Router";
import Home from "./components/Home.vue";

const routes = {
  '/': Home,
}

export default Vue.extend({
  name: "App",
  data() {
    return {
      routes,
      currentRoute: '/',
    }
  },
  components: {
    FrameReload,
    Router,
  }
});
