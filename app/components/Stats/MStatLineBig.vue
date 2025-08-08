<script setup lang="ts">
import type Statistic from '~/Core/Interfaces/Statistic'
import { StatType } from '~/Core/Enums/StatType'
import { STAT_ICONS } from '~/Core/Statistics'

interface StatLineProps {
  stat: Statistic | undefined
}

const props = withDefaults(defineProps<StatLineProps>(), {
})

const { t } = useI18n()

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

  if (!IsPercentageStat(props.stat.Type))
    return props.stat.Value.toString()

  return `${props.stat.Value.toFixed(2)}%`
})

function IsPercentageStat(statType: StatType): boolean {
  return statType !== StatType.HP
    && statType !== StatType.DEF
    && statType !== StatType.ATTACK
}
</script>

<template>
  <div class="flex flex-col items-end">
    <span
      class="truncate font-semibold text-xs text-neutral-600"
      :title="Name"
    >
      {{ Name }}
    </span>
    <div
      class="flex items-center gap-2 text-neutral-200"
    >
      <NuxtImg
        :src="`/images/icons/${Icon}`"
        class="h-6 w-6"
      />
      <div class="text-nowrap font-semibold text-lg">
        <span>
          {{ FormattedValue }}
        </span>
      </div>
    </div>
  </div>
</template>
