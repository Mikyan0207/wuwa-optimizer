<script setup lang="ts">
import { TemplateCharacters } from '~/Core/Characters'
import { CharacterType } from '~/Core/Enums/CharacterType'
import { Rarity } from '~/Core/Enums/Rarity'
import { WeaponType } from '~/Core/Enums/WeaponType'
import { Character } from '~/Core/Models/Character'
import { GetRarityAsNumber } from '~/Core/Utils/RarityUtils'

definePageMeta({
  layout: 'default',
})

const ActiveCharacterStore = useActiveCharacterStore()

const CharacterSortOptions: string[] = [
  'Default',
  'Name',
  'Rarity',
]

const SelectedWeaponType = ref<WeaponType>(WeaponType.ALL)
const SelectedCharacterType = ref<CharacterType>(CharacterType.ALL)
const SelectedCharacterRarity = ref<Rarity>(Rarity.ALL)
const SelectedCharacterSort = ref<string>(CharacterSortOptions[1]!)

const CharactersList = computed(() => FilterCharacters())

function FilterCharacters() {
  return TemplateCharacters
    .filter((character) => {
      const matchesType = SelectedWeaponType.value === WeaponType.ALL || character.WeaponType === SelectedWeaponType.value
      const matchesRarity = SelectedCharacterRarity.value === Rarity.ALL || character.Rarity === SelectedCharacterRarity.value
      const matchesCharacterType = SelectedCharacterType.value === CharacterType.ALL || character.Type === SelectedCharacterType.value
      return matchesType && matchesRarity && matchesCharacterType
    })
    .sort((a, b) => {
      if (SelectedCharacterSort.value === 'Name') {
        return a.Name > b.Name ? 1 : -1
      }
      else if (SelectedCharacterSort.value === 'Rarity' || SelectedCharacterSort.value === 'Default') {
        const rarityComparison = GetRarityAsNumber(b.Rarity) - GetRarityAsNumber(a.Rarity)
        if (rarityComparison !== 0) {
          return rarityComparison
        }
        return a.Name > b.Name ? 1 : -1
      }
      return 0
    })
    .map(c => new Character(c))
}

function OnCharacterClicked(characterId: number | undefined) {
  ActiveCharacterStore.Set(characterId)
  navigateTo(`/characters/${characterId}`)
}
</script>

<template>
  <div class="mx-auto xl:max-w-6xl space-y-8 px-8 xl:px-0">
    <div class="w-full flex flex-wrap items-center justify-end gap-4">
      <CharacterTypeFilter @selected="(ct: CharacterType) => SelectedCharacterType = ct" />
      <WeaponTypeFilter @selected="(wt: WeaponType) => SelectedWeaponType = wt" />
      <RarityFilter @selected="(r: Rarity) => SelectedCharacterRarity = r" />
    </div>
    <div class="flex flex-wrap w-full items-center justify-center gap-1">
      <CharacterIcon
        v-for="c in CharactersList"
        :key="c.Id"
        :character="c"
        @click.prevent="OnCharacterClicked(c.Id)"
      />
    </div>
  </div>
</template>
