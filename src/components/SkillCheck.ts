import Vue from 'vue';
import { Character, Skill } from '../lib/dnd';

export default Vue.extend({
  props: ['skill'],
  computed: {
    Oz(): Character {
      return this.$store.state.Oz
    },
    mod(): number {
      return this.$store.state.Oz.skillMod(this.skill)
    },
    trainedPrefix(): string {
      if (this.$store.state.Oz.data.skills[this.skill as Skill].trained) {
        return '⭐';
      }
      return '';
    },
  },
  methods: {
    runSave() {
      this.Oz.rollSkillCheck(this.skill);
    },
  }
})
