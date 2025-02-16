<script setup lang="ts">
import type { WeaponType } from '~/Core/Enums/WeaponType'
import type Weapon from '~/Core/Interfaces/Weapon'
import { GetRarityAsNumber } from '~/Core/Utils/RarityUtils'

const props = defineProps<{
  characterId: number
  characterWeaponType?: WeaponType
}>()

const { t } = useI18n()
const CharactersStore = useCharactersStore()
const IsHovered = ref<boolean>(false)

const SelectedWeapon = computed<Weapon | undefined>(() => CharactersStore.GetWeapon(props.characterId))
</script>

<template>
  <div class="group relative">
    <EditWeaponPanel :character-id="characterId" :character-weapon-type="characterWeaponType" />
    <UCard
      class="relative h-full overflow-hidden"
      :ui="{
        root: 'rounded-none rounded-br-xl border-0',
      }"
      @mouseenter="IsHovered = true"
      @mouseleave="IsHovered = false"
    >
      <BorderLines />
      <div class="relative h-full flex justify-between gap-4">
        <div class="flex flex-col gap-1">
          <!-- Name -->
          <div v-if="SelectedWeapon" class="text-md">
            {{ t(`${SelectedWeapon.Id}_name`) }}
          </div>
          <USkeleton v-else class="h-4 w-26" />
          <!-- Rarity / Level -->
          <div class="flex items-center gap-1 mb-3">
            <!-- Rarity -->
            <div v-if="SelectedWeapon" class="flex items-center">
              <NuxtImg v-for="idx in GetRarityAsNumber(SelectedWeapon.Rarity)" :key="idx" src="/images/icons/Icon_StarBig.webp" class="h-3 w-3 object-cover" fit="cover" />
            </div>
            <USkeleton v-else class="h-3 w-20" />
            <!-- Level -->
            <UBadge v-if="SelectedWeapon" class="text-xs text-gray-300" size="xs" variant="soft" color="primary">
              {{ `${t('label_level')} ${SelectedWeapon.Level} · R${SelectedWeapon.Rank || 0}` }}
            </UBadge>
            <USkeleton v-else class="h-3 w-10" />
          </div>
          <!-- Stats -->
          <div class="gap-1 flex flex-col items-start text-gray-300">
            <StatLine
              v-if="SelectedWeapon && SelectedWeapon.MainStatistic"
              :stat="SelectedWeapon.MainStatistic"
              icon-size="xs"
              :show-line="true"
            />
            <USkeleton v-else class="mt-4 h-3 w-24" />
            <StatLine
              v-if="SelectedWeapon && SelectedWeapon.SecondaryStatistic"
              :stat="SelectedWeapon.SecondaryStatistic"
              icon-size="xs"
              :show-line="true"
            />
            <USkeleton v-else class="h-3 w-24" />
          </div>
        </div>
        <NuxtImg
          v-if="SelectedWeapon"
          :src="`/images/weapons/${SelectedWeapon.Icon}`"
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
