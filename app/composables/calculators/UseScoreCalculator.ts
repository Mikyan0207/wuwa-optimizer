import type { StatType } from '~/Core/Enums/StatType'
import type { BuildWithDependencies } from '~/Core/Interfaces/Build'
import type Echo from '~/Core/Interfaces/Echo'
import type IStatistic from '~/Core/Interfaces/Statistic'
import { ScoreGrade } from '~/Core/Enums/ScoreGrade'
import { SUB_STAT_VALUES } from '~/Core/Statistics'

export interface IEchoRatingResult {
  EchoId: string
  Score: number
  Grade: ScoreGrade
}

export interface ICharacterRatingResult {
  Score: number
  EchoesScores: IEchoRatingResult[]
  Note: ScoreGrade
}

export interface IScoreGrade {
  Grade: ScoreGrade
  Score: number
  Color: string
}

export const ECHOES_SCORE_GRADES: IScoreGrade[] = [
  {
    Grade: ScoreGrade.PERFECT,
    Score: 250,
    Color: 'text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500',
  },
  {
    Grade: ScoreGrade.SSS_PLUS,
    Score: 200,
    Color: 'text-amber-400',
  },
  {
    Grade: ScoreGrade.SSS,
    Score: 160,
    Color: 'text-amber-400',
  },
  {
    Grade: ScoreGrade.SS_PLUS,
    Score: 130,
    Color: 'text-orange-400',
  },
  {
    Grade: ScoreGrade.SS,
    Score: 100,
    Color: 'text-orange-400',
  },
  {
    Grade: ScoreGrade.S_PLUS,
    Score: 75,
    Color: 'text-red-400',
  },
  {
    Grade: ScoreGrade.S,
    Score: 50,
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
    Score: 10,
    Color: 'text-green-400',
  },
  {
    Grade: ScoreGrade.F,
    Score: 0,
    Color: 'text-gray-400',
  },
]

function CalculateTotalScoreGrades(): IScoreGrade[] {
  return [
    {
      Grade: ScoreGrade.PERFECT,
      Score: (ECHOES_SCORE_GRADES[0]?.Score || 250) * 5,
      Color: 'text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500',
    },
    {
      Grade: ScoreGrade.SSS_PLUS,
      Score: (ECHOES_SCORE_GRADES[1]?.Score || 200) * 5,
      Color: 'text-amber-400',
    },
    {
      Grade: ScoreGrade.SSS,
      Score: (ECHOES_SCORE_GRADES[2]?.Score || 160) * 5,
      Color: 'text-amber-400',
    },
    {
      Grade: ScoreGrade.SS_PLUS,
      Score: (ECHOES_SCORE_GRADES[3]?.Score || 130) * 5,
      Color: 'text-orange-400',
    },
    {
      Grade: ScoreGrade.SS,
      Score: (ECHOES_SCORE_GRADES[4]?.Score || 100) * 5,
      Color: 'text-orange-400',
    },
    {
      Grade: ScoreGrade.S_PLUS,
      Score: (ECHOES_SCORE_GRADES[5]?.Score || 75) * 5,
      Color: 'text-red-400',
    },
    {
      Grade: ScoreGrade.S,
      Score: (ECHOES_SCORE_GRADES[6]?.Score || 50) * 5,
      Color: 'text-red-400',
    },
    {
      Grade: ScoreGrade.A,
      Score: (ECHOES_SCORE_GRADES[7]?.Score || 35) * 5,
      Color: 'text-purple-400',
    },
    {
      Grade: ScoreGrade.B,
      Score: (ECHOES_SCORE_GRADES[8]?.Score || 20) * 5,
      Color: 'text-blue-400',
    },
    {
      Grade: ScoreGrade.C,
      Score: (ECHOES_SCORE_GRADES[9]?.Score || 10) * 5,
      Color: 'text-green-400',
    },
    {
      Grade: ScoreGrade.F,
      Score: (ECHOES_SCORE_GRADES[10]?.Score || 0) * 5,
      Color: 'text-gray-400',
    },
  ]
}

