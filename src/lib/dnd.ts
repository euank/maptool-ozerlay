import { escape } from 'lodash';

import { MaptoolUtil as MT } from './maptool'

type HitDie = 'd4' | 'd6' | 'd8' | 'd10' | 'd12'

type AbilityScores = {
  str: number
  dex: number
  con: number
  int: number
  wis: number
  cha: number
}

type CharacterData = {
  hp: number
  maxHP: number

  hitDie: HitDie[]
  curHitDie: HitDie[]

  ki: number
  maxKi: number

  abilityScores: AbilityScores

  proficiencyBonus: number
}

class Character {
  constructor(readonly data: CharacterData) {
  }

  save() {
    window.setData(JSON.stringify(this.data))
  }

  doRoll(_rollObj: Roll) {
    // TODO
    MT.displayTooltip("1d20 + 4", "1d20 + Con");
  }
}

class Roll {
}

export { Character, Roll };
