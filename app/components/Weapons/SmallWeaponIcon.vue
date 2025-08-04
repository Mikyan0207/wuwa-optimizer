<script setup lang="ts">
import type Weapon from '~/Core/Interfaces/Weapon'
import { UpcomingGameVersion } from '~/Core'
import { ReleaseState } from '~/Core/Enums/ReleaseState'
import { GetBackgroundColor, GetHighlightColor, GetSecondaryColor } from '~/Core/Utils/ColorUtils'
import { GetWeaponIcon } from '~/Core/Utils/WeaponUtils'

const props = defineProps<{
  weapon: Weapon
}>()

const { t } = useI18n()

const BackgroundColor = computed(() => GetBackgroundColor(props.weapon.Rarity))
const SecondaryColor = computed(() => GetSecondaryColor(props.weapon.Rarity))
const HighlightColor = computed(() => GetHighlightColor(props.weapon.Rarity))
</script>

<template>
  <UCard
    class="group relative cursor-pointer transition-all duration-100" :ui="{
      root: 'rounded-none rounded-br-xl border-0',
      body: 'p-0 sm:p-0',
    }"
  >
    <BorderLines :count="1" />
    <div class="relative min-h-32 w-32 flex items-center justify-center overflow-clip">
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
      <div class="absolute bottom-0">
        <NuxtImg width="160" height="160" :src="`${GetWeaponIcon(weapon)}`" style="color: transparent;" />
      </div>
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
    <div class="py-1 text-center text-xs">
      {{ t(`${weapon.Id}_name`) }}
    </div>
  </UCard>
</template>
