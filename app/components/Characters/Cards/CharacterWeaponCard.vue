<script setup lang="ts">
import { GetRarityAsNumber } from '~/Core/Utils/RarityUtils'

const { t } = useI18n()
const { CurrentWeapon } = useCharacterContext()
</script>

<template>
  <div
    class="group relative"
  >
    <WeaponDropdownMenu />
    <UCard
      class="w-full h-full overflow-clip"
      :ui="{
        root: 'rounded-none rounded-br-xl border-0',
      }"
    >
      <BorderLines />
      <div class="relative h-full flex justify-between gap-4">
        <div class="flex w-[50%] flex-col gap-1">
          <!-- Name -->
          <div v-if="CurrentWeapon" class="text-lg">
            {{ t(`${CurrentWeapon.Id}_name`) }}
          </div>
          <USkeleton v-else class="h-4 w-26" />
          <!-- Rarity / Level -->
          <div class="flex items-center gap-1 mb-3">
            <!-- Rarity -->
            <div v-if="CurrentWeapon" class="flex items-center">
              <NuxtImg
                v-for="idx in GetRarityAsNumber(CurrentWeapon.Rarity)"
                :key="idx" src="/images/icons/Icon_StarBig.webp"
                class="h-4 w-4 object-cover" fit="cover"
              />
            </div>
            <USkeleton v-else class="h-3 w-20" />
            <!-- Level -->
            <UBadge v-if="CurrentWeapon" class="text-gray-300" variant="soft" color="primary">
              {{ `${t('label_level')} ${CurrentWeapon.Level} · R${CurrentWeapon.Rank || 0}` }}
            </UBadge>
            <USkeleton v-else class="h-3 w-10" />
          </div>
          <!-- Stats -->
          <div class="flex flex-col items-start text-gray-300">
            <StatLine
              v-if="CurrentWeapon && CurrentWeapon.MainStatistic"
              :stat="CurrentWeapon.MainStatistic"
              :show-line="true"
              class="p-0!"
            />
            <USkeleton v-else class="mt-4 h-3 w-24" />
            <StatLine
              v-if="CurrentWeapon && CurrentWeapon.SecondaryStatistic"
              :stat="CurrentWeapon.SecondaryStatistic"
              :show-line="true"
              class="p-0!"
            />
            <USkeleton v-else class="h-3 mt-1 w-24" />
          </div>
        </div>
        <NuxtImg
          v-if="CurrentWeapon"
          :src="`/images/weapons/${CurrentWeapon.Icon}`"
          fit="cover"
          width="155"
          height="155"
          class="absolute z-0 object-contain border-l border-neutral-800 -right-4 -top-4"
        />
        <USkeleton v-else class="absolute right-1 top-1 h-[4em] w-[4em]" />
      </div>
    </UCard>
  </div>
</template>
