<script setup lang="ts">
const Links = [
  [{
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/',
  }],
  [{
    label: 'Resonators',
    icon: 'i-heroicons-chart-bar',
    to: '/characters',
  }, {
    label: 'Weapons',
    icon: 'i-heroicons-command-line',
    to: '/weapons',
  }, {
    label: 'Echoes',
    icon: 'i-heroicons-command-line',
    to: '/echoes',
  }],
  [{
    label: 'Import',
    icon: 'i-heroicons-light-bulb',
  }],
]
</script>

<template>
  <UVerticalNavigation :links="Links" />
</template>
