<script setup lang="ts">
import type { Section } from '~/Core/Interfaces/Section'

defineProps<{
  section: Section
}>()
</script>

<template>
  <USeparator
    v-motion-slide-top
    :label="section.Title"
    color="primary"
    size="sm"
    :ui="{
      label: 'text-xl font-bold tracking-tight uppercase font-noto',
    }"
  />
  <div v-for="(as, idx) in section.Actions" :key="`${section.Title}-${idx}`" class="w-full">
    <ActionCard
      v-if="as.Type === 'ACTION'"
      :section="section"
      :action="as"
    />
    <SwapCard
      v-else
      :section="section"
      :action="as"
    />
  </div>
</template>
