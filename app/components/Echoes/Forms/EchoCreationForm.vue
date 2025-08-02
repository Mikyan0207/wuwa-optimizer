<script setup lang="ts">
import type { SelectMenuItem } from '@nuxt/ui'
import type Echo from '~/Core/Interfaces/Echo'
import type Sonata from '~/Core/Interfaces/Sonata'
import { z } from 'zod'
import { TemplateEchoes } from '~/Core/Echoes'
import { EchoCost } from '~/Core/Enums/EchoCost'
import { Rarity } from '~/Core/Enums/Rarity'
import { StatType } from '~/Core/Enums/StatType'
import { Sonatas_1_0, Sonatas_2_0 } from '~/Core/Sonatas'
import { FOUR_COST_MAIN_STATS_VALUES, FOUR_COST_SECONDARY_STATS_VALUES, IsMainStatType, IsSecondaryStatType, IsSubStatType, ONE_COST_MAIN_STATS_VALUES, ONE_COST_SECONDARY_STATS_VALUES, STAT_NAMES, SUB_STAT_VALUES, THREE_COST_MAIN_STATS_VALUES, THREE_COST_SECONDARY_STATS_VALUES } from '~/Core/Statistics'
import { GetBackgroundColor, GetHighlightColor, GetSecondaryColor } from '~/Core/Utils/ColorUtils'
import { GetEchoCostText } from '~/Core/Utils/EchoUtils'

const props = defineProps<{
  echoSlot: number
  open?: boolean
}>()

const emits = defineEmits<{
  close: []
}>()

const { t } = useI18n()
const EchoesStore = useEchoesStore()
const { CurrentCharacter, UpdateEcho } = useCharacterContext()

const SelectedSonataEffect = ref<Sonata | undefined>(undefined)
const SearchValue = ref<string>('')
const SelectedCostFilter = ref<EchoCost | undefined>(undefined)

const FilteredEchoes = computed(() => {
  return TemplateEchoes
    .filter((echo: Echo) => {
      const matchesSonata = SelectedSonataEffect.value ? echo.Sonata.some(sonata => sonata.Name === SelectedSonataEffect.value?.Name) : true
      const matchesSearch = t(`${echo.Id}_name`).toLowerCase().includes(SearchValue.value.toLowerCase())
      const matchesCost = SelectedCostFilter.value ? echo.Cost === SelectedCostFilter.value : true
      return matchesSonata && matchesSearch && matchesCost
    })
})

const EditEchoSchema = z.object({
  EchoId: z.number().min(-1, 'Select a valid Echo.'),
  Cost: z.nativeEnum(EchoCost).default(EchoCost.FOUR_COST),
  Level: z.number().min(0).max(25).default(25),
  Rarity: z.nativeEnum(Rarity).default(Rarity.FIVE_STARS),
  Sonata: z.object({
    Name: z.string().min(1, 'Select a Sonata.'),
  }),
  MainStat: z.object({
    Type: z.nativeEnum(StatType).default(StatType.NONE),
    Value: z.string().min(1, 'Main stat value is required.'),
  }),
  SecondaryStat: z.object({
    Type: z.nativeEnum(StatType).default(StatType.NONE),
    Value: z.string().min(1, 'Secondary stat value is required.'),
  }),
  SubStats: z.array(z.object({
    Type: z.nativeEnum(StatType).default(StatType.NONE),
    Value: z.string().default('0'),
  })).min(1, 'At least one sub stat is required.'),
})

type FormSchema = z.output<typeof EditEchoSchema>

const State = reactive<FormSchema>({
  EchoId: -1,
  Rarity: Rarity.FIVE_STARS,
  Level: 25,
  MainStat: {
    Type: StatType.NONE,
    Value: '0',
  },
  SecondaryStat: {
    Type: StatType.NONE,
    Value: '0',
  },
  Cost: EchoCost.FOUR_COST,
  Sonata: {
    Name: '',
  },
  SubStats: Array.from({ length: 5 }, () => ({
    Type: StatType.NONE,
    Value: '0',
  })),
})

const DisplayedEcho = ref<Echo | undefined>(undefined)

const CurrentStep = ref<number>(0)

