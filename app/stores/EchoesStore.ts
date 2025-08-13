import type Echo from '~/Core/Interfaces/Echo'
import { defineStore, skipHydrate } from 'pinia'
import { TemplateEchoes } from '~/Core/Echoes'

export const useEchoesStore = defineStore('EchoesStore', () => {
  const Echoes = useLocalStorage<Echo[]>('Echoes', [])

  function GetById(echoId: string): Echo | undefined {
    return Echoes.value.find(e => e.Id === echoId)
  }

  function GetByGameId(gameId: number): Echo | undefined {
    return TemplateEchoes.find(e => e.GameId === gameId)
  }

  function GetEquipedBy(echoId: string, characterId: number) {
    return Echoes.value
      .find(e => e.Id === echoId && e.EquipedBy === characterId)
  }

  function GetAllEquipedBy(characterId: number): Echo[] {
    return Echoes.value
      .filter(e => e.EquipedBy === characterId)
  }

  function GetByBuildId(echoId: string, buildId: string): Echo | undefined {
    return Echoes.value.find(e => e.Id === echoId && e.BuildId === buildId)
  }

  function GetAllByBuildId(buildId: string): Echo[] {
    return Echoes.value.filter(e => e.BuildId === buildId)
  }

  function Update(echoId: string | undefined, data: Partial<Echo>) {
    const index = Echoes.value.findIndex(e => e.Id === echoId)

    if (index !== -1) {
      Echoes.value[index] = {
        ...Echoes.value[index],
        ...data,
      } as Echo
    }
    else {
      Echoes.value.push({ Id: echoId, ...data } as Echo)
    }
  }

  function UpdateWithEquipedBy(echoId: string | undefined, characterId: number, data: Partial<Echo>) {
    const index = Echoes.value.findIndex(e => e.Id === echoId && e.EquipedBy === characterId)

    if (index !== -1) {
      Echoes.value[index] = {
        ...Echoes.value[index],
        ...data,
      } as Echo
    }
    else {
      Echoes.value.push({ Id: echoId, ...data } as Echo)
    }
  }

  function RemoveEcho(echoId: string, characterId: number) {
    Echoes.value = Echoes.value.filter(e => !(e.Id === echoId && e.EquipedBy === characterId))
  }

  function AddOrUpdate(echo: Echo, characterId: number) {
    if (!Echoes.value)
      return

    const exists = Echoes.value.some(c => c.Id === echo.Id && c.EquipedBy === characterId)
    if (exists) {
      return UpdateWithEquipedBy(echo.Id, characterId, echo)
    }

    Echoes.value.push(echo)
  }

  return {
    Echoes: skipHydrate(Echoes),
    GetById,
    GetByGameId,
    GetEquipedBy,
    GetAllEquipedBy,
    GetByBuildId,
    GetAllByBuildId,
    Update,
    UpdateWithEquipedBy,
    RemoveEcho,
    AddOrUpdate,
  }
})
