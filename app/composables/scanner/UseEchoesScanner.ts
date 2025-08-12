import type { BFMatcher, KeyPointVector, Mat, ORB } from '@techstark/opencv-js'
import type Echo from '~/Core/Interfaces/Echo'
import type Sonata from '~/Core/Interfaces/Sonata'
import type { Rectangle } from '~/Core/Scanner/Rectangle'
import cvReadyPromise from '@techstark/opencv-js'
import Tesseract from 'tesseract.js'
import { TemplateEchoes } from '~/Core/Echoes'
import { EchoCost } from '~/Core/Enums/EchoCost'
import { ECHO_REGIONS } from '~/Core/Scanner/Regions'
import { Sonatas } from '~/Core/Sonatas'
import { GetEchoIcon, GetSonataIcon } from '~/Core/Utils/EchoUtils'

export async function getOpenCv() {
  return await cvReadyPromise
}

export async function useEchoesScanner() {
  const BaseContext = ref<CanvasRenderingContext2D | null>(null)
  let TesseractWorker: Tesseract.Worker | undefined
  let cv: typeof cvReadyPromise

  const EchoIconsCache = new Map<Echo, Mat>()
  const SonataIconsCache = new Map<Sonata, Mat>()
  const TemplatesByCostCache = new Map<EchoCost, Echo[]>()
  const OrbDescriptorsCache = new Map<Echo, { keypoints: KeyPointVector, descriptors: Mat }>()
  const SonataDescriptorsCache = new Map<Sonata, { keypoints: KeyPointVector, descriptors: Mat }>()

  let orb: ORB | null = null
  let bf: BFMatcher | null = null

  async function LoadAsync() {
    TesseractWorker = await Tesseract.createWorker('eng', 1)

    cv = await getOpenCv()

    orb = new cv.ORB(500)
    bf = new cv.BFMatcher()

    const echoIconPromises = TemplateEchoes.map(echo => LoadEchoIcon(echo, 186, 186))
    const sonataIconPromises = Sonatas.map(sonata => LoadSonataIcon(sonata, 186, 186))

    const [echoIcons, sonataIcons] = await Promise.all([
      Promise.all(echoIconPromises),
      Promise.all(sonataIconPromises),
    ])

    TemplateEchoes.forEach((echo, index) => {
      const icon = echoIcons[index]
      if (icon)
        EchoIconsCache.set(echo, icon)
    })

    Sonatas.forEach((sonata, index) => {
      const icon = sonataIcons[index]
      if (icon)
        SonataIconsCache.set(sonata, icon)
    })

    for (const cost of [EchoCost.ONE_COST, EchoCost.THREE_COST, EchoCost.FOUR_COST]) {
      const templates = TemplateEchoes.filter(x => x.Cost === cost)
      TemplatesByCostCache.set(cost, templates)
    }

    const echoDescriptorPromises = TemplateEchoes.map((echo) => {
      const icon = EchoIconsCache.get(echo)
      if (!icon)
        throw new Error(`Icon not found for echo: ${echo.GameId}`)

      const keypoints = new cv.KeyPointVector()
      const descriptors = new cv.Mat()
      orb!.detectAndCompute(icon, new cv.Mat(), keypoints, descriptors)
      return { echo, keypoints, descriptors }
    })

    const sonataDescriptorPromises = Sonatas.map((sonata) => {
      const icon = SonataIconsCache.get(sonata)
      if (!icon)
        throw new Error(`Icon not found for sonata: ${sonata.Name}`)

      const keypoints = new cv.KeyPointVector()
      const descriptors = new cv.Mat()
      orb!.detectAndCompute(icon, new cv.Mat(), keypoints, descriptors)
      return { sonata, keypoints, descriptors }
    })

    const [echoDescriptors, sonataDescriptors] = await Promise.all([
      Promise.all(echoDescriptorPromises),
      Promise.all(sonataDescriptorPromises),
    ])

    echoDescriptors.forEach(({ echo, keypoints, descriptors }) => {
      OrbDescriptorsCache.set(echo, { keypoints, descriptors })
    })

    sonataDescriptors.forEach(({ sonata, keypoints, descriptors }) => {
      SonataDescriptorsCache.set(sonata, { keypoints, descriptors })
    })
  }

  function SetContext(context: CanvasRenderingContext2D | null) {
    BaseContext.value = context
  }

  async function ScanEchoes(): Promise<Echo[]> {
    return await GetEchoesAsync()
  }

  async function GetEchoesAsync() {
    const echoSlots = [
      ECHO_REGIONS.ECHO_1,
      ECHO_REGIONS.ECHO_2,
      ECHO_REGIONS.ECHO_3,
      ECHO_REGIONS.ECHO_4,
      ECHO_REGIONS.ECHO_5,
    ]

    const echoPromises = echoSlots.map(async (echoRegions, slotIndex) => {
      try {
        const costText = await GetText(GetRegion(echoRegions.COST))
        const cost = GetCostFromText(costText)

        const echo = await GetEcho(echoRegions.ICON, cost)

        if (echo === undefined) {
          return null
        }

        const sonata = await GetSonata(echoRegions.SONATA)

        if (sonata !== undefined) {
          const sonataIndex = echo.Sonata.findIndex(x => x.Name === sonata.Name)
          if (sonataIndex !== -1) {
            echo.Sonata[sonataIndex]!.IsSelected = true
          }
        }

        return echo
      }
      catch (error) {
        console.error(`Error processing echo slot ${slotIndex + 1}:`, error)
        return null
      }
    })

    const results = await Promise.all(echoPromises)
    return results.filter((echo): echo is Echo => echo !== null)
  }

  async function GetEcho(iconRegion: Rectangle, cost: EchoCost) {
    const region = GetRegion(iconRegion)
    const srcMat = ConvertToGrayScale(region)

    const templates = TemplatesByCostCache.get(cost) || []

    return await FindEcho(srcMat, templates)
  }

  async function GetSonata(iconRegion: Rectangle) {
    const region = GetRegion(iconRegion)
    const srcMat = ConvertToGrayScale(region)

    return await FindSonata(srcMat)
  }

  async function FindEcho(srcMat: Mat, echoes: Echo[]) {
    const kp1 = new cv.KeyPointVector()
    const des1 = new cv.Mat()

    try {
      orb?.detectAndCompute(srcMat, new cv.Mat(), kp1, des1)

      const matchPromises = echoes.map(async (template) => {
        const cached = OrbDescriptorsCache.get(template)
        if (!cached) {
          console.warn(`⚠️ ORB descriptors not found for: ${template.GameId}`)
          return { echo: template, score: 0 }
        }

        const { keypoints: kp2, descriptors: des2 } = cached

        const knnMatches = new cv.DMatchVectorVector()
        bf?.knnMatch(des1, des2, knnMatches, 2)

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

        knnMatches.delete()

        return { echo: template, score: ratio }
      })

      const results = await Promise.all(matchPromises)
      const bestMatch = results.sort((a, b) => b.score - a.score)[0]

      return bestMatch?.echo
    }
    finally {
      kp1.delete()
      des1.delete()
    }
  }

  async function FindSonata(srcMat: Mat) {
    const kp1 = new cv.KeyPointVector()
    const des1 = new cv.Mat()

    try {
      srcMat = UpscaleIfNeeded(srcMat)
      orb?.detectAndCompute(srcMat, new cv.Mat(), kp1, des1)

      const matchPromises = Sonatas.map(async (template) => {
        const cached = SonataDescriptorsCache.get(template)
        if (!cached) {
          console.warn(`⚠️ ORB descriptors not found for: ${template.Name}`)
          return { sonata: template, score: 0 }
        }

        const { descriptors: des2 } = cached
        const distance = ComputeDistance(des1, des2)

        return { sonata: template, score: distance }
      })

      const results = await Promise.all(matchPromises)
      const bestMatch = results.sort((a, b) => a.score - b.score)[0]

      return bestMatch?.sonata
    }
    finally {
      kp1.delete()
      des1.delete()
    }
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
    }
    finally {
      matches.delete()
    }
  }

  function GetCostFromText(text: string | undefined) {
    if (!text)
      return EchoCost.ONE_COST

    const match = text.trim().match(/\d+/)
    if (!match)
      return EchoCost.ONE_COST

    const cost = match[0]
    if (cost === '4')
      return EchoCost.FOUR_COST
    if (cost === '3')
      return EchoCost.THREE_COST

    return EchoCost.ONE_COST
  }

  async function LoadEchoIcon(echo: Echo, width: number, height: number): Promise<Mat> {
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

  async function LoadSonataIcon(sonata: Sonata, width: number, height: number): Promise<Mat> {
    const iconPath = GetSonataIcon(sonata)

    const refImage = await new Promise<HTMLImageElement>((resolve, reject) => {
      const img = new Image()
      img.onload = () => {
        resolve(img)
      }
      img.onerror = (error) => {
        console.error(`Failed to load sonata icon: ${iconPath}`, error)
        reject(new Error(`Failed to load sonata icon: ${sonata.Name} (${iconPath})`))
      }
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

  function GetRegion(rect: Rectangle) {
    const temp = document.createElement('canvas')

    temp.width = rect.Width
    temp.height = rect.Height

    DrawOnCanvasFromRegion(temp, BaseContext.value!.getImageData(rect.X, rect.Y, rect.Width, rect.Height))

    return temp
  }

  async function GetText(canvas: HTMLCanvasElement) {
    if (TesseractWorker === undefined) {
      return ''
    }

    const { data } = await TesseractWorker.recognize(canvas)
    return data.text.trim()
  }

  function ConvertToGrayScale(region: HTMLCanvasElement): Mat {
    const srcMat = cv.imread(region)
    cv.cvtColor(srcMat, srcMat, cv.COLOR_RGBA2GRAY)
    return srcMat
  }

  function Cleanup() {
    for (const [_, mat] of EchoIconsCache) {
      mat.delete()
    }
    EchoIconsCache.clear()

    for (const [_, { keypoints, descriptors }] of OrbDescriptorsCache) {
      keypoints.delete()
      descriptors.delete()
    }
    OrbDescriptorsCache.clear()

    if (orb) {
      orb.delete()
      orb = null
    }
    if (bf) {
      bf.delete()
      bf = null
    }

    if (TesseractWorker) {
      TesseractWorker.terminate()
      TesseractWorker = undefined
    }
  }

  return {
    LoadAsync,
    SetContext,
    ScanEchoes,
    Cleanup,
  }
}
