<script setup lang="ts">
import type IWeapon from '~/Core/Interfaces/IWeapon'
import WeaponIcon from '~/components/Weapons/WeaponIcon.vue'
import { TemplateWeapons } from '~/Core/Weapons'

const WeaponsStore = useWeaponsStore()

const WeaponsList = computed(() => {
  for (const weapon of TemplateWeapons) {
    if (!WeaponsStore.IsWeaponListed(weapon.Id)) {
      WeaponsStore.AddWeapon(weapon as IWeapon)
    }
  }

  return WeaponsStore
    .GetWeapons()
    .sort((a, b) => a.Name > b.Name ? 1 : -1)
})
</script>

<template>
  <div>
    <div class="h-12 w-full flex items-center gap-2 border-b border-white/14 bg-black/44 p-3 text-sm">
      <div class="mx-4 h-6 w-1px bg-white/14" />
      <NuxtLink to="/weapons">
        Weapons
      </NuxtLink>
    </div>
    <div class="mx-auto my-8 flex items-center justify-center gap-2 container">
      <WeaponIcon
        v-for="w in WeaponsList"
        :key="w.Id"
        :weapon="w"
      />
    </div>
  </div>
</template>
