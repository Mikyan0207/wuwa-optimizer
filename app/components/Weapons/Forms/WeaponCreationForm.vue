<script setup lang="ts">
import type Weapon from '~/Core/Interfaces/Weapon'
import { Rarity } from '~/Core/Enums/Rarity'

const emits = defineEmits(['close'])

const { t } = useI18n()
const { CurrentCharacter, CurrentWeapon } = useCharacterContext()
const WeaponsStore = useWeaponsStore()

const SelectedWeaponId = ref<number | undefined>(undefined)
const SelectedWeapon = computed<Weapon | undefined>(() => SelectedWeaponId.value
  ? unref(WeaponsStore.GetDefaultWeapon(SelectedWeaponId.value))
  : undefined)
const SelectedWeaponLevel = ref(1)
const SelectedWeaponRank = ref(1)
const CurrentStep = ref<number>(0)

const AvailableWeapons = computed(() => {
  return WeaponsStore.GetDefaultWeapons()
    .filter((weapon: Weapon) => {
      if (weapon.Type !== CurrentCharacter.value?.WeaponType) {
        return false
      }

      return true
    })
    .sort((a, b) => {
      const rarityComparison = GetRarityAsNumber(b.Rarity) - GetRarityAsNumber(a.Rarity)
      if (rarityComparison !== 0) {
        return rarityComparison
      }
      return t(`${a.Id}_name`).localeCompare(t(`${b.Id}_name`))
    })
})

const IsFormValid = computed(() => {
  if (CurrentStep.value === 0) {
    return SelectedWeaponId.value !== undefined
  }
  return SelectedWeaponId.value !== undefined
})

function SelectWeapon(weaponId: number) {
  SelectedWeaponId.value = weaponId
  NextStep()
}

function NextStep() {
  if (CurrentStep.value < 1) {
    CurrentStep.value++
  }
}

function PreviousStep() {
  if (CurrentStep.value > 0) {
    CurrentStep.value--
  }
}

function OnSubmit() {
  if (!SelectedWeaponId.value || !SelectedWeapon.value || !CurrentCharacter.value) {
    return
  }

  SelectedWeapon.value.Level = SelectedWeaponLevel.value
  SelectedWeapon.value.Rank = SelectedWeaponRank.value
  SelectedWeapon.value.EquipedBy = CurrentCharacter.value.Id

  CurrentWeapon.value = unref(SelectedWeapon.value)

  OnClose()
}

function OnClose() {
  SelectedWeaponId.value = undefined
  emits('close')
}

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

function GetRarityAsNumber(rarity: Rarity) {
  switch (rarity) {
    case Rarity.FIVE_STARS:
      return 5
    case Rarity.FOUR_STARS:
      return 4
    case Rarity.THREE_STARS:
      return 3
    case Rarity.TWO_STARS:
      return 2
    case Rarity.ONE_STAR:
      return 1
    default:
      return 1
  }
}
</script>

