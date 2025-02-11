<script setup lang="ts">
import type { WeaponType } from '~/Core/Enums/WeaponType'
import type { Weapon } from '~/Core/Models/Weapon'
import { Rarity } from '~/Core/Enums/Rarity'
import EditWeaponPanel from '../Weapons/EditWeaponPanel.vue'

const props = defineProps<{
  characterId: number
  characterWeaponType?: WeaponType
}>()

const { t } = useI18n()
const CharactersStore = useCharactersStore()
const IsHovered = ref<boolean>(false)

const SelectedWeapon = computed<Weapon | undefined>(() => CharactersStore.GetWeapon(props.characterId))

const GetRarityAsNumber = computed(() => {
  if (!SelectedWeapon.value) {
    return 0
  }

  switch (SelectedWeapon.value.Rarity) {
    case Rarity.TWO_STARS:
      return 2
    case Rarity.THREE_STARS:
      return 3
    case Rarity.FOUR_STARS:
      return 4
    case Rarity.FIVE_STARS:
      return 5
  }

  return 1
})
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
          <USkeleton v-else class="h-2 w-32" />
          <!-- Rarity / Level -->
          <div v-if="SelectedWeapon" class="flex items-center gap-2 mb-3">
            <!-- Rarity -->
            <div class="flex items-center">
              <NuxtImg v-for="idx in GetRarityAsNumber" :key="idx" src="/images/icons/Icon_StarBig.webp" class="h-3 w-3 object-cover" fit="cover" />
            </div>
            <!-- Level -->
            <UBadge class="text-xs text-gray-300" size="xs" variant="soft" color="primary">
              {{ `${t('label_level')} ${SelectedWeapon.Level} · R${SelectedWeapon.Rank || 0}` }}
            </UBadge>
          </div>
          <USkeleton v-else class="my-2 h-4 w-20" />
          <!-- Stats -->
          <div v-if="SelectedWeapon && SelectedWeapon.MainStatistic && SelectedWeapon.SecondaryStatistic" class="z-2 h-min flex flex-col items-start text-gray-300">
            <StatLine :stat="SelectedWeapon.MainStatistic" icon-size="xs" :show-line="true" />
            <StatLine :stat="SelectedWeapon.SecondaryStatistic" icon-size="xs" :show-line="true" />
          </div>
          <USkeleton v-else class="h-3 w-24" />
        </div>
        <NuxtImg
          v-if="SelectedWeapon"
          :src="`/images/weapons/${SelectedWeapon.Icon}`"
          fit="cover"
          width="160"
          height="160"
          class="absolute z-0 rounded-lg object-contain -right-4 -top-4"
        />
        <USkeleton v-else class="h-4em w-4em" />
      </div>
    </UCard>
  </div>
</template>
