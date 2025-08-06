<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

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

const BottomSectionItems = ref([
  {
    label: 'roadmap',
    icon: 'solar:map-line-duotone',
    type: 'link',
    to: '/roadmap',
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
</script>

<template>
  <div class="space-y-4 flex flex-col h-full">
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

    <UNavigationMenu
      :items="BottomSectionItems"
      orientation="vertical"
      :highlight="true"
      :ui="{
        link: 'inline-block mx-auto inset-x-[0.5em] w-min',
        linkLabel: 'hidden w-0 h-0',
      }"
      class="mt-auto mb-4"
    >
      <template #item="{ item }">
        <NuxtLink
          class="inline-block mx-auto pt-[0.35em] inset-x-[0.5em] w-min"
          :to="item.to as string"
        >
          <UIcon v-if="item.icon" :name="item.icon" class="w-6 h-6" />
        </NuxtLink>
      </template>
    </UNavigationMenu>
  </div>
</template>
