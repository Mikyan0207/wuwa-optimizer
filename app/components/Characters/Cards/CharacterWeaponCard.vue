<script setup lang="ts">
import { useBuild } from '~/composables/builds/UseBuild'

const { CurrentWeapon } = useBuild()
</script>

<template>
  <MWeaponCard :weapon="CurrentWeapon" />
</template>
