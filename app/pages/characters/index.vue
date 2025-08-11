<script setup lang="ts">
import type { BaseCharacter } from '~/Core/Interfaces/Character'
import type Character from '~/Core/Interfaces/Character'
import { CharacterType } from '~/Core/Enums/CharacterType'
import { Rarity } from '~/Core/Enums/Rarity'
import { ReleaseState } from '~/Core/Enums/ReleaseState'
import { WeaponType } from '~/Core/Enums/WeaponType'
import { GetRarityAsNumber } from '~/Core/Utils/RarityUtils'

definePageMeta({
  layout: 'default',
})

const { t } = useI18n()

useHead({
  title: 'Characters - Wuthering Waves Optimizer',
  meta: [
    {
      name: 'description',
      content: 'Browse all Wuthering Waves characters and optimize their builds. Find the best echoes and weapons for each character to maximize your damage.',
    },
    {
      name: 'keywords',
      content: 'WuWa characters, Wuthering Waves characters, character list, WuWa builds, character optimization, echo calculator',
    },
    {
      property: 'og:title',
      content: 'Characters - Wuthering Waves Optimizer',
    },
    {
      property: 'og:description',
      content: 'Browse all Wuthering Waves characters and optimize their builds.',
    },
    {
      property: 'og:type',
      content: 'website',
    },
  ],
})

const CharacterSortOptions: string[] = [
  'Default',
  'Name',
  'Rarity',
]

const SelectedWeaponType = ref<WeaponType>(WeaponType.ALL)
const SelectedCharacterType = ref<CharacterType>(CharacterType.ALL)
const SelectedCharacterRarity = ref<Rarity>(Rarity.ALL)
const SelectedCharacterSort = ref<string>(CharacterSortOptions[1]!)

const CharactersStore = useCharactersStore()
const Characters = ref<BaseCharacter[]>([])
const CharactersList = computed(() => FilterCharacters())

onMounted(async () => {
  Characters.value = await CharactersStore.GetAll()
})

function FilterCharacters() {
  return Characters.value
    .filter((character) => {
      const matchesType = SelectedWeaponType.value === WeaponType.ALL || character.WeaponType === SelectedWeaponType.value
      const matchesRarity = SelectedCharacterRarity.value === Rarity.ALL || character.Rarity === SelectedCharacterRarity.value
      const matchesCharacterType = SelectedCharacterType.value === CharacterType.ALL || character.Type === SelectedCharacterType.value
      return matchesType && matchesRarity && matchesCharacterType
    })
    .sort((a, b) => {
      if (SelectedCharacterSort.value === 'Name') {
        return t(`${a.Id}_name`) > t(`${b.Id}_name`) ? 1 : -1
      }
      else if (SelectedCharacterSort.value === 'Rarity' || SelectedCharacterSort.value === 'Default') {
        const rarityComparison = GetRarityAsNumber(b.Rarity) - GetRarityAsNumber(a.Rarity)
        if (rarityComparison !== 0) {
          return rarityComparison
        }
        return t(`${a.Id}_name`) > t(`${b.Id}_name`) ? 1 : -1
      }
      return 0
    })
}

function OnCharacterClicked(characterId: number | undefined) {
  navigateTo(`/characters/${characterId}`)
}

function IsCharacterAvailable(character: BaseCharacter) {
  return character.ReleaseState !== ReleaseState.UPCOMING
    && character.ReleaseState !== ReleaseState.UNKNOWN
}
</script>

<template>
  <div class="mx-auto xl:max-w-6xl space-y-8 px-8 xl:px-0">
    <div class="w-full flex flex-wrap items-center justify-end gap-4">
      <CharacterTypeFilter @selected="(ct: CharacterType) => SelectedCharacterType = ct" />
      <WeaponTypeFilter @selected="(wt: WeaponType) => SelectedWeaponType = wt" />
      <RarityFilter @selected="(r: Rarity) => SelectedCharacterRarity = r" />
    </div>
    <div v-if="CharactersList.length > 0" class="flex flex-wrap w-full items-center justify-center gap-2">
      <MCharacterIcon
        v-for="(c, idx) in CharactersList"
        :key="c.Id"
        v-motion-pop
        :delay="100 + (idx * 20)"
        :character="c as Character"
        :class="{ 'cursor-pointer': IsCharacterAvailable(c) }"
        @click.prevent="IsCharacterAvailable(c) ? OnCharacterClicked(c.Id) : null"
      />
    </div>
  </div>
</template>
