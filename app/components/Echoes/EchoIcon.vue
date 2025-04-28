<script setup lang="ts">
import type Echo from '~/Core/Interfaces/Echo'
import { GetBackgroundColor, GetHighlightColor, GetSecondaryColor } from '~/Core/Utils/ColorUtils'
import { GetEchoIcon, GetSonataIcon } from '~/Core/Utils/EchoUtils'

const props = defineProps<{
  echo: Echo
}>()

const { t } = useI18n()

const BackgroundColor = computed(() => GetBackgroundColor(props.echo.Rarity))
const SecondaryColor = computed(() => GetSecondaryColor(props.echo.Rarity))
const HighlightColor = computed(() => GetHighlightColor(props.echo.Rarity))
</script>

<template>
  <UTooltip
    arrow
    :delay-duration="0"
  >
    <template #content>
      <div class="w-64 flex flex-col space-y-3">
        <div class="flex mb-4 items-center gap-2">
          <span>{{ t(`${echo.Id}_name`) }}</span>
          <UBadge color="error" variant="soft" size="sm" class="text-nowrap">
            {{ `${t(`label_level`)} ${echo.Level}` }}
          </UBadge>
        </div>
        <USeparator />
        <div class="w-full">
          <div v-if="echo.MainStatistic" class="w-full flex items-start justify-between gap-12">
            <StatLine :stat="echo.MainStatistic" />
          </div>
        </div>
        <USeparator />
        <!-- Sub Stats -->
        <div class="w-full flex flex-col gap-1">
          <StatLine v-for="(stat, idx) in echo.Statistics" :key="`stat-${stat.Type}-${idx}`" :stat="stat" :show-line="true" />
        </div>
      </div>
    </template>
    <UCard
      class="group relative transition-all duration-100" :ui="{
        root: 'rounded-none rounded-br-xl border-0',
        body: 'p-0 sm:p-0',
      }"
    >
      <BorderLines :count="1" />
      <div class="relative min-h-32 w-32 flex items-center justify-center overflow-clip">
        <div class="absolute right-1 top-1 z-2">
          <NuxtImg width="26" height="26" :src="GetSonataIcon(echo.Sonata.find(x => x.IsSelected)!)" style="color: transparent;" />
        </div>
        <div class="absolute bottom-0">
          <NuxtImg width="160" height="160" :src="`${GetEchoIcon(echo)}`" style="color: transparent;" />
        </div>
        <div class="absolute bottom-0 w-full">
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
          <div class="h-[3px]" :class="HighlightColor" />
        </div>
      </div>
      <div class="py-1 text-center text-xs">
        {{ t(`${echo.Id}_name`) }}
      </div>
    </UCard>
  </UTooltip>
</template>
