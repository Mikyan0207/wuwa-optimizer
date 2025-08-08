<script setup lang="ts">
import type Weapon from '~/Core/Interfaces/Weapon'

interface WeaponCardProps {
  weapon: Weapon | undefined
}

defineProps<WeaponCardProps>()
</script>

<template>
  <MCard class="group relative w-full h-full" padding="none" :border-lines-count="3">
    <MWeaponCardDropdown />
    <div class="h-full w-full flex justify-between items-start gap-4">
      <div class="flex flex-col gap-1 flex-1 min-w-0 p-4">
        <MWeaponCardHeader :weapon="weapon" />
        <MWeaponCardRarity :weapon="weapon" />
        <MWeaponCardStats :weapon="weapon" />
      </div>
      <MWeaponCardImage :weapon="weapon" />
    </div>
  </MCard>
</template>
