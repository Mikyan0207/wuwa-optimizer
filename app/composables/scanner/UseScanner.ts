import type { BaseCharacter } from '~/Core/Interfaces/Character'
import type Echo from '~/Core/Interfaces/Echo'
import type Statistic from '~/Core/Interfaces/Statistic'
import type { BaseWeapon } from '~/Core/Interfaces/Weapon'
import type { ScanResult } from '~/Core/Scanner/ScannerTypes'
import { useCharacterScanner } from '~/composables/scanner/UseCharacterScanner'
import { useEchoesScanner } from '~/composables/scanner/UseEchoesScanner'
import { useEchoesStatsScanner } from '~/composables/scanner/UseEchoesStatsScanner'
import { useScannerState } from '~/composables/scanner/UseScannerState'
import { useWeaponScanner } from '~/composables/scanner/UseWeaponScanner'
import { ScannerResultStatus } from '~/Core/Scanner/ScannerTypes'

export async function useScanner() {
  const BaseCanvas = ref<HTMLCanvasElement | null>(null)
  const BaseContext = ref<CanvasRenderingContext2D | null>(null)
  const ScannerState = useScannerState()

  const CharacterScanner = useCharacterScanner()
  const EchoesScanner = await useEchoesScanner()
  const EchoesStatsScanner = await useEchoesStatsScanner()
  const WeaponScanner = useWeaponScanner()

  function CreateCanvas(width: number, height: number): { canvas: HTMLCanvasElement, context: CanvasRenderingContext2D } {
    const canvas = document.createElement('canvas')

    canvas.width = width
    canvas.height = height

    const context = canvas.getContext('2d', { willReadFrequently: true })

    if (!context) {
      throw new Error('Failed to get canvas context')
    }

    return { canvas, context }
  }

  async function Initialize() {
    const { canvas, context } = CreateCanvas(1920, 1080)

    BaseCanvas.value = canvas
    BaseContext.value = context

    CharacterScanner.SetContext(BaseContext.value)
    EchoesScanner.SetContext(BaseContext.value)
    EchoesStatsScanner.SetContext(BaseContext.value)
    WeaponScanner.SetContext(BaseContext.value)

    return await Promise.all([
      CharacterScanner.LoadAsync(),
      EchoesScanner.LoadAsync(),
      EchoesStatsScanner.LoadAsync(),
      WeaponScanner.LoadAsync(),
    ])
  }

  async function LoadAsync(file: File) {
    try {
      ScannerState.StartLoading()
      ScannerState.SetProgress(10)

      const image = await createImageBitmap(file)

      BaseContext.value!.clearRect(0, 0, image.width, image.height)
      BaseContext.value!.drawImage(image, 0, 0)

      ScannerState.SetProgress(20)

      await Promise.all([
        CharacterScanner.LoadAsync(),
        EchoesScanner.LoadAsync(),
        EchoesStatsScanner.LoadAsync(),
        WeaponScanner.LoadAsync(),
      ])

      ScannerState.SetReady()
    }
    catch (error) {
      // eslint-disable-next-line unicorn/throw-new-error
      ScannerState.SetError({
        type: ScannerResultStatus.ERROR,
        message: 'Failed to load image',
        details: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date(),
      })
    }
  }

  async function ScanAll(): Promise<ScanResult> {
    try {
      ScannerState.SetProgress(50)

      const [character, echoes, echoesStats, weapon] = await Promise.all([
        ScanCharacter(),
        ScanEchoes(),
        ScanEchoesStats(),
        ScanWeapon(),
      ])

      ScannerState.SetProgress(70)

      for (let i = 0; i < echoes.length; i++) {
        const echo = echoes[i]
        const stats = echoesStats.get(i)

        if (echo && stats) {
          echo.MainStatistic = stats[0]
          echo.SecondaryStatistic = stats[1]
          echo.Statistics = stats.slice(2)
        }
      }

      ScannerState.SetProgress(100)

      const result: ScanResult = {
        status: ScannerResultStatus.SUCCESS,
        character,
        weapon,
        echoes,
      }

      ScannerState.CompleteScan(result)
      return result
    }
    catch (error) {
      console.error('Scan failed', error)

      const scanError: ScanResult = {
        status: ScannerResultStatus.ERROR,
        error: {
          type: ScannerResultStatus.ERROR,
          message: 'Scan failed',
          details: error instanceof Error ? error.message : 'Unknown error',
          timestamp: new Date(),
          raw: error,
        },
      }

      ScannerState.CompleteScan(scanError)
      return scanError
    }
  }

  async function ScanCharacter(): Promise<BaseCharacter | undefined> {
    if (!CharacterScanner) {
      throw new Error('Character scanner not loaded')
    }

    return CharacterScanner.ScanCharacter()
  }

  async function ScanEchoes(): Promise<Echo[]> {
    if (!EchoesScanner) {
      throw new Error('Echoes scanner not loaded')
    }

    return EchoesScanner.ScanEchoes()
  }

  async function ScanEchoesStats(): Promise<Map<number, Statistic[]>> {
    if (!EchoesStatsScanner) {
      throw new Error('Echoes stats scanner not loaded')
    }

    return EchoesStatsScanner.ScanEchoesStats()
  }

  async function ScanWeapon(): Promise<BaseWeapon | undefined> {
    if (!WeaponScanner) {
      throw new Error('Weapon scanner not loaded')
    }

    return WeaponScanner.ScanWeapon()
  }

  function Cleanup() {
    BaseCanvas.value = null
    BaseContext.value = null

    CharacterScanner?.Cleanup()
    EchoesScanner?.Cleanup()
    EchoesStatsScanner?.Cleanup()
    WeaponScanner?.Cleanup()

    ScannerState.Reset()
  }

  return {
    Initialize,
    LoadAsync,
    ScanAll,
    ScanCharacter,
    ScanEchoes,
    Cleanup,
    State: ScannerState,
  }
}
