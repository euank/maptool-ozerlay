import Vue from 'vue';

export default Vue.extend({
  computed: {
    history() {
      return this.$store.state.routeHistory
    },
  },
  methods: {
    routeTo(id: number) {
      this.$store.commit('routeBackTo', id)
    }
  },
});
