<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const Route = useRoute()

const Items = ref([
  {
    label: 'home',
    icon: 'i-carbon:home',
    type: 'icon',
    to: '/',
  },
  {
    label: 'characters',
    icon: '/images/icons/Icon_Resonators.png',
    type: 'link',
    to: '/characters',
  },
  {
    label: 'weapons',
    icon: '/images/icons/Icon_Weapons.png',
    type: 'link',
    to: '/weapons',
  },
  {
    label: 'echoes',
    icon: '/images/icons/Icon_Echoes.png',
    type: 'link',
    to: '/echoes',
  },
  {
    label: 'imports',
    icon: 'i-carbon:upload',
    type: 'icon',
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
    :collapsed="true"
  >
    <template #item-leading="{ item }">
      <NuxtImg
        v-if="item.type === 'link'"
        :src="item.icon"
        class="relative h-8 w-8 object-contain grayscale"
      />
      <UIcon v-else :name="item.icon!" class="my-1 w-8 text-xl" />
    </template>
  </UNavigationMenu>
</template>
