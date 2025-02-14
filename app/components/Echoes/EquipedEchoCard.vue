<script setup lang="ts">
import type { Echo } from '~/Core/Models/Echo'
import { UBadge } from '#components'
import { StatType } from '~/Core/Enums/StatType'
import { STAT_ICONS } from '~/Core/Statistics'
import { GetBackgroundColor, GetHighlightColor, GetSecondaryColor } from '~/Core/Utils/ColorUtils'
import { GetEchoCostText } from '~/Core/Utils/EchoUtils'

const props = defineProps<{
  echo: Echo
}>()

const { t } = useI18n()

const CharactersStore = useCharactersStore()
const EquipedBy = computed(() => CharactersStore.Characters.find(x => x.EquipedEchoes.includes(props.echo.Id)))

const BackgroundColor = computed(() => GetBackgroundColor(props.echo.Rarity))
const SecondaryColor = computed(() => GetSecondaryColor(props.echo.Rarity))
const HighlightColor = computed(() => GetHighlightColor(props.echo.Rarity))

function IsPercentageStat(statType: StatType) {
  return !(statType === StatType.ATTACK || statType === StatType.HP || statType === StatType.DEF)
}
</script>

<template>
  <UCard
    :ui="{
      root: 'rounded-xs group',
      body: 'p-0 sm:p-0',
    }"
  >
    <div class="flex">
      <!-- Icon / Rarity -->
      <div class="relative min-h-26 min-w-26 flex items-center justify-center overflow-clip">
        <!-- Icon -->
        <div class="absolute w-full h-full  bottom-0">
          <NuxtImg
            width="160" height="160" :src="`${echo.GetIcon()}`" style="color: transparent;"
            class="w-full h-full object-cover"
          />
        </div>
        <!-- Rarity Highlight -->
        <div class="absolute bottom-0 w-full rounded-bl">
          <div class="relative w-full flex items-center">
            <div class="absolute mt-auto h-4 w-full -bottom-2">
              <div
                class="absolute bottom-0 h-3 w-full blur-lg transition-all duration-200 group-hover:h-4 group-hover:blur"
                :class="BackgroundColor"
              />
              <div
                class="absolute bottom-0 h-2 w-full blur duration-200 group-hover:h-2 group-hover:blur-sm"
                :class="SecondaryColor"
              />
            </div>
          </div>
          <div class="h-[3px] rounded-bl" :class="HighlightColor" />
        </div>
      </div>
      <div class="w-[24em] border-l border-neutral-700 p-2 space-y-1 text-sm">
        <div v-if="EquipedBy" class="absolute top-1 right-1">
          <NuxtImg
            :src="`/images/characters/${EquipedBy.Id}/${EquipedBy.Icon}`" style="color: transparent;"
            class="w-8 h-8 object-cover rounded-full"
          />
        </div>
        <!-- Name -->
        <div class="w-full flex items-center justify-between">
          <div :title="t(`${echo.Id}_name`)" class="text-truncate">
            {{ t(`${echo.Id}_name`) }}
          </div>
        </div>
        <!-- Cost /  Variant -->
        <div class="w-full mt-2 flex items-center gap-1">
          <UBadge class="text-xs" size="xs" variant="soft" color="error">
            {{ `${t('label_level')} ${echo.Level}` }}
          </UBadge>
          <UBadge variant="soft" color="info" size="sm">
            {{ `Cost ${GetEchoCostText(echo.Cost)}` }}
          </UBadge>
          <UBadge v-if="echo.IsNightmare === true" variant="soft" color="warning" size="sm">
            {{ `Nightmare` }}
          </UBadge>
        </div>
        <!-- Stats Preview -->
        <div class="grid grid-cols-3 mt-3 gap-1">
          <div
            v-for="(stat, idx) in [echo.MainStatistic, ...echo.Statistics]"
            :key="`${echo.Id}-${stat?.Type}-${idx}`"
            class="relative flex items-center justify-between gap-1 bg-neutral-800 rounded-sm px-1 py-0.5"
          >
            <div v-if="stat" class="flex items-center gap-2 text-gray-300">
              <NuxtImg :src="`/images/icons/${STAT_ICONS[stat.Type]}`" class="w-4 min-w-4 h-4" />
            </div>
            <p v-if="stat" class="flex items-center justify-center text-nowrap font-semibold text-xs">
              <span>{{ stat.Value.toFixed(1) }}</span>
              <span v-if="IsPercentageStat(stat.Type)">%</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </UCard>
</template>
