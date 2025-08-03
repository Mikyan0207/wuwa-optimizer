<script setup lang="ts">
import type { Section } from '~/Core/Interfaces/Section'

interface Props {
  sections: Section[]
}

const props = defineProps<Props>()

const Stats = computed(() => {
  const totalActions = props.sections.reduce((acc, section) => acc + section.Actions.length, 0)
  const totalSections = props.sections.length
  const actionTypes = {
    actions: props.sections.reduce((acc, section) =>
      acc + section.Actions.filter(a => a.Type === 'ACTION').length, 0),
    swaps: props.sections.reduce((acc, section) =>
      acc + section.Actions.filter(a => a.Type === 'SWAP').length, 0),
  }

  const estimatedDuration = totalActions * 2 + actionTypes.swaps * 1.5

  return {
    totalActions,
    totalSections,
    actionTypes,
    estimatedDuration: Math.round(estimatedDuration),
  }
})
</script>

<template>
  <UCard class="w-full bg-neutral-900/50 backdrop-blur-sm border border-neutral-700/50">
    <div class="flex items-center justify-between">
      <h3 class="text-lg font-semibold text-white flex items-center gap-2">
        <UIcon name="i-carbon-chart-line" class="text-primary-400" />
        Rotation Statistics
      </h3>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
      <div class="text-center p-3 bg-neutral-800/50 rounded-lg border border-neutral-600/30">
        <div v-motion-slide-visible-once class="text-2xl font-bold text-green-400">
          {{ Stats.actionTypes.actions }}
        </div>
        <div class="text-xs text-neutral-400 mt-1">
          Actions
        </div>
      </div>

      <div class="text-center p-3 bg-neutral-800/50 rounded-lg border border-neutral-600/30">
        <div v-motion-slide-visible-once class="text-2xl font-bold text-purple-400">
          {{ Stats.actionTypes.swaps }}
        </div>
        <div class="text-xs text-neutral-400 mt-1">
          Swaps
        </div>
      </div>
    </div>

    <div class="mt-4 p-3 bg-primary-500/10 border border-primary-500/20 rounded-lg">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <UIcon name="i-carbon-time" class="text-primary-400" />
          <span class="text-sm text-neutral-300">Estimated Duration</span>
        </div>
        <div class="text-lg font-semibold text-primary-400">
          {{ Math.floor(Stats.estimatedDuration / 60) }}:{{ (Stats.estimatedDuration % 60).toString().padStart(2, '0') }}
        </div>
      </div>
    </div>
  </UCard>
</template>
