<script setup lang="ts">
import type Statistic from '~/Core/Interfaces/Statistic'
import { StatType } from '~/Core/Enums/StatType'
import { STAT_ICONS } from '~/Core/Statistics'

const props = defineProps<{
  stat: Statistic
  weight?: number
  isMainStat?: boolean
  iconSize?: 'xs' | 'md'
  showLine?: boolean
  showRollValue?: boolean
  isWantedColor?: string
}>()

const { t } = useI18n()

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
  return ''
})

const GetStatName = computed(() => {
  return t(`label_stat_${props.stat.Type.toLowerCase()}`)
})

const GetStatColorByRollValue = computed(() => {
  if (!props.showRollValue || props.isMainStat) {
    return ''
  }

  if (props.weight === undefined) {
    return 'text-gray-400'
  }

  if (props.weight >= 1.0) {
    return 'text-amber-500'
  }
  else if (props.weight >= 0.75) {
    return 'text-purple-500'
  }
  else if (props.weight >= 0.5) {
    return 'text-blue-500'
  }
  else if (props.weight >= 0.25) {
    return 'text-green-500'
  }
  else if (props.weight === 0.1) {
    return 'text-gold-500'
  }
  else {
    return 'text-gray-400'
  }
})
</script>

<template>
  <div class="relative flex items-center min-w-0 w-full">
    <div class="flex items-center gap-1 text-gray-300 flex-shrink-0 min-w-0">
      <NuxtImg :src="`/images/icons/${STAT_ICONS[stat.Type]}`" :class="GetIconSize" />
      <p class="text-sm truncate" :class="GetMargin" :title="GetStatName">
        {{ GetStatName }}
      </p>
    </div>
    <div v-if="showLine === true" class="flex-1 h-[1px] bg-white/14 min-w-[12px] mx-2" />
    <p class="flex items-center text-nowrap font-semibold flex-shrink-0 text-sm">
      <span :class="[GetStatColorByRollValue, isWantedColor]">{{ IsPercentageStat ? isMainStat ? stat.Value.toFixed(2) : stat.Value.toFixed(1) : stat.Value }}</span>
      <span v-if="IsPercentageStat" :class="[GetStatColorByRollValue, isWantedColor]">%</span>
    </p>
  </div>
</template>
