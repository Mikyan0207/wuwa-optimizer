<script setup lang="ts">
import type { Echo } from '~/Core/Models/Echo'
import type { Sonata } from '~/Core/Models/Sonata'
import { UBadge } from '#components'
import { GetBackgroundColor, GetHighlightColor, GetSecondaryColor } from '~/Core/Utils/ColorUtils'
import { GetEchoCostText } from '~/Core/Utils/EchoUtils'

const props = defineProps<{
  echo: Echo
}>()

const emits = defineEmits<{
  selected: [sonata: Sonata]
}>()

const { t } = useI18n()

const BackgroundColor = computed(() => GetBackgroundColor(props.echo.Rarity))
const SecondaryColor = computed(() => GetSecondaryColor(props.echo.Rarity))
const HighlightColor = computed(() => GetHighlightColor(props.echo.Rarity))

function OnSelectSonata(sonata: Sonata) {
  emits('selected', sonata)
}
</script>

<template>
  <UCard
    :ui="{
      root: 'rounded-xs border-neutral-700 group',
      body: 'p-0 sm:p-0',
    }"
  >
    <div class="flex">
      <!-- Icon / Rarity -->
      <div class="relative h-26 min-h-26 w-26 flex items-center justify-center overflow-clip">
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
      <div class="w-46 border-l border-neutral-700 p-2 space-y-1 text-sm">
        <!-- Name -->
        <div class="w-full flex items-center justify-between">
          <div :title="t(`${echo.Id}_name`)" class="text-truncate">
            {{ t(`${echo.Id}_name`) }}
          </div>
        </div>
        <!-- Cost /  Variant -->
        <div class="w-full flex items-center gap-1">
          <UBadge variant="soft" color="info" size="sm">
            {{ `Cost ${GetEchoCostText(echo.Cost)}` }}
          </UBadge>
          <UBadge v-if="echo.IsNightmare === true" variant="soft" color="warning" size="sm">
            {{ `Nightmare` }}
          </UBadge>
        </div>
        <div class="flex items-center justify-start gap-1 mt-3">
          <div
            v-for="sonata in echo.Sonata" :key="`${echo.Id}-${sonata.Name}`"
            class="cursor-pointer rounded-md p-1 transition-all duration-150 hover:bg-neutral-800"
            @click.prevent="OnSelectSonata(sonata)"
          >
            <NuxtImg :src="sonata.GetIcon()" class="h-6 min-h-6 min-w-6 w-6 object-contain" />
          </div>
        </div>
      </div>
    </div>
  </UCard>
</template>
