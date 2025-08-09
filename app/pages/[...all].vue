<script setup lang="ts">
import { useAnalytics } from '~/composables/core/UseAnalytics'

const router = useRouter()
const { TrackPageView } = useAnalytics()

TrackPageView(
  'NotFoundView',
  'Not Found',
)
</script>

<template>
  <main p="x4 y10" text="center teal-700 dark:gray-200">
    <div text-4xl>
      <div i-carbon-warning inline-block />
    </div>
    <div>Not found</div>
    <div>
      <button btn text-sm m="3 t8" @click="router.back()">
        Back
      </button>
    </div>
  </main>
</template>
