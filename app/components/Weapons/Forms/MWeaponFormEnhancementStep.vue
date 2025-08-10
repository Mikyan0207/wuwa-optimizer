<script setup lang="ts">
import type { StatType } from '~/Core/Enums/StatType'
import type Weapon from '~/Core/Interfaces/Weapon'
import { Rarity } from '~/Core/Enums/Rarity'

interface WeaponFormEnhancementStepProps {
  displayedWeapon: Weapon | undefined
  state: {
    Level: number
    Rank: number
    Rarity: Rarity
    MainStat: {
      Type: StatType
      Value: string
    }
    SecondaryStat: {
      Type: StatType
      Value: string
    }
  }
  errors: {
    Level?: string[]
    Rank?: string[]
    Rarity?: string[]
  }
}

defineProps<WeaponFormEnhancementStepProps>()

const emits = defineEmits<{
  'update:state': [newState: Partial<WeaponFormEnhancementStepProps['state']>]
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

function UpdateState(newState: Partial<WeaponFormEnhancementStepProps['state']>) {
  emits('update:state', newState)
}
</script>

<template>
  <div class="h-full flex flex-col">
    <!-- Weapon Info Header -->
    <div class="p-4 border-b border-white/10">
      <div class="flex items-center gap-3">
        <NuxtImg :src="`/images/weapons/${displayedWeapon?.Icon}`" class="w-20 h-20 rounded-lg" />
        <div class="flex-1">
          <h4 class="text-white font-semibold text-lg mb-1">
            {{ displayedWeapon ? t(`${displayedWeapon.GameId}_name`) : 'Unknown Weapon' }}
          </h4>
          <div class="flex items-center gap-2 mb-2">
            <UBadge variant="soft" color="info" size="sm">
              {{ displayedWeapon?.Type }}
            </UBadge>
            <UBadge variant="soft" color="warning" size="sm">
              {{ GetRarityText(displayedWeapon?.Rarity ?? Rarity.ONE_STAR) }}
              <UIcon name="i-carbon-star-filled" class="h-3 w-3 ml-0.5 text-yellow-400" />
            </UBadge>
          </div>
        </div>
      </div>
    </div>

    <!-- Enhancement Form -->
    <div class="overflow-y-auto scrollbar-hidden p-3 pb-24 min-h-0 flex-1">
      <div class="space-y-6">
        <!-- Enhancement Section -->
        <div>
          <div class="flex items-center gap-3 mb-4">
            <div class="flex-1 h-px bg-white/20" />
            <h3 class="text-white font-semibold text-lg">
              Enhancement
            </h3>
            <div class="flex-1 h-px bg-white/20" />
          </div>
          <div class="space-y-4">
            <!-- Level -->
            <div class="bg-black/20 border border-white/10 rounded-br-lg p-3">
              <label class="text-sm font-medium text-white/80 mb-2 block">Level</label>
              <div class="space-y-3">
                <USlider
                  :model-value="state.Level"
                  :min="1"
                  :max="90"
                  :step="1"
                  class="w-full"
                  @update="(value: number) => UpdateState({ Level: value })"
                />
                <UInput
                  :value="`${state.Level}/90`"
                  readonly
                  class="bg-black/30 border-white/20 text-primary-400 font-semibold"
                />
              </div>
              <!-- Error Display -->
              <div v-if="errors.Level && errors.Level.length > 0" class="mt-2 text-red-400 text-xs">
                <div v-for="error in errors.Level" :key="error" class="flex items-center gap-1">
                  <UIcon name="i-lucide-alert-circle" class="h-3 w-3" />
                  {{ error }}
                </div>
              </div>
            </div>

            <!-- Rank -->
            <div class="bg-black/20 border border-white/10 rounded-br-lg p-3">
              <label class="text-sm font-medium text-white/80 mb-2 block">Rank</label>
              <div class="space-y-3">
                <USlider
                  :model-value="state.Rank"
                  :min="1"
                  :max="5"
                  :step="1"
                  class="w-full"
                  @update="(value: number) => UpdateState({ Rank: value })"
                />
                <UInput
                  :value="`${state.Rank}/5`"
                  readonly
                  class="bg-black/30 border-white/20 text-primary-400 font-semibold"
                />
              </div>
              <!-- Error Display -->
              <div v-if="errors.Rank && errors.Rank.length > 0" class="mt-2 text-red-400 text-xs">
                <div v-for="error in errors.Rank" :key="error" class="flex items-center gap-1">
                  <UIcon name="i-lucide-alert-circle" class="h-3 w-3" />
                  {{ error }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Stats Preview Section -->
        <div v-if="displayedWeapon">
          <div class="flex items-center gap-3 mb-4">
            <div class="flex-1 h-px bg-white/20" />
            <h3 class="text-white font-semibold text-lg">
              Stats
            </h3>
            <div class="flex-1 h-px bg-white/20" />
          </div>
          <div class="space-y-3">
            <!-- Main Stat -->
            <div v-if="displayedWeapon.MainStatistic" class="bg-black/20 border border-white/10 rounded-br-lg p-3">
              <label class="text-sm font-medium text-white/80 mb-2 block">Main Stat</label>
              <MStatLine
                :stat="displayedWeapon.MainStatistic"
                :is-main-stat="true"
                icon-size="sm"
                :show-line="true"
              />
            </div>

            <!-- Secondary Stat -->
            <div v-if="displayedWeapon.SecondaryStatistic" class="bg-black/20 border border-white/10 rounded-br-lg p-3">
              <label class="text-sm font-medium text-white/80 mb-2 block">Secondary Stat</label>
              <MStatLine
                :stat="displayedWeapon.SecondaryStatistic"
                :is-main-stat="false"
                icon-size="sm"
                :show-line="true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
