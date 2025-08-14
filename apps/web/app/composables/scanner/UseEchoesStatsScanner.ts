import type Statistic from '~/Core/Interfaces/Statistic'
import type { Rectangle } from '~/Core/Scanner/Rectangle'
import Tesseract from 'tesseract.js'
import { EchoCost } from '~/Core/Enums/EchoCost'
import { StatType } from '~/Core/Enums/StatType'
import { ECHO_REGIONS } from '~/Core/Scanner/Regions'
import { FOUR_COST_MAIN_STATS_VALUES, ONE_COST_MAIN_STATS_VALUES, STAT_NAMES, SUB_STAT_VALUES, THREE_COST_MAIN_STATS_VALUES } from '~/Core/Statistics'
import { IsFloatingPointNumber } from '~/Core/Utils/NumberUtils'
import { GetSecondaryStat } from '~/Core/Utils/StatsUtils'
import { LevenshteinDistance } from '~/Core/Utils/StringUtils'

export async function useEchoesStatsScanner() {
  const BaseContext = ref<CanvasRenderingContext2D | null>(null)
  let TesseractWorker: Tesseract.Worker | undefined

  async function LoadAsync() {
    TesseractWorker = await Tesseract.createWorker('eng', 1)
  }

  function SetContext(context: CanvasRenderingContext2D | null) {
    BaseContext.value = context
  }

  async function ScanEchoesStats() {
    const stats: Map<number, Statistic[]> = new Map()

    await Promise.all(Object.values(ECHO_REGIONS).map(async (echo, idx) => {
      const [name, value, cost] = await Promise.all([
        GetText(GetRegion(echo.MAIN_STAT.NAME)),
        GetText(GetRegion(echo.MAIN_STAT.VALUE)),
        GetCostFromText(await GetText(GetRegion(echo.COST))),
      ])

      const subStats = await Promise.all(echo.SUB_STATS.map(async (subStat) => {
        const [subStatName, subStatValue] = await Promise.all([
          GetText(GetRegion(subStat.NAME)),
          GetText(GetRegion(subStat.VALUE)),
        ])

        return GetStatistic(subStatName, subStatValue, cost, false)
      }))

      stats.set(idx, [GetStatistic(name, value, cost, true), GetSecondaryStat(cost), ...subStats.filter(stat => stat.Type !== StatType.NONE && !Number.isNaN(stat.Value))])
    }))

    return stats
  }

  function GetStatistic(name: string, value: string, echoCost: EchoCost, isMainStat: boolean = false) {
    let statType = GetStatTypeFromName(name || StatType.NONE)

    if (statType === StatType.NONE) {
      return {
        Type: StatType.NONE,
        Value: 0,
      }
    }

    const statValue = Number.parseFloat(GetFilteredText(value, /\b\d+(?:\.\d+)?\b/))

    if (Number.isNaN(statValue) && !isMainStat) {
      return {
        Type: StatType.NONE,
        Value: 0,
      }
    }

    if ((IsFloatingPointNumber(statValue) || isMainStat) && statType === StatType.HP) {
      statType = StatType.HP_PERCENTAGE
    }
    else if ((IsFloatingPointNumber(statValue) || isMainStat || value.includes('%')) && statType === StatType.DEF) {
      statType = StatType.DEF_PERCENTAGE
    }
    else if ((IsFloatingPointNumber(statValue) || isMainStat) && statType === StatType.ATTACK) {
      statType = StatType.ATTACK_PERCENTAGE
    }

    const closestStatValue = GetClosestStatValue(
      statType,
      statValue,
      echoCost,
      isMainStat,
    )

    return {
      Type: statType,
      Value: closestStatValue,
    }
  }

  function GetStatTypeFromName(name: string) {
    const lowerCaseName = name.toLocaleLowerCase()

    for (const [key, value] of Object.entries(STAT_NAMES)) {
      const lowerCaseValue = value.toLowerCase()

      // If HP is on the first line, its detected as 1???
      if (lowerCaseName === 'hp' || lowerCaseName === '1') {
        return StatType.HP
      }

      const isResonanceSkill = lowerCaseName.includes('resonance') && lowerCaseName.includes('skill')
      const isResonanceLib = lowerCaseName.includes('resonance') && lowerCaseName.includes('liberation')
      const isBasicOrHeavy = lowerCaseName.startsWith('basic') || lowerCaseName.startsWith('heavy')
      const distance = LevenshteinDistance(lowerCaseValue, lowerCaseName)

      if (isResonanceLib && lowerCaseValue.includes('lib')) {
        return key as StatType
      }

      if (isResonanceSkill && lowerCaseValue.includes('skill')) {
        return key as StatType
      }

      if (isBasicOrHeavy && distance <= 5) {
        return key as StatType
      }

      if (distance <= 1) {
        return key as StatType
      }
      else if (distance <= 2) {
        return key as StatType
      }
    }
    return StatType.NONE
  }

  function GetClosestStatValue(type: StatType, value: number, echoCost: EchoCost, isMainStat: boolean): number {
    if (type === StatType.NONE)
      return 0

    if (isMainStat) {
      let mainStatsMap: Record<StatType, number>

      switch (echoCost) {
        case EchoCost.ONE_COST:
          mainStatsMap = ONE_COST_MAIN_STATS_VALUES
          break
        case EchoCost.THREE_COST:
          mainStatsMap = THREE_COST_MAIN_STATS_VALUES
          break
        case EchoCost.FOUR_COST:
          mainStatsMap = FOUR_COST_MAIN_STATS_VALUES
          break
        default:
          return 0
      }

      return mainStatsMap[type] ?? 0
    }

    const values = SUB_STAT_VALUES[type]
    if (!values || values.length === 0)
      return 0

    // Find closest substat value
    return values.reduce((closest, current) =>
      Math.abs(current - value) < Math.abs(closest - value) ? current : closest,
    )
  }

  function GetCostFromText(text: string | undefined) {
    if (text === undefined) {
      return EchoCost.ONE_COST
    }

    const trimmed = GetFilteredText(text, /\d/g).trim()

    if (trimmed === '4')
      return EchoCost.FOUR_COST
    if (trimmed === '3')
      return EchoCost.THREE_COST

    return EchoCost.ONE_COST
  }

  function GetRegion(rect: Rectangle) {
    const temp = document.createElement('canvas')

    temp.width = rect.Width
    temp.height = rect.Height

    DrawOnCanvasFromRegion(temp, BaseContext.value!.getImageData(rect.X, rect.Y, rect.Width, rect.Height))

    return temp
  }

  function DrawOnCanvasFromRegion(canvas: HTMLCanvasElement, data: ImageData) {
    const refCtx = canvas.getContext('2d', { willReadFrequently: true })!
    refCtx.clearRect(0, 0, canvas.width, canvas.height)
    refCtx.putImageData(data, 0, 0)
  }

  async function GetText(canvas: HTMLCanvasElement) {
    if (TesseractWorker === undefined) {
      return ''
    }

    const { data } = await TesseractWorker.recognize(canvas)
    return data.text.trim()
  }

  function GetFilteredText(text: string, filter: RegExp) {
    const match = text.match(filter)

    if (match) {
      return match[0] || ''
    }

    return text
  }

  function Cleanup() {
    if (TesseractWorker) {
      TesseractWorker.terminate()
      TesseractWorker = undefined
    }
  }

  return {
    LoadAsync,
    SetContext,
    ScanEchoesStats,
    Cleanup,
  }
}
