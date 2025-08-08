<script setup lang="ts">
import type Weapon from '~/Core/Interfaces/Weapon'

interface WeaponCardHeaderProps {
  weapon: Weapon | undefined
}

defineProps<WeaponCardHeaderProps>()

const { t } = useI18n()
</script>

<template>
  <div class="flex items-center gap-2">
    <div v-if="weapon" class="text-lg">
      {{ t(`${weapon.GameId}_name`) }}
    </div>
    <USkeleton v-else class="h-4 w-26" />

    <UBadge v-if="weapon" class="text-gray-300" variant="subtle" color="primary">
      {{ `${t('label_level')} ${weapon.Level} · R${weapon.Rank || 0}` }}
    </UBadge>
    <USkeleton v-else class="h-3 w-10" />
  </div>
</template>
