<script setup lang="ts">
import type IStatistic from '~/Core/Interfaces/IStatistic'
import { StatType } from '~/Core/Enums/StatType'
import { STAT_ICONS, STAT_NAMES } from '~/Core/Statistics'

const props = defineProps<{
  stat: IStatistic
  wanted?: boolean
  iconSize?: 'xs' | 'md'
  showLine?: boolean
  showRollValue?: boolean
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
    return 'mr6'
  }

  return 'mr-4'
})
</script>

<template>
  <div class="relative w-full flex items-center justify-between gap-2">
    <div class="flex items-center gap-2 text-gray-300">
      <NuxtImg :src="`/images/icons/${STAT_ICONS[stat.Type]}`" :class="GetIconSize" />
      <p class="text-ellipsis text-nowrap text-xs" :class="GetMargin">
        {{ STAT_NAMES[stat.Type] }}
      </p>
    </div>
    <div v-if="showLine === true" class="my-auto h-1px w-full bg-white/14" />
    <p class="h-full flex items-center justify-center text-nowrap text-xs" :class="{ 'text-amber': wanted === true, 'text-white': !wanted }">
      <span v-if="IsPercentageStat">{{ stat.Value.toFixed(1) }}</span>
      <span v-else>{{ stat.Value }}</span>
      <span v-if="IsPercentageStat">%</span>
    </p>
  </div>
</template>
