<script setup lang="ts">
import type { SelectMenuItem } from '@nuxt/ui'
import type Echo from '~/Core/Interfaces/Echo'
import type Sonata from '~/Core/Interfaces/Sonata'
import { z } from 'zod'
import { EchoCost } from '~/Core/Enums/EchoCost'
import { Rarity } from '~/Core/Enums/Rarity'
import { StatType } from '~/Core/Enums/StatType'
import { FOUR_COST_MAIN_STATS_VALUES, FOUR_COST_SECONDARY_STATS_VALUES, IsMainStatType, IsSecondaryStatType, IsSubStatType, ONE_COST_MAIN_STATS_VALUES, ONE_COST_SECONDARY_STATS_VALUES, STAT_NAMES, SUB_STAT_VALUES, THREE_COST_MAIN_STATS_VALUES, THREE_COST_SECONDARY_STATS_VALUES } from '~/Core/Statistics'
import { GetEchoBorderColor, GetEchoCostText, GetSonataIcon } from '~/Core/Utils/EchoUtils'

const props = defineProps<{
  echoSlot: number
}>()

const emits = defineEmits(['close'])

const { t } = useI18n()
const EchoesStore = useEchoesStore()
const { CurrentCharacter, CurrentEchoes, UpdateEcho } = useCharacterContext()

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

function OnSubmit() {
  const e = unref(EchoesStore.GetEchoById(State.EchoId!))

  if (!e) {
    return OnClose()
  }

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
  emits('close')
}

// This is only used to display the currently edited echo and get initials values.
const DisplayedEcho = computed<Echo | undefined>(() => CurrentEchoes.value.find(x => x.EquipedSlot === props.echoSlot))
const DisplayedSelectedSonata = computed<Sonata | undefined>(() => DisplayedEcho.value?.Sonata.find(x => x.IsSelected === true))

onMounted(() => {
  if (DisplayedEcho.value !== undefined && DisplayedEcho.value.Id !== -1) {
    State.EchoId = DisplayedEcho.value.Id
    State.MainStat!.Type = DisplayedEcho.value.MainStatistic!.Type
    State.MainStat!.Value = DisplayedEcho.value.MainStatistic!.Value.toFixed(1)
    State.SecondaryStat!.Type = DisplayedEcho.value.SecondaryStatistic!.Type
    State.SecondaryStat!.Value = DisplayedEcho.value.SecondaryStatistic!.Value.toFixed(1)
    State.Sonata!.Name = DisplayedEcho.value.Sonata.find(x => x.IsSelected)?.Name || ''
    State.Level = DisplayedEcho.value.Level
    State.Rarity = DisplayedEcho.value.Rarity
    State.Cost = DisplayedEcho.value.Cost

    State.SubStats = DisplayedEcho.value.Statistics.map((s) => {
      return {
        Type: s.Type,
        Value: s.Value.toFixed(1),
      }
    }) as [{ Type: StatType, Value: string }, ...{ Type: StatType, Value: string }[]]
  }
})
</script>

<template>
  <UCard>
    <template #header>
      <div class="flex items-center justify-between w-full">
        <div v-if="DisplayedEcho" class="flex items-center gap-1">
          <span>Edit</span>
          <span>{{ t(`${DisplayedEcho.Id}_name`) }}</span>
        </div>
      </div>
    </template>
    <UForm :schema="EditEchoSchema" :state="State">
      <div class="mx-auto">
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
            <div class="flex items-center justify-between w-full px-2">
              <div v-if="DisplayedSelectedSonata" class="flex items-center gap-1">
                <NuxtImg :src="GetSonataIcon(DisplayedSelectedSonata)" class="h-6 min-h-6 min-w-6 w-6 ml-auto object-contain" />
                <span class="text-xs">{{ DisplayedSelectedSonata.Name }}</span>
              </div>
              <div class="flex items-center gap-1">
                <UBadge color="primary" variant="soft" size="sm">
                  {{ `Equiped in slot ${unref(echoSlot) + 1}` }}
                </UBadge>
                <UBadge variant="soft" color="info" size="sm">
                  {{ `Cost ${GetEchoCostText(DisplayedEcho.Cost)}` }}
                </UBadge>
                <UBadge v-if="DisplayedEcho.IsNightmare === true" variant="soft" color="warning" size="sm">
                  {{ `Nightmare` }}
                </UBadge>
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
                    value-key="Value" label-key="Label" class="my-2 w-full"
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
                    class="my-2 w-full"
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
                      v-model="State.MainStat!.Type" value-key="Type" label-key="Label" arrow :search-input="{
                        icon: 'i-lucide-search',
                      }" :items="MainStatisticsOptions" class="w-full"
                      @update:model-value="GetMainStatValue()"
                    />
                  </UFormField>
                  <UFormField name="MainStat.Value" class="w-[32%]">
                    <UInput v-model="State.MainStat!.Value" class="w-full" />
                  </UFormField>
                </div>
                <div class="my-2 flex items-start justify-between gap-2">
                  <UFormField name="SecondaryStat.Type" class="w-full" :eager-validation="true">
                    <USelectMenu
                      v-model="State.SecondaryStat!.Type" value-key="Type" label-key="Label" arrow :search-input="{
                        icon: 'i-lucide-search',
                      }" :items="SecondaryStatisticsOptions" class="w-full"
                      @update:model-value="GetSecondaryStatValue()"
                    />
                  </UFormField>
                  <UFormField name="SecondaryStat.Value" class="w-[32%]">
                    <UInput v-model="State.SecondaryStat!.Value" class="w-full" />
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
                      v-model="st.Type" label-key="Label" value-key="Type" arrow :items="StatisticsOptions"
                      class="w-full"
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
    </UForm>
    <template #footer>
      <div class="w-full flex justify-end">
        <UButtonGroup size="md">
          <UButton color="neutral" variant="outline" label="Cancel" @click.prevent="OnClose()" />
          <UButton color="primary" variant="subtle" label="Submit" @click.prevent="OnSubmit()" />
        </UButtonGroup>
      </div>
    </template>
  </UCard>
</template>
