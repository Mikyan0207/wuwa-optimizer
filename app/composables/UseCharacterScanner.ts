import type Echo from '~/Core/Interfaces/Echo'
import type Statistic from '~/Core/Interfaces/Statistic'
import type { Rectangle } from '~/Core/Scanner/Rectangle'
import cv from '@techstark/opencv-js'
import Tesseract from 'tesseract.js'
import { TemplateCharacters } from '~/Core/Characters'
import { TemplateEchoes } from '~/Core/Echoes'
import { EchoCost } from '~/Core/Enums/EchoCost'
import { StatType } from '~/Core/Enums/StatType'
import { CHARACTER_LEVEL_REGION, CHARACTER_NAME_REGION, ECHOES_REGIONS, WEAPON_LEVEL_REGION, WEAPON_NAME_REGION } from '~/Core/Scanner/Coordinates'
import { GetStatTypeFromName } from '~/Core/Statistics'
import { GetEchoIcon } from '~/Core/Utils/EchoUtils'
import { GetSecondaryStat } from '~/Core/Utils/StatsUtils'
import { LevenshteinDistance } from '~/Core/Utils/StringUtils'
import { TemplateWeapons } from '~/Core/Weapons'

export interface ScannedCharacterInfo {
  Name: string
  Level: number
  WeaponName: string
  WeaponLevel: number
}

export interface ScannedEchoInfo {
  Id: number
  MainStatistic: Statistic
  SecondaryStatistic: Statistic
  Statistics: Statistic[]
}

export enum ScannerStatus {
  IDLE,
  CHARACTER,
  WEAPON,
  ECHOES,
  DONE,
}

export function useCharacterScanner() {
  let Worker: Tesseract.Worker | undefined
  let Canvas: HTMLCanvasElement | undefined
  let CanvasContext: CanvasRenderingContext2D | null
  let Canvases: HTMLCanvasElement[] = []

  const IsLoading = ref<boolean>(false)

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
    if (onProgress) {
      onProgress(ScannerStatus.IDLE)
    }

    const [
      character,
      weapon,
      echoes,
    ] = await Promise.all([
      GetCharacterAsync().then((c) => {
        if (onProgress) {
          onProgress(ScannerStatus.CHARACTER)
        }

        return c
      }),
      GetWeaponAsync().then((w) => {
        if (onProgress) {
          onProgress(ScannerStatus.WEAPON)
        }

        return w
      }),
      GetEchoesAsync().then((e) => {
        if (onProgress) {
          onProgress(ScannerStatus.ECHOES)
        }

        return e
      }),
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
    ] = await Promise.all([
      GetText(GetRegion(CHARACTER_NAME_REGION)),
      GetText(GetRegion(CHARACTER_LEVEL_REGION)),
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

    character.Level = Number.parseInt(GetFilteredText(characterLevel, /\d+/))

    return character
  }

  async function GetEchoesAsync() {
    const fields = await Promise.all(ECHOES_REGIONS.map(e => GetText(GetRegion(e))))
    const echoes: Echo[] = []

    for (let i = 0; i < fields.length; i += 14) {
      const chunk = fields.slice(i, i + 14)
      const cost = chunk[1]

      const echo = await GetEcho(ECHOES_REGIONS[i]!, GetCostFromText(cost))

      if (echo === undefined) {
        console.log('couldn\'t find echo')
        continue
      }

      echoes.push({
        ...echo,
        MainStatistic: {
          Type: GetStatTypeFromName(chunk[2] || StatType.NONE),
          Value: Number.parseFloat(GetFilteredText(chunk[3] || '0', /\d*\.\d+|\d+/)),
        },
        SecondaryStatistic: GetSecondaryStat(echo.Cost),
        Statistics: [],
      })
    }

    return echoes
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

    const bestMatch = await FindBestMatch(srcMat, templates, region.width, region.height)

    return bestMatch.score < 0.3 ? bestMatch.echo : undefined // Return undefined if no match is found
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
      score: Number.MAX_VALUE,
    }

    for (const template of echoes) {
      const templMat = await LoadEchoIcon(template, width, height)

      const result = new cv.Mat()
      const resultSize = new cv.Size(srcMat.cols - templMat.cols + 1, srcMat.rows - templMat.rows + 1)
      result.create(resultSize.height, resultSize.width, cv.CV_32FC1)

      cv.matchTemplate(srcMat, templMat, result, cv.TM_SQDIFF_NORMED)
      const minVal = cv.minMaxLoc(result, new cv.Mat()).minVal

      if (minVal < bestMatch.score) {
        bestMatch = { echo: template, score: minVal }
      }

      templMat.delete()
      result.delete()
    }

    return bestMatch
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
      c.remove() // retire du DOM
    }

    Canvases = []
  }

  return {
    LoadAsync,
    ScanAsync,
  }
}
