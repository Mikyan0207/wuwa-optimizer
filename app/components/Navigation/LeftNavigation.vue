<script setup lang="ts">
const Links = [
  [{
    label: 'Home',
    icon: 'i-heroicons-home',
    type: 'icon',
    to: '/',
  }],
  [{
    label: 'Resonators',
    icon: '/images/icons/Icon_Resonators.png',
    type: 'image',
    to: '/characters',
  }, {
    label: 'Weapons',
    icon: '/images/icons/Icon_Weapons.png',
    type: 'image',
    to: '/weapons',
  }, {
    label: 'Echoes',
    icon: '/images/icons/Icon_Echoes.png',
    type: 'image',
    to: '/echoes',
  }],
  [{
    label: 'Import',
    icon: 'i-carbon:upload',
    type: 'icon',
    to: '/imports',
  }],
]
</script>

<template>
  <UVerticalNavigation :links="Links">
    <template #icon="{ link }">
      <NuxtImg v-if="link.type === 'image'" :src="link.icon" class="h-8 w-8 object-contain grayscale" />
      <UIcon v-else :name="link.icon" class="my-1 w-8 text-xl" />
    </template>
  </UVerticalNavigation>
</template>
