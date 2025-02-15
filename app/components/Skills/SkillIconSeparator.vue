<script setup lang="ts">
import type Skill from '~/Core/Interfaces/Skill'

defineProps<{
  skill?: Skill
}>()
</script>

<template>
  <div
    class="h-[1px] w-full"
    :class="{ 'bg-gold-500': skill?.Unlocked, 'bg-white/7': !skill?.Unlocked }"
  />
</template>
