<script setup lang="ts">
import type Character from '~/Core/Interfaces/Character'
import { GetCharacterIcon } from '~/Core/Utils/CharacterUtils'

defineProps<{
  character: Character
}>()

const { t } = useI18n()
</script>

<template>
  <UCard
    :ui="{
      root: 'rounded-none rounded-br-xl border-0',
      body: 'p-0 sm:p-0',
    }"
  >
    <template #default>
      <BorderLines :count="1" />
      <div class="flex gap-2">
        <NuxtImg width="120" height="120" :src="`${GetCharacterIcon(character)}`" style="color: transparent;" class="border-r border-neutral-800" />
        <div class="my-2 flex flex-col gap-2">
          <p>{{ t(`${character.Id}_name`) }}</p>
          <UBadge color="primary" variant="soft" class="w-min text-nowrap">
            <p>{{ `${t('label_level')} ${character.Level}` }}</p>
          </UBadge>
        </div>
      </div>
    </template>
  </UCard>
</template>
