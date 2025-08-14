<script setup lang="ts">
import type Character from '~/Core/Interfaces/Character'
import { GetCharacterIcon } from '~/Core/Utils/CharacterUtils'

interface CharacterCardProps {
  character: Character
}

defineProps<CharacterCardProps>()

const { t } = useI18n()
</script>

<template>
  <MGameCard :item="character" :show-menu="false" :show-stats="false">
    <template #header>
      <MGameCardHeader
        :item="character"
        :get-name="(char: Character) => t(`${char.Id}_name`)"
        :get-level="(char: Character) => char.Level ?? 90"
      />
    </template>

    <template #rarity>
      <MGameCardRarity
        :item="character"
        :get-rarity="(char: Character) => char.Rarity"
      />
    </template>

    <template #image>
      <MGameCardImage
        :item="character"
        :get-image-src="(char: Character) => GetCharacterIcon(char)"
        :get-image-alt="(char: Character) => t(`${char.Id}_name`)"
      />
    </template>
  </MGameCard>
</template>
