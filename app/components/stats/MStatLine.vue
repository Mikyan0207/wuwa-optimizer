<script setup lang="ts">
import type { StatType } from '~/Core/Enums/StatType'
import type Statistic from '~/Core/Interfaces/Statistic'
import { useStat } from '~/composables/stats/UseStat'

interface StatLineProps {
  stat: Statistic | undefined
  weights: Record<StatType, number>
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

const {
  Name,
  Icon,
  FormattedValue,
  Weight,
  GetWeightColor,
} = useStat(props.stat, props.weights, props.isMainStat)

const ShouldHighlightBorder = computed(() => {
  return Weight.value !== undefined && Weight.value >= 0.6 && props.showWantedHighlight
})

const WeightColor = computed(() => {
  if (props.showRollValue === false) {
    return ''
  }

  return GetWeightColor()
})
</script>

<template>
  <div
    class="relative flex items-center min-w-0 h-min w-full px-2 py-1"
    :class="{ 'bg-neutral-800/75 rounded': ShouldHighlightBorder }"
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
