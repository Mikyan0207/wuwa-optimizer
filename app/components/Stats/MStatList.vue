<script setup lang="ts">
import type { StatType } from '~/Core/Enums/StatType'
import type Statistic from '~/Core/Interfaces/Statistic'
import { useCharacter } from '~/composables/characters/UseCharacter'

interface StatDisplayProps {
  stats: Statistic[]
  statsCount?: number
  weights?: Record<StatType, number>
  showRollValue?: boolean
  showWantedHighlight?: boolean
}

const props = withDefaults(defineProps<StatDisplayProps>(), {
  statsCount: 5,
  showRollValue: false,
  showWantedHighlight: false,
})

const { StatsWeights } = useCharacter()

const EffectiveWeights = computed(() =>
  props.weights || StatsWeights.value,
)
</script>

<template>
  <div class="w-full flex flex-col gap-1">
    <div v-for="idx in [...Array(statsCount).keys()]" :key="`stat-${idx}-${stats[idx]?.Value}`">
      <MStatLine
        v-if="stats[idx]"
        v-motion-slide-left
        :delay="idx * 125"
        :stat="stats[idx]"
        :weights="EffectiveWeights"
        :show-roll-value="showRollValue"
        :show-wanted-highlight="showWantedHighlight"
      />
      <div v-else class="h-8 flex items-center justify-center">
        <USkeleton class="h-1 w-full rounded" />
      </div>
    </div>
  </div>
</template>
