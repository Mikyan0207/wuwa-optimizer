<script setup lang="ts">
const EchoesStore = useEchoesStore()
</script>

<template>
  <div>
    <div class="h-12 w-full flex items-center gap-2 border-b border-white/14 bg-black/44 p-3 text-sm backdrop-blur-4">
      <NuxtLink to="/echoes">
        Echoes
      </NuxtLink>
    </div>
    <div class="mx-auto my-8 flex items-center justify-center gap-2 container">
      <EchoIcon
        v-for="e in EchoesStore.GetEchoes()"
        :key="e.Id"
        :echo="e"
      />
    </div>
  </div>
</template>
