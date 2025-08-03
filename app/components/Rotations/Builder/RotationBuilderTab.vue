<script setup lang="ts">
import { domToBlob } from 'modern-screenshot'
import draggable from 'vuedraggable'
import { generateHash } from '~/Core/Utils/HashUtils'
import { ExtractTeamFromRotationByIds } from '~/Core/Utils/RotationUtils'
import RotationHeaderCard from '../Cards/RotationHeaderCard.vue'
import RotationTimeline from '../Cards/RotationTimeline.vue'
import RotationTimelineVertical from '../Cards/RotationTimelineVertical.vue'
import SectionBlock from '../Cards/SectionBlock.vue'
import TeamSelector from '../Cards/TeamSelector.vue'

const RotationBuilderStore = useRotationBuilderStore()
const RotationsStore = useRotationsStore()
const route = useRoute()
const RotationBuilderRef = ref<HTMLElement | undefined>(undefined)
const ShowScreenShotBackground = ref<boolean>(false)
const CurrentView = ref<'builder' | 'timeline' | 'timeline-vertical'>('builder')
const CurrentRotationName = ref('Untitled Rotation')
const EditingRotationId = ref<string | null>(null)

const rotationStats = computed(() => {
  const sectionsCount = RotationBuilderStore.Steps.length
  const actionsCount = RotationBuilderStore.Steps.reduce((total, section) => total + section.Actions.length, 0)
  return { sectionsCount, actionsCount }
})

function loadRotation(rotationId: string) {
  RotationBuilderStore.ResetStore()
  EditingRotationId.value = rotationId

  const rotation = RotationsStore.Rotations.find(r => r.Id === rotationId)
  if (rotation) {
    RotationBuilderStore.Steps = [...rotation.Steps]
    CurrentRotationName.value = rotation.Title

    if (rotation.Team && rotation.Team.length > 0) {
      RotationBuilderStore.SelectedTeam = [...rotation.Team]
    }
    else {
      const extractedTeam = ExtractTeamFromRotationByIds(rotation)
      RotationBuilderStore.SelectedTeam = extractedTeam
    }
  }
}

onMounted(() => {
  const loadRotationId = route.query.load as string
  if (loadRotationId) {
    loadRotation(loadRotationId)
  }
  else {
    EditingRotationId.value = null
  }
})

watch(() => route.query.load, (newLoadId) => {
  if (newLoadId) {
    loadRotation(newLoadId as string)
  }
  else {
    EditingRotationId.value = null
  }
})

function SaveRotation() {
  if (EditingRotationId.value) {
    // Mode édition : mettre à jour la rotation existante
    const existingRotationIndex = RotationsStore.Rotations.findIndex(r => r.Id === EditingRotationId.value)
    if (existingRotationIndex !== -1) {
      RotationsStore.Rotations[existingRotationIndex] = {
        Id: EditingRotationId.value,
        Title: CurrentRotationName.value,
        Steps: [...RotationBuilderStore.Steps],
        Team: [...RotationBuilderStore.SelectedTeam],
      }
    }
  }
  else {
    // Mode création : créer une nouvelle rotation
    const rotation = {
      Id: generateHash(),
      Title: CurrentRotationName.value,
      Steps: [...RotationBuilderStore.Steps],
      Team: [...RotationBuilderStore.SelectedTeam],
    }
    RotationsStore.Rotations.push(rotation)
  }
}

const TabItems = computed(() => [
  { label: 'Builder', value: 'builder', icon: 'i-carbon-tools' },
  { label: 'Timeline', value: 'timeline', icon: 'i-carbon-time' },
  { label: 'Timeline V', value: 'timeline-vertical', icon: 'i-carbon-time' },
])

function OnSectionMove() {
  nextTick(() => {
    RotationBuilderStore.Steps.forEach((section, index) => {
      if (section) {
        section.Index = index
      }
    })
  })
}

