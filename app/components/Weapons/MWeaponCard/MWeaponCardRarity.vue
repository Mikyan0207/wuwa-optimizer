<script setup lang="ts">
import type Weapon from '~/Core/Interfaces/Weapon'
import { GetRarityAsNumber } from '~/Core/Utils/RarityUtils'

interface WeaponCardRarityProps {
  weapon: Weapon | undefined
}

defineProps<WeaponCardRarityProps>()

const { t } = useI18n()
</script>

<template>
  <div class="flex items-center gap-1 mb-3">
    <div v-if="weapon" class="flex items-center">
      <NuxtImg
        v-for="idx in GetRarityAsNumber(weapon.Rarity)"
        :key="idx"
        src="/images/icons/Icon_StarBig.webp"
        class="h-4 w-4 object-cover"
        fit="cover"
      />
    </div>
    <USkeleton v-else class="h-3 w-20" />
    <UBadge v-if="weapon" class="text-gray-300" variant="soft" color="primary">
      {{ `${t('label_level')} ${weapon.Level} · R${weapon.Rank || 0}` }}
    </UBadge>
    <USkeleton v-else class="h-3 w-10" />
  </div>
</template>
