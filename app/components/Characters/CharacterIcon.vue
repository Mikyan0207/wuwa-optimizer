<script setup lang="ts">
import type { Character } from '~/Core/Models/Character'
import { CharacterReleaseState } from '~/Core/Enums/CharacterReleaseState'
import { GetBackgroundColor, GetHighlightColor, GetSecondaryColor } from '~/Core/Utils/ColorUtils'

const props = defineProps<{
  character: Character
}>()

const BackgroundColor = computed(() => GetBackgroundColor(props.character.Rarity))
const SecondaryColor = computed(() => GetSecondaryColor(props.character.Rarity))
const HighlightColor = computed(() => GetHighlightColor(props.character.Rarity))
</script>

<template>
  <div
    class="group relative cursor-pointer border-2 border-white/18 rounded bg-black/66 backdrop-blur-4 transition-duration-100"
  >
    <div class="relative min-h-32 w-32 flex items-center justify-center overflow-clip">
      <div v-if="character.ReleaseState === CharacterReleaseState.NEW" class="absolute left-1 top-0 z-2">
        <UBadge color="error" variant="solid" size="sm" class="text-white">
          NEW
        </UBadge>
      </div>
      <div v-if="character.ReleaseState === CharacterReleaseState.UPCOMING" class="absolute left-1 top-0 z-2">
        <UBadge color="info" variant="solid" size="sm" class="px-2 text-white">
          2.1
        </UBadge>
      </div>
      <div class="absolute right-0 top-0 z-2">
        <NuxtImg width="32" height="32" :src="character.GetTypeIcon()" style="color: transparent;" />
      </div>
      <div class="absolute bottom-0">
        <NuxtImg
          width="160"
          height="160"
          :src="`${character.GetIcon()}`"
          style="color: transparent;"
        />
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
      {{ character.Name }}
    </div>
  </div>
</template>
