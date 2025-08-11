<script setup lang="ts">
import type Build from '~/Core/Interfaces/Build'
import { slideRight, useMotion } from '@vueuse/motion'
import { useSettingsStore } from '~/stores/SettingsStore'

interface Props {
  build: Build
}

const { build } = defineProps<Props>()

const WeaponsStore = useWeaponsStore()
const SettingsStore = useSettingsStore()

const CurrentWeapon = computed(() => build.WeaponId ? WeaponsStore.GetById(build.WeaponId) : undefined)

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
