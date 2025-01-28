<script setup lang="ts">
</script>

<template>
  <div class="relative h-100vh flex flex-row overflow-hidden bg-[radial-gradient(circle_at_80%_10%,rgba(253,255,236,0.3)_3%,rgba(255,235,230,0.3)_20%,rgba(255,255,255,0.3)_37%)] dark:[background-size:16px_16px] dark:bg-[radial-gradient(#fafafa12_1px,transparent_1px)]">
    <div class="w-12em border-r border-white/14 bg-black/66 px-2 py-4">
      <LeftNavigation />
    </div>
    <svg class="pointer-events-none absolute left-1/4 top-0 hidden scale-100 -z-10 dark:block -translate-x-full" xmlns="http://www.w3.org/2000/svg" width="472" height="422" fill="none" aria-hidden="true" role="presentation"><g filter="url(#illf-a)" opacity="0.32"><path fill="url(#ill-b)" fill-rule="evenodd" d="m64-42 344 212-166 188L64-42Z" clip-rule="evenodd" /></g><g filter="url(#illf-c)" opacity="0.32"><path fill="url(#ill-d)" fill-rule="evenodd" d="m64-42 344 212-200-67L64-42Z" clip-rule="evenodd" /></g><defs><linearGradient id="ill-b" x1="218.5" x2="218.5" y1="-42" y2="337" gradientUnits="userSpaceOnUse"><stop stop-color="#71717A" stop-opacity="0.64" /><stop offset="1" stop-color="#71717A" stop-opacity="0" /></linearGradient><linearGradient id="ill-d" x1="218.5" x2="218.5" y1="-42" y2="337" gradientUnits="userSpaceOnUse"><stop stop-color="#71717A" stop-opacity="0.64" /><stop offset="1" stop-color="#71717A" stop-opacity="0" /></linearGradient><filter id="illf-a" width="472" height="528" x="0" y="-106" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix" /><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" /><feGaussianBlur result="effect1_foregroundBlur_115_9" stdDeviation="32" /></filter><filter id="illf-c" width="472" height="340" x="0" y="-106" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix" /><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" /><feGaussianBlur result="effect1_foregroundBlur_115_9" stdDeviation="32" /></filter></defs></svg>
    <main class="w-full overflow-y-auto">
      <slot />
    </main>
  </div>
</template>
