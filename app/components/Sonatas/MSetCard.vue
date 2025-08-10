<script setup lang="ts">
import type { CharacterSet } from '~/composables/characters/UseCharacterSets'
import { GetSonataIcon } from '~/Core/Utils/EchoUtils'

interface SetCardProps {
  set: CharacterSet
}

defineProps<SetCardProps>()
</script>

<template>
  <div v-if="set">
    <div class="flex items-center justify-between mb-3">
      <div class="flex items-center gap-3">
        <div class="relative">
          <NuxtImg
            :src="GetSonataIcon(set.sonata)"
            :alt="set.sonata.Name"
            class="w-8 h-8 object-contain"
          />
        </div>
        <div>
          <span class="text-sm text-white">{{ set.sonata.Name }}</span>
          <div class="text-xs text-gray-400">
            {{ set.count }}/{{ set.maxRequired }} pieces
          </div>
        </div>
      </div>
    </div>

    <div class="mb-4">
      <MProgress
        :value="set.count"
        :max="set.maxRequired"
      />
    </div>

    <div class="space-y-2.5">
      <div class="flex items-start gap-3">
        <UBadge
          :color="set.effect1Active ? 'success' : 'neutral'"
          variant="soft"
          size="xs"
          class="font-mono mt-0.5 border border-gray-600/30"
        >
          {{ set.effect1Required }}
        </UBadge>
        <span
          class="text-sm leading-relaxed font-medium text-neutral-300"
        >
          {{ set.sonata.Effect1 }}
        </span>
      </div>

      <div v-if="set.sonata.Effect2" class="flex items-start gap-3">
        <UBadge
          :color="set.effect2Active ? 'success' : 'neutral'"
          variant="soft"
          size="xs"
          class="font-mono mt-0.5 border border-gray-600/30"
        >
          {{ set.effect2Required }}
        </UBadge>
        <span
          class="text-sm leading-relaxed font-medium text-neutral-300"
        >
          {{ set.sonata.Effect2 }}
        </span>
      </div>
    </div>
  </div>
</template>
