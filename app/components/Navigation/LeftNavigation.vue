<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const Route = useRoute()

const Items = ref([
  {
    label: 'home',
    icon: 'i-carbon:home',
    type: 'link',
    to: '/',
    disabled: true,
  },
  {
    label: 'characters',
    icon: 'solar:soundwave-bold-duotone',
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
  {
    label: 'imports',
    icon: 'i-carbon:upload',
    type: 'link',
    to: '/imports',
  },
] as NavigationMenuItem[])

watch(Route, () => {
  const i = Items.value.find((x) => {
    if (x.label === undefined || x.label === '') {
      return false
    }

    // Beautiful code.
    if (x.label === 'home' && Route.path === '/') {
      return true
    }

    return Route.path.includes(x.label)
  })

  if (i !== undefined) {
    Items.value.forEach(x => x.active = false)
    i.active = true
  }
}, {
  immediate: true,
})
</script>

<template>
  <UNavigationMenu
    :items="Items"
    orientation="vertical"
    :highlight="true"
    highlight-color="primary"
    :ui="{
      link: 'inline-block mx-auto w-full inset-x-2 w-min',
      linkLabel: 'hidden w-0',
    }"
  />
</template>
