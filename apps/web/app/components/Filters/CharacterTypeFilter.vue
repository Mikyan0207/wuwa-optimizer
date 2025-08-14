<script setup lang="ts">
import { CharacterType } from '~/Core/Enums/CharacterType'

interface ICharacterTypeOptions {
  Type: CharacterType
  Name: string
  Icon: string
}

const emits = defineEmits<{
  selected: [type: CharacterType]
}>()

const CharacterTypeOptions: ICharacterTypeOptions[] = [
  {
    Type: CharacterType.ALL,
    Name: 'All',
    Icon: '',
  },
  {
    Type: CharacterType.SPECTRO,
    Name: 'Spectro',
    Icon: '/images/icons/Spectro.webp',
  },
  {
    Type: CharacterType.ELECTRO,
    Name: 'Electro',
    Icon: '/images/icons/Electro.webp',
  },
  {
    Type: CharacterType.AERO,
    Name: 'Aero',
    Icon: '/images/icons/Aero.webp',
  },
  {
    Type: CharacterType.FUSION,
    Name: 'Fusion',
    Icon: '/images/icons/Fusion.webp',
  },
  {
    Type: CharacterType.GLACIO,
    Name: 'Glacio',
    Icon: '/images/icons/Glacio.webp',
  },
  {
    Type: CharacterType.HAVOC,
    Name: 'Havoc',
    Icon: '/images/icons/Havoc.webp',
  },
]

const SelectedCharacterType = ref<ICharacterTypeOptions>(CharacterTypeOptions[0]!)

function OnCharacterTypeSelected(type: ICharacterTypeOptions) {
  SelectedCharacterType.value = type
  emits('selected', SelectedCharacterType.value.Type)
}

onMounted(() => {
  emits('selected', SelectedCharacterType.value.Type)
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
        v-for="(character, idx) in CharacterTypeOptions" :key="idx"
        class="flex flex-row cursor-pointer items-center gap-2 px-4 py-1 transition-colors duration-100" :class="{
          'bg-(--ui-border)': character.Type === SelectedCharacterType.Type,
          'hover:bg-(--ui-border)': character.Type !== SelectedCharacterType.Type,
        }" @click.prevent="OnCharacterTypeSelected(character)"
      >
        <NuxtImg v-if="character.Type !== CharacterType.ALL" :src="character.Icon" class="h-6 w-6 object-cover" />
        <span v-else :title="character.Name" class="text-truncate text-nowrap">{{ character.Name }}</span>
      </div>
    </div>
  </UCard>
</template>
