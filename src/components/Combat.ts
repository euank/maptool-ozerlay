import Vue from 'vue';

export default Vue.extend({
  computed: {
    char() {
      return this.$store.state.Oz.clone().data
    },
    // TODO: these should probably be a 'watch' instead of 'computed' since
    // they're inter-dependent
    hasAdvantage: {
      get(): boolean {
        return this.char.combatAdvantage == 'advantage'
      },
      set(val: boolean) {
        this.$store.state.Oz.setCombatAdvantage(val ? 'advantage' : '')
      }
    },
    hasDisadvantage: {
      get(): boolean {
        return this.char.combatAdvantage == 'disadvantage'
      },
      set(val: boolean) {
        this.$store.state.Oz.setCombatAdvantage(val ? 'disadvantage' : '')
      }
    },
  },
  methods: {
    unarmedStrike() {
      this.$store.state.Oz.unarmedStrike()
    },
  },
});
