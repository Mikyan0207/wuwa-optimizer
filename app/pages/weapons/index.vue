<script setup lang="ts">
import WeaponIcon from '~/components/Weapons/WeaponIcon.vue'
import { Rarity } from '~/Core/Enums/Rarity'
import { WeaponType } from '~/Core/Enums/WeaponType'

interface IWeaponTypeOptions {
  Type: WeaponType | string
  Name: string
  Icon: string
}

const WeaponsStore = useWeaponsStore()
const WeaponsList = computed(() => FilterWeapons())

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

const WeaponRarityOptions: string[] = [
  'All',
  Rarity.ONE_STAR,
  Rarity.TWO_STARS,
  Rarity.THREE_STARS,
  Rarity.FOUR_STARS,
  Rarity.FIVE_STARS,
]

const WeaponSortOptions: string[] = [
  'Default',
  'Name',
  'Rarity',
]

const SearchValue = ref<string>('')
const SelectedWeaponType = ref<IWeaponTypeOptions>(WeaponTypesOptions[0]!)
const SelectedWeaponRarity = ref<string>(WeaponRarityOptions[0]!)
const SelectedWeaponSort = ref<string>(WeaponSortOptions[0]!)

watchArray([SelectedWeaponRarity, SelectedWeaponType, SelectedWeaponSort], () => {
  FilterWeapons()
})

function FilterWeapons() {
  return WeaponsStore
    .GetWeapons()
    .filter((weapon) => {
      const matchesType = SelectedWeaponType.value.Name === 'All' || weapon.Type === SelectedWeaponType.value.Type
      const matchesRarity = SelectedWeaponRarity.value === 'All' || weapon.Rarity === SelectedWeaponRarity.value
      const matchesSearch = SearchValue.value.length < 3 || weapon.Name.toLowerCase().includes(SearchValue.value.toLowerCase())
      return matchesType && matchesRarity && matchesSearch
    })
    .sort((a, b) => {
      if (SelectedWeaponSort.value === 'Name') {
        return a.Name > b.Name ? 1 : -1
      }
      else if (SelectedWeaponSort.value === 'Rarity' || SelectedWeaponSort.value === 'Default') {
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
</script>

<template>
  <div>
    <div class="mx-auto xl:max-w-8xl px-8">
      <div class="w-full flex flex-wrap items-center justify-between gap-2">
        <UInput v-model="SearchValue" placeholder="Search weapon..." />
        <div class="flex flex-wrap items-center gap-4">
          <!-- Weapon Type -->
          <div class="flex items-center gap-1">
            <div class="flex border border-white/14 rounded bg-black/66">
              <div
                v-for="(weapon, idx) in WeaponTypesOptions"
                :key="weapon.Type"
                class="flex flex-row cursor-pointer items-center gap-2 px-4 py-1"
                :class="{ 'rounded-l-sm': idx === 0,
                          'rounded-r-sm': idx === WeaponTypesOptions.length - 1,
                          'border-r border-white/14': idx !== WeaponTypesOptions.length - 1,
                          'bg-white/14 border-r-0': weapon.Type === SelectedWeaponType.Type,
                          'hover:bg-white/7': weapon.Type !== SelectedWeaponType.Type,
                }"
                @click.prevent="SelectedWeaponType = weapon"
              >
                <NuxtImg v-if="weapon.Name !== 'All'" :src="weapon.Icon" class="h-6 w-6 object-cover" />
                <span v-else :title="weapon.Name" class="text-truncate text-nowrap">{{ weapon.Name }}</span>
              </div>
            </div>
          </div>
          <!-- Weapon Rarity -->
          <div class="flex items-center gap-1">
            <div class="flex border border-white/14 rounded bg-black/66">
              <div
                v-for="(rarity, idx) in WeaponRarityOptions"
                :key="`weapon-rarity-${idx}`"
                class="flex flex-row cursor-pointer items-center gap-2 px-4 py-1"
                :class="{ 'rounded-l-sm': idx === 0,
                          'rounded-r-sm': idx === WeaponRarityOptions.length - 1,
                          'border-r border-white/14': idx !== WeaponRarityOptions.length - 1,
                          'bg-white/14 border-r-0': rarity === SelectedWeaponRarity,
                          'hover:bg-white/7': rarity !== SelectedWeaponRarity,
                }"
                @click.prevent="SelectedWeaponRarity = rarity"
              >
                <span v-if="rarity !== 'All'" class="text-truncate text-nowrap">{{ GetRarityAsNumber(rarity as Rarity) }}✧</span>
                <span v-else class="text-truncate text-nowrap">{{ rarity }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mx-auto my-8 max-w-6xl flex flex-wrap items-start justify-center gap-1 xl:max-w-7xl">
      <WeaponIcon
        v-for="w in WeaponsList"
        :key="w.Id"
        :weapon="w"
      />
    </div>
  </div>
</template>