const IsFormValid = computed(() => {
  if (CurrentStep.value === 0) {
    return State.EchoId !== -1
  }
  if (CurrentStep.value === 1) {
    return State.EchoId !== -1 && State.Sonata.Name !== ''
  }
  return State.EchoId !== -1
    && State.Sonata.Name !== ''
    && State.MainStat.Type !== StatType.NONE
    && State.SecondaryStat.Type !== StatType.NONE
})

function SelectSonataFilter(sonata: Sonata) {
  if (sonata.Name === SelectedSonataEffect.value?.Name) {
    SelectedSonataEffect.value = undefined
  }
  else {
    SelectedSonataEffect.value = sonata
  }
}

function SelectCostFilter(cost: EchoCost | undefined) {
  if (cost === SelectedCostFilter.value) {
    SelectedCostFilter.value = undefined
  }
  else {
    SelectedCostFilter.value = cost
  }
}

function SelectEcho(echoId: number, cost: EchoCost) {
  State.EchoId = echoId
  State.Cost = cost
  DisplayedEcho.value = EchoesStore.Get(echoId)
  NextStep()
}

function NextStep() {
  if (CurrentStep.value < 2) {
    CurrentStep.value++
  }
}

function PreviousStep() {
  if (CurrentStep.value > 0) {
    CurrentStep.value--
  }
}

function SelectSonata(sonata: Sonata) {
  State.Sonata.Name = sonata.Name
  NextStep()
}

function HighlightNumbers(text: string) {
  return text.replace(/(\+\d+(?:\.\d+)?%?|\d+(?:\.\d+)?%)/g, '<span class="text-primary-400 font-semibold">$1</span>')
}

function OnSubmit() {
  if (!IsFormValid.value) {
    return
  }

  const e = unref(EchoesStore.Get(State.EchoId))

  if (!e) {
    return OnClose()
  }

  DisplayedEcho.value = e

  e.Sonata.forEach(s => s.IsSelected = s.Name === State.Sonata.Name)

  UpdateEcho(props.echoSlot, {
    ...e,
    Rarity: State.Rarity,
    Level: State.Level,
    MainStatistic: {
      Type: State.MainStat.Type,
      Value: Number.parseFloat(State.MainStat.Value),
    },
    SecondaryStatistic: {
      Type: State.SecondaryStat.Type,
      Value: Number.parseFloat(State.SecondaryStat.Value),
    },
    Statistics: State.SubStats
      .filter(s => s.Type !== StatType.NONE)
      .map(s => ({
        Type: s.Type,
        Value: Number.parseFloat(s.Value),
      })),
    EquipedBy: CurrentCharacter.value!.Id,
    EquipedSlot: props.echoSlot,
  })

  return OnClose()
}

function OnClose() {
  emits('close')
}

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
  .filter(([key, _]) => IsMainStatType(key as unknown as keyof typeof STAT_NAMES, State.Cost))
  .map(([key, value]) => {
    const k = key as unknown as keyof typeof STAT_NAMES
    return {
      Label: value,
      Type: k,
    }
  }))

const SecondaryStatisticsOptions = computed(() => Object.entries(STAT_NAMES)
  .filter(([key, _]) => key !== StatType.NONE)
  .filter(([key, _]) => IsSecondaryStatType(key as unknown as keyof typeof STAT_NAMES, State.Cost))
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
  if (!State.MainStat?.Type || State.MainStat.Type === StatType.NONE) {
    State.MainStat.Value = '0'
    return
  }

  let value = 0
  switch (State.Cost) {
    case EchoCost.FOUR_COST:
      value = FOUR_COST_MAIN_STATS_VALUES[State.MainStat.Type as StatType] || 0
      break
    case EchoCost.THREE_COST:
      value = THREE_COST_MAIN_STATS_VALUES[State.MainStat.Type as StatType] || 0
      break
    case EchoCost.ONE_COST:
      value = ONE_COST_MAIN_STATS_VALUES[State.MainStat.Type as StatType] || 0
      break
  }
  State.MainStat.Value = value.toFixed(1)
}

