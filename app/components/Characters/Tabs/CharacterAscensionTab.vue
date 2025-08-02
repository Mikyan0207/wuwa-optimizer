<script setup lang="ts">
const { t } = useI18n()
const { CurrentCharacter } = useCharacterContext()
</script>

<template>
  <div v-if="CurrentCharacter" class="grid grid-cols-3 gap-2">
    <UCard
      class="col-span-3"
      :ui="{
        root: 'rounded-none rounded-br-xl',
      }"
    >
      <template #header>
        {{ t(`${CurrentCharacter.Id}_name`) }}
      </template>
    </UCard>
    <UCard
      title="Character"
      :ui="{
        root: 'rounded-none rounded-br-xl',
      }"
    >
      <template #header>
        Character
      </template>
    </UCard>
    <UCard
      title="Weapon"
      :ui="{
        root: 'rounded-none rounded-br-xl',
      }"
    >
      <template #header>
        Weapon
      </template>
    </UCard>
    <UCard
      title="Skills"
      :ui="{
        root: 'rounded-none rounded-br-xl',
      }"
    >
      <template #header>
        Skills
      </template>
    </UCard>
  </div>
</template>
