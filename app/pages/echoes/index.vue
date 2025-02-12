<script setup lang="ts">
const EchoesStore = useEchoesStore()
</script>

<template>
  <div>
    <div class="mx-auto xl:max-w-6xl px-8 xl:px-0 flex items-center justify-center gap-2">
      <EchoIcon
        v-for="e in EchoesStore.GetEchoes()"
        :key="e.Id"
        :echo="e"
      />
    </div>
  </div>
</template>
