<script setup lang="ts">
import { useCharacter } from '~/composables/characters/UseCharacter'
import { GetCharacterTypeIcon, GetCharacterWeaponTypeIcon, GetSplashArt } from '~/Core/Utils/CharacterUtils'

const { CurrentCharacter, CanUnlockSequence, ToggleSequence } = useCharacter()
</script>

<template>
  <MCard
    class="relative overflow-hidden"
    :border-lines-count="3"
  >
    <div class="absolute inset-0 z-20 from-black/25 via-transparent to-transparent bg-gradient-to-bl" />
    <NuxtImg
      fit="cover"
      src="/images/character-bg-placeholder.webp"
      class="absolute top--25% z-0 h-200% w-200% rotate-180 object-cover blur-lg"
    />
    <!-- <div class="absolute right-2 top-2 z-20 flex items-center gap-2">
      <NuxtImg :src="`${GetCharacterTypeIcon(CurrentCharacter)}`" class="h-8 w-8 object-cover" fit="cover" />
      <NuxtImg :src="`${GetCharacterWeaponTypeIcon(CurrentCharacter)}`" class="h-8 w-8 object-cover" fit="cover" />
    </div> -->
    <div class="absolute left-4 top-4 z-20">
      <div class="flex flex-col gap-3">
        <div
          v-for="(s, index) in CurrentCharacter.Sequences"
          :key="`sequence-${index}-${s.Unlocked}`"
          class="relative h-12 w-12 border rounded-full p-1 transition-all duration-200"
          :class="{
            'border-gold-400 bg-gold-900 cursor-pointer hover:scale-110 hover:border-gold-300 hover:bg-gold-800': CanUnlockSequence(index),
            'border-neutral-600 bg-neutral-800 cursor-not-allowed': !CanUnlockSequence(index),
          }"
          @click="ToggleSequence(index)"
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
            :src="`/images/characters/${CurrentCharacter.Id}/${s.Icon}`"
            class="w-full h-full object-cover transition-all duration-200"
            :class="{ 'opacity-30': s.Unlocked === false }"
          />
        </div>
      </div>
    </div>
    <NuxtImg
      :src="`${GetSplashArt(CurrentCharacter)}`"
      class="absolute inset-0 z-10 h-full w-full object-cover"
    />
  </MCard>
</template>
