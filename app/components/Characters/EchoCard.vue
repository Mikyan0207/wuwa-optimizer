<script setup lang="ts">
import type { Character } from '~/Core/Models/Character'
import type { Echo } from '~/Core/Models/Echo'
import type { Sonata } from '~/Core/Models/Sonata'
import type { IEchoRatingResult } from '~/Core/Systems/RatingSystem'
import { EchoCost } from '~/Core/Enums/EchoCost'
import { Rarity } from '~/Core/Enums/Rarity'
import { StatType } from '~/Core/Enums/StatType'
import { FOUR_COST_MAIN_STATS_VALUES, MAKE_STAT, ONE_COST_MAIN_STATS_VALUES, STAT_NAMES, SUB_STAT_VALUES, THREE_COST_MAIN_STATS_VALUES } from '~/Core/Statistics'

export interface EchoCardProps {
  echo: Echo
  echoSlot: number
  score?: IEchoRatingResult
  character: Character
}

const props = defineProps<EchoCardProps>()

const EchoesStore = useEchoesStore()
const CharactersStore = useCharactersStore()

const IsHovered = ref<boolean>(false)
const ShowEditEchoModal = ref<boolean>(false)

function GetEchoRarityBackgroundColor(rarity: Rarity) {
  switch (rarity) {
    case Rarity.FIVE_STARS:
      return 'bg-amber-4'
    case Rarity.FOUR_STARS:
      return 'bg-purple-4'
    case Rarity.THREE_STARS:
      return 'bg-blue-4'
    default:
      return 'bg-gray-4'
  }
}

// Edit Info
const EditedEcho = ref<Echo | undefined>(undefined)
const IsValidEcho = computed(() => props.echo !== undefined && props.echo.Id !== -1)

const SelectedMainStat = ref<{
  type: string
  value: string | undefined
  label: string
}>({
  type: StatType.NONE,
  value: undefined,
  label: '',
})
const SelectedSonata = ref<Sonata | undefined>(undefined)
const SelectedSubStats = ref<{
  type: string
  label: string
}[]>([
  {
    type: StatType.NONE,
    label: '',
  },
  {
    type: StatType.NONE,
    label: '',
  },
  {
    type: StatType.NONE,
    label: '',
  },
  {
    type: StatType.NONE,
    label: '',
  },
  {
    type: StatType.NONE,
    label: '',
  },
])

const SelectedSubStatsValues = ref<string[] | undefined[]>([undefined, undefined, undefined, undefined, undefined])

const LevelOptions = Array.from({ length: 25 }).fill(0).map((_, idx) => {
  return {
    label: `+${idx + 1}`,
  }
}).reverse()

const SelectedLevel = ref(LevelOptions[0])

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

const SelectedRarity = ref(RarityOptions[0])

const StatisticsOptions = Object.entries(STAT_NAMES)
  .filter(([key, _]) => key !== StatType.NONE)
  .map(([key, value]) => {
    const k = key as unknown as keyof typeof STAT_NAMES

    return {
      label: value,
      type: k,
    }
  })

if (props.echo.Id !== -1) {
  EditedEcho.value = props.echo
  SelectedSonata.value = EditedEcho.value.Sonata.find(s => s.IsSelected === true)
}

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
  if (SelectedMainStat.value.type === undefined || SelectedMainStat.value.type === StatType.NONE) {
    return 0
  }

  switch (EditedEcho.value?.Cost) {
    case EchoCost.FOUR_COST:
      return SelectedMainStat.value.value = (FOUR_COST_MAIN_STATS_VALUES[SelectedMainStat.value.type as StatType] || 0).toString()
    case EchoCost.THREE_COST:
      return SelectedMainStat.value.value = (THREE_COST_MAIN_STATS_VALUES[SelectedMainStat.value.type as StatType] || 0).toString()
    case EchoCost.ONE_COST:
      return SelectedMainStat.value.value = (ONE_COST_MAIN_STATS_VALUES[SelectedMainStat.value.type as StatType] || 0).toString()
    default:
      return 0
  }
}

function IsDisabled(idx: number) {
  return SelectedSubStats.value[idx]?.type === undefined || SelectedSubStats.value[idx]?.type === StatType.NONE
}

function GetSubStatsValues(idx: number) {
  const t = SelectedSubStats.value[idx]

  if (t === undefined) {
    return []
  }

  return SUB_STAT_VALUES[t.type as StatType] || []
}

