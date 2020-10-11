import Vue from 'vue';

export default Vue.extend({
  computed: {
    char() {
      return this.$store.state.Oz.clone().data
    },
  },
  data: function() {
    return {
      secondAttack: 'unarmed',
    }
  },
  methods: {
    run() {
      this.$store.state.Oz.flurryOfBlows(this.secondAttack === 'unarmed' ? 'unarmedStrike' : 'handsOfHealing')
    },
  },
});
