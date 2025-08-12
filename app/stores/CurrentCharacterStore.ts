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
  const Note = ref<string>(ScoreGrade.F)

  const BuildsStore = useBuildsStore()
  const CharactersStore = useCharactersStore()
  const WeaponsStore = useWeaponsStore()
  const StatsCalculator = useStatsCalculator()
  const ScoreCalculator = useScoreCalculator()

  const HasCharacter = computed(() => CurrentCharacter.value !== undefined)
  const HasBuild = computed(() => CurrentBuild.value !== undefined)
  const HasWeapon = computed(() => CurrentWeapon.value !== undefined)

  async function SetCharacter(characterId: number) {
    if (CharacterId.value === characterId)
      return

    CharacterId.value = characterId
    await LoadCharacter()
  }

  async function LoadCharacter() {
    if (!CharacterId.value)
      return

    try {
      const defaultBuild = BuildsStore.GetDefaultBuild(CharacterId.value)

      const [character, weapon] = await Promise.all([
        CharactersStore.GetById(CharacterId.value),
        WeaponsStore.GetById(defaultBuild?.WeaponId ?? ''),
      ])

      CurrentCharacter.value = character
      CurrentBuild.value = defaultBuild || undefined
      CurrentWeapon.value = weapon || undefined
      CurrentEchoes.value = Array.from({ length: 5 }, (_, index) =>
        defaultBuild?.Echoes[index] || undefined)

      await UpdateStatsAndScore()
    }
    catch (error) {
    }
  }

  async function UpdateStatsAndScore() {
    if (!CurrentCharacter.value) {
      return
    }

    if (!CurrentBuild.value) {
      CurrentStats.value = CurrentCharacter.value.BaseStats
      return
    }

    CurrentStats.value = StatsCalculator.CalculateTotalStats(CurrentCharacter.value, CurrentWeapon.value, CurrentBuild.value)

    const scoreResult = ScoreCalculator.GetBuildScore(CurrentBuild.value)
    if (scoreResult) {
      Score.value = scoreResult.Score
      Note.value = scoreResult.Note
    }
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

    await UpdateStatsAndScore()
  }

  async function ReorderEchoes(newOrder: Echo[]) {
    if (!CurrentBuild.value)
      return

    const filteredOrder = newOrder.filter(echo => echo !== undefined)

    BuildsStore.UpdateBuild(CurrentBuild.value.Id, { Echoes: filteredOrder })

    CurrentBuild.value.Echoes = filteredOrder
    CurrentEchoes.value = Array.from({ length: 5 }, (_, index) =>
      filteredOrder[index] || undefined)

    await UpdateStatsAndScore()
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

    await UpdateStatsAndScore()
  }

  function Reset() {
    CharacterId.value = undefined
    CurrentCharacter.value = undefined
    CurrentBuild.value = undefined
    CurrentWeapon.value = undefined
    CurrentEchoes.value = []
    CurrentStats.value = []
    Score.value = 0
    Note.value = 'F'
  }

  return {
    CharacterId: readonly(CharacterId),
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

    SetCharacter,
    LoadCharacter,
    UpdateEcho,
    ReorderEchoes,
    LoadBuild,
    Reset,
  }
})
