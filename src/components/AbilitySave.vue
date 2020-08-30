<template>
  <button v-on:click="runSave()">
    {{ name }} save (+ {{ mod(value) }})
  </button>
</template>

<script>
export default {
  props: ['name', 'value'],
  methods: {
    mod: function(val) {
      return Math.floor((val - 10) / 2.0);
    },
    runSave() {
      window.evalMT('t', `1d20 + ${this.mod(this.value)}`);
    },
  }
}
</script>
