import type IEcho from '../Interfaces/IEcho'
import type IStatistic from '../Interfaces/IStatistic'
import type { IStatWeight } from '../Interfaces/IStatWeight'
import type { Character } from '../Models/Character'
import { Rarity } from '../Enums/Rarity'
import { ScoreGrade } from '../Enums/ScoreGrade'
import { StatType } from '../Enums/StatType'
import { SUB_STAT_VALUES } from '../Statistics'

export interface IEchoRatingResult {
  Score: number
  Note: ScoreGrade
  NoteScore: number
  IsValidMainStat: boolean
}

export interface ICharacterRatingResult {
  Score: number
  EchoesScores: IEchoRatingResult[]
  Note: ScoreGrade
}

export const ECHOES_SCORE_GRADES = [
  {
    Grade: ScoreGrade.PERFECT,
    Score: 9.0,
  },
  {
    Grade: ScoreGrade.SSS_PLUS,
    Score: 8.5,
  },
  {
    Grade: ScoreGrade.SSS,
    Score: 8.0,
  },
  {
    Grade: ScoreGrade.SS_PLUS,
    Score: 7.5,
  },
  {
    Grade: ScoreGrade.SS,
    Score: 7.0,
  },
  {
    Grade: ScoreGrade.S_PLUS,
    Score: 6.5,
  },
  {
    Grade: ScoreGrade.S,
    Score: 6.0,
  },
  {
    Grade: ScoreGrade.A_PLUS,
    Score: 6.0,
  },
  {
    Grade: ScoreGrade.A,
    Score: 5,
  },
  {
    Grade: ScoreGrade.B_PLUS,
    Score: 4.5,
  },
  {
    Grade: ScoreGrade.B,
    Score: 4.0,
  },
  {
    Grade: ScoreGrade.C_PLUS,
    Score: 3.5,
  },
  {
    Grade: ScoreGrade.C,
    Score: 3.0,
  },
  {
    Grade: ScoreGrade.D_PLUS,
    Score: 2.5,
  },
  {
    Grade: ScoreGrade.D,
    Score: 2.0,
  },
  {
    Grade: ScoreGrade.F,
    Score: 1.0,
  },
]

export class RatingSystem {
  TOTAL_SCORE_GRADES = [
    {
      Grade: ScoreGrade.PERFECT,
      Score: 9.0,
    },
  ]

  MAIN_STAT_MAX_VALUE: Record<string, number> = {
    [StatType.CRIT_DMG]: 44.0,
    [StatType.CRIT_RATE]: 22.0,
    [StatType.ATTACK_PERCENTAGE]: 33.0,
    [StatType.ENERGY_REGENERATION]: 32.0,
    [StatType.ATTACK]: 150,
    [StatType.BASIC_ATTACK_DMG_AMPLIFICATION]: 30.0,
    [StatType.NONE]: 0,
  }

  SUB_STATS_VALUES: Record<StatType, number[]> = {
    [StatType.NONE]: [],
    [StatType.CRIT_RATE]: [6.3, 6.9, 7.5, 8.1, 8.7, 9.3, 9.9, 10.5],
    [StatType.CRIT_DMG]: [12.6, 13.8, 15.0, 16.2, 17.4, 18.6, 19.8, 21.0],
    [StatType.ATTACK]: [30, 40, 50, 60],
    [StatType.ATTACK_PERCENTAGE]: [6.4, 7.1, 7.9, 8.6, 9.4, 10.1, 10.9, 11.6],
    [StatType.HP]: [320, 360, 390, 430, 470, 510, 540, 580],
    [StatType.HP_PERCENTAGE]: [],
    [StatType.HEALING_BONUS]: [],
    [StatType.DEF]: [],
    [StatType.DEF_PERCENTAGE]: [],
    [StatType.ENERGY_REGENERATION]: [6.8, 7.6, 8.4, 9.2, 10, 10.8, 11.6, 12.4],
    [StatType.BASIC_ATTACK_DMG_AMPLIFICATION]: [],
    [StatType.HEAVY_ATTACK_DMG_AMPLIFICATION]: [],
    [StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION]: [],
    [StatType.RESONANCE_SKILL_DMG_AMPLIFICATION]: [6.4, 7.1, 7.9, 8.6, 9.4, 10.1, 10.9, 11.6],
    [StatType.ELECTRO_DMG_BONUS]: [],
    [StatType.FUSION_DMG_BONUS]: [],
    [StatType.GLACIO_DMG_BONUS]: [],
    [StatType.HAVOC_DMG_BONUS]: [],
    [StatType.SPECTRO_DMG_BONUS]: [],
  }

