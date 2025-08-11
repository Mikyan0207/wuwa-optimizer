<script setup lang="ts">
import type { CharacterV2 } from '~/Core/Interfaces/Character'
import { useAnimatedArt } from '~/composables/characters/UseAnimatedArt'
import { GetSequenceIcon, GetSplashArt } from '~/Core/Utils/CharacterUtils'

interface Props {
  character: CharacterV2
}

const { character: CurrentCharacter } = defineProps<Props>()

const CanvasRef = ref<HTMLCanvasElement>()

const { Initialize, LoadSpineModel, IsSpineLoaded } = useAnimatedArt(CurrentCharacter, CanvasRef)

const ShowOverlay = ref(true)

onMounted(() => {
  nextTick(() => {
    setTimeout(() => {
      Initialize()
      LoadSpineModel()
    }, 2500)
  })
})
</script>

<template>
  <MCard
    class="relative overflow-hidden group"
    :border-lines-count="3"
  >
    <div class="absolute inset-0 z-20 from-black/25 via-transparent to-transparent bg-gradient-to-bl" />
    <NuxtImg
      fit="cover"
      src="/images/character-bg-placeholder.webp"
      class="absolute top--25% z-0 h-200% w-200% rotate-180 object-cover blur-lg"
    />
    <div
      v-if="ShowOverlay"
      class="absolute left-4 top-4 z-20 transition-opacity duration-300"
    >
      <div class="flex flex-col gap-3">
        <div
          v-for="(s, index) in CurrentCharacter.Sequences"
          :key="`sequence-${index}-${s.Unlocked}`"
          class="relative h-12 w-12 border rounded-full p-1 transition-all duration-200"
          :class="{
            'border-neutral-600 bg-neutral-800 cursor-pointer hover:scale-110 hover:border-gold-300 hover:bg-gold-800': s.Unlocked === false,
            'border-neutral-600 bg-neutral-800 cursor-not-allowed': s.Unlocked === true,
          }"
        >
          <div
            v-if="s.Unlocked === false"
            class="absolute inset-0 rounded-full bg-black/70 transition-opacity duration-300"
          />
          <div
            v-if="s.Unlocked === true"
            class="absolute inset-0 rounded-full bg-gold-400/20 transition-all duration-300"
          />
          <NuxtImg
            :src="GetSequenceIcon(CurrentCharacter, s)"
            class="w-full h-full object-cover transition-all duration-200"
            :class="{ 'opacity-30': s.Unlocked === false }"
          />
        </div>
      </div>
    </div>
    <UButton
      class="absolute right-2 top-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      variant="soft"
      color="neutral"
      size="sm"
      :title="ShowOverlay ? 'Hide Overlay' : 'Show Overlay'"
      :icon="ShowOverlay ? 'heroicons:eye-slash' : 'heroicons:eye'"
      @click="ShowOverlay = !ShowOverlay"
    />
    <NuxtImg
      :src="`${GetSplashArt(CurrentCharacter)}`"
      class="absolute inset-0 z-10 h-full w-full object-cover transition-opacity duration-500"
      :class="{ 'opacity-0': IsSpineLoaded }"
    />
    <canvas
      ref="CanvasRef"
      class="absolute inset-0 z-10 h-full w-full transition-opacity duration-500"
      :class="{ 'opacity-0': !IsSpineLoaded }"
    />
  </MCard>
</template>
