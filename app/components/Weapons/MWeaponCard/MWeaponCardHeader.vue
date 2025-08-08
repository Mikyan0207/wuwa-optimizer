<script setup lang="ts">
import type Weapon from '~/Core/Interfaces/Weapon'

interface WeaponCardHeaderProps {
  weapon: Weapon | undefined
}

defineProps<WeaponCardHeaderProps>()

const { t } = useI18n()
</script>

<template>
  <div v-if="weapon" class="text-lg">
    {{ t(`${weapon.GameId}_name`) }}
  </div>
  <USkeleton v-else class="h-4 w-26" />
</template>
