<script setup lang="ts">
import type { StatType } from '~/Core/Enums/StatType'
import type Echo from '~/Core/Interfaces/Echo'
import { useCharacter } from '~/composables/characters/UseCharacter'

interface EchoStatsProps {
  echo: Echo
  weights?: Record<StatType, number>
}

const props = defineProps<EchoStatsProps>()

const { CurrentCharacter } = useCharacter()

const SubStats = computed(() => {
  if (!props.echo || props.echo.GameId === -1)
    return []

  return props.echo?.Statistics ?? []
})

const EffectiveWeights = computed(() => {
  return props.weights || CurrentCharacter.value?.StatsWeights
})
</script>

<template>
  <MStatList
    :stats="SubStats"
    :show-roll-value="true"
    :show-wanted-highlight="true"
    :weights="EffectiveWeights"
  />
</template>
