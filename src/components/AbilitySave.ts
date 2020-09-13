import Vue from 'vue';
import { Character } from '../lib/dnd';

export default Vue.extend({
  props: ['name', 'value'],
  computed: {
    Oz(): Character {
      return this.$store.state.Oz
    },
  },
  methods: {
    mod: function(val: number) {
      return Math.floor((val - 10) / 2.0);
    },
    runSave() {
      this.Oz.doRoll('test');
      // window.evalMT('t', 'all', `1d20 + ${this.mod(this.value)}`);
    },
  }
})
