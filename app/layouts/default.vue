<script setup lang="ts">

</script>

<template>
  <div
    class="[background-size:16px_16px] bg-fixed min-h-100vh w-full flex flex-col overflow-hidden bg-[radial-gradient(#ffffff12_1px,transparent_1px)]"
  >
    <!-- Background -->
    <div class="fixed inset-0 h-full w-full -z-1">
      <div
        class="blur-xs fixed h-full w-full bg-[url(/images/main-bg-light.png)] bg-contain bg-center bg-no-repeat -left-[50%] -top-[50%]"
      />
      <div class="absolute h-full w-full -left-[50%] -top-[50%]">
        <video
          key="particles-video-default"
          playsinline
          autoplay
          loop
          muted
          preload="metadata"
          class="pointer-events-none absolute inset-0 h-full w-full object-cover mix-blend-screen"
        >
          <source src="/images/particles.mp4">
        </video>
      </div>
      <NuxtImg src="/images/main-bg.webp" class="h-full w-full object-cover" />
    </div>

    <div class="fixed grid grid-cols-[3.5em_1em_3em_1fr] pointer-events-none grid-rows-[3em_1em_3em_1fr] w-full h-full z-1">
      <div
        class="w-full h-full z-22 fixed inset-0 pointer-events-none bg-neutral-900 backdrop-blur-md [mask-image:url('/images/main-menu-mask.png')]  [mask-repeat:no-repeat]"
      />
      <div class="h-full bg-neutral-900 z-22 top-10 fixed inset-0 w-[3.65em]" />
      <div
        class="w-full h-full z-21 fixed inset-0 pointer-events-none bg-gold-700 backdrop-blur-md [mask-image:url('/images/main-menu-mask.png')] [mask-position:0.05rem_0.05rem] [mask-repeat:no-repeat]"
      />
      <div class="h-full bg-gold-700 z-21 top-10 fixed inset-0 left-[3.65em] w-[0.04em]" />
      <div class="w-full bg-gold-700 z-21 fixed inset-0 left-[10em] top-[3em] h-[0.04em]" />
      <!-- Logo -->
      <div class="col-span-2 z-23 row-span-2 col-start-1 row-star-1 ml-2.5 text-gold-500 hover:text-gray-300 cursor-pointer pointer-events-auto duration-125 transition-all hover:scale-105 mt-2.5 flex w-full h-full">
        <div class="border rounded-full border-gold-500/75 w-12 h-12 justify-center items-center flex">
          <!-- class="motion-safe:animate-pulse" -->
          <UIcon name="solar:soundwave-bold-duotone" :size="45" />
        </div>
      </div>
      <!-- Navigation -->
      <div class="z-23 col-span-1 mx-auxo row-span-2 row-start-4 pointer-events-auto">
        <LeftNavigation />
      </div>

      <DynamicHeader class="col-start-4 ml-[3em] pointer-events-auto" />
    </div>

    <main class="ml-[3.5em] mt-[6em] w-full min-h-screen h-full">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="w-full bg-neutral-900/90 backdrop-blur-md border-t mt-4 border-neutral-700">
      <div class="ml-[3.5em] px-4 py-2">
        <p class="text-xs text-gray-400 text-center">
          <span class="font-bold">Wuthering Waves Optimizer</span> is a fan-made project and is not affiliated with nor endorsed by Kuro Games.
        </p>

        <p class="text-xs text-gray-400 text-center">
          Wuthering Waves and other properties are trademarks of their respective owners.
          All rights reserved by © Guangzhou Kuro Technology Co., Ltd.
        </p>
      </div>
    </footer>
  </div>
</template>
