<script setup lang="ts">
import type { Character } from '~/Core/Models/Character'

const props = defineProps<{
  character: Character
}>()

const GetSplashArtOffsets = computed(() => {
  return `top-${props.character.SplashArtOffsetY || 0}% right-${props.character.SplashArtOffsetX || 0}%`
})
</script>

<template>
  <!-- Character Art -->
  <div
    class="relative overflow-hidden border border-white/14 rounded-md bg-black/66"
  >
    <div class="absolute inset-0 z-20 from-black/25 via-transparent to-transparent bg-gradient-to-bl" />
    <NuxtImg
      v-if="character.Background"
      fit="cover"
      :src="`${character.GetBackground()}`"
      class="absolute top--25% z-0 h-200% w-200% rotate-180 object-cover blur-lg"
    />
    <div v-else class="absolute inset-0 z-0 bg-black/66" />
    <!-- Weapon Type & Character Type -->
    <div class="absolute right-2 top-2 z-20 flex items-center gap-2">
      <NuxtImg :src="`${character.GetTypeIcon()}`" class="h-8 w-8 object-cover" fit="cover" />
      <NuxtImg :src="`${character.GetWeaponTypeIcon()}`" class="h-8 w-8 object-cover" fit="cover" />
    </div>
    <!-- Sequences -->
    <div class="absolute left-2 top-2 z-20">
      <div class="flex flex-col gap-3">
        <div
          v-for="s in character.Sequences"
          :key="s.Name"
          class="relative h-12 w-12 border-2 border-white/14 rounded-full bg-neutral-700 p-1"
        >
          <div v-if="s.Unlocked === false" class="absolute inset-0 rounded-full bg-black/75" />
          <!-- Not sure about this strike-out... -->
          <!-- <div v-if="s.Unlocked === false" class="absolute inset-0 left-0 top-50% h-2px bg-white/28 -right-1px -rotate-45" /> -->
          <NuxtImg :src="`/images/characters/${character.Id}/${s.Icon}`" />
        </div>
      </div>
    </div>
    <NuxtImg
      :src="`${character.GetSplashArtPath()}`"
      class="absolute z-10 h-150% w-full object-cover"
      :class="GetSplashArtOffsets"
      fit="cover"
    />
  </div>
</template>
