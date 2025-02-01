<script setup lang="ts">
defineProps<{
  hideVideo?: boolean
}>()
</script>

<template>
  <div class="absolute inset-0 h-full w-full -z-1">
    <div
      class="absolute h-full w-full bg-[url(/images/main-bg-light.png)] bg-contain bg-center bg-no-repeat blur-4 -left-50% -top-50%"
    />
    <div class="absolute h-full w-full -left-50% -top-50%">
      <video
        v-if="hideVideo === undefined"
        key="layered-background-video" playsinline autoplay loop muted
        class="pointer-events-none h-full w-full object-cover mix-blend-screen"
      >
        <source src="/images/particles.mp4">
      </video>
    </div>
    <NuxtImg src="/images/main-bg.webp" class="h-full w-full object-cover" />
  </div>
</template>
