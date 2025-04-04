import type Character from '~/Core/Interfaces/Character'
import type Echo from '~/Core/Interfaces/Echo'
import type IStatistic from '~/Core/Interfaces/Statistic'
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
    Score: 80,
    Color: 'text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500',
  },
  {
    Grade: ScoreGrade.SSS_PLUS,
    Score: 77.5,
    Color: 'text-amber-400',
  },
  {
    Grade: ScoreGrade.SSS,
    Score: 75,
    Color: 'text-amber-400',
  },
  {
    Grade: ScoreGrade.SS_PLUS,
    Score: 70,
    Color: 'text-orange-400',
  },
  {
    Grade: ScoreGrade.SS,
    Score: 65,
    Color: 'text-orange-400',
  },
  {
    Grade: ScoreGrade.S_PLUS,
    Score: 60,
    Color: 'text-red-400',
  },
  {
    Grade: ScoreGrade.S,
    Score: 55,
    Color: 'text-red-400',
  },
  {
    Grade: ScoreGrade.A_PLUS,
    Score: 45,
    Color: 'text-purple-400',
  },
  {
    Grade: ScoreGrade.A,
    Score: 35,
    Color: 'text-purple-400',
  },
  {
    Grade: ScoreGrade.B_PLUS,
    Score: 30,
    Color: 'text-blue-400',
  },
  {
    Grade: ScoreGrade.B,
    Score: 20,
    Color: 'text-blue-400',
  },
  {
    Grade: ScoreGrade.C_PLUS,
    Score: 15,
    Color: 'text-green-400',
  },
  {
    Grade: ScoreGrade.C,
    Score: 12.5,
    Color: 'text-green-400',
  },
  {
    Grade: ScoreGrade.D_PLUS,
    Score: 10,
    Color: 'text-yellow-200',
  },
  {
    Grade: ScoreGrade.D,
    Score: 7.5,
    Color: 'text-yellow-200',
  },
  {
    Grade: ScoreGrade.F,
    Score: 5.0,
    Color: 'text-gray-400',
  },
]

export const TOTAL_SCORE_GRADES = [
  {
    Grade: ScoreGrade.PERFECT,
    Score: 575,
    Color: 'text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500',
  },
  {
    Grade: ScoreGrade.SSS_PLUS,
    Score: 550,
    Color: 'text-amber-400',
  },
  {
    Grade: ScoreGrade.SSS,
    Score: 500,
    Color: 'text-amber-400',
  },
  {
    Grade: ScoreGrade.SS_PLUS,
    Score: 475,
    Color: 'text-orange-400',
  },
  {
    Grade: ScoreGrade.SS,
    Score: 450,
    Color: 'text-orange-400',
  },
  {
    Grade: ScoreGrade.S_PLUS,
    Score: 425,
    Color: 'text-red-400',
  },
  {
    Grade: ScoreGrade.S,
    Score: 400,
    Color: 'text-red-400',
  },
  {
    Grade: ScoreGrade.A_PLUS,
    Score: 375,
    Color: 'text-purple-400',
  },
  {
    Grade: ScoreGrade.A,
    Score: 350,
    Color: 'text-purple-400',
  },
  {
    Grade: ScoreGrade.B_PLUS,
    Score: 325,
    Color: 'text-blue-400',
  },
  {
    Grade: ScoreGrade.B,
    Score: 300,
    Color: 'text-blue-400',
  },
  {
    Grade: ScoreGrade.C_PLUS,
    Score: 250,
    Color: 'text-green-400',
  },
  {
    Grade: ScoreGrade.C,
    Score: 200,
    Color: 'text-green-400',
  },
  {
    Grade: ScoreGrade.D_PLUS,
    Score: 150,
    Color: 'text-yellow-200',
  },
  {
    Grade: ScoreGrade.D,
    Score: 100,
    Color: 'text-yellow-200',
  },
  {
    Grade: ScoreGrade.F,
    Score: 50,
    Color: 'text-gray-400',
  },
]

