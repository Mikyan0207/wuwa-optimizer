<script setup lang="ts">
import type { Character } from '~/Core/Models/Character'
import type { Echo } from '~/Core/Models/Echo'
import { useForm } from 'vee-validate'
import { z } from 'zod'
import { EchoCost } from '~/Core/Enums/EchoCost'
import { Rarity } from '~/Core/Enums/Rarity'
import { StatType } from '~/Core/Enums/StatType'
import { FOUR_COST_MAIN_STATS_VALUES, IsMainStatType, IsSubStatType, ONE_COST_MAIN_STATS_VALUES, STAT_NAMES, SUB_STAT_VALUES, THREE_COST_MAIN_STATS_VALUES } from '~/Core/Statistics'

const props = defineProps<{
  echo: Echo
  echoSlot: number
  character: Character
}>()

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
const CharactersStore = useCharactersStore()
const EchoesStore = useEchoesStore()

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
const [SubStats, SubStatsAttrs] = defineField('SubStats', NuxtUiConfig)

const ShowEditEchoModal = ref<boolean>(false)

const OnSubmit = handleSubmit((values) => {
  const e = EchoesStore.GetEchoById(values.EchoId)

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
  ShowEditEchoModal.value = false
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

function GetCostText(cost: EchoCost) {
  switch (cost) {
    case EchoCost.ONE_COST:
      return 'Cost 1'
    case EchoCost.THREE_COST:
      return 'Cost 3'
    default:
      return 'Cost 4'
  }
}

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

const IsEchoSelected = computed(() => !(EchoId.value !== -1 && EchoId.value !== undefined))

function IsDisabled(type: string) {
  return type === undefined || type === StatType.NONE || type === ''
}

function GetSubStatsValues(type: string) {
  return SUB_STAT_VALUES[type as StatType] || []
}
</script>

<template>
  <div>
    <div class="absolute right-1 top-1 hidden transition-all duration-75 group-hover:inline" @click="ShowEditEchoModal = true">
      <div class="cursor-pointer border border-white/14 rounded-md bg-black/44 px-2 py-1 text-sm text-white">
        <p>
          Edit Echo
        </p>
      </div>
    </div>
    <!-- Edit Echo Modal -->
    <UModal
      v-model="ShowEditEchoModal"
      prevent-close
      :ui="{ container: 'flex min-h-full items-center justify-center text-center', background: 'bg-black/66! backdrop-blur-4!', ring: 'border-2! border-white/14!', width: 'w-full sm:max-w-md' }"
      @close="OnClose"
    >
      <div class="p-4">
        <form @submit.prevent="OnSubmit">
          <!-- Echo Selection -->
          <UFormGroup name="EchoId" v-bind="EchoIdAttrs">
            <UDivider label="Echo" class="my-3" />
            <UInputMenu
              v-model="EchoId"
              :options="EchoesStore.GetDefaultEchoes()"
              option-attribute="Name"
              value-attribute="Id"
              earger-validation
              @update:model-value="Cost = EchoesStore.GetCostById(EchoId!)"
            >
              <template #option="{ option: o }">
                <div class="w-full flex items-center justify-between gap-1">
                  <div class="w-full flex flex-row items-center gap-2">
                    <NuxtImg :src="(o as Echo).GetIcon()" class="h-6 w-6 object-cover" />
                    <span :title="(o as Echo).Name" class="w-30 text-truncate text-nowrap">{{ (o as Echo).Name }}</span>
                    <div class="w-16 flex items-center gap-1">
                      <span v-for="sonata in (o as Echo).Sonata" :key="sonata.Name">
                        <NuxtImg
                          :src="sonata.GetIcon()"
                          class="h-4 w-4 object-contain"
                        />
                      </span>
                    </div>
                  </div>
                  <div class="w-12 text-right">
                    <span class="text-nowrap text-xs">{{ GetCostText((o as Echo).Cost) }}</span>
                  </div>
                </div>
              </template>
            </UInputMenu>
          </UFormGroup>

          <!-- Sonata Effect -->
          <UFormGroup name="Sonata" v-bind="SonataAttrs">
            <UDivider label="Sonata Effect" class="my-3" />
            <div v-if="!IsEchoSelected && Sonata !== undefined" class="h-full flex items-center justify-start border border-white/14 rounded">
              <div
                v-for="(sonata) in EchoesStore.GetSonataById(EchoId!)"
                :key="sonata.Name"
                class="flex cursor-pointer items-center hover:bg-white/8"
                :class="{ 'bg-white/8': Sonata.Name === sonata.Name }"
                @click.prevent="() => {
                  Sonata!.Name = sonata.Name,
                  Sonata!.SonataId = sonata.Name.toUpperCase().replace(' ', '_')
                }"
              >
                <UTooltip :popper="{ arrow: true, strategy: 'absolute' }" :ui="{ base: 'h-auto! p-4 text-xs font-normal min-w-64' }">
                  <template #text>
                    <div class="flex flex-col gap-4">
                      <span class="text-sm">
                        {{ sonata.Name }}
                      </span>
                      <div class="flex items-start gap-2">
                        <UBadge color="white" variant="solid" size="xs" :ui="{ rounded: 'rounded-full' }">
                          2 pcs.
                        </UBadge>
                        <p class="mt-0.5 text-justify text-wrap text-gray-400">
                          {{ sonata.Effect1 }}
                        </p>
                      </div>
                      <div class="flex items-start gap-2">
                        <UBadge color="white" variant="solid" size="xs" :ui="{ rounded: 'rounded-full' }">
                          5 pcs.
                        </UBadge>
                        <p class="mt-0.5 text-justify text-wrap text-gray-400">
                          {{ sonata.Effect2 }}
                        </p>
                      </div>
                    </div>
                  </template>
                  <NuxtImg
                    :src="sonata.GetIcon()"
                    class="m-2 h-6 w-6 object-cover"
                  />
                  <UDivider orientation="vertical" />
                </UTooltip>
              </div>
            </div>
            <div v-else class="flex cursor-pointer items-center border border-white/14 rounded rounded-lg p-2">
              <span class="text-sm text-gray-400">No echo selected.</span>
            </div>
          </UFormGroup>

          <!-- Level & Rarity -->
          <div class="w-full flex flex-row items-start gap-2">
            <UFormGroup name="Level" v-bind="LevelAttrs">
              <UDivider label="Enhance" class="my-3" />
              <USelectMenu
                v-model="Level"
                :options="LevelOptions"
                value-attribute="value"
                option-attribute="label"
                class="w-28"
                :disabled="IsEchoSelected"
              />
            </UFormGroup>
            <UFormGroup name="Rarity" v-bind="RarityAttrs">
              <UDivider label="Rarity" class="my-3" />
              <USelectMenu
                v-model="_Rarity"
                :options="RarityOptions"
                class="w-24"
                value-attribute="type"
                option-attribute="label"
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
                  v-model="MainStat!.Type"
                  value-attribute="Type"
                  option-attribute="Label"
                  :options="MainStatisticsOptions"
                  class="w-full"
                  :disabled="IsEchoSelected"
                  @update:model-value="GetMainStatValue()"
                />
              </UFormGroup>
              <UFormGroup name="MainStat.Value" class="w-35%" v-bind="MainStatAttrs" :eager-validation="true">
                <template #default="{ error }">
                  <UInput
                    v-model="MainStat!.Value"
                    class="w-full"
                    :disabled="IsEchoSelected"
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
              <div v-for="(v, idx) in SubStats" :key="`echo-substat-${idx}-${v}`" class="flex items-start justify-between gap-2">
                <UFormGroup class="w-full" v-bind="SubStatsAttrs" :eager-validation="true">
                  <template #default>
                    <UInputMenu
                      v-model="v.Type"
                      option-attribute="Label"
                      value-attribute="Type"
                      :options="StatisticsOptions"
                      class="w-full"
                      :search-attributes="['Label']"
                      :disabled="IsEchoSelected"
                    />
                  </template>
                  <template #error>
                    <span />
                  </template>
                </UFormGroup>
                <UFormGroup class="w-32%" v-bind="SubStatsAttrs" :eager-validation="true">
                  <template #default>
                    <USelect
                      v-model="v.Value"
                      :options="GetSubStatsValues(v.Type)"
                      class="w-full"
                      :disabled="IsDisabled(v.Type)"
                      :trailing-icon="errors[`SubStats.${idx}`] ? 'i-heroicons-exclamation-triangle-20-solid' : undefined"
                    />
                  </template>
                  <template #error>
                    <span />
                  </template>
                </UFormGroup>
              </div>
            </div>
          </UFormGroup>
          <div class="mt-6 flex items-center justify-end gap-2">
            <UButton label="Cancel" color="gray" variant="outline" @click.prevent="OnClose" />
            <UButton label="Submit" type="submit" color="primary" variant="solid" :disabled="!meta.valid" />
          </div>
        </form>
      </div>
    </UModal>
  </div>
</template>
