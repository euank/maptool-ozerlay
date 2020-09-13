import { MaptoolUtil as MT } from './maptool'

type HitDie = 'd4' | 'd6' | 'd8' | 'd10' | 'd12'

type Ability = 'str' | 'dex' | 'con' | 'int' | 'wis' | 'cha' 

type AbilityScores = {
  str: number
  dex: number
  con: number
  int: number
  wis: number
  cha: number
}

type CharacterData = {
  version: number | undefined

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

  isUpToDate(): boolean {
    return this.data.version !== undefined && this.data.version == 1 
  }

  save() {
    window.setData(JSON.stringify(this.data))
  }

  mod(abil: Ability): number {
    const val = this.data.abilityScores[abil]
    return Math.floor((val - 10) / 2.0);
  }

  rollSave(abil: Ability) {
    MT.displayTooltip(`1d20 + ${this.mod(abil)}`, `1d20 + ${abil}`)
  }
}

class Roll {
}

export { Ability, Character, Roll };
