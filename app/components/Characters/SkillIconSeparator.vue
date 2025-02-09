<script setup lang="ts">
import type { ISkill } from '~/Core/Interfaces/ISkill'

defineProps<{
  skill?: ISkill
}>()
</script>

<template>
  <div
    class="h-[1px] w-full"
    :class="{ 'bg-white/75': skill?.Unlocked, 'bg-white/7': !skill?.Unlocked }"
  />
</template>
