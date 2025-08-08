<script setup lang="ts">
import { Rarity } from '~/Core/Enums/Rarity'
import { WeaponType } from '~/Core/Enums/WeaponType'
import { GetRarityAsNumber } from '~/Core/Utils/RarityUtils'
import { TemplateWeapons } from '~/Core/Weapons'

useHead({
  title: 'Weapons - Wuthering Waves Optimizer',
  meta: [
    {
      name: 'description',
      content: 'Browse all Wuthering Waves weapons and optimize your equipment. Find the best weapons for each character and maximize your damage output.',
    },
    {
      name: 'keywords',
      content: 'WuWa weapons, Wuthering Waves weapons, weapon list, weapon optimization, weapon calculator, WuWa equipment',
    },
    {
      property: 'og:title',
      content: 'Weapons - Wuthering Waves Optimizer',
    },
    {
      property: 'og:description',
      content: 'Browse all Wuthering Waves weapons and optimize your equipment.',
    },
    {
      property: 'og:type',
      content: 'website',
    },
  ],
})

const WeaponsStore = useWeaponsStore()
const SelectedTab = ref<string>('0')

const WeaponSortOptions: string[] = [
  'Default',
  'Name',
  'Rarity',
]

const SearchValue = ref<string>('')
const SelectedWeaponType = ref<WeaponType>(WeaponType.ALL)
const SelectedWeaponRarity = ref<Rarity>(Rarity.ALL)
const SelectedWeaponSort = ref<string>(WeaponSortOptions[0]!)

const WeaponsList = computed(() => {
  return (SelectedTab.value === '0' ? WeaponsStore.GetWeapons().filter(x => x.EquipedBy !== undefined) : TemplateWeapons)
    .filter((weapon) => {
      const matchesType = SelectedWeaponType.value === WeaponType.ALL || weapon.Type === SelectedWeaponType.value
      const matchesRarity = SelectedWeaponRarity.value === Rarity.ALL || weapon.Rarity === SelectedWeaponRarity.value
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
})

const TabItems = [
  {
    label: 'Equiped Weapons',
    disabled: false,
  },
  {
    label: 'Weapons',
    disabled: false,
  },
]
</script>

<template>
  <div class="mx-auto xl:max-w-7xl px-8 xl:px-0 space-y-8">
    <UTabs
      v-model="SelectedTab"
      :default-value="0"
      color="neutral"
      :items="TabItems"
      :ui="{
        list: 'rounded-none border-neutral-600',
        indicator: 'rounded-none bg-neutral-300',
      }"
    >
      <template #content>
        <div class="w-full">
          <div class="w-full flex flex-wrap items-center justify-between gap-2 mb-8 mt-4">
            <UInput v-model="SearchValue" placeholder="Search weapon..." />
            <div class="flex flex-wrap items-center gap-4">
              <!-- Weapon Type -->
              <WeaponTypeFilter @selected="(s: WeaponType) => SelectedWeaponType = s" />
              <!-- Weapon Rarity -->
              <RarityFilter @selected="(r: Rarity) => SelectedWeaponRarity = r" />
            </div>
          </div>
          <div v-if="SelectedTab === '0'" class="mx-auto w-full flex flex-wrap items-center justify-start gap-2">
            <MWeaponIcon v-for="w in WeaponsList" :key="w.Id" :weapon="w" variant="equiped" :character-id="w.EquipedBy" />
          </div>
          <div v-if="SelectedTab === '1'" class="mx-auto w-full flex flex-wrap items-center justify-start gap-2">
            <MWeaponIcon v-for="w in WeaponsList" :key="w.Id" :weapon="w" />
          </div>
        </div>
      </template>
    </UTabs>
  </div>
</template>