export function useScoreCalculator() {
  const EchoesStore = useEchoesStore()

  function GetCharacterScore(character: Character | undefined, echoesIds: number[]): ICharacterRatingResult {
    if (character === undefined) {
      return {
        Score: 0,
        EchoesScores: [],
        Note: ScoreGrade.F,
      }
    }

    const echoes = JSON.parse(JSON.stringify(EchoesStore.GetEchoesByIds(echoesIds, character.Id)))
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

  function CalculateEchoesScore(echoes: Echo[], weights: Record<StatType, number>): IEchoRatingResult[] {
    return echoes.map((echo) => {
      const perfectEcho = GetPerfectEcho(echo, weights)
      const perfectEchoScore = CalculateEchoScore(perfectEcho, weights)
      const echoScore = CalculateEchoScore(echo, weights)
      const note = echoScore.IsValidMainStat ? ECHOES_SCORE_GRADES.find(g => (echoScore.Score / perfectEchoScore.Score * 100) >= g.Score)?.Grade || ScoreGrade.F : ScoreGrade.F

      return {
        ...echoScore,
        Score: echoScore.Score / perfectEchoScore.Score,
        Note: note,
      }
    })
  }

  function CalculateMainStatsScore(echoes: Echo[]) {
    return echoes.reduce((total, echo) => {
      return total + (echo.MainStatistic?.Value || 0)
    }, 0)
  }

  function GetPerfectEcho(echo: Echo, weights: Record<StatType, number>): Echo {
    const sortedStats = Object.entries(weights)
      .filter(([_, weight]) => weight > 0)
      .sort(([, weightA], [, weightB]) => weightB - weightA)
      .slice(0, 5)
      .map(([statType]) => statType as StatType)

    const perfectEcho: Echo = {
      MainStatistic: echo.MainStatistic,
      Statistics: sortedStats.map(statType => ({
        Type: statType,
        Value: SUB_STAT_VALUES[statType].at(-1) || 0,
      })),
      Id: 0,
      Icon: '',
      Rarity: Rarity.FIVE_STARS,
      Cost: EchoCost.FOUR_COST,
      Level: 0,
      Sonata: [],
    }

    return perfectEcho
  }

  function CalculateEchoScore(echo: Echo, weights: Record<StatType, number>): IEchoRatingResult {
    const isValidMainStat = echo.MainStatistic !== undefined && IsValidMainStat(echo.MainStatistic, weights)
    const totalWeightedScore = echo.Statistics.reduce((acc, subStat) =>
      acc + CalculateSubStatScore(subStat.Type, subStat.Value, echo.Cost, weights[subStat.Type]), 0)

    // Transformation exponentielle modérée pour augmenter la disparité
    const adjustedScore = totalWeightedScore ** 0.8

    // Normalisation par le score maximum possible
    const maxPossibleScore = GetMaxPossibleScore(echo.Cost, weights) ** 0.8
    const normalizedScore = (adjustedScore / maxPossibleScore) * 100 // Échelle de 0 à 100

    return {
      Score: normalizedScore,
      EchoId: echo.Id,
      Note: ScoreGrade.F,
      NoteScore: 0,
      IsValidMainStat: isValidMainStat,
    }
  }

  function GetMaxPossibleScore(echoCost: EchoCost, weights: Record<StatType, number>): number {
    const maxStats = Object.keys(weights).map((statType) => {
      return {
        Type: statType as StatType,
        Value: SUB_STAT_VALUES[statType as StatType].at(-1) || 0,
      }
    })

    return maxStats.reduce((acc, stat) =>
      acc + CalculateSubStatScore(stat.Type, stat.Value, echoCost, weights[stat.Type]), 0)
  }

  function CalculateSubStatScore(stat: StatType, value: number, echoCost: EchoCost, weight: number) {
    switch (echoCost) {
      case EchoCost.FOUR_COST:
        return (weight) * ((FOUR_COST_MAIN_STATS_VALUES[StatType.CRIT_DMG]) || 1 / (FOUR_COST_MAIN_STATS_VALUES[stat] || 1)) * value
      case EchoCost.THREE_COST:
        return (weight) * ((THREE_COST_MAIN_STATS_VALUES[StatType.ATTACK_PERCENTAGE]) || 1 / (THREE_COST_MAIN_STATS_VALUES[stat] || 1)) * value
      case EchoCost.ONE_COST:
        return (weight) * ((ONE_COST_MAIN_STATS_VALUES[StatType.ATTACK_PERCENTAGE]) || 1 / (ONE_COST_MAIN_STATS_VALUES[stat] || 1)) * value
      default:
        return 0
    }
  }

  function IsValidMainStat(stat: IStatistic, weights: Record<StatType, number>): boolean {
    const v = weights[stat.Type]

    return v !== undefined && v !== 0
  }

  return {
    GetCharacterScore,
  }
}
