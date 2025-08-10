import type Character from '~/Core/Interfaces/Character'
import Tesseract from 'tesseract.js'
import { TemplateCharacters } from '~/Core/Characters'
import { CHARACTER_NAME_REGION } from '~/Core/Scanner/Regions'
import { LevenshteinDistance } from '~/Core/Utils/StringUtils'

export function useCharacterScanner() {
  let NameWorker: Tesseract.Worker | undefined

  const BaseContext = ref<CanvasRenderingContext2D | null>(null)
  const CharacterNamesCache = new Map<Character, string>()

  async function LoadAsync() {
    NameWorker = await Tesseract.createWorker('eng', 1)

    for (const character of TemplateCharacters) {
      const name = character.Icon.split('_')[0]?.toLowerCase() || ''
      CharacterNamesCache.set(character, name)
    }
  }

  function SetContext(context: CanvasRenderingContext2D | null) {
    BaseContext.value = context
  }

  async function ScanCharacter(): Promise<Character | undefined> {
    if (BaseContext.value === null) {
      return undefined
    }

    return GetCharacterAsync()
  }

  async function GetCharacterAsync(): Promise<Character | undefined> {
    const characterNames = await GetCharacterNamesAsync()

    return Promise.all(TemplateCharacters.map(async (character) => {
      const name = CharacterNamesCache.get(character)!
      const bestDistance = Math.min(...characterNames.map((scannedName) => {
        const cleanName = scannedName.startsWith('the')
          ? scannedName.replace('the', '').trim()
          : scannedName

        return LevenshteinDistance(name, cleanName)
      }))

      return { character, score: bestDistance }
    })).then(async (results) => {
      const bestCharacter = results
        .filter(result => result.score <= 2)
        .sort((a, b) => a.score - b.score)[0]
        ?.character

      return bestCharacter
    })
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
  }

  return {
    LoadAsync,
    SetContext,
    ScanCharacter,
    Cleanup,
  }
}
