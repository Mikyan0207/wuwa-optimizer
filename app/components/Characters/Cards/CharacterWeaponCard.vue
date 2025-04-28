<script setup lang="ts">
import { GetRarityAsNumber } from '~/Core/Utils/RarityUtils'

const { t } = useI18n()
const ActiveStore = useActiveCharacterStore()
const ActiveWeapon = computed(() => ActiveStore.ActiveWeapon)
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
          <div v-if="ActiveWeapon" class="text-lg">
            {{ t(`${ActiveWeapon.Id}_name`) }}
          </div>
          <USkeleton v-else class="h-4 w-26" />
          <!-- Rarity / Level -->
          <div class="flex items-center gap-1 mb-3">
            <!-- Rarity -->
            <div v-if="ActiveWeapon" class="flex items-center">
              <NuxtImg
                v-for="idx in GetRarityAsNumber(ActiveWeapon.Rarity)"
                :key="idx" src="/images/icons/Icon_StarBig.webp"
                class="h-4 w-4 object-cover" fit="cover"
              />
            </div>
            <USkeleton v-else class="h-3 w-20" />
            <!-- Level -->
            <UBadge v-if="ActiveWeapon" class="text-gray-300" variant="soft" color="primary">
              {{ `${t('label_level')} ${ActiveWeapon.Level} · R${ActiveWeapon.Rank || 0}` }}
            </UBadge>
            <USkeleton v-else class="h-3 w-10" />
          </div>
          <!-- Stats -->
          <div class="gap-1 flex flex-col items-start text-gray-300">
            <StatLine
              v-if="ActiveWeapon && ActiveWeapon.MainStatistic"
              :stat="ActiveWeapon.MainStatistic"
              :show-line="true"
            />
            <USkeleton v-else class="mt-4 h-3 w-24" />
            <StatLine
              v-if="ActiveWeapon && ActiveWeapon.SecondaryStatistic"
              :stat="ActiveWeapon.SecondaryStatistic"
              :show-line="true"
            />
            <USkeleton v-else class="h-3 w-24" />
          </div>
        </div>
        <NuxtImg
          v-if="ActiveWeapon"
          :src="`/images/weapons/${ActiveWeapon.Icon}`"
          fit="cover"
          width="160"
          height="160"
          class="absolute z-0 rounded-lg object-contain -right-4 -top-4"
        />
        <USkeleton v-else class="absolute right-1 top-1 h-[4em] w-[4em]" />
      </div>
    </UCard>
  </div>
</template>
