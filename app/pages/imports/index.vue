<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

const SelectedTab = ref<string>('0')

const TabItems = [{
  label: 'Wuthering Waves Bot Scanner',
  icon: 'i-carbon-scan',
  disabled: false,
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
        default-value="0"
        :ui="{
          list: 'rounded-none border-neutral-600',
          indicator: 'rounded-none bg-neutral-300',
        }"
      >
        <template #content>
          <ScannerImporterTab />
        </template>
      </UTabs>
    </div>
  </div>
</template>
