<script setup lang="ts">
import type { StatType } from '~/Core/Enums/StatType'
import type Echo from '~/Core/Interfaces/Echo'

interface EchoStatsProps {
  echo: Echo | undefined
  weights?: Record<StatType, number>
}

defineProps<EchoStatsProps>()
</script>

<template>
  <MStatList
    :stats="echo?.Statistics ?? []"
    :show-roll-value="true"
    :show-wanted-highlight="true"
    :weights="weights"
  />
</template>
