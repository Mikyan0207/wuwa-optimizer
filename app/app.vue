<script setup lang="ts">
import { AppName } from './Core'

useHead({
  title: AppName,
})

const CharactersStore = useCharactersStore()
const SonatasStore = useSonatasStore()
const EchoesStore = useEchoesStore()

onMounted(async () => {
  await CharactersStore.Migration()
  await SonatasStore.Migration()
  await EchoesStore.Migration()
})
</script>

<template>
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
