import type IEcho from '~/Core/Interfaces/IEcho'
import type IStatistic from '~/Core/Interfaces/IStatistic'
import type { Character } from '~/Core/Models/Character'
import { EchoCost } from '~/Core/Enums/EchoCost'
import { Rarity } from '~/Core/Enums/Rarity'
import { ScoreGrade } from '~/Core/Enums/ScoreGrade'
import { StatType } from '~/Core/Enums/StatType'
import { FOUR_COST_MAIN_STATS_VALUES, ONE_COST_MAIN_STATS_VALUES, SUB_STAT_VALUES, THREE_COST_MAIN_STATS_VALUES } from '~/Core/Statistics'

export interface IEchoRatingResult {
  Score: number
  EchoId: number
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
    Score: 8.5,
    Color: 'text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500',
  },
  {
    Grade: ScoreGrade.SSS_PLUS,
    Score: 8.0,
    Color: 'text-amber-4',
  },
  {
    Grade: ScoreGrade.SSS,
    Score: 7.75,
    Color: 'text-amber-4',
  },
  {
    Grade: ScoreGrade.SS_PLUS,
    Score: 7.5,
    Color: 'text-orange-4',
  },
  {
    Grade: ScoreGrade.SS,
    Score: 7.0,
    Color: 'text-orange-4',
  },
  {
    Grade: ScoreGrade.S_PLUS,
    Score: 6.5,
    Color: 'text-red-4',
  },
  {
    Grade: ScoreGrade.S,
    Score: 6.0,
    Color: 'text-red-4',
  },
  {
    Grade: ScoreGrade.A_PLUS,
    Score: 5.75,
    Color: 'text-purple-4',
  },
  {
    Grade: ScoreGrade.A,
    Score: 5,
    Color: 'text-purple-4',
  },
  {
    Grade: ScoreGrade.B_PLUS,
    Score: 4.5,
    Color: 'text-blue-4',
  },
  {
    Grade: ScoreGrade.B,
    Score: 4.0,
    Color: 'text-blue-4',
  },
  {
    Grade: ScoreGrade.C_PLUS,
    Score: 3.5,
    Color: 'text-green-4',
  },
  {
    Grade: ScoreGrade.C,
    Score: 3.0,
    Color: 'text-green-4',
  },
  {
    Grade: ScoreGrade.D_PLUS,
    Score: 2.5,
    Color: 'text-yellow-2',
  },
  {
    Grade: ScoreGrade.D,
    Score: 2.0,
    Color: 'text-yellow-2',
  },
  {
    Grade: ScoreGrade.F,
    Score: 1.0,
    Color: 'text-gray-4',
  },
]

export const TOTAL_SCORE_GRADES = [
  {
    Grade: ScoreGrade.PERFECT,
    Score: 400,
    Color: 'text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500',
  },
  {
    Grade: ScoreGrade.SSS_PLUS,
    Score: 375,
    Color: 'text-amber-4',
  },
  {
    Grade: ScoreGrade.SSS,
    Score: 350,
    Color: 'text-amber-4',
  },
  {
    Grade: ScoreGrade.SS_PLUS,
    Score: 325,
    Color: 'text-orange-4',
  },
  {
    Grade: ScoreGrade.SS,
    Score: 300,
    Color: 'text-orange-4',
  },
  {
    Grade: ScoreGrade.S_PLUS,
    Score: 275,
    Color: 'text-red-4',
  },
  {
    Grade: ScoreGrade.S,
    Score: 250,
    Color: 'text-red-4',
  },
  {
    Grade: ScoreGrade.A_PLUS,
    Score: 225,
    Color: 'text-purple-4',
  },
  {
    Grade: ScoreGrade.A,
    Score: 200,
    Color: 'text-purple-4',
  },
  {
    Grade: ScoreGrade.B_PLUS,
    Score: 175,
    Color: 'text-blue-4',
  },
  {
    Grade: ScoreGrade.B,
    Score: 150,
    Color: 'text-blue-4',
  },
  {
    Grade: ScoreGrade.C_PLUS,
    Score: 125,
    Color: 'text-green-4',
  },
  {
    Grade: ScoreGrade.C,
    Score: 100,
    Color: 'text-green-4',
  },
  {
    Grade: ScoreGrade.D_PLUS,
    Score: 75,
    Color: 'text-yellow-2',
  },
  {
    Grade: ScoreGrade.D,
    Score: 50,
    Color: 'text-yellow-2',
  },
  {
    Grade: ScoreGrade.F,
    Score: 0,
    Color: 'text-gray-4',
  },
]

