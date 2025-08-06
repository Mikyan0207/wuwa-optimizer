<script setup lang="ts">
import type Weapon from '~/Core/Interfaces/Weapon'
import { UpcomingGameVersion } from '~/Core'
import { ReleaseState } from '~/Core/Enums/ReleaseState'
import { GetCharacterIcon } from '~/Core/Utils/CharacterUtils'
import { GetBackgroundColor, GetHighlightColor, GetSecondaryColor } from '~/Core/Utils/ColorUtils'
import { GetTypeIcon, GetWeaponIcon } from '~/Core/Utils/WeaponUtils'

const props = defineProps<{
  weapon: Weapon
  variant?: 'normal' | 'small' | 'equiped'
  characterId?: number
}>()

const { t } = useI18n()
const CharactersStore = useCharactersStore()

const EquipedBy = computed(() => props.characterId ? CharactersStore.Get(props.characterId) : null)
const BackgroundColor = computed(() => GetBackgroundColor(props.weapon.Rarity))
const SecondaryColor = computed(() => GetSecondaryColor(props.weapon.Rarity))
const HighlightColor = computed(() => GetHighlightColor(props.weapon.Rarity))

const IsSmall = computed(() => props.variant === 'small')
const IsEquiped = computed(() => props.variant === 'equiped')
const IsNormal = computed(() => !props.variant || props.variant === 'normal')

const CardClasses = computed(() => ({
  'group relative cursor-pointer transition-all duration-100': true,
  'w-full': IsEquiped.value,
}))

const IconContainerClasses = computed(() => ({
  'relative flex items-center justify-center overflow-clip': true,
  'min-h-32 w-32': IsSmall.value,
  'h-32 min-h-32 min-w-32 w-32': IsEquiped.value || IsNormal.value,
}))

const ImageClasses = computed(() => ({
  'rounded-t object-cover': IsNormal.value,
  'rounded-t w-full h-full object-cover': IsEquiped.value,
}))

const ImageSize = computed(() => {
  if (IsSmall.value)
    return { width: 160, height: 160 }
  if (IsEquiped.value)
    return { width: 175, height: 175 }
  return { width: 175, height: 175 }
})

const HighlightHeight = computed(() => 'h-[4px]')
</script>

<template>
  <UCard
    :class="CardClasses"
    :ui="{
      root: 'rounded-none rounded-br-xl border-0',
      body: 'p-0 sm:p-0',
    }"
  >
    <BorderLines :count="1" />

    <!-- Small variant: vertical layout -->
    <div v-if="IsSmall" class="relative min-h-32 w-32 flex items-center justify-center overflow-clip">
      <!-- Release state badges -->
      <div v-if="weapon.ReleaseState === ReleaseState.NEW" class="absolute left-1 top-0 z-2">
        <UBadge color="error" variant="solid" size="sm" class="rounded-full!">
          NEW
        </UBadge>
      </div>
      <div v-if="weapon.ReleaseState === ReleaseState.UPCOMING" class="absolute left-1 top-0 z-2">
        <UBadge color="warning" variant="solid" size="sm" class="px-2.5 rounded-full!">
          {{ UpcomingGameVersion }}
        </UBadge>
      </div>

      <!-- Weapon icon -->
      <div class="absolute bottom-0">
        <NuxtImg
          :width="ImageSize.width"
          :height="ImageSize.height"
          :src="GetWeaponIcon(weapon)"
          style="color: transparent;"
        />
      </div>

      <!-- Rarity highlight -->
      <div class="absolute bottom-0 w-full">
        <div class="relative w-full flex items-center">
          <div class="absolute mt-auto h-4 w-full -bottom-2">
            <div
              class="absolute bottom-0 h-3 w-full blur-lg transition-all duration-200 group-hover:h-4 group-hover:blur"
              :class="BackgroundColor"
            />
            <div
              class="absolute bottom-0 h-2 w-full blur duration-200 group-hover:h-2 group-hover:blur-sm"
              :class="SecondaryColor"
            />
          </div>
        </div>
        <div class="h-[3px]" :class="HighlightColor" />
      </div>
    </div>

    <!-- Name for small variant -->
    <div v-if="IsSmall" class="py-1 text-center text-xs">
      {{ t(`${weapon.Id}_name`) }}
    </div>

    <!-- Normal and Equiped variants: horizontal layout -->
    <div v-else class="flex w-full">
      <!-- Icon / Rarity -->
      <div :class="IconContainerClasses">
        <!-- Weapon icon -->
        <div class="absolute bottom-0">
          <NuxtImg
            :width="ImageSize.width"
            :height="ImageSize.height"
            :src="GetWeaponIcon(weapon)"
            style="color: transparent;"
            :class="ImageClasses"
          />
        </div>

        <!-- Rarity highlight -->
        <div class="absolute bottom-0 w-full">
          <div class="relative w-full flex items-center">
            <div class="absolute mt-auto h-4 w-full -bottom-2">
              <div
                class="absolute bottom-0 h-3 w-full blur-lg transition-all duration-200 group-hover:h-4 group-hover:blur"
                :class="BackgroundColor"
              />
              <div
                class="absolute bottom-0 h-2 w-full blur duration-200 group-hover:h-2 group-hover:blur-sm"
                :class="SecondaryColor"
              />
            </div>
          </div>
          <div class="rounded-bl" :class="[HighlightHeight, HighlightColor]" />
        </div>
      </div>

      <!-- Content section -->
      <div class="w-full border-l border-white/14 px-4 py-2">
        <!-- Name -->
        <div class="w-full flex items-center justify-between">
          <div :title="weapon.Name" class="text-truncate">
            {{ weapon.Name }}
          </div>

          <!-- Equiped character icon -->
          <div v-if="IsEquiped && EquipedBy" class="absolute top-2 right-2">
            <NuxtImg
              :src="GetCharacterIcon(EquipedBy)"
              class="w-10 h-10 rounded-full overflow-clip"
            />
          </div>
        </div>

        <!-- Weapon Level/Rank -->
        <div>
          <div class="flex items-center gap-1 mt-1 mb-3">
            <!-- Level badge for equiped variant -->
            <UBadge v-if="IsEquiped" color="error" variant="soft" size="sm" class="text-nowrap">
              {{ `${t('label_level')} ${weapon.Level}` }}
            </UBadge>

            <!-- Rank badge for equiped variant -->
            <UBadge v-if="IsEquiped" color="info" variant="soft" size="sm" class="text-nowrap">
              {{ `${t('label_rank_full')} ${weapon.Rank || 0}` }}
            </UBadge>

            <!-- Type badge -->
            <UBadge color="neutral" variant="soft" size="sm" class="text-nowrap">
              <NuxtImg :src="GetTypeIcon(weapon)" width="15" height="12" /> {{ weapon.Type }}
            </UBadge>
          </div>
        </div>

        <!-- Stats -->
        <div v-if="weapon.MainStatistic && weapon.SecondaryStatistic" class="h-min flex flex-col items-start text-gray-300">
          <StatLine :stat="weapon.MainStatistic" icon-size="xs" :show-line="true" class="p-0!" />
          <StatLine :stat="weapon.SecondaryStatistic" icon-size="xs" :show-line="true" class="p-0!" />
        </div>
      </div>
    </div>
  </UCard>
</template>
