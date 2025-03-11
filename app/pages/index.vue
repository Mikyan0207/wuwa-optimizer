<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

// navigateTo('/characters')
</script>

<template>
  <div class="grid grid-cols-6 mx-auto my-8 gap-2 px-8 x:px-0 xl:w-6xl">
    <UCard
      class="col-span-6 h-46" :ui="{
        root: 'rounded-none rounded-br-xl border-0',
        body: 'p-0 sm:p-0',
      }"
    />
    <UCard
      class="col-span-3" :ui="{
        root: 'rounded-none rounded-br-xl border-0',
      }"
    >
      <BorderLines :count="1" />
      <h2 class="text-lg mb-2">
        <span class="text-gray-200 font-semibold tracking-wide">Popular Builds</span>
      </h2>
      <div class="flex flex-row items-center gap-1" />
    </UCard>
    <UCard
      class="col-span-3" :ui="{
        root: 'rounded-none rounded-br-xl border-0',
      }"
    >
      <BorderLines :count="1" />
      <h2 class="text-lg">
        <span class="text-gray-200 font-semibold tracking-wide">New Builds</span>
      </h2>
    </UCard>
  </div>
</template>
