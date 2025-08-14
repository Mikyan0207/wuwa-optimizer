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
    return undefined

  return t(`label_stat_${props.stat.Type.toLowerCase()}`)
})

const Icon = computed(() => {
  if (!props.stat)
    return undefined

  return STAT_ICONS[props.stat.Type]
})

const FormattedValue = computed(() => {
  if (!props.stat)
    return undefined

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
      v-if="Name"
      class="truncate font-semibold text-xs text-neutral-600"
      :title="Name"
    >
      {{ Name }}
    </span>
    <USkeleton v-else class="h-3 w-10 rounded-sm" />
    <div
      class="flex items-center gap-2 text-neutral-200"
    >
      <NuxtImg
        v-if="Icon"
        :src="`/images/icons/${Icon}`"
        class="h-6 w-6"
      />
      <USkeleton v-else class="h-6 w-6 rounded-sm" />
      <div v-if="FormattedValue" class="text-nowrap font-semibold text-lg">
        <span>
          {{ FormattedValue }}
        </span>
      </div>
      <USkeleton v-else class="h-3 w-18 rounded-sm" />
    </div>
  </div>
</template>
