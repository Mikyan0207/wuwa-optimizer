<script setup lang="ts">
import type { SelectMenuItem } from '@nuxt/ui'
import type Echo from '~/Core/Interfaces/Echo'
import { EchoCost } from '~/Core/Enums/EchoCost'
import { Rarity } from '~/Core/Enums/Rarity'
import { StatType } from '~/Core/Enums/StatType'
import { FOUR_COST_MAIN_STATS_VALUES, FOUR_COST_SECONDARY_STATS_VALUES, IsMainStatType, IsSecondaryStatType, IsSubStatType, ONE_COST_MAIN_STATS_VALUES, ONE_COST_SECONDARY_STATS_VALUES, STAT_NAMES, SUB_STAT_VALUES, THREE_COST_MAIN_STATS_VALUES, THREE_COST_SECONDARY_STATS_VALUES } from '~/Core/Statistics'
import { GetEchoCostText } from '~/Core/Utils/EchoUtils'

interface StatsConfigurationStepProps {
  displayedEcho: Echo | undefined
  selectedSonataName: string
  echoSlot: number
  state: {
    Level: number
    Rarity: Rarity
    MainStat: {
      Type: StatType
      Value: string
    }
    SecondaryStat: {
      Type: StatType
      Value: string
    }
    SubStats: Array<{
      Type: StatType
      Value: string
    }>
    Cost: EchoCost
  }
}

const props = defineProps<StatsConfigurationStepProps>()

const emit = defineEmits<{
  'update:state': [state: StatsConfigurationStepProps['state']]
}>()

const { t } = useI18n()

const LevelOptions = Array.from({ length: 25 }).fill(0).map((_, idx) => {
  return {
    Label: `+${idx + 1}`,
    Value: idx + 1,
  }
}).reverse()

const RarityOptions = [{
  label: '5✧',
  type: Rarity.FIVE_STARS.toString(),
}, {
  label: '4✧',
  type: Rarity.FOUR_STARS.toString(),
}, {
  label: '3✧',
  type: Rarity.THREE_STARS.toString(),
}, {
  label: '2✧',
  type: Rarity.TWO_STARS.toString(),
}] as SelectMenuItem[]

const MainStatisticsOptions = computed(() => Object.entries(STAT_NAMES)
  .filter(([key, _]) => key !== StatType.NONE)
  .filter(([key, _]) => IsMainStatType(key as unknown as keyof typeof STAT_NAMES, props.state.Cost))
  .map(([key, value]) => {
    const k = key as unknown as keyof typeof STAT_NAMES
    return {
      Label: value,
      Type: k,
    }
  }))

const SecondaryStatisticsOptions = computed(() => Object.entries(STAT_NAMES)
  .filter(([key, _]) => key !== StatType.NONE)
  .filter(([key, _]) => IsSecondaryStatType(key as unknown as keyof typeof STAT_NAMES, props.state.Cost))
  .map(([key, value]) => {
    const k = key as unknown as keyof typeof STAT_NAMES
    return {
      Label: value,
      Type: k,
    }
  }))

const StatisticsOptions = Object.entries(STAT_NAMES)
  .filter(([key, _]) => key !== StatType.NONE)
  .filter(([key, _]) => IsSubStatType(key as unknown as keyof typeof STAT_NAMES))
  .map(([key, value]) => {
    const k = key as unknown as keyof typeof STAT_NAMES
    return {
      Type: k,
      Label: value,
    }
  })

function GetMainStatValue() {
  if (!props.state.MainStat?.Type || props.state.MainStat.Type === StatType.NONE) {
    const newState = { ...props.state }
    newState.MainStat.Value = '0'
    emit('update:state', newState)
    return
  }

  let value = 0
  switch (props.state.Cost) {
    case EchoCost.FOUR_COST:
      value = FOUR_COST_MAIN_STATS_VALUES[props.state.MainStat.Type as StatType] || 0
      break
    case EchoCost.THREE_COST:
      value = THREE_COST_MAIN_STATS_VALUES[props.state.MainStat.Type as StatType] || 0
      break
    case EchoCost.ONE_COST:
      value = ONE_COST_MAIN_STATS_VALUES[props.state.MainStat.Type as StatType] || 0
      break
  }

  const newState = { ...props.state }
  newState.MainStat.Value = value.toFixed(1)
  emit('update:state', newState)
}

