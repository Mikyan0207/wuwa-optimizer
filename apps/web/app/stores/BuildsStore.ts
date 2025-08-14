import type Build from '~/Core/Interfaces/Build'
import type { BuildWithDependencies } from '~/Core/Interfaces/Build'
import type { BaseCharacter, PartialCharacter } from '~/Core/Interfaces/Character'
import type Echo from '~/Core/Interfaces/Echo'
import type { PartialWeapon } from '~/Core/Interfaces/Weapon'
import { useLocalStorage } from '@vueuse/core'
import { defineStore, skipHydrate } from 'pinia'
import { v4 as uuidv4 } from 'uuid'
import { useScoreCalculator } from '~/composables/calculators/UseScoreCalculator'
import { ScoreGrade } from '~/Core/Enums/ScoreGrade'

export const useBuildsStore = defineStore('BuildsStore', () => {
  const Builds = useLocalStorage<Build[]>('Builds', [])

  const CharactersStore = useCharactersStore()
  const WeaponsStore = useWeaponsStore()
  const ScoreCalculator = useScoreCalculator()

  function GetBuildsByCharacter(characterId: number): Build[] {
    return Builds.value
      .filter(build => build.CharacterId === characterId)
      .sort((a, b) => (a.Order || 0) - (b.Order || 0))
  }

  function GetBuild(buildId: string): Build | undefined {
    return Builds.value.find(build => build.Id === buildId)
  }

  function GetDefaultBuild(characterId: number): Build | undefined {
    return Builds.value.find(build =>
      build.CharacterId === characterId && build.IsDefault,
    )
  }

  async function GetBuildWithDependencies(buildId: string): Promise<BuildWithDependencies | undefined> {
    const build = GetBuild(buildId)
    if (!build)
      return undefined

    const [character, weapon] = await Promise.all([
      build.CharacterId ? CharactersStore.GetById(build.CharacterId) : undefined,
      build.WeaponId ? WeaponsStore.GetById(build.WeaponId) : undefined,
    ])

    const buildWithDependencies: BuildWithDependencies = {
      ...build,
      Character: character,
      Weapon: weapon,
    }

    return buildWithDependencies
  }

  async function GetDefaultBuildWithDependencies(characterId: number): Promise<BuildWithDependencies | undefined> {
    const build = GetDefaultBuild(characterId)
    if (!build)
      return undefined

    return GetBuildWithDependencies(build.Id)
  }

  async function GetBuildsByCharacterWithDependencies(characterId: number): Promise<BuildWithDependencies[]> {
    const builds = GetBuildsByCharacter(characterId)

    const buildsWithObjects = await Promise.all(
      builds.map(build => GetBuildWithDependencies(build.Id)),
    )

    return buildsWithObjects.filter(Boolean) as BuildWithDependencies[]
  }

  function CreateBuild(
    name: string,
    character?: BaseCharacter | PartialCharacter,
    weapon?: PartialWeapon,
    echoes?: Echo[],
    makeDefault: boolean = true,
  ): Build | undefined {
    if (!weapon || !character)
      return undefined

    const buildId = uuidv4()
    const order = GetOrder(character?.Id ?? -1)

    const build: Build = {
      Id: buildId,
      CharacterId: character.Id,
      Name: name,
      WeaponId: weapon.Id,
      Echoes: echoes?.map(echo => ({
        ...echo,
        Id: uuidv4(),
        BuildId: buildId,
      })) ?? [],
      CreatedAt: new Date(),
      UpdatedAt: new Date(),
      IsDefault: makeDefault,
      Order: order,
    }

    Builds.value.push(build)
    return build
  }

  function UpdateBuild(buildId: string, data: Partial<Build>) {
    const index = Builds.value.findIndex(build => build.Id === buildId)

    if (index === -1)
      return

    Builds.value[index] = {
      ...Builds.value[index],
      ...data,
      UpdatedAt: new Date(Date.now()),
    } as Build
  }

  function UpdateEcho(buildId: string, echoSlot: number, data: Partial<Echo>) {
    const index = Builds.value.findIndex(build => build.Id === buildId)
    if (index === -1)
      return

    UpdateBuild(buildId, {
      Echoes: Builds.value[index]!.Echoes.map((echo, idx) => idx === echoSlot ? { ...echo, ...data } : echo),
    })
  }

  function DeleteBuild(buildId: string) {
    Builds.value = Builds.value.filter(build => build.Id !== buildId)
  }

  function SetDefaultBuild(buildId: string) {
    const targetBuild = Builds.value.find(build => build.Id === buildId)
    if (!targetBuild)
      return

    Builds.value.forEach((build) => {
      if (build.CharacterId === targetBuild.CharacterId) {
        build.IsDefault = build.Id === buildId
      }
    })
  }

  function LoadBuild(buildId: string, makeDefault: boolean = true) {
    const build = GetBuild(buildId)

    if (!build)
      return

    if (makeDefault)
      SetDefaultBuild(build.Id)
  }

  function GetOrder(characterId: number): number {
    const builds = GetBuildsByCharacter(characterId)

    if (builds.length === 0)
      return 0

    return Math.max(...builds.map(b => b.Order || 0)) + 1
  }

  function GetScore(build: BuildWithDependencies) {
    const result = ScoreCalculator.GetBuildScore(build)
    if (!result)
      return undefined

    return result
  }

  function RecalculateScore(build: BuildWithDependencies) {
    const result = ScoreCalculator.GetBuildScore(build)
    if (!result)
      return

    UpdateBuild(build.Id, {
      Score: result.Score,
      Note: result.Note,
      Echoes: build.Echoes.map((echo, idx) => ({
        ...echo,
        Score: result.EchoesScores[idx]?.Score ?? 0,
        Note: result.EchoesScores[idx]?.Grade ?? ScoreGrade.F,
      })),
    })
  }

  return {
    Builds: skipHydrate(Builds),
    GetBuildsByCharacter,
    GetBuild,
    GetDefaultBuild,
    GetBuildWithDependencies,
    GetDefaultBuildWithDependencies,
    GetBuildsByCharacterWithDependencies,
    CreateBuild,
    UpdateBuild,
    UpdateEcho,
    DeleteBuild,
    SetDefaultBuild,
    LoadBuild,
    GetScore,
    RecalculateScore,
  }
})
