<script setup lang="ts">
import { TemplateCharacters } from '~/Core/Characters'
import { CharacterReleaseState } from '~/Core/Enums/CharacterReleaseState'
import { Character } from '~/Core/Models/Character'

definePageMeta({
  layout: 'default',
})

const NewCharacters = computed(() => TemplateCharacters
  .filter(x => x.ReleaseState === CharacterReleaseState.NEW || x.ReleaseState === CharacterReleaseState.UPCOMING)
  .map(c => new Character(c))
  .reverse())

function OnCharacterClicked(characterId: number) {
  navigateTo(`/characters/${characterId}`)
}
</script>

<template>
  <div class="grid grid-cols-5 mx-auto my-8 w-7xl gap-1">
    <Card class="col-span-5 h-46" />
    <Card class="col-span-3">
      <h2 class="text-lg">
        <span class="text-yellow-400 font-extrabold tracking-wide">Characters</span>
      </h2>
      <p class="mb-4 text-sm text-gray-400">
        New and upcoming characters
      </p>
      <div class="w-full flex flex-wrap items-center gap-1">
        <CharacterIcon
          v-for="c in NewCharacters"
          :key="c.Id"
          :character="c"
          @click.prevent="OnCharacterClicked(c.Id ?? -1)"
        />
      </div>
    </Card>
  </div>
</template>
