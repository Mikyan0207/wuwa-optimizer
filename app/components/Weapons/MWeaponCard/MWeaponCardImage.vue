<script setup lang="ts">
import type Weapon from '~/Core/Interfaces/Weapon'

interface WeaponCardImageProps {
  weapon: Weapon | undefined
}

defineProps<WeaponCardImageProps>()
</script>

<template>
  <NuxtImg
    v-if="weapon"
    :src="`/images/weapons/${weapon.Icon}`"
    fit="cover"
    class="object-contain flex-shrink-0 border-l border-neutral-800 h-full w-auto"
  />
  <USkeleton v-else class="h-full w-[4em] flex-shrink-0" />
</template>
