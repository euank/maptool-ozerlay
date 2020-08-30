<template>
  <!-- TODO: figure out the right way to plumb in this state, help, I am not good at vue yet -->
  <div id="char-metadata">
    <span>HP: {{ $root.$data.hitPoints }} / {{ $root.$data.maxHitPoints }} </span>
    <br />
    <span>Ki: {{ $root.$data.ki }} / {{ $root.$data.maxKi }} </span>
    <br />
    <h3>Ability Saves</h3>
    <div v-for="(value, name) in $root.$data.abilities">
      <AbilitySave :name=name :value=value />
    </div>
  </div>
</template>

<script>
import AbilitySave from "@/components/AbilitySave";

export default {
  components: {
    AbilitySave,
  },
}
</script>
