import { escape } from 'lodash';

class Character {
  constructor(data) {
    this.state = data;
  }

  doRoll(rollObj) {
    const prettyString = "1d20 + 4";
    const result = "1d20 + 4";
    const output = `<span title="${escape(prettyString)}" style="background-color: #eeeeee">[r: ${result}]</span>`
    window.evalMT('execmacro', 'all', output);
  }

}

export { Character };
