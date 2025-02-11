<script setup lang="ts">

</script>

<template>
  <div
    class="[background-size:16px_16px] bg-fixed min-h-100vh w-full flex flex-row overflow-hidden bg-[radial-gradient(#ffffff12_1px,transparent_1px)]"
  >
    <!-- Background -->
    <div class="fixed inset-0 h-full w-full -z-1">
      <div
        class="blur-xs fixed h-full w-full bg-[url(/images/main-bg-light.png)] bg-contain bg-center bg-no-repeat -left-[50%] -top-[50%]"
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

    <div class="fixed grid grid-cols-[3.5em_1fr] pointer-events-none grid-rows-[3em_1fr] w-full h-full z-1">
      <div
        class="w-full h-full z-22 fixed inset-0 pointer-events-none bg-neutral-900 backdrop-blur-md [mask-image:url('/images/main-menu-mask.png')]  [mask-repeat:no-repeat]"
      />
      <div
        class="w-full h-full z-21 fixed inset-0 pointer-events-none bg-gold-200/30 backdrop-blur-md [mask-image:url('/images/main-menu-mask.png')] [mask-position:0.05rem_0.05rem] [mask-repeat:no-repeat]"
      />
      <!-- Navigation -->
      <div class="z-23 col-span-1 mx-auxo w-full mt-[3em] row-span-2 row-start-2 pointer-events-auto">
        <LeftNavigation />
      </div>

      <DynamicHeader class="ml-[3em] pointer-events-auto" />
    </div>

    <main class="ml-[3.5em] mt-[6em]  w-full">
      <slot />
    </main>
  </div>
</template>
