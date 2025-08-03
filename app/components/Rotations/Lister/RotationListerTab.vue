<script setup lang="ts">
import type Rotation from '~/Core/Interfaces/Rotation'
import RotationCard from '../Cards/RotationCard.vue'

const RotationsStore = useRotationsStore()
const router = useRouter()

function HandleRotationSelect(rotation: Rotation) {
  router.push(`/rotations/${rotation.Id}`)
}

function HandleRotationDelete(rotation: Rotation) {
  const index = RotationsStore.Rotations.findIndex(r => r.Id === rotation.Id)
  if (index !== -1) {
    RotationsStore.Rotations.splice(index, 1)
  }
}
</script>

<template>
  <div class="w-full max-w-7xl mx-auto mt-12 space-y-6">
    <div v-if="RotationsStore.Rotations.length === 0" class="text-center">
      <UCard v-motion-pop class="mx-auto w-full max-w-md">
        <div class="text-center py-8">
          <UIcon
            name="i-carbon-rotate"
            class="text-4xl text-neutral-500 mx-auto mb-4"
          />
          <h3 class="text-lg font-semibold text-neutral-200 mb-2">
            No rotations available
          </h3>
          <p class="text-neutral-400 mb-4">
            Create your first rotation in the Builder
          </p>
          <UButton
            color="primary"
            variant="outline"
            @click="router.push('/rotations/builder')"
          >
            Go to Builder
          </UButton>
        </div>
      </UCard>
    </div>

    <div v-else class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <RotationCard
        v-for="rotation in RotationsStore.Rotations"
        :key="rotation.Title"
        :rotation="rotation"
        @select="HandleRotationSelect"
        @delete="HandleRotationDelete"
      />
    </div>
  </div>
</template>
