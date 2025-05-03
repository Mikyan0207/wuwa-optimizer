<script setup lang="ts">
import type Weapon from '~/Core/Interfaces/Weapon'
import { GetWeaponIcon } from '~/Core/Utils/WeaponUtils'

defineProps<{
  weapon: Weapon
}>()
</script>

<template>
  <UCard
    :ui="{
      root: 'rounded-none rounded-br-xl border-0',
      body: 'p-0 sm:p-0',
    }"
  >
    <template #default>
      <BorderLines :count="1" />
      <NuxtImg width="120" height="120" :src="`${GetWeaponIcon(weapon)}`" style="color: transparent;" />
    </template>
  </UCard>
</template>
