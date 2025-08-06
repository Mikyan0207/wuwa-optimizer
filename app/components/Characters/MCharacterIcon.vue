<script setup lang="ts">
import type Character from '~/Core/Interfaces/Character'
import { useGameIcon } from '~/composables/core/UseGameIcon'
import { useRarityEffects } from '~/composables/core/UseRarityEffects'
import { ReleaseState } from '~/Core/Enums/ReleaseState'

const props = defineProps<{ character: Character }>()

const { Background, Secondary, Highlight } = useRarityEffects(props.character.Rarity)
const { MainIcon, TypeIcon, Name, CharacterInfo } = useGameIcon(props.character)
</script>

<template>
  <MIconFrame
    :background="Background"
    :secondary="Secondary"
    :highlight="Highlight"
    :release-status="CharacterInfo?.ReleaseState ?? ReleaseState.RELEASED"
  >
    <!-- Type Icon -->
    <template #type-icon>
      <NuxtImg
        v-if="TypeIcon && CharacterInfo?.ReleaseState !== ReleaseState.UNKNOWN"
        :width="32"
        :height="32"
        :src="TypeIcon"
        style="color: transparent;"
      />
    </template>

    <!-- Main Icon -->
    <template #main-icon>
      <NuxtImg
        :width="160"
        :height="160"
        :src="MainIcon"
        style="color: transparent;"
      />
    </template>

    <!-- Name -->
    <template #name>
      <div
        class="overflow-hidden mx-auto text-ellipsis whitespace-nowrap"
        style="width: 115px;"
        :title="Name"
      >
        {{ Name }}
      </div>
    </template>
  </MIconFrame>
</template>