function OnSubmit() {
  if (EditedEcho.value === undefined) {
    return
  }

  if (SelectedSonata.value !== undefined) {
    EditedEcho.value.Sonata.find(s => s.Name === SelectedSonata.value?.Name)!.IsSelected = true
  }

  EditedEcho.value.Rarity = SelectedRarity.value?.type ?? Rarity.FIVE_STARS
  EditedEcho.value.Level = Number.parseInt(SelectedLevel.value!.label.slice(1))
  EditedEcho.value.MainStatistic = { Type: StatType[SelectedMainStat.value.type as keyof typeof StatType], Value: Number.parseFloat(SelectedMainStat.value.value ?? '0') }
  EditedEcho.value.Statistics = SelectedSubStats.value.map((s, idx) => MAKE_STAT(StatType[s.type as keyof typeof StatType], Number.parseFloat(SelectedSubStatsValues.value[idx] ?? '0')))
  EditedEcho.value.EquipedBy = props.character.Id

  // Est-ce qu'on fait un nouvel echo qu'on équipe ou on edit l'echo actuel...
  // Pour l'instant un nouveau c'est très bien.
  EchoesStore.AddEcho(EditedEcho.value)
  CharactersStore.UpdateEcho(props.character.Id, EditedEcho.value, props.echoSlot)

  ShowEditEchoModal.value = false
}
</script>

