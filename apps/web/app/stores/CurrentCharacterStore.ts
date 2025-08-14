import type Build from '~/Core/Interfaces/Build'
import type Character from '~/Core/Interfaces/Character'
import type Echo from '~/Core/Interfaces/Echo'
import type Statistic from '~/Core/Interfaces/Statistic'
import type Weapon from '~/Core/Interfaces/Weapon'
import { defineStore } from 'pinia'
import { useScoreCalculator } from '~/composables/calculators/UseScoreCalculator'
import { useStatsCalculator } from '~/composables/calculators/UseStatsCalculator'
import { ScoreGrade } from '~/Core/Enums/ScoreGrade'
import { useBuildsStore } from './BuildsStore'
import { useCharactersStore } from './CharactersStore'
import { useWeaponsStore } from './WeaponsStore'

export const useCurrentCharacterStore = defineStore('CurrentCharacterStore', () => {
  const CharacterId = ref<number | undefined>(undefined)
  const CurrentCharacter = ref<Character | undefined>(undefined)
  const CurrentBuild = ref<Build | undefined>(undefined)
  const CurrentWeapon = ref<Weapon | undefined>(undefined)
  const CurrentEchoes = ref<(Echo | undefined)[]>([])
  const CurrentStats = ref<Statistic[]>([])
  const Score = ref<number>(0)
  const Note = ref<ScoreGrade>(ScoreGrade.F)

  const BuildsStore = useBuildsStore()
  const CharactersStore = useCharactersStore()
  const WeaponsStore = useWeaponsStore()
  const StatsCalculator = useStatsCalculator()
  const ScoreCalculator = useScoreCalculator()

  const HasCharacter = computed(() => CurrentCharacter.value !== undefined)
  const HasBuild = computed(() => CurrentBuild.value !== undefined)
  const HasWeapon = computed(() => CurrentWeapon.value !== undefined)

  function GetAsync(characterId: number): Character | undefined {
    Reset()
    CharacterId.value = characterId

    LoadCharacter()
    return CurrentCharacter.value
  }

  function LoadCharacter() {
    if (!CharacterId.value)
      return

    try {
      const defaultBuild = BuildsStore.GetDefaultBuild(CharacterId.value)

      const character = CharactersStore.GetById(CharacterId.value)
      const weapon = WeaponsStore.GetById(defaultBuild?.WeaponId ?? '')

      CurrentCharacter.value = character
      CurrentBuild.value = defaultBuild || undefined
      CurrentWeapon.value = weapon || undefined
      CurrentEchoes.value = Array.from({ length: 5 }, (_, index) =>
        defaultBuild?.Echoes[index] || undefined)

      UpdateStatsAndScore()
    }
    catch (error) {
      console.error(error)
    }
  }

  function UpdateStatsAndScore() {
    if (!CurrentCharacter.value) {
      return
    }

    if (!CurrentBuild.value) {
      CurrentStats.value = CurrentCharacter.value.BaseStats
      return
    }

    CurrentStats.value = StatsCalculator.CalculateTotalStats(CurrentCharacter.value, CurrentWeapon.value, CurrentBuild.value)

    const scoreResult = ScoreCalculator.GetBuildScore(CurrentCharacter.value, CurrentWeapon.value, CurrentBuild.value)
    if (scoreResult) {
      Score.value = scoreResult.Score
      Note.value = scoreResult.Note
    }

    CurrentEchoes.value.forEach((echo, index) => {
      if (echo) {
        echo.Score = scoreResult.EchoesScores[index]?.Score ?? 0
        echo.Note = scoreResult.EchoesScores[index]?.Grade ?? ScoreGrade.F
      }
    })
  }

  async function UpdateEcho(slot: number, echoData: Partial<Echo>) {
    if (!CurrentBuild.value || slot < 0 || slot >= 5)
      return

    const updatedEchoes = CurrentBuild.value.Echoes.map((echo, index) =>
      index === slot ? { ...echo, ...echoData } : echo,
    )

    BuildsStore.UpdateBuild(CurrentBuild.value.Id, { Echoes: updatedEchoes })

    CurrentBuild.value.Echoes = updatedEchoes
    CurrentEchoes.value = Array.from({ length: 5 }, (_, index) => updatedEchoes[index] || undefined)

    UpdateStatsAndScore()
  }

  async function ReorderEchoes(newOrder: Echo[]) {
    if (!CurrentBuild.value)
      return

    const filteredOrder = newOrder.filter(echo => echo !== undefined)

    BuildsStore.UpdateBuild(CurrentBuild.value.Id, { Echoes: filteredOrder })

    CurrentBuild.value.Echoes = filteredOrder
    CurrentEchoes.value = Array.from({ length: 5 }, (_, index) =>
      filteredOrder[index] || undefined)

    UpdateStatsAndScore()
  }

  async function LoadBuild(buildId: string) {
    if (!CharacterId.value)
      return

    const build = await BuildsStore.GetBuildWithDependencies(buildId)
    if (!build || build.CharacterId !== CharacterId.value)
      return

    BuildsStore.SetDefaultBuild(buildId)

    CurrentBuild.value = build
    CurrentWeapon.value = build.Weapon || undefined
    CurrentEchoes.value = Array.from({ length: 5 }, (_, index) => build.Echoes[index] || undefined)

    UpdateStatsAndScore()
  }

  async function UpdateWeapon(weaponId: string, weaponData: Partial<Weapon>) {
    if (!CurrentWeapon.value || CurrentWeapon.value.Id !== weaponId) {
      return
    }

    CurrentWeapon.value = { ...CurrentWeapon.value, ...weaponData }

    if (CurrentBuild.value && CurrentBuild.value.WeaponId === weaponId) {
      UpdateStatsAndScore()
    }
  }

  async function SetWeapon(weapon: Weapon) {
    if (!CurrentBuild.value) {
      return
    }

    BuildsStore.UpdateBuild(CurrentBuild.value.Id, { WeaponId: weapon.Id })

    CurrentWeapon.value = weapon

    UpdateStatsAndScore()
  }

  function CanUnlockSequence(sequenceIndex: number): boolean {
    if (!CurrentCharacter.value)
      return false

    const sequence = CurrentCharacter.value.Sequences[sequenceIndex]
    if (!sequence)
      return false

    if (sequence.Unlocked)
      return true

    if (sequenceIndex === 0)
      return true

    const previousSequence = CurrentCharacter.value.Sequences[sequenceIndex - 1]
    return previousSequence?.Unlocked === true
  }

  function ToggleSequence(sequenceIndex: number) {
    if (!CurrentCharacter.value) {
      return
    }

    const sequence = CurrentCharacter.value.Sequences[sequenceIndex]
    if (!sequence) {
      return
    }

    if (CanUnlockSequence(sequenceIndex)) {
      sequence.Unlocked = !sequence.Unlocked

      if (!sequence.Unlocked) {
        for (let i = sequenceIndex + 1; i < CurrentCharacter.value.Sequences.length; i++) {
          const nextSequence = CurrentCharacter.value.Sequences[i]
          if (nextSequence) {
            nextSequence.Unlocked = false
          }
        }
      }

      CurrentCharacter.value = { ...CurrentCharacter.value }
    }
  }

  function Reset() {
    CharacterId.value = undefined
    CurrentCharacter.value = undefined
    CurrentBuild.value = undefined
    CurrentWeapon.value = undefined
    CurrentEchoes.value = []
    CurrentStats.value = []
    Score.value = 0
    Note.value = ScoreGrade.F
  }

  return {
    CharacterId,
    CurrentCharacter,
    CurrentBuild,
    CurrentWeapon,
    CurrentEchoes,
    CurrentStats,
    Score,
    Note,

    HasCharacter,
    HasBuild,
    HasWeapon,

    GetAsync,
    LoadCharacter,
    UpdateEcho,
    ReorderEchoes,
    LoadBuild,
    Reset,
    CanUnlockSequence,
    ToggleSequence,
    UpdateWeapon,
    SetWeapon,
  }
})
