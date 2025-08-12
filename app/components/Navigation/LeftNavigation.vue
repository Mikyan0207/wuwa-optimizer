<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const IsSettingsOpen = ref(false)

const SectionItems = ref<NavigationMenuItem[][]>([
  [{
    label: 'Home',
    icon: 'solar:home-smile-broken',
    type: 'link',
    to: '/',
  }],
  [{
    label: 'Characters',
    icon: 'solar:soundwave-circle-broken',
    type: 'link',
    to: '/characters',
  }, {
    label: 'Weapons',
    icon: 'material-symbols:swords-outline-rounded',
    type: 'link',
    to: '/weapons',
  }, {
    label: 'Echoes',
    icon: 'game-icons:squid-head',
    type: 'link',
    to: '/echoes',
  }],
  [{
    label: 'Import',
    icon: 'solar:import-broken',
    type: 'link',
    to: '/imports',
  }],

])

const BottomSectionItems = ref<NavigationMenuItem[][]>([
  [{
    label: 'Roadmap',
    icon: 'solar:map-broken',
    type: 'link',
    to: '/roadmap',
  }],
])

function OpenSettings() {
  IsSettingsOpen.value = true
}
</script>

<template>
  <div class="space-y-4 h-full flex flex-col pb-4">
    <div class="flex-1 space-y-4">
      <UNavigationMenu
        :items="SectionItems"
        orientation="vertical"
        :highlight="true"
        :collapsed="true"
        :tooltip="true"
        class="w-min mx-auto"
      />
    </div>

    <div class="space-y-4">
      <UNavigationMenu
        :items="BottomSectionItems"
        orientation="vertical"
        :highlight="true"
        :collapsed="true"
        :tooltip="true"
        class="w-min mx-auto"
      />
      <div
        class="w-min mx-auto hover:text-primary-400 cursor-pointer"
        @click="OpenSettings"
      >
        <MIcon name="solar:settings-broken" class="w-5 h-5" />
      </div>
    </div>

    <!-- Settings Slideover -->
    <USlideover v-model:open="IsSettingsOpen" side="left">
      <template #header>
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 bg-primary-500/20 rounded-md flex items-center justify-center">
            <UIcon name="solar:settings-broken" class="w-6 h-6 text-primary-400" />
          </div>
          <div class="text-sm flex flex-col gap-1">
            <h2 class=" font-semibold text-gray-100">
              Settings
            </h2>
            <p class="text-xs text-gray-400">
              Customize your experience
            </p>
          </div>
        </div>
      </template>
      <template #body>
        <Settings />
      </template>
    </USlideover>
  </div>
</template>
