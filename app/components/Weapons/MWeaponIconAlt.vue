<script setup lang="ts">
import type Weapon from '~/Core/Interfaces/Weapon'
import { GetWeaponIcon } from '~/Core/Utils/WeaponUtils'

interface WeaponIconAltProps {
  weapon: Weapon | undefined
}

const props = defineProps<WeaponIconAltProps>()

const IsValidWeapon = computed(() => props.weapon && (props.weapon.GameId !== -1 || props.weapon.Id !== undefined))

// const { Background, Secondary, Highlight } = useRarityEffects(props.echo?.Rarity ?? Rarity.THREE_STARS)
</script>

<template>
  <div class="relative">
    <NuxtImg v-if="IsValidWeapon" :src="GetWeaponIcon(weapon!)" class="w-auto rounded-md border border-neutral-700 object-cover h-24" />
    <USkeleton v-else class="h-24 w-24 rounded-md border bg-neutral-800 border-neutral-700" />

    <div class="absolute top-1 right-1">
      <slot name="top-right" />
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
