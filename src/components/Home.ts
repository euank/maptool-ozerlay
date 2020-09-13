import Vue from 'vue';

import AbilitySave from "@/components/AbilitySave.vue";

export default Vue.extend({
  computed: {
    Oz() {
      return this.$store.state.Oz
    },
  },
  components: {
    AbilitySave,
  },
})