  GetCharacterScore(character: Character): ICharacterRatingResult {
    const echoesScores = this.CalculateEchoesScore(character.Echoes, character.StatsWeights!)
    const totalScore = echoesScores.reduce((acc, echoScore) => acc + echoScore.Score, 0)
    const note = this.TOTAL_SCORE_GRADES.find(g => totalScore >= g.Score)?.Grade || ScoreGrade.F

    return {
      Score: totalScore,
      EchoesScores: echoesScores,
      Note: note,
    }
  }

  CalculateEchoesScore(echoes: IEcho[], weights: Record<StatType, number>): IEchoRatingResult[] {
    return echoes.map((echo) => {
      const perfectEcho = this.GetPerfectEcho(echo, weights)
      const echoScore = this.CalculateEchoScore(echo, weights)
      const perfectEchoScore = this.CalculateEchoScore(perfectEcho, weights)

      return {
        ...echoScore,
        Score: echoScore.Score / perfectEchoScore.Score * 0.582,
      }
    })
  }

  GetPerfectEcho(echo: IEcho, weights: Record<StatType, number>): IEcho {
    const sortedStats = Object.entries(weights)
      .filter(([_, weight]) => weight > 0)
      .sort(([, weightA], [, weightB]) => weightB - weightA)
      .slice(0, 5)
      .map(([statType]) => statType as StatType)

    const perfectEcho: IEcho = {
      MainStatistic: echo.MainStatistic,
      Statistics: sortedStats.map(statType => ({
        Type: statType,
        Value: SUB_STAT_VALUES[statType].at(-1) || 0,
      })),
      Id: 0,
      Name: '',
      Icon: '',
      Rarity: Rarity.FIVE_STAR,
      Level: 0,
      Sonata: [],
    }

    return perfectEcho
  }

  CalculateEchoScore(echo: IEcho, weights: Record<StatType, number>): IEchoRatingResult {
    const isValidMainStat = echo.MainStatistic !== undefined && this.IsValidMainStat(echo.MainStatistic, weights)
    const note = isValidMainStat ? this.GetEchoNote(echo, weights) : [0, ScoreGrade.F]

    const totalWeightedScore = echo.Statistics.reduce((acc, subStat) =>
      acc + this.CalculateSubStatScore(subStat.Type, subStat.Value, weights[subStat.Type]), 0)

    return {
      Score: totalWeightedScore,
      Note: note[1] as ScoreGrade,
      NoteScore: note[0] as number,
      IsValidMainStat: isValidMainStat,
    }
  }

  private CalculateSubStatScore(stat: StatType, value: number, weight: number) {
    return weight * ((this.MAIN_STAT_MAX_VALUE[StatType.CRIT_DMG]) || 1 / (this.MAIN_STAT_MAX_VALUE[stat] || 1)) * value
  }

  private IsValidMainStat(stat: IStatistic, weights: Record<StatType, number>): boolean {
    const v = weights[stat.Type]

    return v !== undefined && v !== 0
  }

  private GetSubStatTier(stat: IStatistic): number {
    const values = this.SUB_STATS_VALUES[stat.Type] || []
    const index = values.findIndex(s => s >= stat.Value)
    return index !== -1 ? index + 1 : 0
  }

  private CalculateTotalSubStatTierScore(echo: IEcho, weights: Record<StatType, number>): number {
    return echo.Statistics.reduce((acc, subStat) =>
      acc + this.GetSubStatTier(subStat) * (weights[subStat.Type] || 0), 0)
  }

  private CalculateMaxPossibleTierScore(echo: IEcho, weights: Record<StatType, number>): number {
    return echo.Statistics.reduce((acc, stat) => {
      const maxProcLevel = this.SUB_STATS_VALUES[stat.Type]?.length || 0
      const weight = weights[stat.Type] || 0
      return acc + maxProcLevel * weight
    }, 0)
  }

  private GetEchoNote(echo: IEcho, weights: Record<StatType, number>): [number, ScoreGrade] {
    const score = this.CalculateTotalSubStatTierScore(echo, weights) / this.CalculateMaxPossibleTierScore(echo, weights) * 10 || 0
    return [score, ECHOES_SCORE_GRADES.find(g => score >= g.Score)?.Grade || ScoreGrade.F]
  }
}
