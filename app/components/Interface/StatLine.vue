<script setup lang="ts">
import type Statistic from '~/Core/Interfaces/Statistic'
import { StatType } from '~/Core/Enums/StatType'
import { STAT_ICONS } from '~/Core/Statistics'

const props = withDefaults(defineProps<{
  stat: Statistic
  weight?: number
  isMainStat?: boolean
  iconSize?: 'xs' | 'md'
  showLine?: boolean
  showRollValue?: boolean
  isWantedColor?: string
  showWantedHighlight?: boolean
}>(), {
  isMainStat: false,
  showLine: false,
  showRollValue: false,
  showWantedHighlight: false,
})

const { t } = useI18n()
const { CurrentCharacter } = useCharacterContext()

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

  const weightColorMap: Record<number, string> = {
    1.0: 'text-amber-500',
    0.9: 'text-orange-500',
    0.8: 'text-red-500',
    0.7: 'text-purple-500',
    0.6: 'text-indigo-500',
    0.5: 'text-blue-500',
    0.4: 'text-cyan-500',
    0.3: 'text-teal-500',
    0.2: 'text-green-500',
    0.1: 'text-lime-500',
    0.0: 'text-gray-400',
  }

  const weight = Math.floor(props.weight * 10) / 10

  return weightColorMap[weight] || weightColorMap[0.0]
})

const IsWantedStat = computed(() => {
  if (!props.showWantedHighlight) {
    return false
  }
  const statsWeights = CurrentCharacter.value?.StatsWeights
  return statsWeights?.[props.stat.Type] !== undefined && (statsWeights[props.stat.Type] ?? 0) > 0.5
})
</script>

<template>
  <div class="relative flex items-center min-w-0 w-full" :class="{ 'bg-neutral-800/75 rounded': IsWantedStat }">
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
