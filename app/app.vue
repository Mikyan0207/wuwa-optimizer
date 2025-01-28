<script setup lang="ts">
import { Analytics } from '@vercel/analytics/nuxt'
import { AppName } from './Core'

useHead({
  title: AppName,
})
</script>

<template>
  <VitePwaManifest />
  <Analytics />
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
