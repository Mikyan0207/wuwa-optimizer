<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'
import { domToBlob } from 'modern-screenshot'
import SectionBlock from '../Cards/SectionBlock.vue'

const RotationBuilderStore = useRotationBuilderStore()
const RotationBuilderRef = ref<HTMLElement | undefined>(undefined)
const ShowScreenShotBackground = ref<boolean>(false)

const Items = computed<DropdownMenuItem[]>(() => [
  {
    label: 'Character Action',
    icon: 'i-material-symbols:action-key',
    onSelect: () => {
      RotationBuilderStore.AddCharacterAction()
    },
  },
  {
    label: 'Character Swap',
    icon: 'i-carbon-loop',
    onSelect: () => {
      RotationBuilderStore.AddCharacterSwap()
    },
  },
  {
    label: 'Section',
    icon: 'teenyicons:section-add-outline',
    onSelect: () => {
      RotationBuilderStore.AddSection()
    },
  },
])

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
    style: {
      zoom: `${scale}`,
    },
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
  <div class="w-full mx-auto max-w-5xl px-2 lg:px-0 flex flex-col items-center gap-2 mt-4">
    <UCard
      v-motion-pop :delay="50" class="mx-auto w-full text-sm mb-12" :ui="{
        root: 'rounded-none rounded-br-xl border-0',
      }"
    >
      <template #default>
        <BorderLines :count="1" />
        <div class="flex items-center justify-between">
          <div class="w-full flex justify-end gap-1">
            <UButton
              color="neutral" size="xs" variant="subtle" icon="i-carbon:camera" :trailing="false"
              @click.prevent="TakeScreenShotAsync"
            >
              Screenshot
            </UButton>
          </div>
        </div>
      </template>
    </UCard>
    <div ref="RotationBuilderRef" class="w-full flex flex-col gap-2 items-center relative">
      <div v-if="ShowScreenShotBackground" class="absolute inset-0">
        <NuxtImg src="/images/main-bg.webp" class="h-full w-full object-cover" />
      </div>
      <SectionBlock v-for="section in RotationBuilderStore.Steps" :key="section.Title" :section="section" />
      <UDropdownMenu :items="Items" class="mt-8">
        <UButton icon="i-carbon-add" color="neutral" variant="outline" />
      </UDropdownMenu>
    </div>
  </div>
</template>
