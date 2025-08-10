<script setup lang="ts">
import { slideRight, useMotion } from '@vueuse/motion'

import { useBuild } from '~/composables/builds/UseBuild'
import { useSettingsStore } from '~/stores/SettingsStore'

const { CurrentWeapon } = useBuild()
const SettingsStore = useSettingsStore()

const Target = ref<HTMLElement | null>(null)

const AnimationsEnabled = computed(() => SettingsStore.GetSetting('General').EnableAnimations)

if (AnimationsEnabled.value) {
  useMotion(Target, slideRight)
}
</script>

<template>
  <MWeaponCard
    ref="Target"
    :weapon="CurrentWeapon"
  />
</template>
