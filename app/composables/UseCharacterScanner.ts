import type Character from '~/Core/Interfaces/Character'
import type Echo from '~/Core/Interfaces/Echo'
import type Sonata from '~/Core/Interfaces/Sonata'
import type Weapon from '~/Core/Interfaces/Weapon'
import cv from '@techstark/opencv-js'
import Tesseract from 'tesseract.js'
import { TemplateCharacters } from '~/Core/Characters'
import { TemplateEchoes } from '~/Core/Echoes'
import { EchoCost } from '~/Core/Enums/EchoCost'
import { StatType } from '~/Core/Enums/StatType'
import { CHARACTER_LEVEL_REGION, CHARACTER_NAME_REGION, ECHOES_REGIONS, WEAPON_LEVEL_REGION, WEAPON_NAME_REGION } from '~/Core/Scanner/Coordinates'
import { Rectangle } from '~/Core/Scanner/Rectangle'
import { Sonatas } from '~/Core/Sonatas'
import { FOUR_COST_MAIN_STATS_VALUES, ONE_COST_MAIN_STATS_VALUES, STAT_NAMES, SUB_STAT_VALUES, THREE_COST_MAIN_STATS_VALUES } from '~/Core/Statistics'
import { GetEchoIcon, GetSonataIcon } from '~/Core/Utils/EchoUtils'
import { IsFloatingPointNumber } from '~/Core/Utils/NumberUtils'
import { GetSecondaryStat } from '~/Core/Utils/StatsUtils'
import { LevenshteinDistance } from '~/Core/Utils/StringUtils'
import { TemplateWeapons } from '~/Core/Weapons'

// Utility function for timeout
function withTimeout<T>(promise: Promise<T>, timeoutMs: number = 10000): Promise<T> {
  return Promise.race([
    promise,
    new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error(`Operation timeout after ${timeoutMs}ms`)), timeoutMs),
    ),
  ])
}

export enum ScannerStatus {
  IDLE,
  CHARACTER,
  WEAPON,
  ECHOES,
  ECHOES_01,
  ECHOES_02,
  ECHOES_03,
  ECHOES_04,
  ECHOES_05,
  DONE,
}

export enum ScannerResultStatus {
  ERROR,
  INVALID_IMAGE,
  INVALID_CHARACTER,
  INVALID_WEAPON,
  INVALID_ECHO,
  SUCCESS,
}