function GetSecondaryStatValue() {
  if (!State.SecondaryStat?.Type || State.SecondaryStat.Type === StatType.NONE) {
    State.SecondaryStat.Value = '0'
    return
  }

  let value = 0
  switch (State.Cost) {
    case EchoCost.FOUR_COST:
      value = FOUR_COST_SECONDARY_STATS_VALUES[State.SecondaryStat.Type as StatType] || 0
      break
    case EchoCost.THREE_COST:
      value = THREE_COST_SECONDARY_STATS_VALUES[State.SecondaryStat.Type as StatType] || 0
      break
    case EchoCost.ONE_COST:
      value = ONE_COST_SECONDARY_STATS_VALUES[State.SecondaryStat.Type as StatType] || 0
      break
  }
  State.SecondaryStat.Value = value.toFixed(1)
}

function IsDisabled(type: string) {
  return type === undefined || type === StatType.NONE || type === ''
}

function GetSubStatsValues(type: string) {
  return SUB_STAT_VALUES[type as StatType]?.map(st => st.toFixed(1)) || []
}

const _StepperItems = [
  {
    title: 'Echo',
    description: 'Select your Echo and Sonata effect.',
    slot: 'echo-selection',
  },
  {
    title: 'Stats',
    description: 'Edit the statistics of your selected Echo.',
    slot: 'stats-selection',
  },
]
</script>

