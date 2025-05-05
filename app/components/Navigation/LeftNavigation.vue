<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const Section_01_Items = ref([
  {
    label: 'home',
    icon: 'solar:home-smile-broken',
    type: 'link',
    to: '/',
  },
] as NavigationMenuItem[])

const Section_02_Items = ref([
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

const Section_03_Items = ref([
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
</script>

<template>
  <div class="space-y-4">
    <UNavigationMenu
      :items="Section_01_Items"
      orientation="vertical"
      :highlight="true"
      highlight-color="primary"
      :ui="{
        link: 'inline-block mx-auto inset-x-2.25 w-min',
        linkLabel: 'hidden w-0',
      }"
    />
    <UNavigationMenu
      :items="Section_02_Items"
      orientation="vertical"
      :highlight="true"
      highlight-color="primary" :ui="{
        link: 'inline-block mx-auto inset-x-2.25 w-min',
        linkLabel: 'hidden w-0',
      }"
    />
    <UNavigationMenu
      :items="Section_03_Items"
      orientation="vertical"
      :highlight="true"
      highlight-color="primary"
      :ui="{
        link: 'inline-block mx-auto inset-x-2.25 w-min',
        linkLabel: 'hidden w-0 h-0',
      }"
    />
  </div>
</template>
