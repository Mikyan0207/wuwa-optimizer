<script setup lang="ts">
import type { StatType } from '~/Core/Enums/StatType'
import type Statistic from '~/Core/Interfaces/Statistic'

interface StatDisplayProps {
  stats: Statistic[]
  statsCount?: number
  weights?: Record<StatType, number>
  showRollValue?: boolean
  showWantedHighlight?: boolean
}

withDefaults(defineProps<StatDisplayProps>(), {
  statsCount: 5,
  showRollValue: false,
  showWantedHighlight: false,
})
</script>

<template>
  <div class="w-full flex flex-col gap-1">
    <div v-for="idx in [...Array(statsCount).keys()]" :key="`stat-${idx}-${stats[idx]?.Value}`">
      <MStatLine
        v-if="stats[idx]"
        v-motion-slide-left
        :delay="idx * 75"
        :stat="stats[idx]"
        :weights="weights"
        :show-roll-value="showRollValue"
        :show-wanted-highlight="showWantedHighlight"
      />
      <div v-else class="h-8 flex items-center justify-center">
        <USkeleton class="h-3 w-full rounded-sm" />
      </div>
    </div>
  </div>
</template>
