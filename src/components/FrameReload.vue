<template>
  <input type="button" value="Reload" @click="reload()" />
</template>

<script>
export default {
  name: 'FrameReload',
  methods: {
    reload() {
      window.evalMT('execmacro', `
          [h: closeFrame("Ozerlay")]
          [h, macro("RunOzerlay@TOKEN"): ""]
      `)
    },
  },
}
</script>
