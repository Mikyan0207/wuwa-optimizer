<script setup lang="ts">
import { GetCharacterTypeIcon, GetCharacterWeaponTypeIcon, GetSplashArt } from '~/Core/Utils/CharacterUtils'

const { CurrentCharacter } = useCharacterContext()

function ToggleSequence(sequenceIndex: number) {
  if (!CurrentCharacter.value) {
    return
  }

  const sequence = CurrentCharacter.value.Sequences[sequenceIndex]
  if (!sequence) {
    return
  }

  if (CanUnlockSequence(sequenceIndex)) {
    sequence.Unlocked = !sequence.Unlocked

    if (!sequence.Unlocked) {
      for (let i = sequenceIndex + 1; i < CurrentCharacter.value.Sequences.length; i++) {
        const nextSequence = CurrentCharacter.value.Sequences[i]
        if (nextSequence) {
          nextSequence.Unlocked = false
        }
      }
    }

    CurrentCharacter.value = { ...CurrentCharacter.value }
  }
}

function CanUnlockSequence(sequenceIndex: number): boolean {
  if (!CurrentCharacter.value)
    return false

  const sequence = CurrentCharacter.value.Sequences[sequenceIndex]
  if (!sequence)
    return false

  if (sequence.Unlocked)
    return true

  if (sequenceIndex === 0)
    return true

  const previousSequence = CurrentCharacter.value.Sequences[sequenceIndex - 1]
  return previousSequence?.Unlocked === true
}
</script>

<template>
  <!-- Character Art -->
  <UCard
    class="relative overflow-hidden"
    :ui="{
      root: 'rounded-none rounded-br-xl border-0',
    }"
  >
    <MBorderLines />
    <div class="absolute inset-0 z-20 from-black/25 via-transparent to-transparent bg-gradient-to-bl" />
    <NuxtImg
      fit="cover"
      src="/images/character-bg-placeholder.webp"
      class="absolute top--25% z-0 h-200% w-200% rotate-180 object-cover blur-lg"
    />
    <!-- Weapon Type & Character Type -->
    <div class="absolute right-2 top-2 z-20 flex items-center gap-2">
      <NuxtImg :src="`${GetCharacterTypeIcon(CurrentCharacter)}`" class="h-8 w-8 object-cover" fit="cover" />
      <NuxtImg :src="`${GetCharacterWeaponTypeIcon(CurrentCharacter)}`" class="h-8 w-8 object-cover" fit="cover" />
    </div>
    <!-- Sequences -->
    <div class="absolute left-2 top-2 z-20">
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
      fit="cover"
      quality="90"
    />
  </UCard>
</template>
