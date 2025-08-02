import type Character from '~/Core/Interfaces/Character'
import type Echo from '~/Core/Interfaces/Echo'
import type IStatistic from '~/Core/Interfaces/Statistic'
import { ScoreGrade } from '~/Core/Enums/ScoreGrade'
import { StatType } from '~/Core/Enums/StatType'
import { SUB_STAT_VALUES } from '~/Core/Statistics'

export interface IEchoRatingResult {
  Score: number
  EchoId: number
  Grade: ScoreGrade
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
    Grade: ScoreGrade.A,
    Score: 35,
    Color: 'text-purple-400',
  },

  {
    Grade: ScoreGrade.B,
    Score: 20,
    Color: 'text-blue-400',
  },
  {
    Grade: ScoreGrade.C,
    Score: 12.5,
    Color: 'text-green-400',
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
    Grade: ScoreGrade.A,
    Score: 350,
    Color: 'text-purple-400',
  },
  {
    Grade: ScoreGrade.B,
    Score: 300,
    Color: 'text-blue-400',
  },
  {
    Grade: ScoreGrade.C,
    Score: 200,
    Color: 'text-green-400',
  },
  {
    Grade: ScoreGrade.F,
    Score: 50,
    Color: 'text-gray-400',
  },
]

export function useScoreCalculator() {
  const EchoesStore = useEchoesStore()

  function GetCharacterScore(character: Character | undefined): ICharacterRatingResult {
    if (character === undefined) {
      return {
        Score: 0,
        EchoesScores: [],
        Note: ScoreGrade.F,
      }
    }

    const echoes = JSON.parse(JSON.stringify(EchoesStore.GetAllEquipedBy(character.Id)))
    const echoesScores = CalculateEchoesScore(echoes, character.StatsWeights!)
    const totalScore = echoesScores.reduce((acc, echoScore) => acc + echoScore.Score, 0)

    return {
      Score: totalScore,
      EchoesScores: echoesScores,
      Note: GetCharacterNote(totalScore),
    }
  }

  function CalculateEchoesScore(echoes: Echo[], weights: Record<StatType, number>): IEchoRatingResult[] {
    return echoes.map(echo => CalculateEchoScore(echo, weights))
  }

  function GetCharacterNote(score: number): ScoreGrade {
    if (score >= 475)
      return ScoreGrade.PERFECT
    if (score >= 460)
      return ScoreGrade.SSS_PLUS
    if (score >= 435)
      return ScoreGrade.SSS
    if (score >= 410)
      return ScoreGrade.SS_PLUS
    if (score >= 385)
      return ScoreGrade.SS
    if (score >= 360)
      return ScoreGrade.S_PLUS
    if (score >= 335)
      return ScoreGrade.S
    if (score >= 300)
      return ScoreGrade.A
    if (score >= 260)
      return ScoreGrade.B
    if (score >= 220)
      return ScoreGrade.C

    return ScoreGrade.F
  }

  function GetEchoNote(score: number) {
    if (score >= 95)
      return ScoreGrade.PERFECT
    if (score >= 90)
      return ScoreGrade.SSS_PLUS
    if (score >= 85)
      return ScoreGrade.SSS
    if (score >= 80)
      return ScoreGrade.SS_PLUS
    if (score >= 75)
      return ScoreGrade.SS
    if (score >= 70)
      return ScoreGrade.S_PLUS
    if (score >= 67)
      return ScoreGrade.S
    if (score >= 50)
      return ScoreGrade.A
    if (score >= 40)
      return ScoreGrade.B
    if (score >= 30)
      return ScoreGrade.C
    return ScoreGrade.F
  }

  function CalculateEchoScore(echo: Echo, weights: Record<StatType, number>): IEchoRatingResult {
    const isValidMainStat = echo.MainStatistic !== undefined && IsValidMainStat(echo.MainStatistic, weights)

    let { totalScore, totalWeight } = echo.Statistics.reduce(
      (acc, stat) => {
        const value = stat.Value
        const max = SUB_STAT_VALUES[stat.Type].at(-1) || 1
        const weight = weights[stat.Type] || 0

        // We want to weight down HP flat even if we have a weight of 1.0
        if (stat.Type === StatType.HP || stat.Type === StatType.DEF) {
          acc.totalScore += ((value / max) * weight) / 2
        }
        else {
          acc.totalScore += (value / max) * weight
        }

        acc.totalWeight += weight
        return acc
      },
      { totalScore: 0, totalWeight: 0 },
    )

    // If we're missing some substats, divide the score by the number of missing stats.
    // We don't want an SS+ on a 3 stats Echo, but we still want to see the potential...
    if (echo.Statistics.length < 5) {
      totalScore /= 5 - echo.Statistics.length + 1
    }

    const finalScore = totalWeight > 0 ? (totalScore / totalWeight) * 100 : 0

    return {
      Score: finalScore,
      EchoId: echo.Id,
      Grade: isValidMainStat ? GetEchoNote(finalScore) : ScoreGrade.F,
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
