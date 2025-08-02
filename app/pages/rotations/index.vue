<script setup lang="ts">
import RotationBuilderTab from '~/components/Rotations/Builder/RotationBuilderTab.vue'
import RotationListerTab from '~/components/Rotations/Lister/RotationListerTab.vue'

const SelectedTab = ref<string>('0')
const TabItems = ref([
  {
    label: 'Rotations',
    icon: 'i-carbon-rotate',
    disabled: false,
  },
  {
    label: 'Builder',
    icon: 'i-carbon-tools',
    disabled: false,
  },
])
</script>

<template>
  <div class="w-full mx-auto max-w-5xl px-2 lg:px-0 flex flex-col items-center gap-2">
    <UTabs
      v-model="SelectedTab"
      :items="TabItems"
      color="neutral"
      class="w-full max-w-7xl xl:max-w-[100rem] mx-auto"
      :default-value="0"
      :ui="{
        list: 'rounded-none border-neutral-600',
        indicator: 'rounded-none bg-neutral-300',
      }"
    >
      <template #content>
        <RotationListerTab v-if="SelectedTab === '0'" />
        <RotationBuilderTab v-if="SelectedTab === '1'" />
      </template>
    </UTabs>
  </div>
</template>
