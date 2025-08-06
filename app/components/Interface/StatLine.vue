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
  showWantedHighlight?: boolean
}>(), {
  isMainStat: false,
  showLine: false,
  showWantedHighlight: false,
  showWantedLine: false,
})

const { CurrentCharacter } = useCharacterContext()
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

const Weight = computed(() => {
  if (CurrentCharacter.value.StatsWeights === undefined) {
    return 0
  }

  let w = CurrentCharacter.value.StatsWeights[props.stat.Type]

  if (w === 0) {
    const percentageStatType = GetPercentageStatType(props.stat.Type)
    if (percentageStatType) {
      const percentageWeight = CurrentCharacter.value.StatsWeights[percentageStatType]
      if (percentageWeight && percentageWeight > 0) {
        w = percentageWeight
      }
    }
  }

  return w
})

const HightlightColor = computed(() => {
  if (props.isMainStat) {
    return ''
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

  const w = Weight.value ?? 0
  const weight = Math.floor(w * 10) / 10

  return weightColorMap[weight] || weightColorMap[0.0]
})

function GetPercentageStatType(statType: string): string | null {
  switch (statType) {
    case 'ATTACK':
      return 'ATTACK_PERCENTAGE'
    case 'HP':
      return 'HP_PERCENTAGE'
    case 'DEF':
      return 'DEF_PERCENTAGE'
    default:
      return null
  }
}

const ShowBorder = computed(() => {
  return Weight.value !== undefined && Weight.value >= 0.5 && props.showWantedHighlight
})
</script>

<template>
  <div class="relative flex items-center min-w-0 w-full px-2 py-1" :class="{ 'bg-neutral-800/75 rounded': ShowBorder }">
    <div class="flex items-center gap-1 text-gray-300 flex-shrink-0 min-w-0">
      <NuxtImg :src="`/images/icons/${STAT_ICONS[stat.Type]}`" :class="GetIconSize" />
      <span class="text-sm truncate" :class="GetMargin" :title="GetStatName">
        {{ GetStatName }}
      </span>
    </div>
    <div v-if="showLine === true" class="flex-1 h-[1px] bg-white/14 min-w-[12px] mx-2" />
    <div class="flex items-center text-nowrap font-semibold flex-shrink-0 text-sm" :class="[HightlightColor]">
      <span>{{ IsPercentageStat ? isMainStat ? stat.Value.toFixed(2) : stat.Value.toFixed(1) : stat.Value }}</span>
      <span v-if="IsPercentageStat">%</span>
    </div>
  </div>
</template>
