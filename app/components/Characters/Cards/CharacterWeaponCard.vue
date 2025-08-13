<script setup lang="ts">
import type Weapon from '~/Core/Interfaces/Weapon'
import { slideRight, useMotion } from '@vueuse/motion'
import { useSettingsStore } from '~/stores/SettingsStore'

defineProps<{
  weapon: Weapon | undefined
}>()

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
    :weapon="weapon"
  />
</template>