export const useScoreCalculatorStore = defineStore('ScoreCalculatorStore', () => {
  const EchoesStore = useEchoesStore()

  function GetCharacterScore(character: Character, echoesIds: number[]): ICharacterRatingResult {
    const echoes = EchoesStore.GetEchoesByIds(echoesIds)
    const echoesScores = CalculateEchoesScore(echoes, character.StatsWeights!)
    let totalScore = echoesScores.reduce((acc, echoScore) => acc + echoScore.Score, 0) * 100
    totalScore += CalculateMainStatsScore(echoes)

    const note = TOTAL_SCORE_GRADES.find(g => totalScore >= g.Score)?.Grade || ScoreGrade.F

    return {
      Score: totalScore,
      EchoesScores: echoesScores,
      Note: note,
    }
  }

  function CalculateEchoesScore(echoes: IEcho[], weights: Record<StatType, number>): IEchoRatingResult[] {
    return echoes.map((echo) => {
      const perfectEcho = GetPerfectEcho(echo, weights)
      const echoScore = CalculateEchoScore(echo, weights)
      const perfectEchoScore = CalculateEchoScore(perfectEcho, weights)

      return {
        ...echoScore,
        Score: echoScore.Score / perfectEchoScore.Score * 0.582,
      }
    })
  }

  function CalculateMainStatsScore(echoes: IEcho[]) {
    return echoes.reduce((total, echo) => {
      return total + (echo.MainStatistic?.Value || 0)
    }, 0)
  }

  function GetPerfectEcho(echo: IEcho, weights: Record<StatType, number>): IEcho {
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
      Rarity: Rarity.FIVE_STARS,
      Cost: EchoCost.FOUR_COST,
      Level: 0,
      Sonata: [],
    }

    return perfectEcho
  }

  function CalculateEchoScore(echo: IEcho, weights: Record<StatType, number>): IEchoRatingResult {
    const isValidMainStat = echo.MainStatistic !== undefined && IsValidMainStat(echo.MainStatistic, weights)
    const note = isValidMainStat ? GetEchoNote(echo, weights) : { finalScore: 0, grade: ScoreGrade.F }

    const totalWeightedScore = echo.Statistics.reduce((acc, subStat) =>
      acc + CalculateSubStatScore(subStat.Type, subStat.Value, echo.Cost, weights[subStat.Type]), 0)

    return {
      Score: totalWeightedScore,
      EchoId: echo.Id,
      Note: note.grade as ScoreGrade,
      NoteScore: note.finalScore as number,
      IsValidMainStat: isValidMainStat,
    }
  }

  function CalculateSubStatScore(stat: StatType, value: number, echoCost: EchoCost, weight: number) {
    switch (echoCost) {
      case EchoCost.FOUR_COST:
        return weight * ((FOUR_COST_MAIN_STATS_VALUES[StatType.CRIT_DMG]) || 1 / (FOUR_COST_MAIN_STATS_VALUES[stat] || 1)) * value
      case EchoCost.THREE_COST:
        return weight * ((THREE_COST_MAIN_STATS_VALUES[StatType.CRIT_DMG]) || 1 / (THREE_COST_MAIN_STATS_VALUES[stat] || 1)) * value
      case EchoCost.ONE_COST:
        return weight * ((ONE_COST_MAIN_STATS_VALUES[StatType.CRIT_DMG]) || 1 / (ONE_COST_MAIN_STATS_VALUES[stat] || 1)) * value
      default:
        return 0
    }
  }

  function IsValidMainStat(stat: IStatistic, weights: Record<StatType, number>): boolean {
    const v = weights[stat.Type]

    return v !== undefined && v !== 0
  }

  function CalculateTotalSubStatTierScore(echo: IEcho, weights: Record<StatType, number>): number {
    return echo.Statistics.reduce((totalScore, subStat) => {
      const weight = weights[subStat.Type] || 0
      const basePoints = weight >= 1.0 ? 9 : weight >= 0.75 ? 5 : weight >= 0.5 ? 3 : weight >= 0.25 ? 1 : 0
      const progressBonus = CalculateSubStatRollValueBonus(subStat)
      return totalScore + basePoints + progressBonus
    }, 0)
  }

  function CalculateMaxPossibleTierScore(echo: IEcho, weights: Record<StatType, number>): number {
    return echo.Statistics.reduce((acc, stat) => {
      const weight = weights[stat.Type] || 0
      const pts = weight >= 1.0 ? 9 : weight >= 0.75 ? 5 : weight >= 0.5 ? 3 : weight >= 0.25 ? 1 : 0
      return acc + pts + 5 // 5 extra points for max roll value.
    }, 0)
  }

  function CalculateSubStatRollValueBonus(stat: IStatistic): number {
    const values = SUB_STAT_VALUES[stat.Type] || []
    if (values.length === 0)
      return 0

    const sortedValues = values.slice().sort((a, b) => a - b)

    const index = sortedValues.indexOf(stat.Value)
    if (index === -1)
      return 0

    const progress = (index + 1) / sortedValues.length
    return progress * 5
  }

  function GetEchoNote(echo: IEcho, weights: Record<StatType, number>) {
    const score = CalculateTotalSubStatTierScore(echo, weights)
    const maxScore = CalculateMaxPossibleTierScore(echo, weights)
    const finalScore = maxScore > 0 ? (score / maxScore) ** 0.582 * 10 : 0

    return {
      finalScore,
      grade: (ECHOES_SCORE_GRADES.find(g => finalScore >= g.Score)?.Grade || ScoreGrade.F),
    }
  }

  return {
    GetCharacterScore,
  }
})
