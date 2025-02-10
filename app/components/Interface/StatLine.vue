<script setup lang="ts">
import type IStatistic from '~/Core/Interfaces/IStatistic'
import { StatType } from '~/Core/Enums/StatType'
import { STAT_ICONS, STAT_NAMES, SUB_STAT_VALUES } from '~/Core/Statistics'

const props = defineProps<{
  stat: IStatistic
  isMainStat?: boolean
  iconSize?: 'xs' | 'md'
  showLine?: boolean
  showRollValue?: boolean
  isWanted?: boolean
}>()

const IsPercentageStat = computed(() => {
  return !(props.stat.Type === StatType.ATTACK || props.stat.Type === StatType.HP || props.stat.Type === StatType.DEF)
})

const GetIconSize = computed(() => {
  if (props.iconSize === undefined || props.iconSize === 'md') {
    return 'h-6 w-6'
  }

  return 'h-4 w-4'
})

const GetMargin = computed(() => {
  if (props.iconSize === undefined || props.iconSize === 'md') {
    return 'mr-6'
  }

  return 'mr-4'
})

const GetStatColorByRollValue = computed(() => {
  if (!props.showRollValue || props.isMainStat) {
    return ''
  }

  const t = props.stat.Type
  const v = props.stat.Value

  const values = SUB_STAT_VALUES[t]

  if (!values) {
    return ''
  }

  const numRanges = 3
  const rangeSize = (values[values.length - 1]! - values[0]!) / numRanges

  if (v <= values[0]! + rangeSize) {
    return 'text-blue-500'
  }
  else if (v <= values[0]! + rangeSize * 2) {
    return 'text-green-500'
  }
  else if (v <= values[0]! + rangeSize * 3) {
    return 'text-amber-500'
  }
  else {
    return 'text-blue-500'
  }
})
</script>

<template>
  <div class="relative w-full flex items-center justify-between gap-2">
    <div class="flex items-center gap-2 text-gray-300">
      <NuxtImg :src="`/images/icons/${STAT_ICONS[stat.Type]}`" :class="GetIconSize" />
      <p class="text-nowrap text-xs" :class="GetMargin">
        {{ STAT_NAMES[stat.Type] }}
      </p>
    </div>
    <div v-if="showLine === true" class="my-auto h-[1px] w-full bg-white/14" />
    <p class="h-full flex items-center justify-center text-nowrap font-semibold text-xs">
      <span :class="[GetStatColorByRollValue, isWanted === true ? 'text-amber-400' : '']">{{ stat.Value.toFixed(1) }}</span>
      <span v-if="IsPercentageStat" :class="[GetStatColorByRollValue, isWanted === true ? 'text-amber-400' : '']">%</span>
    </p>
  </div>
</template>
