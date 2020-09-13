import Vue from 'vue';

import { Character } from '@/lib/dnd';

export default Vue.extend({
  computed: {
    char() {
      return this.$store.state.Oz.clone().data
    }
  },
  methods: {
    unarmedStrike() {
      this.$store.state.Oz.unarmedStrike()
    },
  },
});
