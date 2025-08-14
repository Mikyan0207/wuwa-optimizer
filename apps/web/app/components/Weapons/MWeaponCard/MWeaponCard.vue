<script setup lang="ts">
import type Weapon from '~/Core/Interfaces/Weapon'
import { GetWeaponIcon } from '~/Core/Utils/WeaponUtils'

interface WeaponCardProps {
  weapon: Weapon | undefined
  showMenu?: boolean
}

withDefaults(defineProps<WeaponCardProps>(), {
  showMenu: true,
})

const { t } = useI18n()
</script>

<template>
  <MGameCard :item="weapon" :show-menu="showMenu" :show-stats="true">
    <template #menu>
      <MWeaponCardMenu v-if="showMenu" :weapon="weapon" />
    </template>

    <template #header>
      <MGameCardHeader
        :item="weapon"
        :get-name="(weapon: Weapon) => t(`${weapon.GameId}_name`)"
        :get-level="(weapon: Weapon) => weapon.Level"
        :get-additional-info="(weapon: Weapon) => `R${weapon.Rank || 1}`"
      />
    </template>

    <template #rarity>
      <MGameCardRarity
        :item="weapon"
        :get-rarity="(weapon: Weapon) => weapon.Rarity"
      />
    </template>

    <template #stats>
      <MGameCardStats
        :item="weapon"
        :get-main-stat="(weapon: Weapon) => weapon.MainStatistic"
        :get-secondary-stat="(weapon: Weapon) => weapon.SecondaryStatistic"
      />
    </template>

    <template #image>
      <MGameCardImage
        :item="weapon"
        :get-image-src="(weapon: Weapon) => GetWeaponIcon(weapon)"
        :get-image-alt="(weapon: Weapon) => t(`${weapon.GameId}_name`)"
      />
    </template>
  </MGameCard>
</template>
