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
  <div class="grid grid-cols-6 mx-auto my-8 gap-2 px-8 x:px-0 xl:w-6xl">
    <UCard
      class="col-span-6 h-46" :ui="{
        root: 'rounded-none rounded-br-xl border-0',
        body: 'p-0 sm:p-0',
      }"
    />
    <UCard
      class="col-span-3" :ui="{
        root: 'rounded-none rounded-br-xl border-0',
      }"
    >
      <BorderLines :count="1" />
      <h2 class="text-lg mb-2">
        <span class="text-gray-200 font-semibold tracking-wide">Characters</span>
      </h2>
      <div class="flex flex-row items-center gap-1">
        <CharacterIcon
          v-for="c in NewCharacters"
          :key="c.Id"
          :character="c"
          @click.prevent="OnCharacterClicked(c.Id ?? -1)"
        />
      </div>
    </UCard>
    <UCard
      class="col-span-3" :ui="{
        root: 'rounded-none rounded-br-xl border-0',
      }"
    >
      <BorderLines :count="1" />
      <h2 class="text-lg">
        <span class="text-gray-200 font-semibold tracking-wide">Builds</span>
      </h2>
    </UCard>
  </div>
</template>
