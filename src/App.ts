import Vue from 'vue';
import * as routes from '@/routes';
import Main from "./components/Main.vue";
import Home from "./components/Home.vue";
import Edit from "./components/Edit.vue";

const routeMap = {
  [routes.Home.path]: Home,
  [routes.Edit.path]: Edit,
}

export default Vue.extend({
  name: "App",
  computed: {
    ActiveComponent(): Vue.VueConstructor {
      const currentRoute = this.$store.state.currentRoute
      return routeMap[currentRoute.path] || Home
    },
    currentRoute(): routes.Route {
      return this.$store.state.currentRoute
    },
    routeHistory(): string[] {
      return this.$store.state.routeHistory
    }
  },
  render(h): Vue.VNode {
    return h(Main, [
      h(this.ActiveComponent)
    ])
  }
});
