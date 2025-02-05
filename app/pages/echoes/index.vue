<script setup lang="ts">
const EchoesStore = useEchoesStore()
</script>

<template>
  <div>
    <div class="mx-auto my-8 flex items-center justify-center gap-2 container">
      <EchoIcon
        v-for="e in EchoesStore.GetEchoes()"
        :key="e.Id"
        :echo="e"
      />
    </div>
  </div>
</template>
