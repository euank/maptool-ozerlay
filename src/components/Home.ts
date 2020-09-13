import Vue from 'vue';

import Main from "@/components/Main.vue";
import AbilitySave from "@/components/AbilitySave.vue";
import SkillCheck from "@/components/SkillCheck.vue";
import FrameReload from "@/components/FrameReload.vue";

import { Edit } from '@/routes'

export default Vue.extend({
  computed: {
    Oz() {
      return this.$store.state.Oz
    },
  },
  components: {
    AbilitySave,
    SkillCheck,
    FrameReload,
    Main,
  },
  methods: {
    navEdit() {
      this.$store.commit('routeTo', Edit)
    },
  },
})
