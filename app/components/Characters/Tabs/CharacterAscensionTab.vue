<script setup lang="ts">
const { t } = useI18n()
const { ActiveCharacter } = useActiveCharacterStore()
</script>

<template>
  <div v-if="ActiveCharacter" class="grid grid-cols-3 gap-2">
    <UCard
      class="col-span-3"
      :ui="{
        root: 'rounded-none rounded-br-xl',
      }"
    >
      <template #header>
        {{ t(`${ActiveCharacter.Id}_name`) }}
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
