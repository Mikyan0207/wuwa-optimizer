<script setup lang="ts">
import { useAnalytics } from '~/composables/core/UseAnalytics'
import { AppName } from './Core/Versions'

useHead({
  title: AppName,
})

const UpdaterStore = useUpdaterStore()
const route = useRoute()
const {
  AutoTrackPageView
 } = useAnalytics()

watch(() => route.path, () => {
  AutoTrackPageView()
}, { immediate: true })

onMounted(() => {
  UpdaterStore.Migrate()
})
</script>

<template>
  <UApp>
    <Suspense>
      <NuxtLayout class="min-h-screen">
        <NuxtPage />
      </NuxtLayout>
    </Suspense>
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
