<script setup lang="ts">
interface Props {
  name?: string
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  class: 'w-6 h-6',
})

const IconClass = computed(() => props.class)
</script>

<template>
  <ClientOnly>
    <UIcon v-if="name" :name="name" :class="IconClass" />
    <template #fallback>
      <div :class="IconClass" class="bg-gray-400 rounded" />
    </template>
  </ClientOnly>
</template>
