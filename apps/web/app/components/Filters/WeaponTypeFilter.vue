<script setup lang="ts">
import { WeaponType } from '~/Core/Enums/WeaponType'

interface IWeaponTypeOptions {
  Type: WeaponType
  Name: string
  Icon: string
}

const emits = defineEmits<{
  selected: [type: WeaponType]
}>()

const WeaponTypesOptions: IWeaponTypeOptions[] = [
  {
    Type: WeaponType.ALL,
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

const SelectedWeaponType = ref<IWeaponTypeOptions>(WeaponTypesOptions[0]!)

function OnWeaponTypeSelected(type: IWeaponTypeOptions) {
  SelectedWeaponType.value = type
  emits('selected', SelectedWeaponType.value.Type)
}

onMounted(() => {
  emits('selected', SelectedWeaponType.value.Type)
})
</script>

<template>
  <UCard
    :ui="{
      root: 'rounded-xs group',
      body: 'p-0 sm:p-0',
    }"
  >
    <div class="flex divide-x divide-(--ui-border)">
      <div
        v-for="(weapon, idx) in WeaponTypesOptions"
        :key="idx"
        class="flex flex-row cursor-pointer items-center gap-2 px-4 py-1 transition-colors duration-100"
        :class="{
          'bg-(--ui-border)': weapon.Type === SelectedWeaponType.Type,
          'hover:bg-(--ui-border)': weapon.Type !== SelectedWeaponType.Type,
        }"
        @click.prevent="OnWeaponTypeSelected(weapon)"
      >
        <NuxtImg v-if="weapon.Type !== WeaponType.ALL" :src="weapon.Icon" class="h-6 w-6 object-cover" />
        <span v-else :title="weapon.Name" class="text-truncate text-nowrap">{{ weapon.Name }}</span>
      </div>
    </div>
  </UCard>
</template>
