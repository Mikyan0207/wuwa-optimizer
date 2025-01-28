<script setup lang="ts">
import { UModal } from '#components'

const EchoesStore = useEchoesStore()

const CreateEchoModalIsVisible = ref(false)
</script>

<template>
  <div>
    <!-- Create Echo Modal -->
    <UModal
      v-model="CreateEchoModalIsVisible"
      :ui="{ container: 'flex min-h-full items-center justify-center text-center' }"
    >
      <div class="p-4">
        <div class="h-48">
          Ouais l'ajout d'echo...
        </div>
      </div>
    </UModal>
    <div class="w-full flex flex-row items-center justify-between gap-2 border-b border-white/14 bg-black/44 p-4">
      <div class="flex items-center gap-2">
        <div class="border-r border-white/14 pr-4">
          <h2>Echoes</h2>
        </div>
      </div>
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
