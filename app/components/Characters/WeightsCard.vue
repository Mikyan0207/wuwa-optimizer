<script setup lang="ts">
import type { Character } from '~/Core/Models/Character'
import { StatType } from '~/Core/Enums/StatType'
import { STAT_NAMES } from '~/Core/Statistics'

const props = defineProps<{
  character: Character
}>()

const ShowWeightsModal = ref<boolean>(false)

const StatWeights = computed(() => {
  return Object.fromEntries(
    Object.entries(props.character.StatsWeights!).filter(([key]) => key !== StatType.NONE),
  ) as Record<StatType, number>
})
</script>

<template>
  <div>
    <UButton
      color="white"
      variant="solid"
      icon="i-carbon:distribute-horizontal-center"
      :trailing="false"
      @click.prevent="ShowWeightsModal = true"
    >
      Scoring Algorithm
    </UButton>
    <UModal v-model="ShowWeightsModal" :ui="{ container: ' flex min-h-full items-center justify-center text-center', width: 'w-full sm:max-w-lg' }">
      <Card>
        <div class="mb-4 w-full flex items-center justify-between gap-2">
          <div class="h-1px w-full bg-white/14" />
          <p class="text-nowrap">
            Stats Weights
          </p>
          <div class="h-1px w-full bg-white/14" />
        </div>
        <div v-if="character.StatsWeights" class="grid grid-cols-2 gap-2">
          <div v-for="(_, type) in StatWeights" :key="type" class="">
            <div class="flex items-center gap-2">
              <UInput v-model="character.StatsWeights![type]" placeholder="0" size="xs" class="w-12" />
              <p class="text-nowrap text-xs">
                {{ STAT_NAMES[type] }}
              </p>
            </div>
          </div>
        </div>
        <div class="mt-6 flex items-center justify-end gap-2">
          <UButton label="Cancel" color="gray" variant="outline" @click.prevent="ShowWeightsModal = false" />
          <UButton label="Submit" color="primary" variant="solid" @click.prevent="ShowWeightsModal = false" />
        </div>
      </Card>
    </UModal>
  </div>
</template>
