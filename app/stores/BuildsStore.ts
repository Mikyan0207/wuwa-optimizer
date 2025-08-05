import type { ScoreGrade } from '~/Core/Enums/ScoreGrade'
import type Build from '~/Core/Interfaces/Build'
import { useLocalStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import { TemplateEchoes } from '~/Core/Echoes'

export const useBuildsStore = defineStore('BuildsStore', () => {
  const Builds = useLocalStorage<Build[]>('Builds', [])
  const ScoreCalculator = useScoreCalculator()

  function GetBuildsByCharacter(characterId: number): Build[] {
    return Builds.value
      .filter(build => build.CharacterId === characterId)
      .sort((a, b) => (a.Order || 0) - (b.Order || 0))
  }

  function GetBuild(buildId: string): Build | undefined {
    return Builds.value.find(build => build.Id === buildId)
  }

  function CreateBuild(characterId: number, name: string, description?: string): Build {
    const existingBuilds = GetBuildsByCharacter(characterId)
    const maxOrder = existingBuilds.length > 0 ? Math.max(...existingBuilds.map(b => b.Order || 0)) : -1

    const build: Build = {
      Id: `${Date.now()}-${crypto.randomUUID()}`,
      CharacterId: characterId,
      Name: name,
      Description: description,
      WeaponId: undefined,
      EquipedEchoes: [],
      CreatedAt: new Date(),
      UpdatedAt: new Date(),
      IsDefault: false,
      Order: maxOrder + 1,
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
      UpdatedAt: new Date(),
    } as Build
  }

  function DeleteBuild(buildId: string) {
    Builds.value = Builds.value.filter(build => build.Id !== buildId)
  }

  function SetDefaultBuild(characterId: number, buildId: string) {
    Builds.value.forEach((build) => {
      if (build.CharacterId === characterId) {
        build.IsDefault = build.Id === buildId
      }
    })
  }

  function GetDefaultBuild(characterId: number): Build | undefined {
    return Builds.value.find(build =>
      build.CharacterId === characterId && build.IsDefault,
    )
  }

  function SaveCurrentBuild(characterId: number, weaponId?: number, equippedEchoes: number[] = [], score?: number, note?: ScoreGrade): Build {
    const build = CreateBuild(characterId, `Build ${new Date().toLocaleDateString()}`)

    const EchoesStore = useEchoesStore()
    const echoesData = equippedEchoes
      .map((id, index) => {
        const echo = EchoesStore.GetEquipedBy(id, characterId)
        if (echo) {
          return {
            ...echo,
            BuildId: Date.now() + Math.random() + index,
          }
        }
        return null
      })
      .filter((echo): echo is NonNullable<typeof echo> => echo !== undefined)

    UpdateBuild(build.Id, {
      WeaponId: weaponId,
      EquipedEchoes: equippedEchoes,
      EchoesData: echoesData,
    })

    const finalScore = ScoreCalculator.GetBuildScore(build.Id)

    UpdateBuild(build.Id, {
      Score: finalScore?.Score ?? score,
      Note: finalScore?.Note ?? note,
      EchoesScores: finalScore?.EchoesScores,
    })

    return build
  }

  function LoadBuild(buildId: string) {
    const build = GetBuild(buildId)
    if (!build)
      return

    const CharactersStore = useCharactersStore()
    const WeaponsStore = useWeaponsStore()
    const EchoesStore = useEchoesStore()

    SetDefaultBuild(build.CharacterId, build.Id)

    if (build.WeaponId) {
      WeaponsStore.SetEquipedWeapon(build.CharacterId, build.WeaponId)
    }

    const equippedEchoes: number[] = []

    if (build.EchoesData && build.EchoesData.length > 0) {
      build.EchoesData.forEach((echoData, index) => {
        const newEcho = {
          ...echoData,
          Id: echoData.Id,
          EquipedBy: build.CharacterId,
          EquipedSlot: index,
        }

        EchoesStore.AddOrUpdate(newEcho, build.CharacterId)
        equippedEchoes.push(newEcho.Id)
      })
    }
    else {
      build.EquipedEchoes.forEach((echoId, index) => {
        let echo = EchoesStore.Get(echoId)

        if (!echo && echoId !== -1) {
          const templateEcho = TemplateEchoes.find(t => t.Id === echoId)
          if (templateEcho) {
            const newEcho = {
              ...templateEcho,
              Id: Date.now() + Math.random() + index,
              EquipedBy: build.CharacterId,
              EquipedSlot: index,
            }

            EchoesStore.AddOrUpdate(newEcho, build.CharacterId)
            echo = newEcho
          }
        }

        if (echo) {
          EchoesStore.Update(echo.Id, {
            EquipedBy: build.CharacterId,
            EquipedSlot: index,
          })
          equippedEchoes.push(echo.Id)
        }
      })
    }

    CharactersStore.Update(build.CharacterId, {
      EquipedEchoes: equippedEchoes,
    })

    const character = CharactersStore.Get(build.CharacterId)
    if (character) {
      const ScoreCalculator = useScoreCalculator()
      const score = ScoreCalculator.GetCharacterScore(character, build)

      UpdateBuild(build.Id, {
        Score: score?.Score,
        Note: score?.Note,
        EchoesScores: score?.EchoesScores,
      })
    }
  }

  return {
    Builds,
    GetBuildsByCharacter,
    GetBuild,
    CreateBuild,
    UpdateBuild,
    DeleteBuild,
    SetDefaultBuild,
    GetDefaultBuild,
    SaveCurrentBuild,
    LoadBuild,
  }
})
