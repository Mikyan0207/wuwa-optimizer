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
  if (props.iconSize === undefined || props.iconSize === 'md') {
    return 'mr-6'
  }

  return 'mr-4'
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
  <div class="relative w-full flex items-center justify-between gap-2">
    <div class="flex items-center gap-2 text-gray-300">
      <NuxtImg :src="`/images/icons/${STAT_ICONS[stat.Type]}`" :class="GetIconSize" />
      <p class="text-nowrap" :class="GetMargin">
        {{ GetStatName }}
      </p>
    </div>
    <div v-if="showLine === true" class="my-auto h-[1px] w-full bg-white/14" />
    <p class="h-full flex items-center justify-center text-nowrap font-semibold">
      <span :class="[GetStatColorByRollValue, isWantedColor]">{{ stat.Value.toFixed(1) }}</span>
      <span v-if="IsPercentageStat" :class="[GetStatColorByRollValue, isWantedColor]">%</span>
    </p>
  </div>
</template>
