<script setup lang="ts">
import type Character from '~/Core/Interfaces/Character'
import { useGameIcon } from '~/composables/ui-core/UseGameIcon'
import { useRarityEffects } from '~/composables/ui-core/UseRarityEffects'
import { ReleaseState } from '~/Core/Enums/ReleaseState'

const props = defineProps<{ character: Character }>()

const { Background, Secondary, Highlight } = useRarityEffects(props.character.Rarity)
const { MainIcon, TypeIcon, Name, CharacterData } = useGameIcon(props.character)
</script>

<template>
  <IconFrame
    :background="Background"
    :secondary="Secondary"
    :highlight="Highlight"
    :release-status="CharacterData?.ReleaseState ?? ReleaseState.RELEASED"
  >
    <!-- Type Icon -->
    <template #type-icon>
      <NuxtImg
        v-if="TypeIcon"
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
      {{ Name }}
    </template>
  </IconFrame>
</template>
