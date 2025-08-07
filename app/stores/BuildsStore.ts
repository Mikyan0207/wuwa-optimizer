import type Build from '~/Core/Interfaces/Build'
import type Echo from '~/Core/Interfaces/Echo'
import { useLocalStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'

export const useBuildsStore = defineStore('BuildsStore', () => {
  const Builds = useLocalStorage<Build[]>('Builds', [])
  const EchoesStore = useEchoesStore()
  const CharactersStore = useCharactersStore()
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

  function CreateBuild(name: string, characterId: number, weaponId?: number, echoes?: Echo[], description?: string): Build | undefined {
    if (BuildExists(characterId, name, weaponId, echoes))
      return Builds.value.find(build => build.CharacterId === characterId && build.Name === name)

    const buildId = uuidv4()
    const build: Build = {
      Id: buildId,
      CharacterId: characterId,
      Name: name,
      Description: description,
      WeaponId: weaponId,
      Echoes: echoes?.map(echo => ({
        ...echo,
        Id: uuidv4(),
        BuildId: buildId,
      })) ?? [],
      CreatedAt: new Date(),
      UpdatedAt: new Date(),
      IsDefault: false,
      Order: GetOrder(characterId),
    }

    Builds.value.push(build)

    CalculateScore(build)

    return build
  }

  function CalculateScore(build: Build) {
    const character = CharactersStore.Get(build.CharacterId)
    if (!character) {
      return
    }

    const score = ScoreCalculator.GetCharacterScore(character, build)
    if (!score) {
      return
    }

    UpdateBuild(build.Id, {
      Score: score.Score,
      Note: score.Note,
      Echoes: build.Echoes.map((echo, idx) => ({
        ...echo,
        Score: score.EchoesScores[idx]?.Score,
        Note: score.EchoesScores[idx]?.Grade,
      })),
    })
  }

  function UpdateBuild(buildId: string, data: Partial<Build>) {
    const index = Builds.value.findIndex(build => build.Id === buildId)
    if (index === -1)
      return

    if (data.Echoes) {
      data.Echoes.forEach((echo) => {
        if (echo.Id) {
          EchoesStore.Update(echo.Id, echo)
        }
      })
    }

    Builds.value[index] = {
      ...Builds.value[index],
      ...data,
      UpdatedAt: new Date(),
    } as Build
  }

  function DeleteBuild(buildId: string) {
    Builds.value = Builds.value.filter(build => build.Id !== buildId)
  }

  function SetDefaultBuild(buildId: string) {
    Builds.value.forEach((build) => {
      build.IsDefault = build.Id === buildId
    })
  }

  function GetOrder(characterId: number): number {
    const builds = GetBuildsByCharacter(characterId)

    if (builds.length === 0)
      return 0

    return Math.max(...builds.map(b => b.Order || 0)) + 1
  }

  function BuildExists(characterId: number, name: string, weaponId?: number, echoes?: Echo[]): boolean {
    return Builds.value.some(b => b.CharacterId === characterId
      && b.Name === name
      && b.WeaponId === weaponId
      && b.Echoes.every((echo, index) => echo.GameId === echoes?.[index]?.GameId
        && echo.Id === echoes?.[index]?.Id
        && echo.Statistics.every((stat, i) => stat.Value === echoes?.[index]?.Statistics?.[i]?.Value)),
    )
  }

  function LoadBuild(buildId: string) {
    const build = GetBuild(buildId)

    if (!build)
      return

    SetDefaultBuild(build.Id)
  }

  return {
    Builds,
    GetBuildsByCharacter,
    GetBuild,
    GetDefaultBuild,
    CreateBuild,
    UpdateBuild,
    DeleteBuild,
    SetDefaultBuild,
    LoadBuild,
  }
})