function GetSecondaryStatValue() {
  if (!props.state.SecondaryStat?.Type || props.state.SecondaryStat.Type === StatType.NONE) {
    const newState = { ...props.state }
    newState.SecondaryStat.Value = '0'
    emit('update:state', newState)
    return
  }

  let value = 0
  switch (props.state.Cost) {
    case EchoCost.FOUR_COST:
      value = FOUR_COST_SECONDARY_STATS_VALUES[props.state.SecondaryStat.Type as StatType] || 0
      break
    case EchoCost.THREE_COST:
      value = THREE_COST_SECONDARY_STATS_VALUES[props.state.SecondaryStat.Type as StatType] || 0
      break
    case EchoCost.ONE_COST:
      value = ONE_COST_SECONDARY_STATS_VALUES[props.state.SecondaryStat.Type as StatType] || 0
      break
  }

  const newState = { ...props.state }
  newState.SecondaryStat.Value = value.toFixed(1)
  emit('update:state', newState)
}

function IsDisabled(type: string) {
  return type === undefined || type === StatType.NONE || type === ''
}

function GetSubStatsValues(type: string) {
  return SUB_STAT_VALUES[type as StatType]?.map(st => st.toFixed(1)) || []
}

function UpdateState(updates: Partial<StatsConfigurationStepProps['state']>) {
  const newState = { ...props.state, ...updates }
  emit('update:state', newState)
}

function UpdateMainStatType(value: StatType) {
  const newState = { ...props.state }
  newState.MainStat.Type = value
  newState.MainStat.Value = '0'
  emit('update:state', newState)
  GetMainStatValue()
}

function UpdateSecondaryStatType(value: StatType) {
  const newState = { ...props.state }
  newState.SecondaryStat.Type = value
  newState.SecondaryStat.Value = '0'
  emit('update:state', newState)
  GetSecondaryStatValue()
}

function UpdateSubStatType(index: number, value: StatType) {
  if (value === undefined || value === StatType.NONE)
    return

  const newState = { ...props.state }
  newState.SubStats[index] = { Type: value as StatType, Value: '0' }
  emit('update:state', newState)
}

function UpdateSubStatValue(index: number, value: string) {
  const newState = { ...props.state }

  newState.SubStats[index] = {
    ...newState.SubStats[index],
    Value: value,
  } as { Type: StatType, Value: string }

  emit('update:state', newState)
}
</script>

