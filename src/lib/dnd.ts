import { escape } from 'lodash';

type CharacterData = {
  hp: number
  maxHP: number
}

class Character {
  constructor(readonly state: CharacterData) {
  }

  doRoll(_rollObj: Roll) {
    const prettyString = "1d20 + 4";
    const result = "1d20 + 4";
    const output = `<span title="${escape(prettyString)}" style="background-color: #eeeeee">[r: ${result}]</span>`
    window.evalMT('execmacro', 'all', output);
  }
}

class Roll {
}

export { Character, Roll };
