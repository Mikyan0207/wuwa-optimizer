import type { BaseCharacter } from '~/Core/Interfaces/Character'
import type Character from '~/Core/Interfaces/Character'
import Tesseract from 'tesseract.js'
import { CHARACTER_NAME_REGION } from '~/Core/Scanner/Regions'
import { LevenshteinDistance } from '~/Core/Utils/StringUtils'
import type { BFMatcher, KeyPointVector, Mat, ORB } from '@techstark/opencv-js'
import cvReadyPromise from '@techstark/opencv-js'
import { GetCharacterTypeIcon } from '~/Core/Utils/CharacterUtils'
import { CharacterType } from '~/Core/Enums/CharacterType'

export function useCharacterScanner() {
  let NameWorker: Tesseract.Worker | undefined
  let cv: typeof cvReadyPromise
  let orb: ORB | null = null
  let bf: BFMatcher | null = null

  const BaseContext = ref<CanvasRenderingContext2D | null>(null)
  const CharacterNamesCache = new Map<BaseCharacter, string>()

  const ElementTypeIconsCache = new Map<CharacterType, Mat>()
  const ElementTypeDescriptorsCache = new Map<CharacterType, { keypoints: KeyPointVector, descriptors: Mat }>()

  const CharactersStore = useCharactersStore()
  const Characters = ref<BaseCharacter[]>([])

  const CHARACTER_TYPE_ICON_REGION = { X: 13, Y: 25, Width: 50, Height: 50 }

  async function LoadAsync() {
    NameWorker = await Tesseract.createWorker('eng', 1)

    cv = await cvReadyPromise
    orb = new cv.ORB(500)
    bf = new cv.BFMatcher()

    Characters.value = CharactersStore.GetAll()

    for (const character of Characters.value) {
      const name = character.Icon.split('_')[0]?.toLowerCase() || ''
      CharacterNamesCache.set(character, name)
    }

    await LoadElementTypeIcons()
  }

    async function LoadElementTypeIcons() {
    const elementTypes = [CharacterType.AERO, CharacterType.SPECTRO, CharacterType.HAVOC]

    const iconPromises = elementTypes.map(async (elementType) => {
      const icon = await LoadElementTypeIcon(elementType, 126, 126)
      if (icon) {
        ElementTypeIconsCache.set(elementType, icon)

        const keypoints = new cv.KeyPointVector()
        const descriptors = new cv.Mat()
        orb!.detectAndCompute(icon, new cv.Mat(), keypoints, descriptors)
        ElementTypeDescriptorsCache.set(elementType, { keypoints, descriptors })
      }
    })

    await Promise.all(iconPromises)
  }

  async function LoadElementTypeIcon(elementType: CharacterType, width: number, height: number): Promise<Mat> {
    const tempCharacter = { Type: elementType } as Character
    const iconPath = GetCharacterTypeIcon(tempCharacter)

    const refImage = await new Promise<HTMLImageElement>((resolve) => {
      const img = new Image()
      img.onload = () => resolve(img)
      img.src = iconPath
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

  function ConvertToGrayScale(canvas: HTMLCanvasElement): Mat {
    const srcMat = cv.imread(canvas)
    cv.cvtColor(srcMat, srcMat, cv.COLOR_RGBA2GRAY)
    return srcMat
  }

  function DrawOnCanvas(canvas: HTMLCanvasElement, image: HTMLImageElement, rect: { X: number, Y: number, Width: number, Height: number }) {
    const refCtx = canvas.getContext('2d', { willReadFrequently: true })!
    refCtx.clearRect(rect.X, rect.Y, canvas.width, canvas.height)
    refCtx.drawImage(image, rect.X, rect.Y, rect.Width, rect.Height)
  }

  function UpscaleIfNeeded(mat: Mat, targetSize: number = 96): Mat {
    if (mat.cols >= targetSize && mat.rows >= targetSize) {
      return mat
    }

    const upscaled = new cv.Mat()
    cv.resize(mat, upscaled, new cv.Size(targetSize, targetSize), 0, 0, cv.INTER_CUBIC)
    return upscaled
  }

  function ComputeDistance(des1: Mat, des2: Mat): number {
    if (des1.rows === 0 || des2.rows === 0)
      return Number.MAX_VALUE

    const matches = new cv.DMatchVector()

    try {
      bf?.match(des1, des2, matches)

      let totalDistance = 0
      const matchCount = matches.size()

      for (let i = 0; i < matchCount; i++) {
        totalDistance += matches.get(i).distance
      }

      return matchCount > 0 ? totalDistance / matchCount : Number.MAX_VALUE
    } finally {
      matches.delete()
    }
  }

  function InvertImage(mat: Mat): Mat {
    const inverted = new cv.Mat()
    cv.bitwise_not(mat, inverted)
    return inverted
  }

  function SetContext(context: CanvasRenderingContext2D | null) {
    BaseContext.value = context
  }

  async function ScanCharacter(): Promise<BaseCharacter | undefined> {
    if (BaseContext.value === null) {
      return undefined
    }

    return GetCharacterAsync()
  }

  async function GetCharacterAsync(): Promise<BaseCharacter | undefined> {
    const characterNames = await GetCharacterNamesAsync()

    const characterScores = await Promise.all(Characters.value.map(async (character) => {
      const name = CharacterNamesCache.get(character)!
      const bestDistance = Math.min(...characterNames.map((scannedName) => {
        const cleanName = scannedName.startsWith('the')
          ? scannedName.replace('the', '').trim()
          : scannedName

        return LevenshteinDistance(name, cleanName)
      }))

      return { character, score: bestDistance }
    }))

    const bestCharacter = characterScores
      .filter(result => result.score <= 2)
      .sort((a, b) => a.score - b.score)[0]
      ?.character

    if (bestCharacter && bestCharacter.Icon.startsWith('Rover_')) {
      return await DetectRoverType()
    }

    return bestCharacter
  }

  async function DetectRoverType(): Promise<BaseCharacter | undefined> {
    const region = GetRegion(CHARACTER_TYPE_ICON_REGION)
    const srcMat = ConvertToGrayScale(region)

    return await FindElementType(srcMat)
  }

  async function FindElementType(srcMat: Mat): Promise<BaseCharacter | undefined> {
    const kp1 = new cv.KeyPointVector()
    const des1 = new cv.Mat()

    try {
      srcMat = UpscaleIfNeeded(srcMat)
      orb?.detectAndCompute(srcMat, new cv.Mat(), kp1, des1)

      const matchPromises = Array.from(ElementTypeDescriptorsCache.entries()).map(async ([elementType, cached]) => {
        if (!cached) {
          return { elementType, score: Number.MAX_VALUE }
        }

        const { descriptors: des2 } = cached
        let distance = ComputeDistance(des1, des2)

        if (elementType === CharacterType.SPECTRO || elementType === CharacterType.AERO) {
          const invertedSrcMat = InvertImage(srcMat)
          const kpInverted = new cv.KeyPointVector()
          const desInverted = new cv.Mat()

          try {
            orb?.detectAndCompute(invertedSrcMat, new cv.Mat(), kpInverted, desInverted)
            const invertedDistance = ComputeDistance(desInverted, des2)

            distance = Math.min(distance, invertedDistance)
          } finally {
            kpInverted.delete()
            desInverted.delete()
            invertedSrcMat.delete()
          }
        }

        return { elementType, score: distance }
      })

      const results = await Promise.all(matchPromises)
      const bestMatch = results.sort((a, b) => a.score - b.score)[0]

      if (bestMatch?.score === Number.MAX_VALUE) {
        return undefined
      }

      const roverType = bestMatch?.elementType
      if (roverType) {
        return Characters.value.find(char =>
          char.Icon.startsWith('Rover_') && char.Type === roverType
        )
      }

      return undefined
    } finally {
      kp1.delete()
      des1.delete()
    }
  }

  async function GetCharacterNamesAsync(): Promise<string[]> {
    const name = await GetText(GetRegion(CHARACTER_NAME_REGION))
    return GetFilteredText(name, /[a-z ]+/i).toLowerCase().split(' ')
  }

  function GetRegion(rect: { X: number, Y: number, Width: number, Height: number }) {
    const temp = document.createElement('canvas')

    temp.width = rect.Width
    temp.height = rect.Height

    const ctx = temp.getContext('2d', { willReadFrequently: true })!
    ctx.putImageData(BaseContext.value!.getImageData(rect.X, rect.Y, rect.Width, rect.Height), 0, 0)

    return temp
  }

  async function GetText(canvas: HTMLCanvasElement) {
    if (NameWorker === undefined) {
      return ''
    }

    const { data } = await NameWorker.recognize(canvas)
    return data.text.trim()
  }

  function GetFilteredText(text: string, filter: RegExp) {
    const matches = text.match(filter)
    return matches ? matches.join(' ') : text
  }

  function Cleanup() {
    if (NameWorker) {
      NameWorker.terminate()
      NameWorker = undefined
    }

    for (const [_, mat] of ElementTypeIconsCache) {
      mat.delete()
    }
    ElementTypeIconsCache.clear()

    for (const [_, { keypoints, descriptors }] of ElementTypeDescriptorsCache) {
      keypoints.delete()
      descriptors.delete()
    }
    ElementTypeDescriptorsCache.clear()

    if (orb) {
      orb.delete()
      orb = null
    }
    if (bf) {
      bf.delete()
      bf = null
    }
  }

  return {
    LoadAsync,
    SetContext,
    ScanCharacter,
    Cleanup,
  }
}
