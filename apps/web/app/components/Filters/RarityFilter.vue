<script setup lang="ts">
import { Rarity } from '~/Core/Enums/Rarity'
import { GetRarityAsNumber } from '~/Core/Utils/RarityUtils'

const emits = defineEmits<{
  selected: [type: Rarity]
}>()

const RarityOptions: Rarity[] = [
  Rarity.ALL,
  Rarity.ONE_STAR,
  Rarity.TWO_STARS,
  Rarity.THREE_STARS,
  Rarity.FOUR_STARS,
  Rarity.FIVE_STARS,
]

const SelectedRarity = ref<Rarity>(RarityOptions[0]!)

function OnRaritySelected(rarity: Rarity) {
  SelectedRarity.value = rarity
  emits('selected', SelectedRarity.value)
}

onMounted(() => {
  emits('selected', SelectedRarity.value)
})
</script>

<template>
  <UCard
    :ui="{
      root: 'rounded-xs group',
      body: 'p-0 sm:p-0',
    }"
  >
    <div class="flex divide-x divide-(--ui-border)">
      <div
        v-for="(rarity, idx) in RarityOptions" :key="idx"
        class="flex flex-row cursor-pointer items-center gap-2 px-4 py-1 transition-colors duration-100" :class="{
          'bg-(--ui-border)': rarity === SelectedRarity,
          'hover:bg-(--ui-border)': rarity !== SelectedRarity,
        }"
        @click.prevent="OnRaritySelected(rarity)"
      >
        <span v-if="rarity !== Rarity.ALL" class="text-truncate text-nowrap">{{ GetRarityAsNumber(rarity as Rarity)
        }}✧</span>
        <span v-else class="text-truncate text-nowrap">{{ rarity[0] + rarity.slice(1).toLowerCase() }}</span>
      </div>
    </div>
  </UCard>
</template>