async function TakeScreenShotAsync() {
  if (!RotationBuilderRef.value) {
    return
  }

  ShowScreenShotBackground.value = true
  const scale = 1
  const w = RotationBuilderRef.value.clientWidth * scale
  const h = RotationBuilderRef.value.clientHeight * scale

  domToBlob(RotationBuilderRef.value, {
    height: h,
    width: w,
    style: { zoom: `${scale}` },
  }).then((blob) => {
    if (blob === null) {
      ShowScreenShotBackground.value = false
      return
    }

    window.open(URL.createObjectURL(blob), '_blank')
    ShowScreenShotBackground.value = false
  })
}
</script>

<template>
  <div class="mx-auto xl:max-w-6xl space-y-2 px-8 xl:px-0">
    <RotationHeaderCard
      v-model:rotation-name="CurrentRotationName"
      :sections-count="rotationStats.sectionsCount"
      :actions-count="rotationStats.actionsCount"
      @save="SaveRotation"
    />

    <div class="w-full flex flex-col gap-4 items-center">
      <TeamSelector v-model:selected-team="RotationBuilderStore.SelectedTeam" />

      <UTabs
        v-model="CurrentView"
        :items="TabItems"
        class="w-full"
        :ui="{
          list: 'rounded-none border-neutral-600',
          indicator: 'rounded-none bg-neutral-300',
        }"
      />

      <div class="w-full h-px bg-neutral-600/50 my-4" />
    </div>

    <div v-if="CurrentView === 'timeline' && RotationBuilderStore.Steps.length > 0">
      <div class="w-full flex justify-end mb-4">
        <UButton
          color="neutral"
          size="sm"
          variant="outline"
          icon="i-carbon:camera"
          @click.prevent="TakeScreenShotAsync"
        >
          Screenshot
        </UButton>
      </div>
      <RotationTimeline :sections="RotationBuilderStore.Steps" />
    </div>

    <div v-if="CurrentView === 'timeline-vertical' && RotationBuilderStore.Steps.length > 0">
      <div class="w-full flex justify-end mb-4">
        <UButton
          color="neutral"
          size="sm"
          variant="outline"
          icon="i-carbon:camera"
          @click.prevent="TakeScreenShotAsync"
        >
          Screenshot
        </UButton>
      </div>
      <RotationTimelineVertical :sections="RotationBuilderStore.Steps" />
    </div>

    <div v-if="CurrentView === 'builder'" ref="RotationBuilderRef" class="w-full flex flex-col gap-4 items-center relative">
      <div v-if="RotationBuilderStore.SelectedTeam.length === 0" class="w-full text-center py-4 mb-4">
        <UCard class="mx-auto w-full max-w-md">
          <div class="text-center py-4">
            <h3 class="text-lg font-semibold text-neutral-200 mb-2">
              No characters selected
            </h3>
            <p class="text-neutral-400 mb-4">
              Please select at least one character in your team to start building rotations
            </p>
          </div>
        </UCard>
      </div>

      <div class="w-full flex flex-col gap-4 items-center">
        <div class="w-full flex justify-end mb-4">
          <UButton
            color="neutral"
            size="sm"
            variant="outline"
            icon="i-carbon:camera"
            @click.prevent="TakeScreenShotAsync"
          >
            Screenshot
          </UButton>
        </div>
        <div v-if="ShowScreenShotBackground" class="absolute inset-0">
          <NuxtImg src="/images/main-bg.webp" class="h-full w-full object-cover" />
        </div>

        <div v-if="RotationBuilderStore.Steps.length > 0" class="w-full">
          <draggable
            :list="RotationBuilderStore.Steps"
            :group="{ name: 'sections', pull: true, put: true }"
            item-key="Index"
            class="w-full space-y-4"
            ghost-class="draggable-ghost"
            chosen-class="draggable-chosen"
            drag-class="draggable-drag"
            @change="OnSectionMove"
          >
            <template #item="{ element: section, index }">
              <SectionBlock
                v-if="section"
                :section="section"
                :section-index="index"
              />
            </template>
          </draggable>
        </div>

        <UButton
          icon="i-teenyicons:section-add-outline"
          color="primary"
          variant="outline"
          size="lg"
          @click="RotationBuilderStore.AddSection()"
        >
          Add Section
        </UButton>
      </div>
    </div>
  </div>
</template>