<template>
  <div class="h-full flex flex-col bg-black min-h-0">
    <!-- Header with steps -->
    <div class="sticky top-0 z-10 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div class="flex items-center justify-between px-4 py-3">
        <div class="flex items-center gap-6">
          <h2 class="text-lg font-semibold text-white flex items-center gap-2">
            <UIcon name="i-lucide-plus-circle" class="h-5 w-5 text-primary-400" />
            Create Weapon
          </h2>
          <!-- Progress Steps -->
          <div class="flex items-center gap-3">
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 rounded-full transition-colors" :class="CurrentStep >= 0 ? 'bg-primary-500' : 'bg-white/30'" />
              <span class="text-xs font-medium" :class="CurrentStep >= 0 ? 'text-primary-400' : 'text-white/50'">Weapon</span>
            </div>
            <div class="w-3 h-px bg-white/20" />
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 rounded-full transition-colors" :class="CurrentStep >= 1 ? 'bg-primary-500' : 'bg-white/30'" />
              <span class="text-xs font-medium" :class="CurrentStep >= 1 ? 'text-primary-400' : 'text-white/50'">Enhancement</span>
            </div>
          </div>
        </div>
        <UButton icon="i-lucide-x" color="neutral" variant="ghost" size="sm" @click="OnClose" />
      </div>
    </div>

    <!-- Main content -->
    <div class="flex-1 overflow-hidden">
      <!-- Step 1: Weapon Selection -->
      <div v-if="CurrentStep === 0" class="h-full flex flex-col overflow-hidden min-h-0">
        <!-- Weapon Grid -->
        <div class="overflow-y-auto scrollbar-hidden p-4 pb-24 min-h-0 flex-1">
          <div class="grid grid-cols-1 gap-2">
            <div
              v-for="weapon in AvailableWeapons"
              :key="weapon.Id"
              class="group cursor-pointer bg-white/5 border border-white/10 rounded-br-lg transition-all duration-200 hover:bg-white/10 hover:border-white/20 relative"
              :class="{ 'bg-primary-500/20 border-primary-500/50 ring-2 ring-primary-500/50': SelectedWeaponId === weapon.Id }"
              @click="SelectWeapon(weapon.Id)"
            >
              <div class="flex">
                <!-- Icon -->
                <div class="relative h-26 min-h-26 w-26 flex items-center justify-center overflow-clip">
                  <div class="absolute w-full h-full bottom-0">
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
                    <div :title="t(`${weapon.Id}_name`)" class="text-truncate">
                      {{ t(`${weapon.Id}_name`) }}
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
                    <StatLine :stat="weapon.SecondaryStatistic" :is-main-stat="false" icon-size="xs" :show-line="true" />
                    <StatLine :stat="weapon.MainStatistic" :is-main-stat="true" icon-size="xs" :show-line="true" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Step 2: Enhancement Configuration -->
      <div v-if="CurrentStep === 1" class="h-full flex flex-col">
        <div class="p-4 border-b border-white/10">
          <div class="flex items-center gap-3">
            <NuxtImg :src="`/images/weapons/${SelectedWeapon?.Icon}`" class="w-20 h-20 rounded-lg" />
            <div class="flex-1">
              <h4 class="text-white font-semibold text-lg mb-1">
                {{ t(`${SelectedWeapon?.Id}_name`) }}
              </h4>
              <div class="flex items-center gap-2 mb-2">
                <UBadge variant="soft" color="info" size="sm">
                  {{ SelectedWeapon?.Type }}
                </UBadge>
                <UBadge variant="soft" color="warning" size="sm">
                  {{ GetRarityText(SelectedWeapon?.Rarity ?? Rarity.ONE_STAR) }}
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
                    <USlider v-model="SelectedWeaponLevel" :min="1" :max="90" :step="1" class="w-full" />
                    <UInput :value="`${SelectedWeaponLevel}/90`" readonly class="bg-black/30 border-white/20 text-primary-400 font-semibold" />
                  </div>
                </div>

                <!-- Rank -->
                <div class="bg-black/20 border border-white/10 rounded-br-lg p-3">
                  <label class="text-sm font-medium text-white/80 mb-2 block">Rank</label>
                  <div class="space-y-3">
                    <USlider v-model="SelectedWeaponRank" :min="1" :max="5" :step="1" class="w-full" />
                    <UInput :value="`${SelectedWeaponRank}/5`" readonly class="bg-black/30 border-white/20 text-primary-400 font-semibold" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer with navigation -->
    <div class="sticky bottom-0 bg-black/80 backdrop-blur-md border-t border-white/10 p-4">
      <div class="flex justify-between items-center">
        <UButton
          v-if="CurrentStep > 0"
          color="neutral"
          variant="outline"
          label="Previous"
          @click="PreviousStep"
        />
        <div v-else />

        <UButton
          v-if="CurrentStep === 0"
          color="primary"
          variant="soft"
          label="Next"
          :disabled="!IsFormValid"
          @click="NextStep"
        />
        <UButton
          v-else
          color="primary"
          variant="solid"
          label="Create Weapon"
          type="submit"
          :disabled="!IsFormValid"
          @click="OnSubmit"
        />
      </div>
    </div>
  </div>
</template>