<template>
  <div class="relative h-23em w-full p-4" @mouseenter="IsHovered = true" @mouseleave="IsHovered = false">
    <div v-if="IsHovered" class="absolute right-1 top-1" @click="ShowEditEchoModal = true">
      <div class="cursor-pointer border border-white/14 rounded-md bg-black/44 px-2 py-1 text-sm text-white">
        <p>
          Edit Echo
        </p>
      </div>
    </div>
    <!-- Echo Details -->
    <div class="w-full flex flex-col items-start gap-2">
      <div class="flex flex-row items-center gap-4">
        <div class="flex flex-col items-center gap-2">
          <NuxtImg v-if="IsValidEcho" :src="`/images/echoes/${echo.Icon}`" :class="`h-12 w-12 rounded-full ${GetEchoRarityBackgroundColor(echo.Rarity)}`" />
          <USkeleton v-else class="h-12 w-12 rounded-full" :ui="{ base: '' }" />
        </div>
        <div class="flex flex-col">
          <p v-if="IsValidEcho" class="text-lg text-white">
            {{ echo.Name }}
          </p>
          <USkeleton v-else class="h-3 w-22" :ui="{ base: '' }" />
          <p v-if="IsValidEcho" class="text-xs text-gray-300">
            +<span>{{ echo.Level }}</span>
          </p>
          <USkeleton v-else class="mt-1 h-2 w-8" :ui="{ base: '' }" />
        </div>
      </div>
      <div class="mx-auto my-2 h-1px w-full rounded-full bg-white/14" />
      <!-- Main Stat -->
      <div class="w-full flex flex-row gap-4">
        <div v-if="echo.MainStatistic && IsValidEcho" class="w-full flex items-start justify-between gap-12">
          <StatLine :stat="echo.MainStatistic" />
        </div>
        <div v-else class="w-full flex items-center justify-between gap-12">
          <div class="flex items-center gap-2">
            <USkeleton class="h-6 w-6 rounded-full" :ui="{ base: '' }" />
            <USkeleton class="mt-0.5 h-2 w-18" :ui="{ base: '' }" />
          </div>
          <USkeleton class="mt-0.5 h-2 w-8" :ui="{ base: '' }" />
        </div>
      </div>
      <div class="mx-auto my-2 h-1px w-full rounded-full bg-white/14" />
      <!-- Sub Stats -->
      <div v-if="IsValidEcho" class="w-full flex flex-col gap-1">
        <StatLine v-for="(stat, idx) in echo.Statistics" :key="`stat-${stat.Type}-${idx}`" :stat="stat" :show-roll-value="true" />
      </div>
      <div v-else class="w-full flex flex-col gap-1">
        <div v-for="idx in 5" :key="idx" class="w-full flex items-center justify-between gap-12">
          <div class="flex items-center gap-2">
            <USkeleton class="h-6 w-6 rounded-full" :ui="{ base: '' }" />
            <USkeleton class="mt-0.5 h-2 w-18" :ui="{ base: '' }" />
          </div>
          <USkeleton class="mt-0.5 h-2 w-8" :ui="{ base: '' }" />
        </div>
      </div>
      <div class="mx-auto my-2 h-1px w-full rounded-full bg-white/14" />
      <!-- Echo Score -->
      <div class="w-full flex flex-row items-end gap-4">
        <div class="w-full flex items-start justify-between gap-12">
          <div class="flex items-center gap-2">
            <p>Score</p>
          </div>
          <div v-if="IsValidEcho" class="w-full flex flex-row items-center justify-end gap-3">
            <p v-if="score">
              {{ (score.Score * 100).toFixed(1) }}
            </p>
            <p v-if="score">
              (<EchoNote :value="score.NoteScore" :text="score.Note" class="font-semibold" />)
            </p>
          </div>
          <div v-else class="mt-2 w-full flex flex-row items-center justify-end">
            <USkeleton class="h-2 w-8" :ui="{ base: '' }" />
          </div>
        </div>
      </div>
    </div>
    <!-- Edit Echo Modal -->
    <UModal v-model="ShowEditEchoModal" :ui="{ container: ' flex min-h-full items-center justify-center text-center', width: 'w-full sm:max-w-lg' }">
      <div class="p-4">
        <div class="grid cols-3 w-full gap-8">
          <div class="col-span-2 flex flex-col gap-2">
            <!-- Echo Selection -->
            <UFormGroup>
              <UDivider label="Echo" class="my-3" />
              <UInputMenu v-model="EditedEcho" placeholder="" :options="EchoesStore.GetDefaultEchoes()" option-attribute="Name">
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
            <UFormGroup>
              <UDivider label="Sonata Effect" class="my-3" />
              <div v-if="EditedEcho !== undefined" class="h-full flex items-center justify-start border border-white/14 rounded-lg">
                <div
                  v-for="(sonata) in EditedEcho.Sonata"
                  :key="sonata.Name"
                  class="flex cursor-pointer items-center hover:bg-white/8"
                  :class="{ 'bg-white/8': SelectedSonata?.Name === sonata.Name }"
                  @click.prevent="() => SelectedSonata = sonata"
                >
                  <UTooltip :ui="{ wrapper: 'relative', base: 'h-auto! p-4 text-xs font-normal relative' }">
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
              <div v-else class="flex cursor-pointer items-center border border-white/14 rounded-lg rounded-lg p-2">
                <span class="text-sm text-gray-400">No echo selected.</span>
              </div>
            </UFormGroup>

            <!-- Level & Rarity -->
            <UFormGroup>
              <UDivider label="Enhance / Rarity" class="my-3" />
              <div class="w-full flex flex-row items-center justify-between gap-2">
                <USelectMenu
                  v-model="SelectedLevel"
                  :options="LevelOptions"
                  value-attribute="label"
                  option-attribute="label"
                  class="w-full"
                />
                <USelectMenu
                  v-model="SelectedRarity"
                  :options="RarityOptions"
                  class="w-36"
                  value-attribute="label"
                  option-attribute="label"
                />
              </div>
            </UFormGroup>

            <!-- Main Stat -->
            <UFormGroup>
              <UDivider label="Main Stat" class="my-3" />
              <div class="flex items-center justify-between gap-2">
                <UInputMenu
                  v-model="SelectedMainStat"
                  placeholder="HP%"
                  by="type"
                  option-attribute="label"
                  option-value="id"
                  :options="StatisticsOptions"
                  class="w-full"
                  :search-attributes="['label']"
                  @update:model-value="() => GetMainStatValue()"
                />

                <UInput v-model="SelectedMainStat.value" placeholder="" class="w-35%" />
              </div>
            </UFormGroup>

            <!-- Sub Stats -->
            <UFormGroup>
              <UDivider label="Sub Stats" class="my-3" />
              <div class="space-y-1">
                <div v-for="(_, idx) in Array.from({ length: 5 })" :key="`echo-sub-stat-${idx}`" class="flex items-center justify-between gap-2">
                  <UInputMenu
                    v-model="SelectedSubStats[idx]"
                    placeholder="HP%"
                    by="type"
                    option-attribute="label"
                    :options="StatisticsOptions"
                    class="w-full"
                    :search-attributes="['label']"
                  />
                  <USelect v-model="SelectedSubStatsValues[idx]" :options="GetSubStatsValues(idx)" class="w-35%" :disabled="IsDisabled(idx)" />
                </div>
              </div>
            </UFormGroup>
          </div>
          <!-- Equiped By -->
          <div>
            <UFormGroup label="Equiped By">
              <div class="h-auto min-w-full w-full border border-white/14 rounded">
                <NuxtImg :src="character.GetIcon()" class="w-full rounded object-cover" />
              </div>
            </UFormGroup>
          </div>
        </div>
        <div class="mt-6 flex items-center justify-end gap-2">
          <UButton label="Cancel" color="gray" variant="outline" @click.prevent="ShowEditEchoModal = false" />
          <UButton label="Submit" color="primary" variant="solid" @click.prevent="OnSubmit" />
        </div>
      </div>
    </UModal>
  </div>
</template>
