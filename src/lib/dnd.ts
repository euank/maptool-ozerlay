import { ExpressionBuilder, MaptoolUtil as MT } from './maptool'


type CharacterData = {
  version: number | undefined

  hp: number
  maxHP: number

  hitDie: HitDie[]
  curHitDie: HitDie[]

  ki: number
  maxKi: number

  abilityScores: AbilityScores

  level: number
  proficiencyBonus: number

  skills: Skills,
}

export class Character {
  constructor(public data: CharacterData) {
    data.skills = data.skills || defaultSkillls
    data.abilityScores = data.abilityScores || defaultAbilityScores
  }

  save() {
    window.setData(JSON.stringify(this.data))
  }

  mod(abil: Ability): number {
    const val = this.data.abilityScores[abil]
    return Math.floor((val - 10) / 2.0);
  }

  unarmedStrike() {
    // TODO: code more of this here
    // For now, we're cheating and relying on an existing macro
    MT.exec(`<b>Unarmed Strike</b> <br />
[macro("runUnarmedStrike@TOKEN"): 1]
`)
  }

  skillMod(skill: Skill): number {
    const abil = skillAbilityMos[skill];
    const abilMod = this.mod(abil)
    const plus = this.data.skills[skill]
    return abilMod + plus.points
  }

  rollSave(abil: Ability) {
    MT.exec(
      new ExpressionBuilder(`Oz rolls their <b>${Character.prettyAbilityName(abil)}</b> save: <br />`)
        .withTooltip(`1d20 + ${this.mod(abil)}`, `1d20 + ${abil}`)
        .build()
    )
  }

  rollSkillCheck(skill: Skill) {
    const abil = skillAbilityMos[skill];
    const abilMod = this.mod(abil)
    const plus = this.data.skills[skill].points
    MT.exec(
      new ExpressionBuilder(`Oz rolls a <b>${skill}</b> check: <br />`)
        .withTooltip(`1d20 + ${abilMod} + ${plus}`, `1d20 + ${abil} + ${skill}Proficiency`)
        .build()
    )
  }

  clone(): Character {
    return new Character(Object.assign({}, this.data))
  }

  private static prettyAbilityName(abil: Ability): string {
    return {
      str: 'Strength',
      dex: 'Dexterity',
      cha: 'Charisma',
      con: 'Constitution',
      wis: 'Wisdom',
      int: 'Intelligence',
    }[abil]
  }
}

type HitDie = 'd4' | 'd6' | 'd8' | 'd10' | 'd12'

export type Ability = 'str' | 'dex' | 'con' | 'int' | 'wis' | 'cha' 

type AbilityScores = {
  str: number
  dex: number
  con: number
  int: number
  wis: number
  cha: number
}

export type Skill = 'Acrobatics' | 'Animal Handling' | 'Arcana' | 'Athletics' | 'Deception' | 'History' | 'Insight' | 'Intimidation' | 'Investigation' |
                    'Medicine' | 'Nature' | 'Perception' | 'Performance' | 'Persuasion' | 'Religion' | 'Sleight of Hand' | 'Stealth' | 'Survival'

type SkillsAbilityMods = {
  [K in Skill]: Ability
}

const skillAbilityMos: SkillsAbilityMods = {
  'Acrobatics': 'dex',
  'Animal Handling': 'wis',
  'Arcana': 'int',
  'Athletics': 'str',
  'Deception': 'cha',
  'History': 'int',
  'Insight': 'wis',
  'Intimidation': 'cha',
  'Investigation': 'int',
  'Medicine': 'wis',
  'Nature': 'int',
  'Perception': 'wis',
  'Performance': 'cha',
  'Persuasion': 'cha',
  'Religion': 'int',
  'Sleight of Hand': 'dex',
  'Stealth': 'dex',
  'Survival': 'wis',
}

export type SkillAttr = {
  trained: boolean
  points: number
}

export type Skills = {
  [K in Skill]: SkillAttr
}

const defaultSkillls: Skills = {
  'Acrobatics': {trained: false, points: 0},
  'Animal Handling': {trained: false, points: 0},
  'Arcana': {trained: false, points: 0},
  'Athletics': {trained: false, points: 0},
  'Deception': {trained: false, points: 0},
  'History': {trained: false, points: 0},
  'Insight': {trained: false, points: 0},
  'Intimidation': {trained: false, points: 0},
  'Investigation': {trained: false, points: 0},
  'Medicine': {trained: false, points: 0},
  'Nature': {trained: false, points: 0},
  'Perception': {trained: false, points: 0},
  'Performance': {trained: false, points: 0},
  'Persuasion': {trained: false, points: 0},
  'Religion': {trained: false, points: 0},
  'Sleight of Hand': {trained: false, points: 0},
  'Stealth': {trained: false, points: 0},
  'Survival': {trained: false, points: 0},
}

const defaultAbilityScores: AbilityScores = {
  str: 0,
  dex: 0,
  con: 0,
  int: 0,
  wis: 0,
  cha: 0,
}
