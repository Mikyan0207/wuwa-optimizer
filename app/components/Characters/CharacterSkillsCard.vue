<script setup lang="ts">
</script>

<template>
  <Card>
    <div class="h-full w-full flex flex-col items-start justify-center gap-6">
      <!-- Normal Attack -->
      <div class="w-full flex items-center gap-2">
        <USkeleton class="min-h-3em min-w-3em rotate-45" :ui="{ base: '' }" />
        <div class="h-1px w-full bg-white/7" />
        <USkeleton class="min-h-2em min-w-2em rounded-full" :ui="{ base: '' }" />
        <div class="h-1px w-full bg-white/7" />
        <USkeleton class="mr-4em min-h-2em min-w-2em rounded-full" :ui="{ base: '' }" />
      </div>
      <!-- Resonance Skill -->
      <div class="w-full flex items-center gap-2">
        <USkeleton class="ml-3em min-h-3em min-w-3em rotate-45" :ui="{ base: '' }" />
        <div class="h-1px w-full bg-white/7" />
        <USkeleton class="min-h-2em min-w-2em rounded-full" :ui="{ base: '' }" />
        <div class="h-1px w-full bg-white/7" />
        <USkeleton class="mr-2em min-h-2em min-w-2em rounded-full" :ui="{ base: '' }" />
      </div>
      <!-- Forte Circuit / Outro Skill -->
      <div class="w-full flex items-center gap-2">
        <USkeleton class="min-h-3em min-w-3em rotate-45" :ui="{ base: '' }" />
        <USkeleton class="ml-2em min-h-3em min-w-3em rotate-45" :ui="{ base: '' }" />
        <div class="h-1px w-full bg-white/7" />
        <USkeleton class="min-h-2em min-w-2em rounded-full" :ui="{ base: '' }" />
        <div class="h-1px w-full bg-white/7" />
        <USkeleton class="min-h-2em min-w-2em rounded-full" :ui="{ base: '' }" />
      </div>
      <!-- Resonance Liberation -->
      <div class="w-full flex items-center gap-2">
        <USkeleton class="ml-3em min-h-3em min-w-3em rotate-45" :ui="{ base: '' }" />
        <div class="h-1px w-full bg-white/7" />
        <USkeleton class="min-h-2em min-w-2em rounded-full" :ui="{ base: '' }" />
        <div class="h-1px w-full bg-white/7" />
        <USkeleton class="mr-2em min-h-2em min-w-2em rounded-full" :ui="{ base: '' }" />
      </div>
      <!-- Intro Skill -->
      <div class="w-full flex items-center gap-2">
        <USkeleton class="min-h-3em min-w-3em rotate-45" :ui="{ base: '' }" />
        <div class="h-1px w-full bg-white/7" />
        <USkeleton class="min-h-2em min-w-2em rounded-full" :ui="{ base: '' }" />
        <div class="h-1px w-full bg-white/7" />
        <USkeleton class="mr-4em min-h-2em min-w-2em rounded-full" :ui="{ base: '' }" />
      </div>
    </div>
  </Card>
</template>
