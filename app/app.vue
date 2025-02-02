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
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html,
body,
#__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
  font-family: 'Nunito', sans-serif;
  font-weight: 300;
}

html.dark {
  background: #080808;
  color: white;
}
</style>
