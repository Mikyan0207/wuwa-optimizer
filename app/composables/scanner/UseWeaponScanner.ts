import type { BaseWeapon } from '~/Core/Interfaces/Weapon'
import Tesseract from 'tesseract.js'
import { WEAPON_LEVEL_REGION, WEAPON_NAME_REGION } from '~/Core/Scanner/Regions'
import { LevenshteinDistance } from '~/Core/Utils/StringUtils'

export function useWeaponScanner() {
  let NameWorker: Tesseract.Worker | undefined
  let LevelWorker: Tesseract.Worker | undefined

  const BaseContext = ref<CanvasRenderingContext2D | null>(null)
  const WeaponsStore = useWeaponsStore()

  const weaponNamesCache = new Map<BaseWeapon, string>()

  async function LoadAsync() {
    NameWorker = await Tesseract.createWorker('eng', 1)

    LevelWorker = await Tesseract.createWorker('eng', 1)
    await LevelWorker.setParameters({
      tessedit_char_whitelist: '0123456789',
    })

    const weapons = await WeaponsStore.GetAll()

    for (const weapon of weapons) {
      const name = weapon.Name
      weaponNamesCache.set(weapon, name)
    }
  }

  function SetContext(context: CanvasRenderingContext2D | null) {
    BaseContext.value = context
  }

  async function ScanWeapon(): Promise<BaseWeapon | undefined> {
    if (BaseContext.value === null) {
      return undefined
    }

    return await GetWeaponAsync()
  }

  async function GetWeaponAsync(): Promise<BaseWeapon | undefined> {
    const weaponName = await GetWeaponNameAsync()

    const results = await Promise.all(weaponNamesCache.entries().map(async ([weapon, name]) => {
      if (name === undefined) {
        return { weapon, score: 1000 }
      }

      const bestDistance = LevenshteinDistance(name, GetFilteredText(weaponName, /[a-z' ]+/i).toLowerCase())

      return { weapon, score: bestDistance }
    }))

    const perfectMatch = results.find(result => result.score === 0)
    if (perfectMatch) {
      perfectMatch.weapon.Level = await GetWeaponLevelAsync()
      return perfectMatch.weapon
    }

    const bestWeapon = results
      .filter(result => result.score <= 2)
      .sort((a, b) => a.score - b.score)[0]
      ?.weapon

    if (bestWeapon === undefined) {
      return undefined
    }

    bestWeapon.Level = await GetWeaponLevelAsync()
    return bestWeapon
  }

  async function GetWeaponNameAsync(): Promise<string> {
    const name = await GetText(GetRegion(WEAPON_NAME_REGION))
    return GetFilteredText(name, /[a-z' ]+/i).toLowerCase()
  }

  async function GetWeaponLevelAsync(): Promise<number> {
    const levelText = await GetLevelText(GetRegion(WEAPON_LEVEL_REGION))
    const match = levelText.match(/\d+/)
    return Math.min(match ? Number.parseInt(match[0]) : 1, 90)
  }

  async function GetLevelText(canvas: HTMLCanvasElement) {
    if (LevelWorker === undefined) {
      return ''
    }

    const { data } = await LevelWorker.recognize(canvas)
    return data.text.trim()
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

    if (LevelWorker) {
      LevelWorker.terminate()
      LevelWorker = undefined
    }
  }

  return {
    LoadAsync,
    SetContext,
    ScanWeapon,
    Cleanup,
  }
}
