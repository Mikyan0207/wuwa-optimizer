<script setup lang="ts">
import { NuxtImg } from '#components'

definePageMeta({
  layout: 'default',
})

const SelectedTab = ref<string>('0')

const TabItems = [{
  label: 'Archiver (WIP)',
  icon: 'i-heroicons-arrow-down-tray',
  disabled: true,
}, {
  label: 'Inventory Kamera (Not Working)',
  icon: 'i-heroicons-camera',
  disabled: true,
}, {
  label: 'Archive',
  icon: 'i-carbon-document',
}]
</script>

<template>
  <div>
    <div class="mx-auto mb-4 xl:max-w-7xl px-8 text-gray-300">
      <UTabs
        v-model="SelectedTab"
        :items="TabItems"
        color="neutral"
        class="max-w-7xl xl:max-w-[100rem] mx-auto"
        :default-value="0"
        :ui="{
          list: 'rounded-none border-neutral-600',
          indicator: 'rounded-none bg-neutral-300',
        }"
      >
        <template #content>
          <div v-if="SelectedTab === '0'">
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
                    <p>Launch the game and stay on the main menu screen.</p>
                    <div class="mt-2">
                      <NuxtImg
                        src="/images/imports-guide/WuWa_MainScreen.png"
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
                    <p>Download and run the archiver.</p>
                    <div class="mt-2 h-22">
                      <div class="flex items-center gap-2">
                        <div class="flex items-center gap-2">
                          <div class="flex cursor-pointer items-center text-blue-4">
                            <UIcon name="heroicons:link-16-solid" class="text-blue-4" />
                            <span>Wuthering Waves Archiver</span>
                          </div>
                          <span>by Mikyan</span>
                        </div>
                        <UBadge color="success" variant="soft" size="xs" icon="i-heroicons-check-badge">
                          Game Version 2.0
                        </UBadge>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Step 3 -->
                <div class="w-full flex gap-2">
                  <div class="flex flex-col gap-2">
                    <UBadge color="neutral" variant="solid" class="rounded-full">
                      3
                    </UBadge>
                    <USeparator class="h-full" orientation="vertical" size="xs" />
                  </div>
                  <div class="mt-0.5">
                    <p>Click somewhere to actually start the game.</p>
                    <div class="mt-2 h-22" />
                  </div>
                </div>
                <!-- Step 4 -->
                <div class="w-full flex gap-2">
                  <div class="flex flex-col gap-2">
                    <UBadge color="neutral" variant="solid" class="rounded-full">
                      4
                    </UBadge>
                    <USeparator class="h-full" orientation="vertical" size="xs" />
                  </div>
                  <div class="mt-0.5">
                    <p>Upload the generated file</p>
                    <div class="my-3">
                      <p class="mb-3 text-xs text-gray-300">
                        Please ensure that the file <UKbd>wuwa_archive_{timestamp}.json</UKbd> has been created in the same
                        directory as the executable.
                        Once confirmed, you can close the program and upload this file.
                      </p>
                      <UButton
                        icon="carbon:upload" color="neutral" variant="solid" :trailing="false" label="Upload file"
                        size="xs"
                      />
                    </div>
                  </div>
                </div>
                <!-- Step 5 -->
                <div class="w-full flex gap-2">
                  <div class="flex flex-col gap-2">
                    <UBadge color="neutral" variant="solid" class="rounded-full">
                      5
                    </UBadge>
                    <USeparator class="h-full" orientation="vertical" size="xs" />
                  </div>
                  <div class="mt-0.5">
                    <p>Import characters and echoes</p>
                    <div class="my-3">
                      <p class="mb-3 text-xs text-gray-300">
                        You can import characters with their builds and echoes, or only the echoes. If you choose the first option,
                        all previous information will be overwritten.
                      </p>
                      <div class="flex items-center gap-2">
                        <UButton color="neutral" variant="solid" label="Import Characters and Echoes" size="xs" />
                        <USeparator label="OR" class="w-24" />
                        <UButton color="neutral" variant="solid" label="Import Echoes Only" size="xs" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                      <NuxtImg src="/images/imports-guide/WuWa_PauseMenu.png" class="border border-white/14 rounded object-cover" />
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
          <ArchiveImporterTab v-if="SelectedTab === '2'" />
        </template>
      </UTabs>
    </div>
  </div>
</template>
