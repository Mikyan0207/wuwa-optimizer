<script setup lang="ts">
import type Echo from '~/Core/Interfaces/Echo'
import { useCharacterSets } from '~/composables/characters/UseCharacterSets'

interface CharacterSetsCardProps {
  echoes: Echo[]
}

const props = defineProps<CharacterSetsCardProps>()

const { ActiveSets } = useCharacterSets(props.echoes)
</script>

<template>
  <MCard
    :border-lines-count="3"
  >
    <div>
      <div v-if="ActiveSets.length === 0" class="text-gray-400 text-center py-4">
        No active sets
      </div>

      <div v-else class="space-y-3">
        <div
          v-for="set in ActiveSets"
          :key="set.name"
        >
          <MSetCard :set="set" class="bg-neutral-800/20 backdrop-blur-sm rounded-sm p-3 border border-neutral-700" />
        </div>
      </div>
    </div>
  </MCard>
</template>
