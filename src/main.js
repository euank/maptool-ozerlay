window.evalMT = function(typ, outputTarget, data) {
  try {
    const form = document.createElement('form');
    form.setAttribute('action', `macro://lib_eval@TOKEN/${outputTarget}/Impersonated?`);
    form.setAttribute('method', 'json');
    form.setAttribute('style', 'display:none');
    const r = document.createElement('input');
    r.setAttribute('name', typ);
    r.setAttribute('value', data);
    form.appendChild(r);
    document.body.appendChild(form);
    setTimeout(function() {
      form.submit();
      document.body.removeChild(form);
    }, 0);
  } catch(ex) {
    console.log(ex)
  }
}

// TODO: vuex or some better state management
const data = JSON.parse(document.querySelector("#notes").innerHTML);

window.data = data;

// write data back to notes
window.setData = function(data) {
  const dataStr = JSON.stringify(data);
  window.evalMT('h', 'non', `setNotes(base64.decode("${window.btoa(dataStr)}"))`);
}

import Vue from "vue";
import App from "./App.vue";

new Vue({
  data: data,
  render: h => h(App),
}).$mount("#app");
