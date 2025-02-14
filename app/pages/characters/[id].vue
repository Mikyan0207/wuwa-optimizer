<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

const Route = useRoute()
const SelectedTab = ref<number>(0)

const ActiveCharacterStore = useActiveCharacterStore()

if (ActiveCharacterStore.ActiveCharacter === undefined && Route.params.id !== undefined) {
  ActiveCharacterStore.Set(Number.parseInt(Route.params.id))

  if (ActiveCharacterStore.ActiveCharacter === undefined) {
    navigateTo('/characters')
  }
}

const TabItems = [{
  label: 'Scorer',
  icon: 'i-mdi-calculator-variant-outline',
  disabled: false,
}, {
  label: 'Builds',
  icon: 'i-mdi-hexagon-multiple-outline',
  disabled: true,
}, {
  label: 'Information',
  icon: 'i-mdi-card-account-details-outline',
  disabled: true,
}]
</script>

<template>
  <div>
    <div class="mx-auto mb-4 xl:max-w-8xl px-8 text-sm text-gray-300">
      <!-- <UTabs
        v-model="SelectedTab"
        :items="TabItems"
      /> -->
    </div>
    <CharacterScorerTab />
  </div>
</template>
