<script setup lang="ts">
import type IEcho from '~/Core/Interfaces/IEcho'
import type { ISonata } from '~/Core/Interfaces/ISonata'
import type { Character } from '~/Core/Models/Character'
import { useStepper } from '@vueuse/core'
import { useForm } from 'vee-validate'
import { z } from 'zod'
import { TemplateEchoes } from '~/Core/Echoes'
import { EchoCost } from '~/Core/Enums/EchoCost'
import { Rarity } from '~/Core/Enums/Rarity'
import { StatType } from '~/Core/Enums/StatType'
import { Echo } from '~/Core/Models/Echo'
import { Sonatas, Sonatas_1_0, Sonatas_2_0 } from '~/Core/Sonatas'
import { FOUR_COST_MAIN_STATS_VALUES, IsMainStatType, IsSubStatType, ONE_COST_MAIN_STATS_VALUES, STAT_NAMES, SUB_STAT_VALUES, THREE_COST_MAIN_STATS_VALUES } from '~/Core/Statistics'

const props = defineProps<{
  echo: Echo
  character: Character
  echoSlot: number
}>()

const stepper = useStepper({
  'echo-selection': {
    title: 'Select Echo',
  },
  'stats-selection': {
    title: 'Stats',
  },
})

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
    SonataId: z.string(),
  }).required(),
  MainStat: z.object({
    Type: z.string().nonempty({
      message: 'Required',
    }),
    Value: z.string().nonempty({
      message: 'Required',
    }),
  }).required(),
  SubStats: z.array(z.object({
    Type: z.string().nonempty({
      message: 'Required',
    }),
    Value: z.string().nonempty({
      message: 'Required',
    }),
  })).default(Array.from({ length: 5 })
    .fill({
      Type: '',
      Value: '',
    }) as { Type: string, Value: string }[]),
})

const FormSchema = toTypedSchema(EditEchoSchema)

const { defineField, handleSubmit, resetForm, errors, meta } = useForm({
  validationSchema: FormSchema,
})

function NuxtUiConfig(state: any) {
  return {
    props: {
      error: state.errors[0],
    },
  }
}

const [EchoId, EchoIdAttrs] = defineField('EchoId', NuxtUiConfig)
const [MainStat, MainStatAttrs] = defineField('MainStat', NuxtUiConfig)
const [Sonata, SonataAttrs] = defineField('Sonata', NuxtUiConfig)
const [Level, LevelAttrs] = defineField('Level', NuxtUiConfig)
const [_Rarity, RarityAttrs] = defineField('Rarity', NuxtUiConfig)
const [Cost, _] = defineField('Cost', NuxtUiConfig)
const [SubStats0, SubStatsAttrs0] = defineField('SubStats.0', NuxtUiConfig)
const [SubStats1, SubStatsAttrs1] = defineField('SubStats.1', NuxtUiConfig)
const [SubStats2, SubStatsAttrs2] = defineField('SubStats.2', NuxtUiConfig)
const [SubStats3, SubStatsAttrs3] = defineField('SubStats.3', NuxtUiConfig)
const [SubStats4, SubStatsAttrs4] = defineField('SubStats.4', NuxtUiConfig)

const IsEchoSelected = computed(() => !(EchoId.value !== -1 && EchoId.value !== undefined))

