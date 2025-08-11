<script setup lang="ts">
import type { StatType } from '~/Core/Enums/StatType'
import type Echo from '~/Core/Interfaces/Echo'

interface EchoStatsProps {
  echo: Echo
  weights?: Record<StatType, number>
}

const props = defineProps<EchoStatsProps>()

const SubStats = computed(() => {
  if (!props.echo || props.echo.GameId === -1)
    return []

  return props.echo?.Statistics ?? []
})
</script>

<template>
  <MStatList
    :stats="SubStats"
    :show-roll-value="true"
    :show-wanted-highlight="true"
    :weights="weights"
  />
</template>
