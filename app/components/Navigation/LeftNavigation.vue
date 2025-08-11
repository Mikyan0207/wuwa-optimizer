<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()
const IsSettingsOpen = ref(false)

const Section01Items = ref([
  {
    label: 'home',
    icon: 'solar:home-smile-broken',
    type: 'link',
    to: '/',
  },
] as NavigationMenuItem[])

const Section02Items = ref([
  {
    label: 'characters',
    icon: 'solar:soundwave-circle-broken',
    type: 'link',
    to: '/characters',
  },
  {
    label: 'weapons',
    icon: 'material-symbols:swords-outline-rounded',
    type: 'link',
    to: '/weapons',
  },
  {
    label: 'echoes',
    icon: 'game-icons:squid-head',
    type: 'link',
    to: '/echoes',
  },
] as NavigationMenuItem[])

const Section03Items = ref([
  {
    label: 'imports',
    icon: 'solar:import-broken',
    type: 'link',
    to: '/imports',
  },
  // {
  //   label: 'exports',
  //   icon: 'i-carbon:download',
  //   type: 'link',
  //   to: '/exports',
  // },
] as NavigationMenuItem[])

const Section04Items = ref([
  {
    label: 'roadmap',
    icon: 'solar:map-broken',
    type: 'link',
    to: '/roadmap',
  },
  {
    label: 'settings',
    icon: 'solar:settings-broken',
    type: 'trigger',
  },
] as NavigationMenuItem[])

function IsActiveRoute(itemPath: string) {
  if (itemPath === '/') {
    return route.path === '/'
  }
  return route.path.startsWith(itemPath)
}

const ActiveSection01Item = computed(() => {
  return Section01Items.value.findIndex(item => IsActiveRoute(item.to as string))
})

const ActiveSection02Item = computed(() => {
  return Section02Items.value.findIndex(item => IsActiveRoute(item.to as string))
})

const ActiveSection03Item = computed(() => {
  return Section03Items.value.findIndex(item => IsActiveRoute(item.to as string))
})

const ActiveSection04Item = computed(() => {
  return Section04Items.value.findIndex(item => IsActiveRoute(item.to as string))
})

function OpenSettings() {
  IsSettingsOpen.value = true
}
</script>

<template>
  <div class="space-y-4 h-full flex flex-col pb-4">
    <div class="flex-1 space-y-4">
      <UNavigationMenu
        :items="Section01Items"
        orientation="vertical"
        :highlight="true"
        :ui="{
          link: 'inline-block mx-auto inset-x-[0.5em] w-min',
          linkLabel: 'hidden w-0',
        }"
      >
        <template #item="{ item, index }">
          <NuxtLink
            class="inline-block mx-auto pt-[0.35em] inset-x-[0.5em] w-min"
            :to="item.to as string"
            :class="ActiveSection01Item === index ? 'text-primary' : ''"
          >
            <UIcon v-if="item.icon" :name="item.icon" class="w-6 h-6" />
          </NuxtLink>
        </template>
      </UNavigationMenu>

      <UNavigationMenu
        :items="Section02Items"
        orientation="vertical"
        :highlight="true"
        :ui="{
          link: 'inline-block mx-auto inset-x-[0.5em] w-min',
          linkLabel: 'hidden w-0',
        }"
      >
        <template #item="{ item, index }">
          <NuxtLink
            class="inline-block mx-auto pt-[0.35em] inset-x-[0.5em] w-min"
            :to="item.to as string"
            :class="ActiveSection02Item === index ? 'text-primary' : ''"
          >
            <UIcon v-if="item.icon" :name="item.icon" class="w-6 h-6" />
          </NuxtLink>
        </template>
      </UNavigationMenu>

      <UNavigationMenu
        :items="Section03Items"
        orientation="vertical"
        :highlight="true"
        :ui="{
          link: 'inline-block mx-auto inset-x-[0.5em] w-min',
          linkLabel: 'hidden w-0 h-0',
        }"
      >
        <template #item="{ item, index }">
          <NuxtLink
            class="inline-block mx-auto pt-[0.35em] inset-x-[0.5em] w-min"
            :to="item.to as string"
            :class="ActiveSection03Item === index ? 'text-primary' : ''"
          >
            <UIcon v-if="item.icon" :name="item.icon" class="w-6 h-6" />
          </NuxtLink>
        </template>
      </UNavigationMenu>
    </div>

    <UNavigationMenu
      :items="Section04Items"
      orientation="vertical"
      :highlight="true"
      :ui="{
        link: 'inline-block mx-auto inset-x-[0.5em] w-min',
        linkLabel: 'hidden w-0 h-0',
      }"
    >
      <template #item="{ item, index }">
        <div
          v-if="item.label === 'settings'"
          class="inline-block mx-auto pt-[0.35em] inset-x-[0.5em] w-min"
          :class="ActiveSection04Item === index ? 'text-primary' : ''"
          @click="OpenSettings"
        >
          <UIcon v-if="item.icon" :name="item.icon" class="w-6 h-6" />
        </div>
        <NuxtLink
          v-else
          class="inline-block mx-auto pt-[0.35em] inset-x-[0.5em] w-min"
          :to="item.to as string"
          :class="ActiveSection04Item === index ? 'text-primary' : ''"
        >
          <UIcon v-if="item.icon" :name="item.icon" class="w-6 h-6" />
        </NuxtLink>
      </template>
    </UNavigationMenu>

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
