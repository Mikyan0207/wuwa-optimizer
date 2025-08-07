<script setup lang="ts">
import type { StatType } from '~/Core/Enums/StatType'
import type Echo from '~/Core/Interfaces/Echo'

interface EchoStatsProps {
  echo: Echo
  weights: Record<StatType, number>
}

const props = defineProps<EchoStatsProps>()

const MainStatistic = computed(() => {
  return props.echo?.MainStatistic
})

const SecondaryStatistic = computed(() => {
  return props.echo?.SecondaryStatistic
})

const SubStats = computed(() => {
  if (!props.echo || props.echo.GameId === -1)
    return []

  return props.echo?.Statistics ?? []
})
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
      :show-roll-value="false"
    />
    <MStatLine
      v-if="SecondaryStatistic"
      v-motion-slide-left
      :delay="450"
      :stat="SecondaryStatistic"
      :weights="weights"
      :show-roll-value="false"
    />
    <div v-else class="w-full flex flex-col items-center justify-between gap-1">
      <USkeleton class="h-6 w-full" />
      <USkeleton class="h-6 w-full" />
    </div>
  </div>
  <USeparator class="w-full my-1" />
  <MStatList
    :stats="SubStats"
    :weights="weights"
    :show-roll-value="true"
    :show-wanted-highlight="true"
  />
</template>
