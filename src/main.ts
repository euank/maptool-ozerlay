import { Character} from './lib/dnd'
const isWeb = typeof (window as any).MapTool === 'undefined';

declare global {
    interface Window { 
      evalMT(typ: string, target: string, data: string): void
      setData(data: string): void
    }
}


window.evalMT = function(typ: string, outputTarget: string, data: string) {
  if (isWeb) {
    console.log(`Macro: [${typ}: ${outputTarget}, ${JSON.stringify(data)}]`)
    return
  }
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


const notesEl = document.querySelector("#notes")
let notesHtml
if (notesEl !== null) {
  notesHtml = notesEl.innerHTML;
}
if (notesHtml === undefined) {
  console.error('notes should not be undefined');
  throw new Error('FATAL');
}

const notes = JSON.parse(notesHtml);
const Oz = new Character(notes);

// write data back to notes
window.setData = function(data) {
  const dataStr = JSON.stringify(data);
  window.evalMT('h', 'non', `setNotes(base64.decode("${window.btoa(dataStr)}"))`);
}

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import App from "./App";
import * as routes from './routes'

const store = new Vuex.Store({
  state: {
    Oz,
    routeHistory: [] as routes.Route[],
    currentRoute: routes.Home,
  },
  mutations: {
    routeBackTo(state, id: number) {
      for (let i = state.routeHistory.length - 1; i >= 0; i--) {
        if (state.routeHistory[i].id == id) {
          state.currentRoute = state.routeHistory[i]
          state.routeHistory = state.routeHistory.slice(0, i)
          return
        }
        throw new Error(`id ${id} not found in the history stack; this is a bug`)
      }
    },
    routeTo(state, entry: routes.Route) {
      state.routeHistory.push(state.currentRoute)
      state.currentRoute = entry
    },
  },
});


new Vue({
  store: store,
  render: h => h(App),
}).$mount("#app");
