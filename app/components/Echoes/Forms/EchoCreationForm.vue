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
import { GetEchoBorderColor, GetEchoCostText } from '~/Core/Utils/EchoUtils'

// TODO: Do another pass on this one, can definitely simplify this way way more.

const props = defineProps<{
  echoSlot: number
  open?: boolean
}>()

const emits = defineEmits({
  close,
})

const { t } = useI18n()
const IsOpen = ref()
const EchoesStore = useEchoesStore()
const { CurrentCharacter, UpdateEcho } = useCharacterContext()

const SelectedSonataEffect = ref<Sonata | undefined>(undefined)
const SearchValue = ref<string>('')

const FilteredEchoes = computed(() => {
  return TemplateEchoes
    .filter((echo: Echo) => {
      const matchesSonata = SelectedSonataEffect.value ? echo.Sonata.some(sonata => sonata.Name === SelectedSonataEffect.value?.Name) : true
      const matchesSearch = t(`${echo.Id}_name`).toLowerCase().includes(SearchValue.value.toLowerCase())
      return matchesSonata && matchesSearch
    })
})

const EditEchoSchema = z.object({
  EchoId: z.number().nonnegative({
    message: 'Select a valid Echo.',
  }),
  Cost: z.nativeEnum(EchoCost).default(EchoCost.FOUR_COST),
  Level: z.number().min(0).max(25).default(25),
  Rarity: z.nativeEnum(Rarity).default(Rarity.FIVE_STARS),
  Sonata: z.object({
    Name: z.string(),
  }).required(),
  MainStat: z.object({
    Type: z.nativeEnum(StatType).default(StatType.NONE),
    Value: z.string().nonempty(),
  }).required(),
  SecondaryStat: z.object({
    Type: z.nativeEnum(StatType).default(StatType.NONE),
    Value: z.string().nonempty(),
  }).required(),
  SubStats: z.array(z.object({
    Type: z.nativeEnum(StatType).default(StatType.NONE),
    Value: z.string(),
  })).nonempty(),
})

type FormSchema = z.output<typeof EditEchoSchema>

const State = reactive<Partial<FormSchema>>({
  Rarity: Rarity.FIVE_STARS,
  Level: 25,
  MainStat: {
    Type: StatType.NONE,
    Value: '',
  },
  SecondaryStat: {
    Type: StatType.NONE,
    Value: '',
  },
  Cost: EchoCost.FOUR_COST,
  Sonata: {
    Name: '',
  },
  SubStats: [
    { Type: StatType.NONE, Value: '0' },
    { Type: StatType.NONE, Value: '0' },
    { Type: StatType.NONE, Value: '0' },
    { Type: StatType.NONE, Value: '0' },
    { Type: StatType.NONE, Value: '0' },
  ],
})

const DisplayedEcho = ref<Echo | undefined>(undefined)

const Stepper = useTemplateRef('echo-creation-stepper')
const CurrentStep = ref<number>(0)

const IsEchoSelected = computed(() => !(State.EchoId !== -1 && State.EchoId !== undefined))

function SelectSonataFilter(sonata: Sonata) {
  if (sonata.Name === SelectedSonataEffect.value?.Name) {
    SelectedSonataEffect.value = undefined
  }
  else {
    SelectedSonataEffect.value = sonata
  }
}

function SelectEchoAndSonata(echoId: number, cost: EchoCost, sonata: Sonata) {
  State.EchoId = echoId
  State.Sonata!.Name = sonata.Name
  State.Cost = cost

  DisplayedEcho.value = EchoesStore.Get(echoId)

  Stepper.value?.next()
}