export function useCharacterScanner() {
  let Worker: Tesseract.Worker | undefined
  let Canvas: HTMLCanvasElement | undefined
  let CanvasContext: CanvasRenderingContext2D | null
  let Canvases: HTMLCanvasElement[] = []

  const OnProgress = ref<(status: ScannerStatus) => void>()

  async function LoadAsync(file: File) {
    const image = await createImageBitmap(file)
    Canvas = document.createElement('canvas')
    CanvasContext = Canvas.getContext('2d', { willReadFrequently: true })!

    Canvas.width = image.width
    Canvas.height = image.height
    CanvasContext.clearRect(0, 0, image.width, image.height)
    CanvasContext.drawImage(image, 0, 0)

    Worker = await Tesseract.createWorker('eng', 1)
  }

  async function ScanAsync(onProgress?: (status: ScannerStatus) => void): Promise<{ Status: ScannerResultStatus, Character?: Character | undefined, Weapon?: Weapon | undefined, Echoes?: Echo[] }> {
    OnProgress.value = onProgress

    try {
      if (OnProgress.value) {
        OnProgress.value(ScannerStatus.IDLE)
      }

      if (OnProgress.value) {
        OnProgress.value(ScannerStatus.CHARACTER)
      }

      const character = await withTimeout(GetCharacterAsync(), 5000)

      if (character === undefined) {
        return {
          Status: ScannerResultStatus.INVALID_CHARACTER,
        }
      }

      if (OnProgress.value) {
        OnProgress.value(ScannerStatus.WEAPON)
      }

      const weapon = await withTimeout(GetWeaponAsync(character.Id), 3000)

      if (OnProgress.value) {
        OnProgress.value(ScannerStatus.ECHOES)
      }

      const echoes = await withTimeout(GetEchoesAsync(character.Id), 3000000)

      character.EquipedWeapon = weapon?.Id

      // Initialize EquipedEchoes array with 5 slots
      character.EquipedEchoes = Array.from({ length: 5 }, () => -1)

      // Place echoes in their correct slots
      echoes.forEach((e) => {
        if (e.EquipedSlot !== undefined && e.EquipedSlot >= 0 && e.EquipedSlot < 5) {
          character.EquipedEchoes[e.EquipedSlot] = e.Id
        }
      })

      if (onProgress) {
        onProgress(ScannerStatus.DONE)
      }

      return {
        Status: ScannerResultStatus.SUCCESS,
        Character: character,
        Weapon: weapon,
        Echoes: echoes,
      }
    }
    catch (error) {
      console.error('Scanner error:', error)
      return {
        Status: ScannerResultStatus.ERROR,
      }
    }
    finally {
      CleanUp()
    }
  }

  async function GetWeaponAsync(characterId: number) {
    const [
      weaponName,
      weaponLevel,
    ] = await Promise.all([
      GetText(GetRegion(WEAPON_NAME_REGION)),
      GetText(GetRegion(WEAPON_LEVEL_REGION)),
    ])

    const weapon = TemplateWeapons.find((x) => {
      const distance = LevenshteinDistance(
        x.Name.toLowerCase(),
        GetFilteredText(weaponName, /[a-z' ]+/i).toLowerCase(),
      )

      return distance <= 2
    })

    if (weapon === undefined) {
      return undefined
    }

    weapon.EquipedBy = characterId
    weapon.Level = Number.parseInt(GetFilteredText(weaponLevel, /\d+/))

    return weapon
  }

  async function GetCharacterAsync() {
    const characterName = await GetText(GetRegion(CHARACTER_NAME_REGION))

    const character = TemplateCharacters.find((x) => {
      const name = x.Icon.split('_')[0]?.toLowerCase() || ''
      const scannedNames = GetFilteredText(characterName, /[a-z ]+/i).toLowerCase().split(' ')

      let bestMatch = { distance: Infinity, name: '' }

      for (let scannedName of scannedNames) {
        if (scannedName.startsWith('the')) {
          scannedName = scannedName.replace('the', '').trim()
        }

        const distance = LevenshteinDistance(name, scannedName)

        if (distance < bestMatch.distance) {
          bestMatch = { distance, name: scannedName }
        }
      }

      return bestMatch.distance <= 2
    })

    if (character === undefined) {
      return undefined
    }

    character.Level = await GetCharacterLevelAsync()

    return character
  }

  async function GetCharacterLevelAsync(): Promise<number> {
    const chunkWidth = 35
    const step = 10
    const chunkHeight = CHARACTER_LEVEL_REGION.Height
    const y = CHARACTER_LEVEL_REGION.Y
    const startX = CHARACTER_LEVEL_REGION.X
    const endX = 650
    let bestLevel = 1

    for (let x = startX; x <= endX; x += step) {
      const region = new Rectangle(x, y, chunkWidth, chunkHeight)
      const text = await GetText(GetRegion(region))
      const match = text.match(/\d{1,2}/)

      if (match) {
        const level = Number.parseInt(match[0])

        if (!Number.isNaN(level) && level > bestLevel) {
          bestLevel = level
        }
      }
    }

    // TODO: Remove this once the scanner is fixed.
    // Sometimes the scanner returns 19 as the level, which is incorrect because the character is level 90.
    // But if the character is actually level 19, this will cause the character to be set to level 90.
    if (bestLevel === 19) {
      bestLevel = 90
    }

    return bestLevel
  }

  function FindMostCommonSonata(echoes: Echo[]): Sonata | undefined {
    const sonataCounts = new Map<string, { sonata: Sonata, count: number }>()

    for (const echo of echoes) {
      for (const sonata of echo.Sonata) {
        // Only count selected sonatas
        if (sonata.IsSelected === true) {
          const key = sonata.Name
          const existing = sonataCounts.get(key)
          if (existing) {
            existing.count++
          }
          else {
            sonataCounts.set(key, { sonata, count: 1 })
          }
        }
      }
    }

    let mostCommon: { sonata: Sonata, count: number } | undefined
    for (const [_, data] of sonataCounts) {
      if (!mostCommon || data.count > mostCommon.count) {
        mostCommon = data
      }
    }

    return mostCommon?.sonata
  }

  async function GetEchoesAsync(characterId: number) {
    const echoes: Echo[] = []

    for (let i = 0; i < ECHOES_REGIONS.length; i += 15) {
      const index = Math.floor(i / 15)

      if (OnProgress.value) {
        OnProgress.value(ScannerStatus[`ECHOES_0${index + 1}` as keyof typeof ScannerStatus])
      }

      try {
        const regionsForThisEcho = ECHOES_REGIONS.slice(i, i + 15)
        const fields = await withTimeout(
          Promise.all(regionsForThisEcho.map(e => GetText(GetRegion(e)))),
          30000,
        )

        const chunk = fields.slice(0, 15)
        const cost = GetCostFromText(GetFilteredText(chunk[1] || '', /\d+/))

        const echo = await withTimeout(
          GetEcho(ECHOES_REGIONS[i]!, cost),
          30000,
        )

        if (echo === undefined) {
          continue
        }

        const e = {
          ...echo,
          MainStatistic: GetStatistic(chunk[3] || '', chunk[4] || '', echo.Cost, true),
          SecondaryStatistic: GetSecondaryStat(echo.Cost),
          Statistics: Array.from({ length: 5 }, (_, j) => {
            const name = chunk[5 + j * 2] || ''
            const rawValue = chunk[6 + j * 2] || '0'
            return GetStatistic(name, rawValue, echo.Cost)
          }).filter(stat => stat.Type !== StatType.NONE && !Number.isNaN(stat.Value)),
          EquipedSlot: index,
          EquipedBy: characterId,
        } as Echo

        const sonata = await withTimeout(
          GetSonata(ECHOES_REGIONS[i + 2]!),
          30000,
        )

        e.Sonata = echo.Sonata.map(s => ({
          ...s,
          IsSelected: sonata ? LevenshteinDistance(s.Name.toLowerCase(), sonata.Name.toLowerCase()) <= 1 : false,
        }))

        if (e.Statistics.length > 0)
          e.Level = 5 * (e.Statistics.length)

        echoes.push(e)
      }
      catch (error) {
        console.error(`Error processing echo slot ${index + 1}:`, error)
        continue
      }
    }

    // Apply fallback sonata if needed
    const mostCommonSonata = FindMostCommonSonata(echoes)

    // If no sonata is selected, use the first available sonata from any echo
    let fallbackSonata = mostCommonSonata
    if (!fallbackSonata) {
      for (const echo of echoes) {
        if (echo.Sonata.length > 0) {
          fallbackSonata = echo.Sonata[0]
          break
        }
      }
    }

    if (fallbackSonata) {
      for (const echo of echoes) {
        const hasSelectedSonata = echo.Sonata.some(s => s.IsSelected)
        if (!hasSelectedSonata) {
          echo.Sonata = echo.Sonata.map(s => ({
            ...s,
            IsSelected: s.Name === fallbackSonata!.Name,
          }))
        }
      }
    }

    return echoes
  }

  async function GetEcho(iconRegion: Rectangle, cost: EchoCost) {
    const region = GetRegion(iconRegion)
    const srcMat = ConvertToGrayScale(region)
    const templates = TemplateEchoes.filter(x => x.Cost === cost)

    return await FindEcho(srcMat, templates, region.width, region.height)
  }

  async function GetSonata(iconRegion: Rectangle) {
    const region = GetRegion(iconRegion)
    const srcMat = ConvertToGrayScale(region)

    return await FindSonata(srcMat, Sonatas, region.width, region.height)
  }

  async function FindEcho(srcMat: cv.Mat, echoes: Echo[], width: number, height: number) {
    let bestMatch: { echo: Echo | undefined, score: number } = {
      echo: undefined,
      score: 0,
    }

    const orb = new cv.ORB()
    const kp1 = new cv.KeyPointVector()
    const des1 = new cv.Mat()
    const bf = new cv.BFMatcher()

    try {
      orb.detectAndCompute(srcMat, new cv.Mat(), kp1, des1)

      for (const template of echoes) {
        let templMat: cv.Mat | undefined
        let kp2: cv.KeyPointVector | undefined
        let des2: cv.Mat | undefined
        let knnMatches: cv.DMatchVectorVector | undefined

        try {
          templMat = await LoadEchoIcon(template, width, height)

          kp2 = new cv.KeyPointVector()
          des2 = new cv.Mat()
          orb.detectAndCompute(templMat, new cv.Mat(), kp2, des2)

          knnMatches = new cv.DMatchVectorVector()
          bf.knnMatch(des1, des2, knnMatches, 2)

          let goodMatches = 0
          for (let i = 0; i < knnMatches.size(); i++) {
            const matchPair = knnMatches.get(i)
            if (matchPair.size() < 2)
              continue

            const m = matchPair.get(0)
            const n = matchPair.get(1)

            if (m.distance < 0.75 * n.distance) {
              goodMatches++
            }
          }

          const attemptedMatches = Math.min(kp1.size(), kp2.size())
          const ratio = attemptedMatches > 0 ? goodMatches / attemptedMatches : 0

          if (ratio > bestMatch.score) {
            bestMatch = { echo: template, score: ratio }
          }
        }
        finally {
          if (templMat)
            templMat.delete()
          if (kp2)
            kp2.delete()
          if (des2)
            des2.delete()
          if (knnMatches)
            knnMatches.delete()
        }
      }
    }
    finally {
      kp1.delete()
      des1.delete()
      bf.delete()
      orb.delete()
    }

    return bestMatch.echo
  }

  async function FindSonata(srcMat: cv.Mat, sonatas: Sonata[], width: number, height: number): Promise<Sonata | undefined> {
    let bestMatch: { sonata: Sonata | undefined, score: number } = {
      sonata: undefined,
      score: Number.MAX_VALUE,
    }

    srcMat = UpscaleIfNeeded(srcMat)

    const orb = new cv.ORB()
    const kp1 = new cv.KeyPointVector()
    const des1 = new cv.Mat()

    try {
      orb.detectAndCompute(srcMat, new cv.Mat(), kp1, des1)

      for (let i = 0; i < sonatas.length; i++) {
        const sonata = sonatas[i]
        if (!sonata)
          continue

        let templMat: cv.Mat | undefined
        let kp2: cv.KeyPointVector | undefined
        let des2: cv.Mat | undefined

        try {
          templMat = await withTimeout(
            LoadSonataIcon(sonata, width, height),
            5000,
          )

          if (templMat.cols !== srcMat.cols || templMat.rows !== srcMat.rows) {
            cv.resize(templMat, templMat, new cv.Size(srcMat.cols, srcMat.rows))
          }

          templMat = UpscaleIfNeeded(templMat)

          kp2 = new cv.KeyPointVector()
          des2 = new cv.Mat()
          orb.detectAndCompute(templMat, new cv.Mat(), kp2, des2)

          const distance = ComputeDistance(des1, des2)

          if (distance < bestMatch.score) {
            bestMatch = { sonata, score: distance }
          }
        }
        catch (error) {
          console.error(`Error processing sonata slot ${i + 1}:`, error)
          continue
        }
        finally {
          if (templMat)
            templMat.delete()
          if (kp2)
            kp2.delete()
          if (des2)
            des2.delete()
        }
      }
    }
    finally {
      kp1.delete()
      des1.delete()
      orb.delete()
    }

    return bestMatch.sonata
  }

  function UpscaleIfNeeded(mat: cv.Mat, targetSize: number = 96): cv.Mat {
    if (mat.cols < targetSize || mat.rows < targetSize) {
      const upscaled = new cv.Mat()
      cv.resize(mat, upscaled, new cv.Size(targetSize, targetSize), 0, 0, cv.INTER_CUBIC)
      return upscaled
    }
    return mat
  }

  function ComputeDistance(des1: cv.Mat, des2: cv.Mat): number {
    if (des1.rows === 0 || des2.rows === 0)
      return Number.MAX_VALUE

    const bf = new cv.BFMatcher()
    const matches = new cv.DMatchVector()

    try {
      bf.match(des1, des2, matches)

      let totalDistance = 0
      for (let i = 0; i < matches.size(); i++) {
        totalDistance += matches.get(i).distance
      }

      const avgDistance = matches.size() > 0 ? totalDistance / matches.size() : Number.MAX_VALUE
      return avgDistance
    }
    finally {
      matches.delete()
      bf.delete()
    }
  }

  function GetStatistic(name: string, value: string, echoCost: EchoCost, isMainStat: boolean = false) {
    let statType = GetStatTypeFromName(name || StatType.NONE)
    const statValue = Number.parseFloat(GetFilteredText(value, /\d*\.\d+|\d+/))

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
      Number.parseFloat(GetFilteredText(value, /\d*\.\d+|\d+/)),
      echoCost,
      isMainStat,
    )

    return {
      Type: statType,
      Value: closestStatValue,
    }
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

    const trimmed = text.trim()

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

    Canvases.push(temp)

    DrawOnCanvasFromRegion(temp, CanvasContext!.getImageData(rect.X, rect.Y, rect.Width, rect.Height))

    return temp
  }

  async function LoadEchoIcon(echo: Echo, width: number, height: number): Promise<cv.Mat> {
    const refImage = await new Promise<HTMLImageElement>((resolve) => {
      const img = new Image()
      img.src = GetEchoIcon(echo)
      img.onload = () => resolve(img)
    })

    const refRegion = GetRegion({
      X: 0,
      Y: 0,
      Width: width,
      Height: height,
    })

    DrawOnCanvas(refRegion, refImage, {
      X: 0,
      Y: 0,
      Width: width,
      Height: height,
    })

    return ConvertToGrayScale(refRegion)
  }

  async function LoadSonataIcon(sonata: Sonata, width: number, height: number): Promise<cv.Mat> {
    const iconPath = GetSonataIcon(sonata)

    const refImage = await withTimeout(
      new Promise<HTMLImageElement>((resolve, reject) => {
        const img = new Image()
        img.onload = () => {
          resolve(img)
        }
        img.onerror = (error) => {
          console.error(`Failed to load sonata icon: ${iconPath}`, error)
          reject(new Error(`Failed to load sonata icon: ${sonata.Name} (${iconPath})`))
        }
        img.src = iconPath
      }),
      3000,
    )

    const refRegion = GetRegion({
      X: 0,
      Y: 0,
      Width: width,
      Height: height,
    })

    DrawOnCanvas(refRegion, refImage, {
      X: 0,
      Y: 0,
      Width: width,
      Height: height,
    })

    return ConvertToGrayScale(refRegion)
  }

  function DrawOnCanvas(canvas: HTMLCanvasElement, image: HTMLImageElement, rect: Rectangle) {
    const refCtx = canvas.getContext('2d', { willReadFrequently: true })!
    refCtx.clearRect(rect.X, rect.Y, canvas.width, canvas.height)
    refCtx.drawImage(image, rect.X, rect.Y, rect.Width, rect.Height)
  }

  function DrawOnCanvasFromRegion(canvas: HTMLCanvasElement, data: ImageData) {
    const refCtx = canvas.getContext('2d', { willReadFrequently: true })!
    refCtx.clearRect(0, 0, canvas.width, canvas.height)
    refCtx.putImageData(data, 0, 0)
  }

  function ConvertToGrayScale(region: HTMLCanvasElement): cv.Mat {
    const srcMat = cv.imread(region)
    cv.cvtColor(srcMat, srcMat, cv.COLOR_RGBA2GRAY)
    return srcMat
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

      if (isResonanceLib && distance <= 15 && lowerCaseValue.includes('lib')) {
        return key as StatType
      }

      if (isResonanceSkill && distance <= 10 && lowerCaseValue.includes('skill')) {
        return key as StatType
      }

      if (isBasicOrHeavy && distance <= 5) {
        return key as StatType
      }

      if (distance <= 1) {
        return key as StatType
      }
    }
    return StatType.NONE
  }

  async function GetText(canvas: HTMLCanvasElement) {
    if (Worker === undefined) {
      return ''
    }

    const { data } = await Worker.recognize(canvas)
    return data.text.trim()
  }

  function GetFilteredText(text: string, filter: RegExp) {
    const match = text.match(filter)

    if (match) {
      return match[0] || ''
    }

    return text
  }

  function CleanUp() {
    for (const c of Canvases) {
      c.remove()
    }
    Canvases = []

    if (Worker) {
      Worker.terminate()
      Worker = undefined
    }

    Canvas = undefined
    CanvasContext = null
  }

  return {
    LoadAsync,
    ScanAsync,
  }
}
