<script setup lang="ts">
import type Weapon from '~/Core/Interfaces/Weapon'
import { useGameIcon } from '~/composables/core/UseGameIcon'
import { useRarityEffects } from '~/composables/core/UseRarityEffects'
import { ReleaseState } from '~/Core/Enums/ReleaseState'

interface WeaponIconProps {
  weapon: Weapon
}

const props = defineProps<WeaponIconProps>()

const { Background, Secondary, Highlight } = useRarityEffects(props.weapon.Rarity)
const { MainIcon, Name, WeaponInfo } = useGameIcon(props.weapon)
</script>

<template>
  <MIconFrame
    :background="Background"
    :secondary="Secondary"
    :highlight="Highlight"
    :release-status="WeaponInfo?.ReleaseState ?? ReleaseState.RELEASED"
  >
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