function OnSubmit() {
  const e = unref(EchoesStore.Get(State.EchoId!))

  if (!e) {
    return OnClose()
  }

  DisplayedEcho.value = e
  e.Sonata.find(x => x.Name === State.Sonata!.Name)!.IsSelected = true

  UpdateEcho(props.echoSlot, {
    ...e,
    Rarity: State.Rarity,
    Level: State.Level,
    MainStatistic: {
      Type: State.MainStat!.Type as StatType,
      Value: Number.parseFloat(State.MainStat!.Value),
    },
    SecondaryStatistic: {
      Type: State.SecondaryStat!.Type as StatType,
      Value: Number.parseFloat(State.SecondaryStat!.Value),
    },
    Statistics: State.SubStats!.map(s => ({
      Type: s.Type as StatType,
      Value: Number.parseFloat(s.Value),
    })),
    EquipedBy: CurrentCharacter.value!.Id,
    EquipedSlot: props.echoSlot,
  })

  return OnClose()
}

function OnClose() {
  IsOpen.value = false
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
  .filter(([key, _]) => IsMainStatType(key as unknown as keyof typeof STAT_NAMES, State.Cost ?? EchoCost.FOUR_COST))
  .map(([key, value]) => {
    const k = key as unknown as keyof typeof STAT_NAMES

    return {
      Label: value,
      Type: k,
    }
  }))

const SecondaryStatisticsOptions = computed(() => Object.entries(STAT_NAMES)
  .filter(([key, _]) => key !== StatType.NONE)
  .filter(([key, _]) => IsSecondaryStatType(key as unknown as keyof typeof STAT_NAMES, State.Cost ?? EchoCost.FOUR_COST))
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
  if (State.MainStat === undefined || State.MainStat.Type === undefined || State.MainStat.Type === StatType.NONE) {
    return 0
  }

  switch (State.Cost) {
    case EchoCost.FOUR_COST:
      State.MainStat.Value = (FOUR_COST_MAIN_STATS_VALUES[State.MainStat.Type as StatType] || 0)
        .toFixed(1)
      break
    case EchoCost.THREE_COST:
      State.MainStat.Value = (THREE_COST_MAIN_STATS_VALUES[State.MainStat.Type as StatType] || 0)
        .toFixed(1)
      break
    case EchoCost.ONE_COST:
      State.MainStat.Value = (ONE_COST_MAIN_STATS_VALUES[State.MainStat.Type as StatType] || 0)
        .toFixed(1)
      break
  }
}

function GetSecondaryStatValue() {
  if (State.SecondaryStat === undefined || State.SecondaryStat.Type === undefined || State.SecondaryStat.Type === StatType.NONE) {
    return 0
  }

  switch (State.Cost) {
    case EchoCost.FOUR_COST:
      State.SecondaryStat.Value = (FOUR_COST_SECONDARY_STATS_VALUES[State.SecondaryStat.Type as StatType] || 0)
        .toFixed(1)
      break
    case EchoCost.THREE_COST:
      State.SecondaryStat.Value = (THREE_COST_SECONDARY_STATS_VALUES[State.SecondaryStat.Type as StatType] || 0)
        .toFixed(1)
      break
    case EchoCost.ONE_COST:
      State.SecondaryStat.Value = (ONE_COST_SECONDARY_STATS_VALUES[State.SecondaryStat.Type as StatType] || 0)
        .toFixed(1)
      break
  }
}

function IsDisabled(type: string) {
  return type === undefined || type === StatType.NONE || type === ''
}

function GetSubStatsValues(type: string) {
  return SUB_STAT_VALUES[type as StatType]?.map(st => st.toFixed(1)) || []
}

