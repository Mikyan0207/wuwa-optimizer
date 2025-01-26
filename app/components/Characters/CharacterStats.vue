<script setup lang="ts">
import type IStatistic from '~/Core/Interfaces/IStatistic'

export interface CharacterStatsProps {
  stats: IStatistic[]
}

defineProps<CharacterStatsProps>()
</script>

<template>
  <div class="w-full flex flex-col items-start gap-1">
    <StatLine v-for="st in stats" :key="st.Type" :stat="st" />
  </div>
</template>
