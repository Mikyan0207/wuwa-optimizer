<script setup lang="ts">
import type Echo from '~/Core/Interfaces/Echo'
import { useRarityEffects } from '~/composables/core/UseRarityEffects'
import { Rarity } from '~/Core/Enums/Rarity'
import { GetEchoIcon, GetSonataIcon } from '~/Core/Utils/EchoUtils'

interface EchoIconAltProps {
  echo: Echo | undefined
}

const props = defineProps<EchoIconAltProps>()

const IsValidEcho = computed(() => props.echo && props.echo.GameId !== -1 && props.echo.Id !== undefined)
const SelectedSonata = computed(() => props.echo && props.echo.Sonata.find(x => x.IsSelected === true))

// const { Background, Secondary, Highlight } = useRarityEffects(props.echo?.Rarity ?? Rarity.THREE_STARS)
</script>

<template>
  <div class="overflow-clip relative">
    <NuxtImg v-if="IsValidEcho && SelectedSonata" :src="GetSonataIcon(SelectedSonata)" class="h-6 w-6 flex-shrink-0 absolute top-1 right-1" />
    <NuxtImg v-if="IsValidEcho" :src="GetEchoIcon(echo!)" class="w-auto rounded-md border border-neutral-700 object-cover h-24" />
    <USkeleton v-else class="h-24 w-24 rounded-md border bg-neutral-800 border-neutral-700" />

    <div class="absolute top-1 right-1">
      <slot name="top-right" />
    </div>
    <div class="absolute bottom-0 left-0 rounded-bl-md overflow-clip">
      <slot name="bottom-left" />
    </div>

    <!-- Rarity Glow -->
    <div class="absolute bottom-[0.02em] w-full">
      <!-- <div class="relative w-full flex items-center">
        <div class="absolute mt-auto h-4 w-full">
          <div
            class="absolute bottom-0 h-3 w-full transition-all duration-200 group-hover:h-4 rounded-b-md blur-sm"
            :class="Background"
          />
          <div
            class="absolute bottom-0 h-2 w-full duration-200 group-hover:h-2 rounded-b-md blur-sm"
            :class="Secondary"
          />
        </div>
      </div> -->
      <!-- <div class="h-1 rounded-b-md" :class="Highlight" /> -->
    </div>
  </div>
</template>
