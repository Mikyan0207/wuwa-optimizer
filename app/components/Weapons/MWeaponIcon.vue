<script setup lang="ts">
import type Weapon from '~/Core/Interfaces/Weapon'
import { useGameIcon } from '~/composables/core/UseGameIcon'
import { useRarityEffects } from '~/composables/core/UseRarityEffects'
import { TemplateCharacters } from '~/Core/Characters'
import { ReleaseState } from '~/Core/Enums/ReleaseState'
import { GetCharacterIcon } from '~/Core/Utils/CharacterUtils'

interface WeaponIconProps {
  weapon: Weapon
  characterId?: number
  variant?: 'normal' | 'equiped'
}

const props = withDefaults(defineProps<WeaponIconProps>(), {
  variant: 'normal',
})

const EquipedBy = computed(() => props.characterId ? TemplateCharacters.find(x => x.Id === props.characterId) : null)

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
    <!-- Weapon Type Icon -->
    <template #type-icon>
      <NuxtImg
        v-if="EquipedBy && variant === 'equiped'"
        :width="32"
        :height="32"
        :src="GetCharacterIcon(EquipedBy)"
        class="rounded-full object-cover border bg-neutral-900 border-white/20"
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
