<script setup lang="ts">
import { CharacterType } from '~/Core/Enums/CharacterType'
import { Rarity } from '~/Core/Enums/Rarity'
import { WeaponType } from '~/Core/Enums/WeaponType'

definePageMeta({
  layout: 'default',
})

interface IWeaponTypeOptions {
  Type: WeaponType | string
  Name: string
  Icon: string
}

interface ICharacterTypeOptions {
  Type: CharacterType | string
  Name: string
  Icon: string
}

const CharactersStore = useCharactersStore()

const WeaponTypesOptions: IWeaponTypeOptions[] = [
  {
    Type: 'ALL',
    Name: 'All',
    Icon: '/images/icons/Icon_Attribute_Attack.webp',
  },
  {
    Type: WeaponType.SWORD,
    Name: 'Swords',
    Icon: '/images/icons/Icon_Sword.webp',
  },
  {
    Type: WeaponType.GAUNTLETS,
    Name: 'Gauntlets',
    Icon: '/images/icons/Icon_Gauntlets.webp',
  },
  {
    Type: WeaponType.PISTOLS,
    Name: 'Pistols',
    Icon: '/images/icons/Icon_Pistols.webp',
  },
  {
    Type: WeaponType.RECTIFIER,
    Name: 'Rectifiers',
    Icon: '/images/icons/Icon_Rectifier.webp',
  },
  {
    Type: WeaponType.BROADBLADE,
    Name: 'Broadblades',
    Icon: '/images/icons/Icon_Broadblade.webp',
  },
]

const CharacterTypesOptions: ICharacterTypeOptions[] = [
  {
    Type: 'All',
    Name: 'All',
    Icon: '',
  },
  {
    Type: CharacterType.SPECTRO,
    Name: 'Spectro',
    Icon: '/images/icons/Spectro.webp',
  },
  {
    Type: CharacterType.ELECTRO,
    Name: 'Electro',
    Icon: '/images/icons/Electro.webp',
  },
  {
    Type: CharacterType.AERO,
    Name: 'Aero',
    Icon: '/images/icons/Aero.webp',
  },
  {
    Type: CharacterType.FUSION,
    Name: 'Fusion',
    Icon: '/images/icons/Fusion.webp',
  },
  {
    Type: CharacterType.GLACIO,
    Name: 'Glacio',
    Icon: '/images/icons/Glacio.webp',
  },
  {
    Type: CharacterType.HAVOC,
    Name: 'Havoc',
    Icon: '/images/icons/Havoc.webp',
  },
]

const CharacterRarityOptions: string[] = [
  'All',
  Rarity.FOUR_STARS,
  Rarity.FIVE_STARS,
]

const CharacterSortOptions: string[] = [
  'Default',
  'Name',
  'Rarity',
]

const SelectedWeaponType = ref<IWeaponTypeOptions>(WeaponTypesOptions[0]!)
const SelectedCharacterType = ref<ICharacterTypeOptions>(CharacterTypesOptions[0]!)
const SelectedCharacterRarity = ref<string>(CharacterRarityOptions[0]!)
const SelectedCharacterSort = ref<string>(CharacterSortOptions[1]!)

watchArray([SelectedCharacterRarity, SelectedCharacterType, SelectedWeaponType, SelectedCharacterSort], () => {
  FilterCharacters()
})

const CharactersList = computed(() => FilterCharacters())

