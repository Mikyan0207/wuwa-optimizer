<script setup lang="ts">
import type ICharacter from '~/Core/Interfaces/ICharacter'
import { TemplateCharacters } from '~/Core/Characters'

definePageMeta({
  layout: 'default',
})

const CharactersStore = useCharactersStore()

const CharactersList = computed(() => {
  for (const character of TemplateCharacters) {
    if (!CharactersStore.IsCharacterListed(character.Id)) {
      CharactersStore.AddCharacter(character as ICharacter)
    }
  }

  return CharactersStore
    .GetCharacters()
    .sort((a, b) => a.Name > b.Name ? 1 : -1)
})

function OnCharacterClicked(characterId: number) {
  CharactersStore.UnlockCharacter(characterId)

  navigateTo(`/characters/${characterId}`)
}
</script>

<template>
  <div>
    <div class="w-full flex items-center gap-2 border-b border-white/14 bg-black/44 p-4 text-sm">
      <div class="mx-4 h-6 w-1px bg-white/14" />
      <NuxtLink to="/characters">
        Resonators
      </NuxtLink>
    </div>
    <div class="mx-auto my-8 flex flex-wrap items-center justify-center gap-2 container">
      <CharacterIcon
        v-for="c in CharactersList"
        :key="c.Id"
        :name="c.Name"
        :rarity="c.Rarity"
        :icon="c.GetIcon()"
        :type="c.GetTypeIcon()"
        :unlocked="c.Unlocked"
        @click.prevent="OnCharacterClicked(c.Id ?? -1)"
      />
    </div>
  </div>
</template>
