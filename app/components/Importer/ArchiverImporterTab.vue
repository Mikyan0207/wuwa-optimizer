<script setup lang="ts">
</script>

<template>
  <div>
    <div class="mx-auto my-8 max-w-xl text-sm text-gray-300">
      <div class="flex flex-col gap-2">
        <!-- Step 1 -->
        <div class="w-full flex gap-2">
          <div class="flex flex-col gap-2">
            <UBadge color="neutral" variant="solid" class="rounded-full">
              1
            </UBadge>
            <USeparator class="h-full" orientation="vertical" size="xs" />
          </div>
          <div class="mt-0.5">
            <p>Launch the game and navigate to the in-game pause menu.</p>
            <div class="my-3">
              <NuxtImg
                src="/images/imports-guide/WuWa_PauseMenu.png"
                class="border border-white/14 rounded object-cover"
              />
            </div>
          </div>
        </div>
        <!-- Step 2 -->
        <div class="w-full flex gap-2">
          <div class="flex flex-col gap-2">
            <UBadge color="neutral" variant="solid" class="rounded-full">
              2
            </UBadge>
            <USeparator class="h-full" orientation="vertical" size="xs" />
          </div>
          <div class="mt-0.5">
            <p>Download and start Inventory Kamera.</p>
            <div class="mt-2">
              <div class="flex items-center gap-2">
                <div class="flex items-center gap-2">
                  <div class="flex cursor-pointer items-center text-blue-4">
                    <UIcon name="heroicons:link-16-solid" class="text-blue-4" />
                    <NuxtLink
                      to="https://github.com/Psycho-Marcus/WuWa_Inventory_Kamera/releases/tag/v1.7.0"
                      target="_blank"
                    >
                      Wuthering Waves Inventory Kamera
                    </NuxtLink>
                  </div>
                  <span>by Psycho-Marcus</span>
                </div>
                <UBadge color="success" variant="soft" size="xs" icon="i-heroicons-check-badge">
                  Game Version 2.0
                </UBadge>
              </div>
              <UAlert
                icon="i-heroicons-exclamation-triangle" color="error" variant="subtle"
                title="You must run Inventory Kamera as Administrator." class="my-3"
              />
              <div class="mb-3">
                <NuxtImg
                  src="/images/imports-guide/WuWa_Inventory_Kamera.png"
                  class="border border-white/14 rounded object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
