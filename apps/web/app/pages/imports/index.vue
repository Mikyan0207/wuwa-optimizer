<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

useSeoMeta({
  title: 'Import Characters - Wuthering Waves Optimizer',
  description: 'Automatically import your Wuthering Waves characters, weapons and echoes using our OCR scanner. Scan screenshots to instantly load your builds.',
  keywords: 'WuWa import, Wuthering Waves scanner, OCR import, character scanner, auto import, screenshot scanner',
  ogTitle: 'Import Characters - Wuthering Waves Optimizer',
  ogDescription: 'Automatically import your Wuthering Waves characters using our OCR scanner.',
  ogType: 'website',
})

const SelectedTab = ref<string>('0')

const TabItems = [{
  label: 'Wuthering Waves Bot Scanner',
  icon: 'i-carbon-scan',
  disabled: false,
  slot: 'scanner' as const,
}]
</script>

<template>
  <div class="mx-auto mb-4 xl:max-w-7xl px-8 text-gray-300">
    <ClientOnly>
      <UTabs
        v-model="SelectedTab"
        :items="TabItems"
        color="neutral"
        class="max-w-7xl xl:max-w-[100rem] mx-auto"
        default-value="0"
        :ui="{
          list: 'rounded-none border-neutral-600',
          indicator: 'rounded-none bg-neutral-300',
        }"
      >
        <template #scanner>
          <ScannerImporterTab />
        </template>
      </UTabs>
      <template #fallback>
        <div class="flex items-center justify-center w-full h-full overflow-hidden">
          <div class="absolute inset-0 flex items-center justify-center">
            <UProgress class="w-[50%]" animation="swing" />
          </div>
        </div>
      </template>
    </ClientOnly>
  </div>
</template>
