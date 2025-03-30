<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

const Route = useRoute()
const SelectedTab = ref<string>('0')

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
  label: 'Ascension',
  icon: 'i-material-symbols:arrow-upload-progress-rounded',
}, {
  label: 'Builds',
  icon: 'i-mdi-hexagon-multiple-outline',
  disabled: true,
}]
</script>

<template>
  <div class="mx-auto mb-4 xl:max-w-[100rem] px-8 text-sm text-gray-300">
    <!-- <UTabs
        v-model="SelectedTab"
        :items="TabItems"
        color="neutral"
        class="max-w-7xl xl:max-w-[100rem] mx-auto"
        :default-value="0"
        :ui="{
          list: 'rounded-none border-neutral-600',
          indicator: 'rounded-none bg-neutral-300',
        }"
      >
        <template #content>
          <CharacterAscensionTab v-if="SelectedTab === '1'" />
        </template>
      </UTabs> -->
    <CharacterScorerTab />
  </div>
</template>
