<script setup lang="ts">
</script>

<!-- -->
<template>
  <div class="[background-size:16px_16px] relative h-100vh flex flex-row overflow-hidden bg-[radial-gradient(#ffffff12_1px,transparent_1px)]">
    <div class="z-1 w-12em border-r border-white/14 bg-black/66 px-2 py-4 backdrop-blur-6">
      <LeftNavigation />
    </div>
    <div class="absolute inset-0 h-full w-full -z-1">
      <div
        class="absolute h-full w-full bg-[url(/images/main-bg-light.png)] bg-contain bg-center bg-no-repeat blur-4 -left-50% -top-50%"
      />
      <div class="absolute h-full w-full -left-50% -top-50%">
        <video
          key="particles-video-default" playsinline autoplay loop muted
          class="pointer-events-none h-full w-full object-cover mix-blend-screen"
        >
          <source src="/images/particles.mp4">
        </video>
      </div>
      <NuxtImg src="/images/main-bg.webp" class="h-full w-full object-cover" />
    </div>
    <main class="w-full overflow-y-auto">
      <slot />
    </main>
  </div>
</template>
