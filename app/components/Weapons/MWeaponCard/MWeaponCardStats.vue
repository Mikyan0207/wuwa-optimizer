<script setup lang="ts">
import type Weapon from '~/Core/Interfaces/Weapon'

interface WeaponCardStatsProps {
  weapon: Weapon | undefined
}

defineProps<WeaponCardStatsProps>()
</script>

<template>
  <div class="flex flex-col items-start text-gray-300 gap-1">
    <MStatLine
      v-if="weapon && weapon.MainStatistic"
      :stat="weapon.MainStatistic"
      :show-line="true"
      :show-roll-value="true"
      class="p-0!"
    />
    <USkeleton v-else class="mt-4 h-3 w-24" />
    <MStatLine
      v-if="weapon && weapon.SecondaryStatistic"
      :stat="weapon.SecondaryStatistic"
      :show-line="true"
      :show-roll-value="true"
      class="p-0!"
    />
    <USkeleton v-else class="h-3 mt-1 w-24" />
  </div>
</template>
