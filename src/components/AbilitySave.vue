<template>
  <button v-on:click="runSave()">
    {{ name }} save (+ {{ mod(value) }})
  </button>
</template>

<script>
export default {
  props: ['name', 'value'],
  computed: {
    Oz() {
      return this.$store.state.Oz
    },
  },
  methods: {
    mod: function(val) {
      return Math.floor((val - 10) / 2.0);
    },
    runSave() {
      this.Oz.doRoll('test');
      // window.evalMT('t', 'all', `1d20 + ${this.mod(this.value)}`);
    },
  }
}
</script>
