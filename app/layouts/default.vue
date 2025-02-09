<script setup lang="ts">

</script>

<template>
  <div
    class="[background-size:16px_16px] relative min-h-100vh w-full flex flex-row overflow-hidden bg-[radial-gradient(#ffffff12_1px,transparent_1px)]"
  >
    <!-- Background -->
    <div class="absolute inset-0 h-full w-full -z-1">
      <div
        class="blur-xs absolute h-full w-full bg-[url(/images/main-bg-light.png)] bg-contain bg-center bg-no-repeat -left-[50%] -top-[50%]"
      />
      <div class="absolute h-full w-full -left-[50%] -top-[50%]">
        <video
          key="particles-video-default" playsinline autoplay loop muted
          class="pointer-events-none h-full w-full object-cover mix-blend-screen"
        >
          <source src="/images/particles.mp4">
        </video>
      </div>
      <NuxtImg src="/images/main-bg.webp" class="h-full w-full object-cover" />
    </div>

    <!-- Navigation -->
    <div
      class="fixed z-1 h-screen w-16 border-r border-white/14 bg-black/66 px-2 py-4 backdrop-blur-sm transition-all duration-150"
    >
      <LeftNavigation />
    </div>

    <DynamicHeader />

    <main class="ml-16 mt-14 w-full">
      <slot />
    </main>
  </div>
</template>
