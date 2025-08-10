<script setup lang="ts">
import type Weapon from '~/Core/Interfaces/Weapon'
import { Rarity } from '~/Core/Enums/Rarity'

interface WeaponFormWeaponStepProps {
  availableWeapons: Weapon[]
  selectedWeaponId: number
  errors: string[]
}

defineProps<WeaponFormWeaponStepProps>()

const emits = defineEmits<{
  selectWeapon: [weaponId: number]
}>()

const { t } = useI18n()

function GetRarityText(rarity: Rarity) {
  switch (rarity) {
    case Rarity.FIVE_STARS:
      return '5'
    case Rarity.FOUR_STARS:
      return '4'
    case Rarity.THREE_STARS:
      return '3'
    case Rarity.TWO_STARS:
      return '2'
    case Rarity.ONE_STAR:
      return '1'
    default:
      return '1'
  }
}

function SelectWeapon(weaponId: number) {
  emits('selectWeapon', weaponId)
}
</script>

<template>
  <div class="h-full flex flex-col overflow-hidden min-h-0">
    <!-- Weapon Grid -->
    <div class="overflow-y-auto scrollbar-hidden p-4 pb-4 min-h-0 flex-1">
      <!-- Error Display -->
      <div v-if="errors.length > 0" class="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-br-lg">
        <div class="text-red-400 text-sm">
          <div v-for="error in errors" :key="error" class="flex items-center gap-2">
            <UIcon name="i-lucide-alert-circle" class="h-4 w-4" />
            {{ error }}
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-2">
        <div
          v-for="weapon in availableWeapons"
          :key="weapon.GameId"
          class="group cursor-pointer bg-white/5 border border-white/10 rounded-br-lg transition-all duration-200 hover:bg-white/10 hover:border-white/20 relative"
          :class="{ 'bg-primary-500/20 border-primary-500/50 ring-2 ring-primary-500/50': selectedWeaponId === weapon.GameId }"
          @click.prevent="SelectWeapon(weapon.GameId)"
        >
          <div class="flex h-full">
            <!-- Icon -->
            <div class="relative flex items-center justify-center overflow-clip">
              <div class="w-32 h-32">
                <NuxtImg
                  width="160" height="160" :src="`/images/weapons/${weapon.Icon}`" style="color: transparent;"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>

            <!-- Content -->
            <div class="border-l border-neutral-700 p-2 space-y-1 text-sm flex-1">
              <!-- Name -->
              <div class="w-full flex items-center justify-between text-nowrap">
                <div :title="t(`${weapon.GameId}_name`)" class="text-truncate">
                  {{ t(`${weapon.GameId}_name`) }}
                </div>
              </div>

              <!-- Type and Rarity -->
              <div class="flex items-center gap-1 pt-1">
                <UBadge variant="soft" color="info" size="sm">
                  {{ weapon.Type }}
                </UBadge>
                <UBadge variant="soft" color="warning" size="sm">
                  {{ GetRarityText(weapon.Rarity) }}
                  <UIcon name="i-carbon-star-filled" class="h-3 w-3 text-yellow-400" />
                </UBadge>
              </div>

              <!-- Main and Secondary Stats -->
              <div v-if="weapon.MainStatistic && weapon.SecondaryStatistic" class="space-y-2 pt-2">
                <MStatLine :stat="weapon.SecondaryStatistic" :is-main-stat="false" icon-size="xs" :show-line="true" />
                <MStatLine :stat="weapon.MainStatistic" :is-main-stat="true" icon-size="xs" :show-line="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