const StepperItems = [
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
  <UCard
    :ui="{
      body: Stepper?.hasNext === true ? 'pb-0!' : '',
    }"
  >
    <UForm :schema="EditEchoSchema" :state="State" @submit="OnSubmit">
      <UStepper
        ref="echo-creation-stepper"
        v-model="CurrentStep"
        :items="StepperItems"
        color="primary"
        size="xs"
        :ui="{
          header: 'pb-3 border-b border-(--ui-border)',
        }"
      >
        <template #echo-selection>
          <div class="mt-2 flex flex-col gap-1">
            <!-- 1.x sonata -->
            <div class="w-full flex flex-wrap items-center justify-between gap-2 px-4">
              <div>
                <UInput v-model="SearchValue" placeholder="Search echo..." />
              </div>
              <div class="flex items-center border border-white/14 rounded bg-black/66 backdrop-blur-4">
                <div
                  v-for="(sonata, idx) in Sonatas_1_0" :key="sonata.Name"
                  class="cursor-pointer select-none px-4 py-1" :class="{
                    'rounded-l-sm': idx === 0,
                    'rounded-r-sm': idx === Sonatas_1_0.length - 1,
                    'border-r border-white/14': idx !== Sonatas_1_0.length - 1,
                    'bg-white/14 border-r-0': sonata.Name === SelectedSonataEffect?.Name || false,
                    'hover:bg-white/7': sonata.Name !== SelectedSonataEffect?.Name || false,
                  }" @click.prevent="SelectSonataFilter(sonata)"
                >
                  <NuxtImg :src="`/images/icons/${sonata.Icon}`" class="h-6 min-h-6 min-w-6 w-6 object-contain" />
                </div>
              </div>
            </div>
            <!-- 2.x sonata -->
            <div class="mb-3 w-full flex items-center justify-end px-4">
              <div class="flex border border-white/14 rounded bg-black/66 backdrop-blur-4">
                <div
                  v-for="(sonata, idx) in Sonatas_2_0" :key="sonata.Name"
                  class="cursor-pointer select-none px-4 py-1" :class="{
                    'rounded-l-sm': idx === 0,
                    'rounded-r-sm': idx === Sonatas_2_0.length - 1,
                    'border-r border-white/14': idx !== Sonatas_2_0.length - 1,
                    'bg-white/14 border-r-0': sonata.Name === SelectedSonataEffect?.Name || false,
                    'hover:bg-white/7': sonata.Name !== SelectedSonataEffect?.Name || false,
                  }" @click.prevent="SelectSonataFilter(sonata)"
                >
                  <NuxtImg :src="`/images/icons/${sonata.Icon}`" class="h-6 min-h-6 min-w-6 w-6 object-contain" />
                </div>
              </div>
            </div>
            <div class="max-h-[26em] xl:max-h-[32em] scrollbar-hidden w-full grid grid-cols-2 gap-2 overflow-y-auto p-4 pb-2">
              <EchoWithSonataSelectorCard
                v-for="ec in FilteredEchoes"
                :key="ec.Id"
                :echo="ec"
                @selected="(s: Sonata) => SelectEchoAndSonata(ec.Id, ec.Cost, s)"
              />
            </div>
          </div>
        </template>
        <template #stats-selection>
          <div class="mx-auto h-[26em] xl:h-[32em]">
            <div class="grid grid-cols-2 gap-2">
              <UCard v-if="DisplayedEcho" class="h-min">
                <div class="relative mx-auto min-h-24 w-24 flex items-center justify-center rounded-full">
                  <div class="overflow-clip border-3 rounded-full" :class="GetEchoBorderColor(DisplayedEcho)">
                    <NuxtImg
                      width="160" height="160" :src="`/images/echoes/${DisplayedEcho.Icon}`"
                      style="color: transparent;"
                    />
                  </div>
                </div>
                <div class="py-0.75 text-xs">
                  <div class="flex flex-col gap-4 text-center">
                    <span>{{ t(`${DisplayedEcho.Id}_name`) }}</span>
                  </div>
                </div>
                <USeparator class="my-3" />
                <div class="flex items-center justify-between w-full gap-2 px-4">
                  <div>
                    <span class="mr-2 text-xs">Equiped Slot</span>
                    <UBadge color="neutral" variant="subtle" :label="`${unref(echoSlot) + 1}`" size="sm" />
                  </div>
                  <div>
                    <span class="mr-2 text-xs">Cost</span>
                    <UBadge color="primary" variant="subtle" :label="`${GetEchoCostText(DisplayedEcho.Cost)}`" size="sm" />
                  </div>
                </div>
              </UCard>
              <div class="space-y-2">
                <!-- Level & Rarity -->
                <UCard>
                  <div class="w-full flex flex-row items-start gap-2">
                    <UFormField name="Level" class="w-full">
                      <USeparator label="Enhance" />
                      <USelectMenu
                        v-model="State.Level" :items="LevelOptions" arrow :search-input="false"
                        value-key="Value" label-key="Label" class="my-2 w-full" :disabled="IsEchoSelected"
                      />
                    </UFormField>
                    <UFormField name="Rarity" class="w-full">
                      <USeparator label="Rarity" />
                      <USelectMenu
                        v-model="State.Rarity" :items="RarityOptions" arrow :search-input="false"
                        value-key="type" class="my-2 w-full" :disabled="IsEchoSelected"
                      />
                    </UFormField>
                  </div>
                </UCard>

                <!-- Main/Secondary Stat -->
                <UCard>
                  <UFormField name="MainStat">
                    <USeparator label="Main / Secondary" />
                    <div class="my-2 flex items-start justify-between gap-2">
                      <UFormField name="MainStat.Type" class="w-full" :eager-validation="true">
                        <USelectMenu
                          v-model="State.MainStat!.Type" value-key="Type" label-key="Label" arrow
                          :search-input="{
                            icon: 'i-lucide-search',
                          }" :items="MainStatisticsOptions" class="w-full" :disabled="IsEchoSelected"
                          @update:model-value="GetMainStatValue()"
                        />
                      </UFormField>
                      <UFormField name="MainStat.Value" class="w-[32%]">
                        <UInput v-model="State.MainStat!.Value" class="w-full" :disabled="IsEchoSelected" />
                      </UFormField>
                    </div>
                    <div class="my-2 flex items-start justify-between gap-2">
                      <UFormField name="SecondaryStat.Type" class="w-full" :eager-validation="true">
                        <USelectMenu
                          v-model="State.SecondaryStat!.Type" value-key="Type" label-key="Label" arrow :search-input="{
                            icon: 'i-lucide-search',
                          }" :items="SecondaryStatisticsOptions" class="w-full" :disabled="IsEchoSelected"
                          @update:model-value="GetSecondaryStatValue()"
                        />
                      </UFormField>
                      <UFormField name="SecondaryStat.Value" class="w-[32%]">
                        <UInput v-model="State.SecondaryStat!.Value" class="w-full" :disabled="IsEchoSelected" />
                      </UFormField>
                    </div>
                  </UFormField>
                </UCard>

                <!-- Sub Stats -->
                <UCard>
                  <USeparator label="Sub Stats" />
                  <div class="my-2">
                    <div
                      v-for="(st, idx) in State.SubStats" :key="idx"
                      class="w-full flex items-center gap-2 space-y-2"
                    >
                      <UFormField class="w-full" :name="`SubStats.${idx}`">
                        <USelectMenu
                          v-model="st.Type" label-key="Label" value-key="Type" arrow
                          :items="StatisticsOptions" class="w-full" :disabled="IsEchoSelected"
                        />
                      </UFormField>
                      <USelect
                        v-model="st.Value" :items="GetSubStatsValues(st.Type)" class="w-[32%]"
                        :disabled="IsDisabled(st.Type)"
                      />
                    </div>
                  </div>
                </UCard>
              </div>
            </div>
          </div>
        </template>
      </UStepper>
    </UForm>
    <template #footer>
      <div class="w-full flex justify-end">
        <UButtonGroup v-if="!Stepper?.hasNext" size="md">
          <UButton
            color="neutral" variant="outline" label="Previous" :disabled="!Stepper?.hasPrev"
            @click.prevent="Stepper?.prev()"
          />
          <UButton color="primary" variant="subtle" label="Submit" type="submit" @click.prevent="OnSubmit" />
        </UButtonGroup>
      </div>
    </template>
  </UCard>
</template>
