import type Echo from '~/Core/Interfaces/Echo'
import type { Rectangle } from '~/Core/Scanner/Rectangle'
import cv from '@techstark/opencv-js'
import Tesseract from 'tesseract.js'
import { TemplateCharacters } from '~/Core/Characters'
import { TemplateEchoes } from '~/Core/Echoes'
import { EchoCost } from '~/Core/Enums/EchoCost'
import { StatType } from '~/Core/Enums/StatType'
import { CHARACTER_LEVEL_REGION, CHARACTER_LEVEL_REGION_ALT, CHARACTER_NAME_REGION, ECHOES_REGIONS, WEAPON_LEVEL_REGION, WEAPON_NAME_REGION } from '~/Core/Scanner/Coordinates'
import { GetStatTypeFromName } from '~/Core/Statistics'
import { GetEchoIcon } from '~/Core/Utils/EchoUtils'
import { IsFloatingPointNumber } from '~/Core/Utils/NumberUtils'
import { GetSecondaryStat } from '~/Core/Utils/StatsUtils'
import { LevenshteinDistance } from '~/Core/Utils/StringUtils'
import { TemplateWeapons } from '~/Core/Weapons'

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

export function useCharacterScanner() {
  let Worker: Tesseract.Worker | undefined
  let Canvas: HTMLCanvasElement | undefined
  let CanvasContext: CanvasRenderingContext2D | null
  let Canvases: HTMLCanvasElement[] = []

  const IsLoading = ref<boolean>(false)

  const OnProgress = ref<(status: ScannerStatus) => void>()

  async function LoadAsync(file: File) {
    IsLoading.value = true

    const image = await createImageBitmap(file)
    Canvas = document.createElement('canvas')
    CanvasContext = Canvas.getContext('2d', { willReadFrequently: true })!

    Canvas.width = image.width
    Canvas.height = image.height
    CanvasContext.drawImage(image, 0, 0)

    Worker = await Tesseract.createWorker('eng', 1)
  }

  async function ScanAsync(onProgress?: (status: ScannerStatus) => void) {
    OnProgress.value = onProgress
    if (OnProgress.value) {
      OnProgress.value(ScannerStatus.IDLE)
    }

    const [
      character,
      weapon,
      echoes,
    ] = await Promise.all([
      (async () => {
        if (OnProgress.value) {
          OnProgress.value(ScannerStatus.CHARACTER)
        }
        return GetCharacterAsync()
      })(),
      (async () => {
        if (OnProgress.value) {
          OnProgress.value(ScannerStatus.WEAPON)
        }
        return GetWeaponAsync()
      })(),
      (async () => {
        if (OnProgress.value) {
          OnProgress.value(ScannerStatus.ECHOES)
        }
        return GetEchoesAsync()
      })(),
    ])

    CleanUp()

    console.log(
      character,
      weapon,
      echoes,
    )

    if (onProgress) {
      onProgress(ScannerStatus.DONE)
    }

    return {
      character,
      weapon,
      echoes,
    }
  }

  async function GetWeaponAsync() {
    const [
      weaponName,
      weaponLevel,
    ] = await Promise.all([
      GetText(GetRegion(WEAPON_NAME_REGION)),
      GetText(GetRegion(WEAPON_LEVEL_REGION)),
    ])

    const weapon = TemplateWeapons.find((x) => {
      const distance = LevenshteinDistance(x.Name.toLowerCase(), GetFilteredText(weaponName, /[a-z ]+/i).toLowerCase())

      return distance <= 2
    })

    if (weapon === undefined) {
      return undefined
    }

    weapon.Level = Number.parseInt(GetFilteredText(weaponLevel, /\d+/))

    return weapon
  }

  async function GetCharacterAsync() {
    const [
      characterName,
      characterLevel,
      characterLevelAlt,
    ] = await Promise.all([
      GetText(GetRegion(CHARACTER_NAME_REGION)),
      GetText(GetRegion(CHARACTER_LEVEL_REGION)),
      GetText(GetRegion(CHARACTER_LEVEL_REGION_ALT)),
    ])

    const character = TemplateCharacters.find((x) => {
      const name = x.Icon.split('_')[0]?.toLowerCase() || ''
      let scannedName = GetFilteredText(characterName, /[a-z ]+/i).toLowerCase()

      // Edge case for Shorekeeper because I'm too lazy.
      if (scannedName.startsWith('the')) {
        scannedName = scannedName.replace('the', '').trim()
      }

      const distance = LevenshteinDistance(name, scannedName)

      return distance <= 3
    })

    if (character === undefined) {
      return undefined
    }

    // TODO: Change the way we parse the character level. Do it per chunk on the line of the level until we get something that
    // is not a NaN or above 1. If we still didn't get any numbers in the end, we assume the character is level 1 or 90.
    let parsedCharacterLevel = Number.parseInt(GetFilteredText(characterLevel, /\d+/))

    if (Number.isNaN(parsedCharacterLevel)) {
      parsedCharacterLevel = Number.parseInt(GetFilteredText(characterLevelAlt, /\d+/))
    }

    character.Level = parsedCharacterLevel

    return character
  }

  async function GetEchoesAsync() {
    const fields = await Promise.all(ECHOES_REGIONS.map(e => GetText(GetRegion(e))))
    const echoes: Echo[] = []

    for (let i = 0; i < fields.length; i += 14) {
      if (OnProgress.value) {
        OnProgress.value(ScannerStatus[`ECHOES_0${Math.floor(i / 14) + 1}` as keyof typeof ScannerStatus])
      }
      const chunk = fields.slice(i, i + 14)
      const cost = GetCostFromText(GetFilteredText(chunk[1] || '', /\d+/))

      const echo = await GetEcho(ECHOES_REGIONS[i]!, cost)

      if (echo === undefined) {
        console.log('couldn\'t find echo')
        continue
      }

      // TODO: Set EquipedSlot & EquipedBy
      // TODO: Instead of using the parsed stat value, we should get the closest one from the possible values.

      const e = {
        ...echo,
        MainStatistic: GetStatistic(chunk[2] || '', chunk[3] || '', true),
        SecondaryStatistic: GetSecondaryStat(echo.Cost),
        Statistics: Array.from({ length: 5 }, (_, j) => {
          const name = chunk[4 + j * 2] || ''
          const rawValue = chunk[5 + j * 2] || '0'

          return GetStatistic(name, rawValue)
        }).filter(stat => stat.Type !== StatType.NONE && !Number.isNaN(stat.Value)),
      }

      if (e.Statistics.length > 0)
        e.Level = 5 * (e.Statistics.length)

      echoes.push(e)
    }

    return echoes
  }

  function GetStatistic(name: string, value: string, isMainStat: boolean = false) {
    let statType = GetStatTypeFromName(name || StatType.NONE)
    const statValue = Number.parseFloat(GetFilteredText(value, /\d*\.\d+|\d+/))

    if ((IsFloatingPointNumber(statValue) || isMainStat) && statType === StatType.HP) {
      statType = StatType.HP_PERCENTAGE
    }
    if (IsFloatingPointNumber(statValue) && statType === StatType.DEF) {
      statType = StatType.DEF_PERCENTAGE
    }
    else if ((IsFloatingPointNumber(statValue) || isMainStat) && statType === StatType.ATTACK) {
      statType = StatType.ATTACK_PERCENTAGE
    }

    return {
      Type: statType,
      Value: statValue,
    }
  }

  function GetCostFromText(text: string | undefined) {
    if (text?.trim() === '4')
      return EchoCost.FOUR_COST
    if (text?.trim() === '3')
      return EchoCost.THREE_COST

    return EchoCost.ONE_COST
  }

  async function GetEcho(iconRegion: Rectangle, cost: EchoCost) {
    const region = GetRegion(iconRegion)
    const srcMat = ConvertToGrayScale(region)
    const templates = TemplateEchoes.filter(x => x.Cost === cost)

    return await FindBestMatch(srcMat, templates, region.width, region.height)
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

  async function FindBestMatch(srcMat: cv.Mat, echoes: Echo[], width: number, height: number) {
    let bestMatch: { echo: Echo | undefined, score: number } = {
      echo: undefined,
      score: 0,
    }

    const orb = new cv.ORB()
    const kp1 = new cv.KeyPointVector()
    const des1 = new cv.Mat()
    orb.detectAndCompute(srcMat, new cv.Mat(), kp1, des1)

    const bf = new cv.BFMatcher()

    for (const template of echoes) {
      const templMat = await LoadEchoIcon(template, width, height)

      const kp2 = new cv.KeyPointVector()
      const des2 = new cv.Mat()
      orb.detectAndCompute(templMat, new cv.Mat(), kp2, des2)

      const knnMatches = new cv.DMatchVectorVector()
      bf.knnMatch(des1, des2, knnMatches, 2)

      let goodMatches = 0
      for (let i = 0; i < knnMatches.size(); i++) {
        const matchPair = knnMatches.get(i)
        if (matchPair.size() < 2)
          continue

        const m = matchPair.get(0)
        const n = matchPair.get(1)

        if (m.distance < 0.8 * n.distance) {
          goodMatches++
        }
      }

      const attemptedMatches = Math.min(kp1.size(), kp2.size())
      const ratio = attemptedMatches > 0 ? goodMatches / attemptedMatches : 0

      if (ratio > bestMatch.score) {
        bestMatch = { echo: template, score: ratio }
      }

      templMat.delete()
      kp2.delete()
      des2.delete()
      knnMatches.delete()
    }

    kp1.delete()
    des1.delete()
    bf.delete()
    orb.delete()

    return bestMatch.echo
  }

  function GetRegion(rect: Rectangle) {
    const temp = document.createElement('canvas')

    temp.width = rect.Width
    temp.height = rect.Height

    Canvases.push(temp)

    const tempCtx = temp.getContext('2d')!

    tempCtx.putImageData(CanvasContext!.getImageData(rect.X, rect.Y, rect.Width, rect.Height), 0, 0)

    return temp
  }

  function DrawOnCanvas(canvas: HTMLCanvasElement, image: HTMLImageElement, rect: Rectangle) {
    const refCtx = canvas.getContext('2d', { willReadFrequently: true })!
    refCtx.drawImage(image, rect.X, rect.Y, rect.Width, rect.Height)
  }

  function ConvertToGrayScale(region: HTMLCanvasElement): cv.Mat {
    const srcMat = cv.imread(region)
    cv.cvtColor(srcMat, srcMat, cv.COLOR_RGBA2GRAY)
    return srcMat
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
  }

  return {
    LoadAsync,
    ScanAsync,
  }
}
