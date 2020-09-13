import Vue from 'vue';

export default Vue.extend({
  name: 'FrameReload',
  methods: {
    reload() {
      window.evalMT('execmacro', 'none', `[h: closeFrame("Ozerlay")]
[h, macro("RunOzerlay@TOKEN"): ""]`)
    },
  },
})
