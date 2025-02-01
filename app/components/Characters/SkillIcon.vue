<script setup lang="ts">
import type { ISkill } from '~/Core/Interfaces/ISkill'

defineProps<{
  skill?: ISkill
  size?: 'xs'
  characterId?: number
}>()
</script>

<template>
  <USkeleton v-if="!skill" class="min-h-3em min-w-3em rotate-45" :ui="{ base: '' }" />
  <div
    v-else
    class="rotate-45 cursor-pointer border-2 rounded-md bg-black/88 backdrop-blur-4 transition-all duration-150"
    :class="{
      'border-white/75': skill.Unlocked,
      'border-white/14 hover:border-white/74': !skill.Unlocked,
      'min-h-3em min-w-3em': !size,
      'min-h-2em min-w-2em ': size === 'xs',
    }"
  >
    <NuxtImg v-if="characterId" :src="`/images/characters/${characterId}/${skill.Icon}`" class="p-1 -rotate-45" />
    <NuxtImg v-else :src="`/images/icons/${skill.Icon}`" class="p-1 -rotate-45" />
  </div>
</template>
