import type Character from '~/Core/Interfaces/Character'
import { useLocalStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import { TemplateCharacters } from '~/Core/Characters'
import { CharacterMigrationService } from '~/Core/Services/CharacterMigrationService'

export const useCharactersStore = defineStore('CharactersStore', () => {
  const Characters = useLocalStorage<Character[]>('Characters', [])
  const MigrationService = new CharacterMigrationService()

  async function Migration() {
    if (MigrationService.NeedsMigration()) {
      try {
        Characters.value = await MigrationService.MigrateCharacters()
      }
      catch (error) {
        console.error('Migration failed:', error)
      }
      finally {
        MigrationService.CleanUp()
      }
    }
  }

  function Get(characterId: number | undefined): Character {
    const c = Characters.value.find(x => x.Id === characterId)
    if (c !== undefined) {
      return c
    }

    const ct = TemplateCharacters.find(x => x.Id === characterId)
    if (ct !== undefined) {
      Characters.value.push(ct)
    }

    return Characters.value.find(x => x.Id === characterId)!
  }

  function Update(characterId: number, data: Partial<Character>) {
    const index = Characters.value.findIndex(c => c.Id === characterId)
    if (index === -1 || Characters.value === undefined)
      return

    Characters.value[index] = {
      ...Characters.value[index],
      ...data,
    } as Character
  }

  function AddOrUpdate(character: Character) {
    if (!Characters.value)
      return

    const exists = Characters.value.some(c => c.Id === character.Id)
    if (exists) {
      return Update(character.Id, character)
    }

    Characters.value.push(character)
  }

  return {
    Characters,
    Get,
    Update,
    AddOrUpdate,
    Migration,
  }
})
