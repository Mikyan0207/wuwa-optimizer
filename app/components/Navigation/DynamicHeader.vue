<script setup lang="ts">
import { TemplateCharacters } from '~/Core/Characters'

const Route = useRoute()

const Routes = computed(() => Route.path.split('/').filter(p => p !== undefined && p.length !== 0).map((p) => {
  if (Number.isInteger(+p)) {
    // Means this is a character Id...?
    return {
      label: TemplateCharacters.find(x => x.Id === Number.parseInt(p))?.Name || '',
    }
  }

  return {
    label: p.at(0)!.toUpperCase() + p.slice(1),
  }
}))
</script>

<template>
  <!-- Header -->
  <div
    class="fixed left-16 top-0 z-30 h-12 w-full flex items-center gap-2 border-b border-white/14 bg-black/44 p-3 text-sm backdrop-blur-4"
  >
    <UBreadcrumb :links="Routes" />
  </div>
</template>