function GetBorderColor(echo: Echo) {
  switch (echo.Rarity) {
    case Rarity.FIVE_STARS:
      return 'border-amber-4'
    case Rarity.FOUR_STARS:
      return 'border-purple-4'
    case Rarity.THREE_STARS:
      return 'border-blue-4'
    default:
      return 'border-gray-4'
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

function SelectEchoAndSonata(echoId: number, sonata: ISonata) {
  EchoId.value = echoId
  Sonata.value!.SonataId = sonata.Name.replace(' ', '_').toUpperCase()
  Sonata.value!.Name = sonata.Name

  stepper.goToNext()
}

onMounted(() => {
  if (props.echo.Id === -1) {
    return
  }

  EchoId.value = props.echo.Id
  MainStat.value!.Type = props.echo.MainStatistic!.Type
  MainStat.value!.Value! = props.echo.MainStatistic!.Value.toString()
  Sonata.value!.Name = props.echo.Sonata.find(x => x.IsSelected)?.Name || undefined
  Sonata.value!.SonataId = props.echo.Sonata.find(x => x.IsSelected)?.Name.toUpperCase().replace(' ', '_') || undefined
  Level.value = props.echo.Level
  _Rarity.value = props.echo.Rarity
  Cost.value = props.echo.Cost

  SubStats0.value!.Type = props.echo.Statistics[0]?.Type || StatType.NONE
  SubStats0.value!.Value = props.echo.Statistics[0]?.Value.toString() || '0'

  SubStats1.value!.Type = props.echo.Statistics[1]?.Type || StatType.NONE
  SubStats1.value!.Value = props.echo.Statistics[1]?.Value.toString() || '0'

  SubStats2.value!.Type = props.echo.Statistics[2]?.Type || StatType.NONE
  SubStats2.value!.Value = props.echo.Statistics[2]?.Value.toString() || '0'

  SubStats3.value!.Type = props.echo.Statistics[3]?.Type || StatType.NONE
  SubStats3.value!.Value = props.echo.Statistics[3]?.Value.toString() || '0'

  SubStats4.value!.Type = props.echo.Statistics[4]?.Type || StatType.NONE
  SubStats4.value!.Value = props.echo.Statistics[4]?.Value.toString() || '0'

  // We can skip to stats edit ?
  // And add a back button to change the echo if necessary.
  stepper.goToNext()
})

const OnSubmit = handleSubmit((values) => {
  const e = EchoesStore.GetEchoById(values.EchoId)

  console.log(e)

  if (!e) {
    return OnClose()
  }

  Object.assign(e, {
    Rarity: values.Rarity,
    Level: values.Level,
    MainStatistic: {
      Type: values.MainStat.Type as StatType,
      Value: Number.parseFloat(values.MainStat.Value),
    },
    Statistics: values.SubStats.map(s => ({
      Type: s.Type as StatType,
      Value: Number.parseFloat(s.Value),
    })),
    EquipedBy: props.character.Id,
    EquipedSlot: props.echoSlot,
  })

  e.Sonata.find(x => x.Name === values.Sonata.Name)!.IsSelected = true

  EchoesStore.AddEcho(e)
  CharactersStore.UpdateEcho(props.character.Id, e.Id, props.echoSlot)

  return OnClose()
})

function OnClose() {
  resetForm()
  IsOpen.value = false
}

const LevelOptions = Array.from({ length: 25 }).fill(0).map((_, idx) => {
  return {
    label: `+${idx + 1}`,
    value: idx + 1,
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
  .filter(([key, _]) => IsMainStatType(key as unknown as keyof typeof STAT_NAMES, Cost.value ?? EchoCost.FOUR_COST))
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
  if (MainStat.value === undefined || MainStat.value.Type === undefined || MainStat.value.Type === StatType.NONE) {
    return 0
  }

  switch (Cost.value) {
    case EchoCost.FOUR_COST:
      MainStat.value.Value = (FOUR_COST_MAIN_STATS_VALUES[MainStat.value.Type as StatType] || 0)
        .toFixed(1)
      break
    case EchoCost.THREE_COST:
      MainStat.value.Value = (THREE_COST_MAIN_STATS_VALUES[MainStat.value.Type as StatType] || 0)
        .toFixed(1)
      break
    case EchoCost.ONE_COST:
      MainStat.value.Value = (ONE_COST_MAIN_STATS_VALUES[MainStat.value.Type as StatType] || 0)
        .toFixed(1)
      break
  }
}

function IsDisabled(type: string) {
  return type === undefined || type === StatType.NONE || type === ''
}

function GetSubStatsValues(type: string) {
  return SUB_STAT_VALUES[type as StatType] || []
}
</script>

<template>
  <div>
    <div
      class="absolute right-1 top-1 hidden transition-all duration-75 group-hover:inline"
      @click="IsOpen = true"
    >
      <UButton color="white" variant="ghost" icon="mdi:pencil-outline" />
    </div>
    <UModal
      v-model="IsOpen"
      :ui="{ container: 'flex min-h-full items-center justify-center text-center', background: 'bg-black/44! backdrop-blur-4!', ring: 'border-2! border-white/14!', width: 'w-full max-w-md xl:max-w-5xl' }"
    >
      <form @submit.prevent="OnSubmit">
        <UCard>
          <template #header>
            SALUT CA EDIT
          </template>
          <!-- <div class="my-2 flex items-center justify-center gap-2">
      <div v-for="(step, id, i) in stepper.steps.value" :key="id" class="flex gap-2">
        <div
          class="flex cursor-pointer items-center gap-2"
          :class="{
            'rounded bg-white/14 border border-white/14 px-3': stepper.isCurrent(id),
          }"
        >
          <span>{{ step.title }}</span>
        </div>
        <UDivider v-if="i !== 1" orientation="horizontal" class="w-32" />
      </div>
    </div> -->
          <div v-if="stepper.isCurrent('echo-selection')" class="h-lg flex flex-col gap-1">
            <!-- 1.x sonata -->
            <div class="w-full flex flex-wrap items-center justify-between gap-2 px-4">
              <div>
                <UInput v-model="SearchValue" placeholder="Search echo..." />
              </div>
              <div class="flex items-center border border-white/14 rounded bg-black/66 backdrop-blur-4">
                <div
                  v-for="(sonata, idx) in Sonatas_1_0"
                  :key="sonata.Name"
                  class="cursor-pointer select-none px-4 py-1"
                  :class="{
                    'rounded-l-sm': idx === 0,
                    'rounded-r-sm': idx === Sonatas_1_0.length - 1,
                    'border-r border-white/14': idx !== Sonatas_1_0.length - 1,
                    'bg-white/14 border-r-0': sonata.Name === SelectedSonataEffect?.Name || false,
                    'hover:bg-white/7': sonata.Name !== SelectedSonataEffect?.Name || false,
                  }"
                  @click.prevent="SelectSonataFilter(sonata)"
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
                  }"
                  @click.prevent="SelectSonataFilter(sonata)"
                >
                  <NuxtImg :src="`/images/icons/${sonata.Icon}`" class="h-6 min-h-6 min-w-6 w-6 object-contain" />
                </div>
              </div>
            </div>
            <div class="scrollbar-hide w-full flex flex-wrap items-start justify-center gap-1 overflow-y-auto p-4">
              <div
                v-for="ec in FilteredEchoes"
                :key="ec.Id"
                class="group relative h-48 w-46 border rounded-md bg-black/66 p-2"
                :class="{
                  'border-white/75': ec.Id === EchoId,
                  'border-white/14': ec.Id !== EchoId,
                }"
              >
                <div class="relative mx-auto min-h-24 w-24 flex items-center justify-center rounded-full">
                  <div class="overflow-clip border-3 rounded-full" :class="GetBorderColor(ec)">
                    <NuxtImg
                      width="160" height="160" :src="`${ec.GetIcon()}`" style="color: transparent;"
                    />
                  </div>
                  <div class="absolute bottom-1 right-1 z-1 border-2 border-amber rounded-full bg-black px-1.5 py-0.5 text-xs">
                    {{ GetCostText(ec.Cost) }}
                  </div>
                </div>
                <div
                  class="py-0.75 text-xs"
                >
                  <div class="flex flex-col gap-4 text-center">
                    <span>{{ ec.Name }}</span>
                    <div class="flex items-center justify-center gap-1">
                      <div
                        v-for="sonata in ec.Sonata" :key="`${ec.Id}-${sonata.Name}`"
                        class="cursor-pointer border border-white/14 rounded-md bg-black/44 p-1 transition-all duration-150 hover:bg-white/7"
                        :class="{ 'bg-white/14': Sonata?.Name === sonata.Name && ec.Id === EchoId || false }"
                        @click.prevent="SelectEchoAndSonata(ec.Id, sonata as unknown as ISonata)"
                      >
                        <NuxtImg :src="sonata.GetIcon()" class="h-6 min-h-6 min-w-6 w-6 object-contain" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="stepper.isCurrent('stats-selection')" class="mx-auto h-lg max-w-md p-4">
            <!-- Level & Rarity -->
            <div class="w-full flex flex-row items-start gap-2">
              <UFormGroup name="Level" v-bind="LevelAttrs">
                <UDivider label="Enhance" class="my-3" />
                <USelectMenu
                  v-model="Level" :options="LevelOptions" value-attribute="value" option-attribute="label" class="w-28"
                  :disabled="IsEchoSelected"
                />
              </UFormGroup>
              <UFormGroup name="Rarity" v-bind="RarityAttrs">
                <UDivider label="Rarity" class="my-3" />
                <USelectMenu
                  v-model="_Rarity" :options="RarityOptions" class="w-24" value-attribute="type" option-attribute="label"
                  :disabled="IsEchoSelected"
                />
              </UFormGroup>
            </div>

            <!-- Main Stat -->
            <UFormGroup name="MainStat">
              <UDivider label="Main Stat" class="my-3" />
              <div class="flex items-start justify-between gap-2">
                <UFormGroup name="MainStat.Type" class="w-full" :eager-validation="true">
                  <UInputMenu
                    v-model="MainStat!.Type" value-attribute="Type" option-attribute="Label"
                    :options="MainStatisticsOptions" class="w-full" :disabled="IsEchoSelected"
                    @update:model-value="GetMainStatValue()"
                  />
                </UFormGroup>
                <UFormGroup name="MainStat.Value" class="w-35%" v-bind="MainStatAttrs" :eager-validation="true">
                  <template #default="{ error }">
                    <UInput
                      v-model="MainStat!.Value" class="w-full" :disabled="IsEchoSelected"
                      :trailing-icon="error ? 'i-heroicons-exclamation-triangle-20-solid' : undefined"
                    />
                  </template>
                  <template #error>
                    <span />
                  </template>
                </UFormGroup>
              </div>
            </UFormGroup>

            <!-- Sub Stats -->
            <UFormGroup name="SubStats">
              <UDivider label="Sub Stats" class="my-3" />
              <div class="space-y-1">
                <!-- Sub Stats 0 -->
                <div class="flex items-start justify-between gap-2">
                  <UFormGroup class="w-full" v-bind="SubStatsAttrs0" :eager-validation="true">
                    <template #default>
                      <UInputMenu
                        v-model="SubStats0.Type" option-attribute="Label" value-attribute="Type"
                        :options="StatisticsOptions" class="w-full" :search-attributes="['Label']" :disabled="IsEchoSelected"
                      />
                    </template>
                    <template #error>
                      <span />
                    </template>
                  </UFormGroup>
                  <UFormGroup class="w-32%" v-bind="SubStatsAttrs0" :eager-validation="true">
                    <template #default>
                      <USelect
                        v-model="SubStats0.Value" :options="GetSubStatsValues(SubStats0.Type)" class="w-full"
                        :disabled="IsDisabled(SubStats0.Type)"
                        :trailing-icon="errors[`SubStats.0`] ? 'i-heroicons-exclamation-triangle-20-solid' : undefined"
                      />
                    </template>
                    <template #error>
                      <span />
                    </template>
                  </UFormGroup>
                </div>

                <!-- Sub Stats 1 -->
                <div class="flex items-start justify-between gap-2">
                  <UFormGroup class="w-full" v-bind="SubStatsAttrs1" :eager-validation="true">
                    <template #default>
                      <UInputMenu
                        v-model="SubStats1.Type" option-attribute="Label" value-attribute="Type"
                        :options="StatisticsOptions" class="w-full" :search-attributes="['Label']" :disabled="IsEchoSelected"
                      />
                    </template>
                    <template #error>
                      <span />
                    </template>
                  </UFormGroup>
                  <UFormGroup class="w-32%" v-bind="SubStatsAttrs1" :eager-validation="true">
                    <template #default>
                      <USelect
                        v-model="SubStats1.Value" :options="GetSubStatsValues(SubStats1.Type)" class="w-full"
                        :disabled="IsDisabled(SubStats1.Type)"
                        :trailing-icon="errors[`SubStats.1`] ? 'i-heroicons-exclamation-triangle-20-solid' : undefined"
                      />
                    </template>
                    <template #error>
                      <span />
                    </template>
                  </UFormGroup>
                </div>

                <!-- Sub Stats 2 -->
                <div class="flex items-start justify-between gap-2">
                  <UFormGroup class="w-full" v-bind="SubStatsAttrs2" :eager-validation="true">
                    <template #default>
                      <UInputMenu
                        v-model="SubStats2.Type" option-attribute="Label" value-attribute="Type"
                        :options="StatisticsOptions" class="w-full" :search-attributes="['Label']" :disabled="IsEchoSelected"
                      />
                    </template>
                    <template #error>
                      <span />
                    </template>
                  </UFormGroup>
                  <UFormGroup class="w-32%" v-bind="SubStatsAttrs2" :eager-validation="true">
                    <template #default>
                      <USelect
                        v-model="SubStats2.Value" :options="GetSubStatsValues(SubStats2.Type)" class="w-full"
                        :disabled="IsDisabled(SubStats2.Type)"
                        :trailing-icon="errors[`SubStats.2`] ? 'i-heroicons-exclamation-triangle-20-solid' : undefined"
                      />
                    </template>
                    <template #error>
                      <span />
                    </template>
                  </UFormGroup>
                </div>

                <!-- Sub Stats 3 -->
                <div class="flex items-start justify-between gap-2">
                  <UFormGroup class="w-full" v-bind="SubStatsAttrs3" :eager-validation="true">
                    <template #default>
                      <UInputMenu
                        v-model="SubStats3.Type" option-attribute="Label" value-attribute="Type"
                        :options="StatisticsOptions" class="w-full" :search-attributes="['Label']" :disabled="IsEchoSelected"
                      />
                    </template>
                    <template #error>
                      <span />
                    </template>
                  </UFormGroup>
                  <UFormGroup class="w-32%" v-bind="SubStatsAttrs3" :eager-validation="true">
                    <template #default>
                      <USelect
                        v-model="SubStats3.Value" :options="GetSubStatsValues(SubStats3.Type)" class="w-full"
                        :disabled="IsDisabled(SubStats3.Type)"
                        :trailing-icon="errors[`SubStats.3`] ? 'i-heroicons-exclamation-triangle-20-solid' : undefined"
                      />
                    </template>
                    <template #error>
                      <span />
                    </template>
                  </UFormGroup>
                </div>

                <!-- Sub Stats 4 -->
                <div class="flex items-start justify-between gap-2">
                  <UFormGroup class="w-full" v-bind="SubStatsAttrs4" :eager-validation="true">
                    <template #default>
                      <UInputMenu
                        v-model="SubStats4.Type" option-attribute="Label" value-attribute="Type"
                        :options="StatisticsOptions" class="w-full" :search-attributes="['Label']" :disabled="IsEchoSelected"
                      />
                    </template>
                    <template #error>
                      <span />
                    </template>
                  </UFormGroup>
                  <UFormGroup class="w-32%" v-bind="SubStatsAttrs4" :eager-validation="true">
                    <template #default>
                      <USelect
                        v-model="SubStats4.Value" :options="GetSubStatsValues(SubStats4.Type)" class="w-full"
                        :disabled="IsDisabled(SubStats4.Type)"
                        :trailing-icon="errors[`SubStats.4`] ? 'i-heroicons-exclamation-triangle-20-solid' : undefined"
                      />
                    </template>
                    <template #error>
                      <span />
                    </template>
                  </UFormGroup>
                </div>
              </div>
            </UFormGroup>
          </div>
          <template #footer>
            <div class="flex items-center justify-end gap-2">
              <UButton color="white" variant="solid" size="xs" icon="mdi:arrow-left" label="Previous" :disabled="stepper.isFirst.value || false" @click.prevent="stepper.goToPrevious()" />
              <UButton
                v-if="!stepper.isLast.value"
                size="xs"
                label="Next"
                :disabled="(stepper.isLast.value || (EchoId === undefined && Sonata === undefined)) || false"
                icon="mdi:arrow-right"
                :trailing="true" @click.prevent="stepper.goToNext()"
              />
              <UButton
                v-if="stepper.isLast.value"
                size="xs"
                label="Submit"
                type="submit"
                :disabled="!meta.valid"
              />
            </div>
          </template>
        </UCard>
      </form>
    </UModal>
  </div>
</template>