export const TOTAL_SCORE_GRADES: IScoreGrade[] = CalculateTotalScoreGrades()

function GetGradeFromScore(score: number, grades: IScoreGrade[]): ScoreGrade {
  for (const grade of grades) {
    if (score >= grade.Score) {
      return grade.Grade
    }
  }
  return ScoreGrade.F
}

function GetGradeColor(grade: ScoreGrade, grades: IScoreGrade[]): string {
  const gradeInfo = grades.find(g => g.Grade === grade)
  return gradeInfo?.Color || 'text-gray-400'
}

function GetEchoGrade(score: number): ScoreGrade {
  return GetGradeFromScore(score, ECHOES_SCORE_GRADES)
}

function GetTotalGrade(score: number): ScoreGrade {
  return GetGradeFromScore(score, TOTAL_SCORE_GRADES)
}

export function GetEchoGradeColor(grade: ScoreGrade): string {
  return GetGradeColor(grade, ECHOES_SCORE_GRADES)
}

export function GetTotalGradeColor(grade: ScoreGrade): string {
  return GetGradeColor(grade, TOTAL_SCORE_GRADES)
}

export function useScoreCalculator() {
  function GetBuildScore(build?: BuildWithDependencies): ICharacterRatingResult {
    if (build?.Character === undefined) {
      return {
        Score: 0,
        EchoesScores: [],
        Note: ScoreGrade.F,
      }
    }

    const echoesScores = CalculateEchoesScore(build.Echoes, build.Character.StatsWeights || {})
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
    return GetTotalGrade(score)
  }

  function GetEchoNote(score: number): ScoreGrade {
    return GetEchoGrade(score)
  }

  function CalculateEchoScore(echo: Echo, weights: Record<StatType, number>): IEchoRatingResult {
    const isValidMainStat = echo.MainStatistic !== undefined && IsValidMainStat(echo.MainStatistic, weights)

    let totalWeightedQuality = 0
    let totalWeight = 0

    for (const stat of echo.Statistics) {
      const maxValue = SUB_STAT_VALUES[stat.Type].at(-1) || 1
      const rollQuality = (stat.Value / maxValue) * 100
      const weight = weights[stat.Type] || 0

      const amplifiedWeight = weight ** 0.55
      totalWeightedQuality += rollQuality * amplifiedWeight
      totalWeight += amplifiedWeight
    }

    const baseScore = totalWeight > 0 ? (totalWeightedQuality / totalWeight) : 0

    const criticalStats = echo.Statistics.filter(stat => (weights[stat.Type] || 0) >= 0.9)
    const criticalBonus = criticalStats.length * 25

    const importantStats = echo.Statistics.filter(stat => (weights[stat.Type] || 0) >= 0.75)
    const importantBonus = importantStats.length * 10

    const unlockedStats = echo.Statistics.length
    const incompleteMalus = (5 - unlockedStats) * 25

    const uselessStats = echo.Statistics.filter(stat => (weights[stat.Type] || 0) === 0)
    const uselessMalus = uselessStats.length * 20

    const baseFinalScore = baseScore + criticalBonus + importantBonus - incompleteMalus - uselessMalus

    const finalScore = isValidMainStat ? baseFinalScore : baseFinalScore * 0.25

    return {
      EchoId: echo.Id!,
      Score: Math.max(0, finalScore),
      Grade: GetEchoNote(finalScore),
    }
  }

  function IsValidMainStat(stat: IStatistic, weights: Record<StatType, number>): boolean {
    const v = weights[stat.Type]

    return v !== undefined && v !== 0
  }

  return {
    GetBuildScore,
    GetEchoGrade,
    GetTotalGrade,
    GetEchoGradeColor,
    GetTotalGradeColor,
  }
}