<template>
  <div class="h-full flex flex-col">
    <div class="p-4 border-b border-white/10">
      <div class="flex items-center gap-3">
        <NuxtImg :src="`/images/echoes/${displayedEcho?.Icon}`" class="w-20 h-20 rounded-lg" />
        <div class="flex-1">
          <h4 class="text-white font-semibold text-lg mb-1">
            {{ t(`${displayedEcho?.GameId}_name`) }}
          </h4>
          <div class="flex items-center gap-2 mb-2">
            <UBadge variant="soft" color="info" size="sm">
              Cost {{ GetEchoCostText(displayedEcho?.Cost ?? EchoCost.FOUR_COST) }}
            </UBadge>
            <UBadge v-if="displayedEcho?.IsNightmare" variant="soft" color="warning" size="sm">
              Nightmare
            </UBadge>
            <UBadge variant="soft" color="warning" size="sm">
              Slot {{ echoSlot + 1 }}
            </UBadge>
          </div>
          <div class="flex items-center gap-1.5 overflow-hidden">
            <div
              class="flex items-center gap-1.5 bg-black/30 border border-white/10 rounded-md px-2 py-1 flex-shrink-0"
            >
              <NuxtImg :src="`/images/icons/${displayedEcho?.Sonata.find(s => s.Name === selectedSonataName)?.Icon || ''}`" class="h-4 w-4 object-contain" />
              <span class="text-xs font-medium text-white/90">{{ selectedSonataName }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Stats Form -->
    <div class="overflow-y-auto scrollbar-hidden p-3 pb-24 min-h-0" style="height: calc(100vh - 300px);">
      <div class="space-y-6">
        <!-- Enhancement Section -->
        <div>
          <div class="flex items-center gap-3 mb-4">
            <div class="flex-1 h-px bg-white/20" />
            <h3 class="text-white font-semibold text-lg">
              Enhancement
            </h3>
            <div class="flex-1 h-px bg-white/20" />
          </div>
          <div class="grid grid-cols-2 gap-3">
            <UFormField name="Level" label="Enhancement Level">
              <USelectMenu
                :model-value="state.Level ?? 25"
                :items="LevelOptions"
                value-key="Value"
                label-key="Label"
                class="w-full"
                @update:model-value="(value) => UpdateState({ Level: value })"
              />
            </UFormField>
            <UFormField name="Rarity" label="Rarity">
              <USelectMenu
                :model-value="state.Rarity"
                :items="RarityOptions"
                value-key="type"
                class="w-full"
                @update:model-value="(value) => UpdateState({ Rarity: value as Rarity })"
              />
            </UFormField>
          </div>
        </div>

        <!-- Primary Statistics Section -->
        <div>
          <div class="flex items-center gap-3 mb-4">
            <div class="flex-1 h-px bg-white/20" />
            <h3 class="text-white font-semibold text-lg">
              Primary Statistics
            </h3>
            <div class="flex-1 h-px bg-white/20" />
          </div>
          <div class="space-y-3">
            <!-- Main Stat -->
            <div class="bg-black/20 border border-white/10 rounded-br-lg p-3">
              <label class="text-sm font-medium text-white/80 mb-2 block">Main Statistic</label>
              <div class="grid grid-cols-2 gap-3">
                <UFormField name="MainStat.Type">
                  <USelectMenu
                    :model-value="state.MainStat.Type"
                    value-key="Type"
                    label-key="Label"
                    :items="MainStatisticsOptions"
                    class="w-full"
                    @update:model-value="(value) => UpdateMainStatType(value as StatType)"
                  />
                </UFormField>
                <UInput
                  :model-value="state.MainStat.Value"
                  readonly
                  class="bg-black/30 border-white/20 text-primary-400 font-semibold"
                  placeholder="Value"
                />
              </div>
            </div>

            <!-- Secondary Stat -->
            <div class="bg-black/20 border border-white/10 rounded-br-lg p-3">
              <label class="text-sm font-medium text-white/80 mb-2 block">Secondary Statistic</label>
              <div class="grid grid-cols-2 gap-3">
                <UFormField name="SecondaryStat.Type">
                  <USelectMenu
                    :model-value="state.SecondaryStat.Type"
                    value-key="Type"
                    label-key="Label"
                    :items="SecondaryStatisticsOptions"
                    class="w-full"
                    @update:model-value="(value) => UpdateSecondaryStatType(value as StatType)"
                  />
                </UFormField>
                <UInput
                  :model-value="state.SecondaryStat.Value"
                  readonly
                  class="bg-black/30 border-white/20 text-primary-400 font-semibold"
                  placeholder="Value"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Sub Statistics Section -->
        <div>
          <div class="flex items-center gap-3 mb-4">
            <div class="flex-1 h-px bg-white/20" />
            <h3 class="text-white font-semibold text-lg">
              Sub Statistics
            </h3>
            <div class="flex-1 h-px bg-white/20" />
          </div>
          <div class="space-y-3">
            <div v-for="(st, idx) in state.SubStats" :key="idx" class="bg-black/20 border border-white/10 rounded-br-lg p-3">
              <div class="mb-3">
                <UBadge variant="soft" color="primary" size="md">
                  Roll {{ idx + 1 }}
                </UBadge>
              </div>
              <div class="grid grid-cols-2 gap-3">
                <UFormField :name="`SubStats.${idx}.Type`">
                  <USelectMenu
                    :model-value="st.Type"
                    label-key="Label"
                    value-key="Type"
                    :items="StatisticsOptions"
                    class="w-full"
                    @update:model-value="(value) => UpdateSubStatType(idx, value as StatType)"
                  />
                </UFormField>
                <UFormField :name="`SubStats.${idx}.Value`">
                  <USelect
                    :model-value="st.Value"
                    :items="GetSubStatsValues(st.Type)"
                    class="w-full"
                    :disabled="IsDisabled(st.Type)"
                    @update:model-value="(value) => UpdateSubStatValue(idx, value)"
                  />
                </UFormField>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
