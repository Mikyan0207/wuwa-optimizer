<script setup lang="ts">
import type Statistic from '~/Core/Interfaces/Statistic'
import { useCharacter } from '~/composables/characters/UseCharacter'
import { StatType } from '~/Core/Enums/StatType'
import { STAT_ICONS } from '~/Core/Statistics'

interface StatLineProps {
  stat: Statistic | undefined
  weights?: Record<StatType, number>
  isMainStat?: boolean
  showLine?: boolean
  showWantedHighlight?: boolean
  showRollValue?: boolean
}

const props = withDefaults(defineProps<StatLineProps>(), {
  isMainStat: false,
  showLine: true,
  showWantedHighlight: false,
  showRollValue: true,
})

const { t } = useI18n()
const { StatsWeights } = useCharacter()

const EffectiveWeights = computed(() =>
  props.weights || StatsWeights.value,
)

const Name = computed(() => {
  if (!props.stat)
    return ''

  return t(`label_stat_${props.stat.Type.toLowerCase()}`)
})

const Icon = computed(() => {
  if (!props.stat)
    return ''

  return STAT_ICONS[props.stat.Type]
})

const FormattedValue = computed(() => {
  if (!props.stat)
    return ''

  const isMainStat = props.isMainStat

  if (!IsPercentageStat(props.stat.Type))
    return props.stat.Value.toString()

  const decimals = isMainStat === true ? 2 : 1
  return `${props.stat.Value.toFixed(decimals)}%`
})

const Weight = computed(() => {
  const statValue = props.stat
  const weightsValue = EffectiveWeights.value

  if (!statValue || !weightsValue)
    return 0
  return weightsValue[statValue.Type] || 0
})

const ShouldHighlightBorder = computed(() => {
  return Weight.value !== undefined && Weight.value >= 0.6 && props.showWantedHighlight
})

const WeightColor = computed(() => {
  if (props.showRollValue === false) {
    return ''
  }

  const weight = Math.floor(Weight.value * 10) / 10
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

  return weightColorMap[weight] || weightColorMap[0.0]
})

function IsPercentageStat(statType: StatType): boolean {
  return statType !== StatType.HP
    && statType !== StatType.DEF
    && statType !== StatType.ATTACK
}
</script>

<template>
  <div
    class="relative flex items-center min-w-0 h-min w-full px-2 py-1"
    :class="{ 'bg-neutral-600/25 rounded': ShouldHighlightBorder }"
  >
    <div class="flex items-center gap-1 text-gray-300 flex-shrink-0 min-w-0">
      <NuxtImg
        :src="`/images/icons/${Icon}`"
        class="h-6 w-6"
      />
      <span
        class="text-sm truncate"
        :title="Name"
      >
        {{ Name }}
      </span>
    </div>
    <div
      v-if="showLine"
      class="flex-1 h-[1px] bg-white/14 min-w-[12px] mx-2"
    />
    <div
      class="flex items-center text-nowrap font-semibold flex-shrink-0 text-sm"
      :class="WeightColor"
    >
      {{ FormattedValue }}
    </div>
  </div>
</template>
