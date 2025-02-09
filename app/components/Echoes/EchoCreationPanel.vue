<script setup lang="ts">
import type IEcho from '~/Core/Interfaces/IEcho'
import type { ISonata } from '~/Core/Interfaces/ISonata'
import type { Character } from '~/Core/Models/Character'
import { z } from 'zod'
import { TemplateEchoes } from '~/Core/Echoes'
import { EchoCost } from '~/Core/Enums/EchoCost'
import { Rarity } from '~/Core/Enums/Rarity'
import { StatType } from '~/Core/Enums/StatType'
import { Echo } from '~/Core/Models/Echo'
import { Sonatas_1_0, Sonatas_2_0 } from '~/Core/Sonatas'
import { FOUR_COST_MAIN_STATS_VALUES, IsMainStatType, IsSubStatType, ONE_COST_MAIN_STATS_VALUES, STAT_NAMES, SUB_STAT_VALUES, THREE_COST_MAIN_STATS_VALUES } from '~/Core/Statistics'

const props = defineProps<{
  echo: Echo
  character: Character
  echoSlot: number
}>()

const IsOpen = ref<boolean>(false)
const EchoesStore = useEchoesStore()
const CharactersStore = useCharactersStore()

const SelectedSonataEffect = ref<ISonata | undefined>(undefined)
const SearchValue = ref<string>('')