function FilterCharacters() {
  return CharactersStore
    .GetCharacters()
    .filter((character) => {
      const matchesType = SelectedWeaponType.value.Name === 'All' || character.WeaponType === SelectedWeaponType.value.Type
      const matchesRarity = SelectedCharacterRarity.value === 'All' || character.Rarity === SelectedCharacterRarity.value
      const matchesCharacterType = SelectedCharacterType.value.Name === 'All' || character.Type === SelectedCharacterType.value.Type
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
}

function GetRarityAsNumber(rarity: Rarity) {
  switch (rarity) {
    case Rarity.ONE_STAR:
      return 1
    case Rarity.TWO_STARS:
      return 2
    case Rarity.THREE_STARS:
      return 3
    case Rarity.FOUR_STARS:
      return 4
    case Rarity.FIVE_STARS:
      return 5
  }
}

function OnCharacterClicked(characterId: number) {
  navigateTo(`/characters/${characterId}`)
}
</script>

<template>
  <div>
    <div class="mx-auto xl:max-w-8xl px-8">
      <div class="w-full flex flex-wrap items-center justify-end gap-4">
        <!-- Character Type -->
        <div class="flex items-center justify-end gap-1">
          <div class="flex border border-white/14 rounded bg-black/66 backdrop-blur-4">
            <div
              v-for="(ch, idx) in CharacterTypesOptions" :key="ch.Type"
              class="flex flex-row cursor-pointer items-center gap-2 px-4 py-1" :class="{
                'rounded-l-sm': idx === 0,
                'rounded-r-sm': idx === CharacterTypesOptions.length - 1,
                'border-r border-white/14': idx !== CharacterTypesOptions.length - 1,
                'bg-white/14 border-r-0': ch.Type === SelectedCharacterType.Type,
                'hover:bg-white/7': ch.Type !== SelectedCharacterType.Type,
              }" @click.prevent="SelectedCharacterType = ch"
            >
              <NuxtImg v-if="ch.Name !== 'All'" :src="ch.Icon" class="h-6 w-6 object-cover" />
              <span v-else :title="ch.Name" class="text-truncate text-nowrap">{{ ch.Name }}</span>
            </div>
          </div>
        </div>
        <!-- Weapon Type -->
        <div class="flex items-center justify-end gap-1">
          <div class="flex border border-white/14 rounded bg-black/66 backdrop-blur-4">
            <div
              v-for="(weapon, idx) in WeaponTypesOptions" :key="weapon.Type"
              class="flex flex-row cursor-pointer items-center gap-2 px-4 py-1" :class="{
                'rounded-l-sm': idx === 0,
                'rounded-r-sm': idx === WeaponTypesOptions.length - 1,
                'border-r border-white/14': idx !== WeaponTypesOptions.length - 1,
                'bg-white/14 border-r-0': weapon.Type === SelectedWeaponType.Type,
                'hover:bg-white/7': weapon.Type !== SelectedWeaponType.Type,
              }" @click.prevent="SelectedWeaponType = weapon"
            >
              <NuxtImg v-if="weapon.Name !== 'All'" :src="weapon.Icon" class="h-6 w-6 object-cover" />
              <span v-else :title="weapon.Name" class="text-truncate text-nowrap">{{ weapon.Name }}</span>
            </div>
          </div>
        </div>
        <!-- Weapon Rarity -->
        <div class="flex items-center gap-1">
          <div class="flex border border-white/14 rounded bg-black/66 backdrop-blur-4">
            <div
              v-for="(rarity, idx) in CharacterRarityOptions" :key="`weapon-rarity-${idx}`"
              class="flex flex-row cursor-pointer items-center gap-2 px-4 py-1" :class="{
                'rounded-l-sm': idx === 0,
                'rounded-r-sm': idx === CharacterRarityOptions.length - 1,
                'border-r border-white/14': idx !== CharacterRarityOptions.length - 1,
                'bg-white/14 border-r-0': rarity === SelectedCharacterRarity,
                'hover:bg-white/7': rarity !== SelectedCharacterRarity,
              }" @click.prevent="SelectedCharacterRarity = rarity"
            >
              <span v-if="rarity !== 'All'" class="text-truncate text-nowrap">{{ GetRarityAsNumber(rarity as Rarity)
              }}✧</span>
              <span v-else class="text-truncate text-nowrap">{{ rarity }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mx-auto my-8 xl:max-w-8xl flex flex-wrap items-center justify-center gap-1 px-8">
      <CharacterIcon
        v-for="c in CharactersList"
        :key="c.Id"
        :character="c"
        @click.prevent="OnCharacterClicked(c.Id ?? -1)"
      />
    </div>
  </div>
</template>
