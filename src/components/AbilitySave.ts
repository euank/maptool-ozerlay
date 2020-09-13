import Vue from 'vue';
import { Character } from '../lib/dnd';

export default Vue.extend({
  props: ['ability'],
  computed: {
    Oz(): Character {
      return this.$store.state.Oz
    },
  },
  methods: {
    mod() {
      return this.Oz.abilSaveMod(this.ability)
    },
    runSave() {
      this.Oz.rollSave(this.ability);
    },
  }
})