const FilteredEchoes = computed(() => {
  return TemplateEchoes
    .filter((echo: IEcho) => {
      const matchesSonata = SelectedSonataEffect.value ? echo.Sonata.some(sonata => sonata.Name === SelectedSonataEffect.value?.Name) : true
      const matchesSearch = echo.Name.toLowerCase().includes(SearchValue.value.toLowerCase())
      return matchesSonata && matchesSearch
    })
    .map(echo => new Echo(echo))
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

const TmpEditedEcho = ref<IEcho | undefined>(undefined)

const Stepper = useTemplateRef('echo-creation-stepper')
const CurrentStep = ref<number>(0)

const IsEchoSelected = computed(() => !(State.EchoId !== -1 && State.EchoId !== undefined))

function GetBorderColor(echo: Echo | IEcho) {
  switch (echo.Rarity) {
    case Rarity.FIVE_STARS:
      return 'border-amber-400'
    case Rarity.FOUR_STARS:
      return 'border-purple-400'
    case Rarity.THREE_STARS:
      return 'border-blue-400'
    default:
      return 'border-gray-400'
  }
}

function GetCostText(cost: EchoCost) {
  switch (cost) {
    case EchoCost.ONE_COST:
      return '1'
    case EchoCost.THREE_COST:
      return '3'
    default:
      return '4'
  }
}

function SelectSonataFilter(sonata: ISonata) {
  if (sonata.Name === SelectedSonataEffect.value?.Name) {
    SelectedSonataEffect.value = undefined
  }
  else {
    SelectedSonataEffect.value = sonata
  }
}

function SelectEchoAndSonata(echoId: number, cost: EchoCost, sonata: ISonata) {
  State.EchoId = echoId
  State.Sonata!.Name = sonata.Name
  State.Cost = cost

  TmpEditedEcho.value = EchoesStore.GetEchoById(echoId)

  Stepper.value?.next()
}

watch(IsOpen, () => {
  if (props.echo.Id === -1 || IsOpen.value === false) {
    return
  }

  TmpEditedEcho.value = EchoesStore.GetEchoById(props.echo.Id)

  State.EchoId = props.echo.Id
  State.MainStat!.Type = props.echo.MainStatistic!.Type
  State.MainStat!.Value = props.echo.MainStatistic!.Value.toFixed(1)
  State.Sonata!.Name = props.echo.Sonata.find(x => x.IsSelected)?.Name || ''
  State.Level = props.echo.Level
  State.Rarity = props.echo.Rarity
  State.Cost = props.echo.Cost

  State.SubStats = props.echo.Statistics.map((s) => {
    return {
      Type: s.Type,
      Value: s.Value.toFixed(1),
    }
  }) as [{ Type: StatType, Value: string }, ...{ Type: StatType, Value: string }[]]

  // We can skip to stats edit ?
  // And add a back button to change the echo if necessary.
  CurrentStep.value = 1
})

function OnSubmit() {
  const e = EchoesStore.GetEchoById(State.EchoId!)

  if (!e) {
    return OnClose()
  }

  TmpEditedEcho.value = e

  Object.assign(e, {
    Rarity: State.Rarity,
    Level: State.Level,
    MainStatistic: {
      Type: State.MainStat!.Type as StatType,
      Value: Number.parseFloat(State.MainStat!.Value),
    },
    Statistics: State.SubStats!.map(s => ({
      Type: s.Type as StatType,
      Value: Number.parseFloat(s.Value),
    })),
    EquipedBy: props.character.Id,
    EquipedSlot: props.echoSlot,
  })

  e.Sonata.find(x => x.Name === State.Sonata!.Name)!.IsSelected = true

  EchoesStore.AddEcho(e)
  CharactersStore.UpdateEcho(props.character.Id, e.Id, props.echoSlot)

  return OnClose()
}

function OnClose() {
  IsOpen.value = false
}

const LevelOptions = Array.from({ length: 25 }).fill(0).map((_, idx) => {
  return {
    Label: `+${idx + 1}`,
    Value: idx + 1,
  }
}).reverse()

const RarityOptions = [{
  label: '5✧',
  type: Rarity.FIVE_STARS,
}, {
  label: '4✧',
  type: Rarity.FOUR_STARS,
}, {
  label: '3✧',
  type: Rarity.THREE_STARS,
}, {
  label: '2✧',
  type: Rarity.TWO_STARS,
}]

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
  <div>
    <div
      class="absolute right-1 top-1 z-10 hidden transition-all duration-75 group-hover:inline"
      @click="IsOpen = true"
    >
      <UButton color="neutral" variant="ghost" icon="mdi:pencil-outline" />
    </div>
    <UModal
      v-model:open="IsOpen"
      title="Edit Echo"
      :ui="{
        content: 'xl:min-w-4xl w-4xl min-h-8/10! h-8/10! overflow-hidden',
        body: '',
      }"
    >
      <template #header />
      <template #body>
        <UForm
          :schema="EditEchoSchema"
          :state="State"
        >
          <UStepper ref="echo-creation-stepper" v-model="CurrentStep" :items="StepperItems" color="neutral" size="sm">
            <template #echo-selection>
              <div class="mt-8 flex flex-col gap-1">
                <!-- 1.x sonata -->
                <div class="w-full flex flex-wrap items-center justify-between gap-2 px-4">
                  <div>
                    <UInput v-model="SearchValue" placeholder="Search echo..." />
                  </div>
                  <div class="flex items-center border border-white/14 rounded bg-black/66 backdrop-blur-4">
                    <div
                      v-for="(sonata, idx) in Sonatas_1_0" :key="sonata.Name" class="cursor-pointer select-none px-4 py-1" :class="{
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
                      v-for="(sonata, idx) in Sonatas_2_0" :key="sonata.Name" class="cursor-pointer select-none px-4 py-1" :class="{
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
                <div class="h-9/10 w-full flex flex-wrap items-start justify-center gap-1 overflow-y-auto p-4">
                  <div
                    v-for="ec in FilteredEchoes" :key="ec.Id" class="group relative h-48 w-46 border rounded-md bg-black/66 p-2"
                    :class="{
                      'border-white/75': ec.Id === State.EchoId,
                      'border-white/14': ec.Id !== State.EchoId,
                    }"
                  >
                    <div class="relative mx-auto min-h-24 w-24 flex items-center justify-center rounded-full">
                      <div class="overflow-clip border-3 rounded-full" :class="GetBorderColor(ec)">
                        <NuxtImg width="160" height="160" :src="`${ec.GetIcon()}`" style="color: transparent;" />
                      </div>
                      <div class="absolute bottom-1 right-1 z-1 border-2 border-amber rounded-full bg-black px-1.5 py-0.5 text-xs">
                        {{ GetCostText(ec.Cost) }}
                      </div>
                    </div>
                    <div class="py-0.75 text-xs">
                      <div class="flex flex-col gap-4 text-center">
                        <span>{{ ec.Name }}</span>
                        <div class="flex items-center justify-center gap-1">
                          <div
                            v-for="sonata in ec.Sonata" :key="`${ec.Id}-${sonata.Name}`"
                            class="cursor-pointer border border-white/14 rounded-md bg-black/44 p-1 transition-all duration-150 hover:bg-white/7"
                            :class="{ 'bg-white/14': State.Sonata?.Name === sonata.Name && ec.Id === State.EchoId || false }"
                            @click.prevent="SelectEchoAndSonata(ec.Id, ec.Cost, sonata as unknown as ISonata)"
                          >
                            <NuxtImg :src="sonata.GetIcon()" class="h-6 min-h-6 min-w-6 w-6 object-contain" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </template>
            <template #stats-selection>
              <div class="mx-auto">
                <div class="grid grid-cols-2 gap-2">
                  <UCard v-if="TmpEditedEcho" class="h-min">
                    <div class="relative mx-auto min-h-24 w-24 flex items-center justify-center rounded-full">
                      <div class="overflow-clip border-3 rounded-full" :class="GetBorderColor(TmpEditedEcho)">
                        <NuxtImg width="160" height="160" :src="`/images/echoes/${TmpEditedEcho.Icon}`" style="color: transparent;" />
                      </div>
                      <div class="absolute bottom-0.75 right-0.75 z-1 border-2 rounded-full bg-black px-2 py-0.5 text-xs" :class="GetBorderColor(TmpEditedEcho)">
                        {{ GetCostText(TmpEditedEcho.Cost) }}
                      </div>
                    </div>
                    <div class="py-0.75 text-xs">
                      <div class="flex flex-col gap-4 text-center">
                        <span>{{ TmpEditedEcho.Name }}</span>
                      </div>
                    </div>
                    <USeparator class="my-3" />
                    <div class="grid grid-cols-2 w-full gap-2 px-4">
                      <div>
                        <span class="mr-2 text-xs">Equiped Slot</span>
                        <UBadge color="primary" variant="subtle" :label="`${echoSlot + 1}`" size="sm" />
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
                            v-model="State.Level"
                            :items="LevelOptions"
                            arrow
                            :search-input="false"
                            value-key="Value"
                            label-key="Label"
                            class="my-2 w-full"
                            :disabled="IsEchoSelected"
                          />
                        </UFormField>
                        <UFormField name="Rarity" class="w-full">
                          <USeparator label="Rarity" />
                          <USelectMenu
                            v-model="State.Rarity"
                            :items="RarityOptions"
                            arrow
                            :search-input="false"
                            value-key="type"
                            label-key="label"
                            class="my-2 w-full"
                            :disabled="IsEchoSelected"
                          />
                        </UFormField>
                      </div>
                    </UCard>

                    <!-- Main Stat -->
                    <UCard>
                      <UFormField name="MainStat">
                        <USeparator label="Main Stat" />
                        <div class="my-2 flex items-start justify-between gap-2">
                          <UFormField name="MainStat.Type" class="w-full" :eager-validation="true">
                            <USelectMenu
                              v-model="State.MainStat!.Type" value-key="Type" label-key="Label" arrow :search-input="{
                                icon: 'i-lucide-search',
                              }" :items="MainStatisticsOptions" class="w-full" :disabled="IsEchoSelected"
                              @update:model-value="GetMainStatValue()"
                            />
                          </UFormField>
                          <UFormField name="MainStat.Value" class="w-[32%]">
                            <UInput v-model="State.MainStat!.Value" class="w-full" :disabled="IsEchoSelected" />
                          </UFormField>
                        </div>
                      </UFormField>
                    </UCard>

                    <!-- Sub Stats -->
                    <UCard>
                      <USeparator label="Sub Stats" />
                      <div class="my-2">
                        <div v-for="(st, idx) in State.SubStats" :key="idx" class="w-full flex items-center gap-2 space-y-2">
                          <UFormField class="w-full" :name="`SubStats.${idx}`">
                            <USelectMenu
                              v-model="st.Type"
                              label-key="Label"
                              value-key="Type"
                              arrow
                              :items="StatisticsOptions"
                              class="w-full"
                              :disabled="IsEchoSelected"
                            />
                          </UFormField>
                          <USelect v-model="st.Value" :items="GetSubStatsValues(st.Type)" class="w-[32%]" :disabled="IsDisabled(st.Type)" />
                        </div>
                      </div>
                    </UCard>
                  </div>
                </div>
              </div>
              <div class="mt-6 flex justify-end">
                <UButtonGroup size="md">
                  <UButton color="neutral" variant="outline" label="Previous" @click.prevent="Stepper?.prev()" />
                  <UButton color="primary" variant="subtle" label="Submit" @click.prevent="OnSubmit" />
                </UButtonGroup>
              </div>
            </template>
          </UStepper>
        </UForm>
      </template>
    </UModal>
  </div>
</template>
