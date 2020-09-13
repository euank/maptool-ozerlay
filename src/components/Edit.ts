import Vue from 'vue';

import { Character } from '@/lib/dnd';

export default Vue.extend({
  computed: {
    char() {
      return this.$store.state.Oz.clone().data
    }
  },
  methods: {
    save() {
      const Oz = new Character(this.char)
      this.$store.commit('updateOz', Oz);
    },
  },
});
