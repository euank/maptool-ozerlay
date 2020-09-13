<template>
  <!-- TODO: figure out the right way to plumb in this state, help, I am not good at vue yet -->
  <div id="char-metadata">
    <span>HP: {{ Oz.state.hitPoints }} / {{ Oz.state.maxHitPoints }} </span>
    <br />
    <span>Ki: {{ Oz.state.ki }} / {{ Oz.state.maxKi }} </span>
    <br />
    <h3>Ability Saves</h3>
    <div v-for="(value, name) in Oz.state.abilities">
      <AbilitySave :name=name :value=value />
    </div>
  </div>
</template>

<script>
import AbilitySave from "@/components/AbilitySave";

export default {
  computed: {
    Oz() {
      return this.$store.state.Oz
    },
  },
  components: {
    AbilitySave,
  },
}
</script>
