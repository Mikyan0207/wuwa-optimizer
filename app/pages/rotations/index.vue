<script setup lang="ts">
import RotationListerTab from '~/components/Rotations/Lister/RotationListerTab.vue'

const router = useRouter()

function CreateNewRotation() {
  router.push('/rotations/builder')
}
</script>

<template>
  <div class="w-full mx-auto max-w-5xl px-2 lg:px-0 flex flex-col items-center gap-2 pb-8">
    <div class="w-full max-w-7xl xl:max-w-[100rem] mx-auto">
      <div class="flex justify-between items-center mb-4">
        <h1 class="text-2xl font-bold text-white tracking-tight">
          Rotations
        </h1>
        <UButton
          color="primary"
          icon="i-carbon-add"
          @click="CreateNewRotation"
        >
          New Rotation
        </UButton>
      </div>

      <RotationListerTab />
    </div>
  </div>
</template>
