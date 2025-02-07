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
  <div class="grid grid-cols-6 mx-auto my-8 gap-1 px-8 xl:w-7xl">
    <Card class="col-span-6 h-46" />
    <Card class="col-span-1">
      <h2 class="text-lg">
        <span class="text-yellow-400 font-extrabold tracking-wide">Characters</span>
      </h2>
      <p class="mb-4 text-sm text-gray-400">
        New・Upcoming
      </p>
      <div class="flex flex-col items-center gap-1">
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
