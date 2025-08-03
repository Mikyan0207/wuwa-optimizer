<script setup lang="ts">
import RotationTimeline from '~/components/Rotations/Cards/RotationTimeline.vue'
import RotationTimelineVertical from '~/components/Rotations/Cards/RotationTimelineVertical.vue'
import TeamDisplay from '~/components/Rotations/Cards/TeamDisplay.vue'
import { ExtractTeamFromRotationByIds } from '~/Core/Utils/RotationUtils'

const route = useRoute()
const router = useRouter()
const RotationsStore = useRotationsStore()

const rotationId = computed(() => {
  const params = route.params as { id: string }
  return params.id
})
const rotation = computed(() => {
  const foundRotation = RotationsStore.Rotations.find(r => r.Id === rotationId.value)
  if (foundRotation && !foundRotation.Team) {
    foundRotation.Team = ExtractTeamFromRotationByIds(foundRotation)
  }

  return foundRotation
})

const CurrentView = ref<'timeline' | 'timeline-vertical'>('timeline')

const TabItems = computed(() => [
  { label: 'Timeline', value: 'timeline', icon: 'i-carbon-time' },
  { label: 'Timeline V', value: 'timeline-vertical', icon: 'i-carbon-time' },
])

onMounted(() => {
  if (!rotation.value) {
    router.push('/rotations')
  }
})

const rotationStats = computed(() => {
  if (!rotation.value)
    return { sectionsCount: 0, actionsCount: 0 }

  const sectionsCount = rotation.value.Steps.length
  const actionsCount = rotation.value.Steps.reduce((total, section) => total + section.Actions.length, 0)
  return { sectionsCount, actionsCount }
})
</script>

<template>
  <div v-if="rotation" class="mx-auto xl:max-w-6xl space-y-4 px-8 xl:px-0">
    <UCard class="w-full">
      <div class="flex items-center justify-between mb-4">
        <div class="flex flex-col">
          <div class="flex items-center gap-4">
            <h1 class="text-2xl font-bold text-white tracking-tight">
              {{ rotation.Title }}
            </h1>
            <UButton
              color="primary"
              size="sm"
              variant="outline"
              icon="i-carbon-edit"
              @click="router.push(`/rotations/builder?load=${rotation.Id}`)"
            >
              Edit
            </UButton>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4 mb-4">
        <div class="p-3 bg-neutral-800/20 rounded-sm border border-neutral-600/30">
          <div class="flex items-center gap-2">
            <UIcon
              name="i-carbon-layers"
              class="w-4 h-4 text-neutral-400"
            />
            <div class="flex flex-col">
              <span class="text-sm font-medium text-white">
                {{ rotationStats.sectionsCount }}
              </span>
              <span class="text-xs text-neutral-400">
                Sections
              </span>
            </div>
          </div>
        </div>

        <div class="p-3 bg-neutral-800/20 rounded-sm border border-neutral-600/30">
          <div class="flex items-center gap-2">
            <UIcon
              name="i-carbon-play"
              class="w-4 h-4 text-neutral-400"
            />
            <div class="flex flex-col">
              <span class="text-sm font-medium text-white">
                {{ rotationStats.actionsCount }}
              </span>
              <span class="text-xs text-neutral-400">
                Actions
              </span>
            </div>
          </div>
        </div>
      </div>

      <div v-if="rotation.Team && rotation.Team.length > 0">
        <TeamDisplay :team="rotation.Team" />
      </div>
      <div v-else-if="rotation.Steps && rotation.Steps.length > 0" class="text-center py-4">
        <span class="text-sm text-neutral-500">
          No team information available for this rotation
        </span>
      </div>
    </UCard>

    <UTabs
      v-model="CurrentView"
      :items="TabItems"
      class="w-full"
      :ui="{
        list: 'rounded-none border-neutral-600',
        indicator: 'rounded-none bg-neutral-300',
      }"
    />

    <div v-if="CurrentView === 'timeline' && rotation.Steps.length > 0">
      <RotationTimeline :sections="rotation.Steps" />
    </div>

    <div v-if="CurrentView === 'timeline-vertical' && rotation.Steps.length > 0">
      <RotationTimelineVertical :sections="rotation.Steps" />
    </div>

    <div v-if="rotation.Steps.length === 0" class="text-center py-12">
      <UCard class="mx-auto w-full max-w-md">
        <div class="text-center py-8">
          <UIcon
            name="i-carbon-rotate"
            class="text-4xl text-neutral-500 mx-auto mb-4"
          />
          <h3 class="text-lg font-semibold text-neutral-200 mb-2">
            No sections in this rotation
          </h3>
          <p class="text-neutral-400 mb-4">
            This rotation doesn't have any sections yet
          </p>
          <UButton
            color="primary"
            variant="outline"
            @click="router.push(`/rotations/builder?load=${rotation.Id}`)"
          >
            Edit Rotation
          </UButton>
        </div>
      </UCard>
    </div>
  </div>

  <div v-else class="mx-auto xl:max-w-6xl space-y-4 px-8 xl:px-0">
    <UCard class="mx-auto w-full max-w-md">
      <div class="text-center py-8">
        <UIcon
          name="i-carbon-error"
          class="text-4xl text-neutral-500 mx-auto mb-4"
        />
        <h3 class="text-lg font-semibold text-neutral-200 mb-2">
          Rotation not found
        </h3>
        <p class="text-neutral-400 mb-4">
          The rotation you're looking for doesn't exist
        </p>
        <UButton
          color="primary"
          variant="outline"
          @click="router.push('/rotations')"
        >
          Back to Rotations
        </UButton>
      </div>
    </UCard>
  </div>
</template>
