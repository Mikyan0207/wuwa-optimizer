<script setup lang="ts">
const EchoesStore = useEchoesStore()
</script>

<template>
  <div>
    <div class="mx-auto xl:max-w-7xl px-8 xl:px-0 flex flex-wrap items-start justify-center gap-2">
      <EchoIcon
        v-for="e in EchoesStore.Echoes"
        :key="e.Id"
        :echo="e"
      />
    </div>
  </div>
</template>
