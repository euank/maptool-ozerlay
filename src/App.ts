import Vue from 'vue';

import * as routes from '@/routes';
import Combat from "./components/Combat.vue";
import Edit from "./components/Edit.vue";
import Home from "./components/Home.vue";
import Main from "./components/Main.vue";

const routeMap = {
  [routes.Home.path]: Home,
  [routes.Edit.path]: Edit,
  [routes.Combat.path]: Combat,
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
