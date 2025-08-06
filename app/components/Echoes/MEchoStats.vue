<script setup lang="ts">
import type { StatType } from '~/Core/Enums/StatType'
import type Echo from '~/Core/Interfaces/Echo'
import { useEchoStats } from '~/composables/echoes/UseEchoStats'

interface EchoStatsProps {
  echo: Echo
  weights: Record<StatType, number>
}

const props = defineProps<EchoStatsProps>()
const { MainStatistic, SecondaryStatistic, SubStats, IsValid } = useEchoStats(props.echo)
</script>

<template>
  <div class="w-full flex flex-col items-center gap-2">
    <MStatLine
      v-if="MainStatistic"
      v-motion-slide-left
      :delay="450"
      :stat="MainStatistic"
      :weights="weights"
      :is-main-stat="true"
    />
    <MStatLine
      v-if="SecondaryStatistic"
      v-motion-slide-left
      :delay="450"
      :stat="SecondaryStatistic"
      :weights="weights"
    />
    <div v-else class="w-full flex flex-col items-center justify-between gap-1">
      <USkeleton class="h-6 w-full" />
      <USkeleton class="h-6 w-full" />
    </div>
  </div>
  <USeparator class="w-full my-1" />
  <div class="w-full flex flex-col gap-1 h-full">
    <div v-for="idx in [...Array(5).keys()]" :key="`stat-${idx}`">
      <MStatLine
        v-if="SubStats[idx] && IsValid"
        :stat="SubStats[idx]"
        :weights="weights"
        :show-wanted-highlight="true"
      />
      <div v-else class="h-8 flex items-center justify-center">
        <USkeleton class="h-1 w-full rounded" />
      </div>
    </div>
  </div>
</template>
