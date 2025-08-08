<script setup lang="ts">
import type Echo from '~/Core/Interfaces/Echo'

interface EchoStatsProps {
  echo: Echo
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
  />
</template>