<template>
  <div class="h-full flex flex-col bg-black min-h-0">
    <!-- Header with steps -->
    <div class="sticky top-0 z-10 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div class="flex items-center justify-between px-4 py-3">
        <div class="flex items-center gap-6">
          <h2 class="text-lg font-semibold text-white flex items-center gap-2">
            <UIcon name="i-lucide-plus-circle" class="h-5 w-5 text-primary-400" />
            Create Echo
          </h2>
          <!-- Progress Steps -->
          <div class="flex items-center gap-3">
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 rounded-full transition-colors" :class="CurrentStep >= 0 ? 'bg-primary-500' : 'bg-white/30'" />
              <span class="text-xs font-medium" :class="CurrentStep >= 0 ? 'text-primary-400' : 'text-white/50'">Echo</span>
            </div>
            <div class="w-3 h-px bg-white/20" />
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 rounded-full transition-colors" :class="CurrentStep >= 1 ? 'bg-primary-500' : 'bg-white/30'" />
              <span class="text-xs font-medium" :class="CurrentStep >= 1 ? 'text-primary-400' : 'text-white/50'">Sonata</span>
            </div>
            <div class="w-3 h-px bg-white/20" />
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 rounded-full transition-colors" :class="CurrentStep >= 2 ? 'bg-primary-500' : 'bg-white/30'" />
              <span class="text-xs font-medium" :class="CurrentStep >= 2 ? 'text-primary-400' : 'text-white/50'">Stats</span>
            </div>
          </div>
        </div>
        <UButton icon="i-lucide-x" color="neutral" variant="ghost" size="sm" @click="OnClose" />
      </div>
    </div>

    <!-- Main content -->
    <div class="flex-1 overflow-hidden">
      <UForm :schema="EditEchoSchema" :state="State" @submit="OnSubmit">
        <!-- Step 1: Echo Selection -->
        <div v-if="CurrentStep === 0" class="h-full flex flex-col overflow-hidden min-h-0">
          <!-- Search and Filters -->
          <div class="px-4 py-3 border-b border-white/10 bg-white/5">
            <!-- Search -->
            <div class="mb-3">
              <UInput v-model="SearchValue" placeholder="Search echoes..." class="bg-white/10 border-white/20 text-white" />
            </div>
            <!-- Cost Filter -->
            <div class="flex items-center gap-3 mb-3">
              <div class="flex items-center">
                <span class="text-xs font-medium text-white/60 mr-2">Cost</span>
                <div class="flex items-center bg-black/50 border border-white/10 rounded-lg overflow-hidden">
                  <button
                    v-for="cost in [EchoCost.ONE_COST, EchoCost.THREE_COST, EchoCost.FOUR_COST]" :key="cost"
                    class="px-3 py-1.5 text-xs font-medium transition-all duration-200" :class="{
                      'bg-primary-500 text-white': cost === SelectedCostFilter,
                      'text-white/60 hover:text-white hover:bg-white/5': cost !== SelectedCostFilter,
                    }" @click.prevent="SelectCostFilter(cost)"
                  >
                    {{ GetEchoCostText(cost) }}
                  </button>
                </div>
              </div>
            </div>

            <!-- Sonata Filters -->
            <div class="flex flex-wrap items-center gap-1.5">
              <!-- 1.x sonata -->
              <div
                v-for="sonata in Sonatas_1_0" :key="sonata.Name"
                class="group cursor-pointer bg-black/50 border border-white/10 rounded-md px-2 py-1.5 transition-all duration-200 hover:bg-white/10 hover:border-white/20 flex items-center gap-1.5" :class="{
                  'bg-primary-500/20 border-primary-500/50 text-primary-300': sonata.Name === SelectedSonataEffect?.Name,
                  'text-white/80 hover:text-white': sonata.Name !== SelectedSonataEffect?.Name,
                }" @click.prevent="SelectSonataFilter(sonata)"
              >
                <NuxtImg :src="`/images/icons/${sonata.Icon}`" class="h-4 w-4 object-contain" />
                <span class="text-xs font-medium whitespace-nowrap">{{ sonata.Name }}</span>
              </div>

              <!-- 2.x sonata -->
              <div
                v-for="sonata in Sonatas_2_0" :key="sonata.Name"
                class="group cursor-pointer bg-black/50 border border-white/10 rounded-md px-2 py-1.5 transition-all duration-200 hover:bg-white/10 hover:border-white/20 flex items-center gap-1.5" :class="{
                  'bg-primary-500/20 border-primary-500/50 text-primary-300': sonata.Name === SelectedSonataEffect?.Name,
                  'text-white/80 hover:text-white': sonata.Name !== SelectedSonataEffect?.Name,
                }" @click.prevent="SelectSonataFilter(sonata)"
              >
                <NuxtImg :src="`/images/icons/${sonata.Icon}`" class="h-4 w-4 object-contain" />
                <span class="text-xs font-medium whitespace-nowrap">{{ sonata.Name }}</span>
              </div>
            </div>
          </div>

          <!-- Echo Grid -->
          <div class="overflow-y-auto scrollbar-hidden p-4 pb-24 min-h-0" style="height: calc(100vh - 300px);">
            <div class="grid grid-cols-1 gap-2">
              <div
                v-for="ec in FilteredEchoes"
                :key="ec.Id"
                class="group cursor-pointer bg-white/5 border border-white/10 rounded-br-lg transition-all duration-200 hover:bg-white/10 hover:border-white/20 relative"
                :class="{ 'bg-primary-500/20 border-primary-500/50 ring-2 ring-primary-500/50': State.EchoId === ec.Id }"
                @click="SelectEcho(ec.Id, ec.Cost)"
              >
                <div class="flex">
                  <!-- Icon / Rarity -->
                  <div class="relative h-26 min-h-26 w-26 flex items-center justify-center overflow-clip">
                    <!-- Icon -->
                    <div class="absolute w-full h-full bottom-0">
                      <NuxtImg
                        width="160" height="160" :src="`/images/echoes/${ec.Icon}`" style="color: transparent;"
                        class="w-full h-full object-cover"
                      />
                    </div>
                    <!-- Rarity Highlight -->
                    <div class="absolute bottom-0 w-full rounded-bl">
                      <div class="relative w-full flex items-center">
                        <div class="absolute mt-auto h-4 w-full -bottom-2">
                          <div
                            class="absolute bottom-0 h-3 w-full blur-lg transition-all duration-200 group-hover:h-4 group-hover:blur"
                            :class="GetBackgroundColor(ec.Rarity)"
                          />
                          <div
                            class="absolute bottom-0 h-2 w-full blur duration-200 group-hover:h-2 group-hover:blur-sm"
                            :class="GetSecondaryColor(ec.Rarity)"
                          />
                        </div>
                      </div>
                      <div class="h-[3px] rounded-bl" :class="GetHighlightColor(ec.Rarity)" />
                    </div>
                  </div>

                  <!-- Content -->
                  <div class="border-l border-neutral-700 p-2 space-y-1 text-sm">
                    <!-- Name -->
                    <div class="w-full flex items-center justify-between text-nowrap">
                      <div :title="t(`${ec.Id}_name`)" class="text-truncate">
                        {{ t(`${ec.Id}_name`) }}
                      </div>
                    </div>

                    <!-- Cost and Nightmare -->
                    <div class="flex items-center gap-1 pt-1">
                      <UBadge v-if="ec.IsNightmare" variant="soft" color="warning" size="sm">
                        Nightmare
                      </UBadge>
                      <UBadge variant="soft" color="info" size="sm">
                        Cost {{ GetEchoCostText(ec.Cost) }}
                      </UBadge>
                    </div>

                    <!-- Sonatas -->
                    <div class="flex items-center gap-1.5 pt-1 overflow-hidden">
                      <div
                        v-for="sonata in ec.Sonata" :key="`${ec.Id}-${sonata.Name}`"
                        class="flex items-center gap-1.5 bg-black/30 border border-white/10 rounded-md px-2 py-1 flex-shrink-0"
                      >
                        <NuxtImg :src="`/images/icons/${sonata.Icon}`" class="h-4 w-4 object-contain" />
                        <span class="text-xs font-medium text-white/90">{{ sonata.Name }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Step 2: Sonata Selection -->
        <div v-if="CurrentStep === 1" class="h-full flex flex-col overflow-hidden min-h-0">
          <div class="px-4 py-4 border-b border-white/10">
            <div class="flex items-center space-x-4">
              <NuxtImg :src="`/images/echoes/${DisplayedEcho?.Icon}`" class="w-16 h-16 rounded-lg" />
              <div class="flex-1">
                <h4 class="text-white font-semibold text-lg mb-1">
                  {{ t(`${DisplayedEcho?.Id}_name`) }}
                </h4>
                <div class="flex items-center gap-2">
                  <UBadge variant="soft" color="info" size="sm">
                    Cost {{ GetEchoCostText(DisplayedEcho?.Cost ?? EchoCost.FOUR_COST) }}
                  </UBadge>

                  <UBadge v-if="DisplayedEcho?.IsNightmare" variant="soft" color="warning" size="sm">
                    Nightmare
                  </UBadge>
                </div>
              </div>
            </div>
          </div>

          <!-- Sonata Grid -->
          <div class="overflow-y-auto scrollbar-hidden p-4 pb-24 min-h-0" style="height: calc(100vh - 300px);">
            <div class="grid grid-cols-1 gap-2">
              <div
                v-for="sonata in DisplayedEcho?.Sonata"
                :key="sonata.Name"
                class="group cursor-pointer bg-white/5 border border-white/10 rounded-br-lg transition-all duration-200 hover:bg-white/10 hover:border-white/20 relative"
                :class="{ 'bg-primary-500/20 border-primary-500/50 ring-2 ring-primary-500/50': State.Sonata.Name === sonata.Name }"
                @click="SelectSonata(sonata)"
              >
                <div class="p-4">
                  <!-- Header: Icon and Title -->
                  <div class="flex items-center gap-3 mb-4">
                    <div class="relative">
                      <NuxtImg :src="`/images/icons/${sonata.Icon}`" class="w-8 h-8 rounded-lg" />
                    </div>
                    <h3 class="text-lg font-semibold text-white">
                      {{ sonata.Name }}
                    </h3>
                  </div>

                  <!-- Effects -->
                  <div class="space-y-3">
                    <!-- 2pc Effect -->
                    <div class="bg-black/30 border border-white/10 rounded-lg p-3">
                      <div class="flex items-center justify-between mb-2">
                        <span class="text-xs font-medium text-white/50">Bonus 1</span>
                        <UBadge variant="soft" color="primary" size="sm">
                          2pc
                        </UBadge>
                      </div>
                      <p class="text-sm text-white leading-relaxed" v-html="HighlightNumbers(sonata.Effect1 || 'No effect description')" />
                    </div>

                    <!-- 5pc Effect -->
                    <div class="bg-black/30 border border-white/10 rounded-lg p-3">
                      <div class="flex items-center justify-between mb-2">
                        <span class="text-xs font-medium text-white/50">Bonus 2</span>
                        <UBadge variant="soft" color="primary" size="sm">
                          5pc
                        </UBadge>
                      </div>
                      <p class="text-sm text-white leading-relaxed" v-html="HighlightNumbers(sonata.Effect2 || 'No effect description')" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Step 3: Stats Configuration -->
        <div v-if="CurrentStep === 2" class="h-full flex flex-col">
          <div class="p-4 border-b border-white/10">
            <div class="flex items-center gap-3">
              <NuxtImg :src="`/images/echoes/${DisplayedEcho?.Icon}`" class="w-20 h-20 rounded-lg" />
              <div class="flex-1">
                <h4 class="text-white font-semibold text-lg mb-1">
                  {{ t(`${DisplayedEcho?.Id}_name`) }}
                </h4>
                <div class="flex items-center gap-2 mb-2">
                  <UBadge variant="soft" color="info" size="sm">
                    Cost {{ GetEchoCostText(DisplayedEcho?.Cost ?? EchoCost.FOUR_COST) }}
                  </UBadge>
                  <UBadge v-if="DisplayedEcho?.IsNightmare" variant="soft" color="warning" size="sm">
                    Nightmare
                  </UBadge>
                  <UBadge variant="soft" color="warning" size="sm">
                    Slot {{ props.echoSlot + 1 }}
                  </UBadge>
                </div>
                <div class="flex items-center gap-1.5 overflow-hidden">
                  <div
                    class="flex items-center gap-1.5 bg-black/30 border border-white/10 rounded-md px-2 py-1 flex-shrink-0"
                  >
                    <NuxtImg :src="`/images/icons/${DisplayedEcho?.Sonata.find(s => s.Name === State.Sonata.Name)?.Icon || ''}`" class="h-4 w-4 object-contain" />
                    <span class="text-xs font-medium text-white/90">{{ State.Sonata.Name }}</span>
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
                    <USelectMenu v-model="State.Level" :items="LevelOptions" value-key="Value" label-key="Label" class="w-full" />
                  </UFormField>
                  <UFormField name="Rarity" label="Rarity">
                    <USelectMenu v-model="State.Rarity" :items="RarityOptions" value-key="type" class="w-full" />
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
                        <USelectMenu v-model="State.MainStat.Type" value-key="Type" label-key="Label" :items="MainStatisticsOptions" class="w-full" @update:model-value="GetMainStatValue()" />
                      </UFormField>
                      <UInput v-model="State.MainStat.Value" readonly class="bg-black/30 border-white/20 text-primary-400 font-semibold" placeholder="Value" />
                    </div>
                  </div>

                  <!-- Secondary Stat -->
                  <div class="bg-black/20 border border-white/10 rounded-br-lg p-3">
                    <label class="text-sm font-medium text-white/80 mb-2 block">Secondary Statistic</label>
                    <div class="grid grid-cols-2 gap-3">
                      <UFormField name="SecondaryStat.Type">
                        <USelectMenu v-model="State.SecondaryStat.Type" value-key="Type" label-key="Label" :items="SecondaryStatisticsOptions" class="w-full" @update:model-value="GetSecondaryStatValue()" />
                      </UFormField>
                      <UInput v-model="State.SecondaryStat.Value" readonly class="bg-black/30 border-white/20 text-primary-400 font-semibold" placeholder="Value" />
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
                  <div v-for="(st, idx) in State.SubStats" :key="idx" class="bg-black/20 border border-white/10 rounded-br-lg p-3">
                    <div class="mb-3">
                      <UBadge variant="soft" color="primary" size="md">
                        Roll {{ idx + 1 }}
                      </UBadge>
                    </div>
                    <div class="grid grid-cols-2 gap-3">
                      <UFormField :name="`SubStats.${idx}.Type`">
                        <USelectMenu v-model="st.Type" label-key="Label" value-key="Type" :items="StatisticsOptions" class="w-full" />
                      </UFormField>
                      <UFormField :name="`SubStats.${idx}.Value`">
                        <USelect v-model="st.Value" :items="GetSubStatsValues(st.Type)" class="w-full" :disabled="IsDisabled(st.Type)" />
                      </UFormField>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UForm>
    </div>

    <!-- Footer with navigation -->
    <div class="sticky bottom-0 bg-black/80 backdrop-blur-md border-t border-white/10 p-4">
      <div class="flex justify-between items-center">
        <UButton
          v-if="CurrentStep > 0"
          color="neutral"
          variant="outline"
          label="Previous"
          @click="PreviousStep"
        />
        <div v-else />

        <UButton
          v-if="CurrentStep < 2"
          color="primary"
          variant="soft"
          label="Next"
          :disabled="!IsFormValid"
          @click="NextStep"
        />
        <UButton
          v-else
          color="primary"
          variant="solid"
          label="Create Echo"
          type="submit"
          :disabled="!IsFormValid"
          @click="OnSubmit"
        />
      </div>
    </div>
  </div>
</template>
