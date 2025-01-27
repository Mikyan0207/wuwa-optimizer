<script setup lang="ts">
import type IStatistic from '~/Core/Interfaces/IStatistic'
import { StatType } from '~/Core/Enums/StatType'
import { STAT_ICONS, STAT_NAMES } from '~/Core/Statistics'

export interface StatLineProps {
  stat: IStatistic
  wanted?: boolean
  showLine?: boolean
  showRollValue?: boolean
}

const props = defineProps<StatLineProps>()

const IsPercentageStat = computed(() => {
  return !(props.stat.Type === StatType.ATTACK || props.stat.Type === StatType.HP || props.stat.Type === StatType.DEF)
})
</script>

<template>
  <div class="relative w-full flex items-start justify-between gap-12">
    <div class="w-full flex items-center gap-2 text-gray-300">
      <NuxtImg :src="`/images/icons/${STAT_ICONS[stat.Type]}`" class="h-6 w-6" />
      <p class="text-truncate text-nowrap text-xs">
        {{ STAT_NAMES[stat.Type] }}
        <!-- <span v-if="showRollValue" class="min-h-4 min-w-4 rounded-full bg-white/14 text-xs">{{ GetSubStatRollScore(stat) }}</span> -->
      </p>
    </div>
    <div v-if="showLine === true" class="my-auto w-100% border-b border-gray-5 border-dashed" />
    <p class="inline-flex items-center text-nowrap" :class="{ 'text-amber': wanted === true, 'text-white': !wanted }">
      <span v-if="IsPercentageStat">{{ stat.Value.toFixed(1) }}</span>
      <span v-else>{{ stat.Value }}</span>
      <span v-if="IsPercentageStat">%</span>
    </p>
  </div>
</template>
