<script setup lang="ts">
import { Analytics } from '@vercel/analytics/nuxt'
import { SpeedInsights } from '@vercel/speed-insights/nuxt'
import { AppName } from './Core'

useHead({
  title: AppName,
})

const CharactersStore = useCharactersStore()
const WeaponsStore = useWeaponsStore()

CharactersStore.Update()
WeaponsStore.Update()
</script>

<template>
  <VitePwaManifest />
  <Analytics />
  <SpeedInsights />
  <UApp>
    <NuxtLayout class="min-h-screen">
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<style>
html,
body,
#__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
  font-family: 'Quicksand', 'Noto Sans JP', sans-serif;
  color: white;
  background-color: black;
}
</style>
