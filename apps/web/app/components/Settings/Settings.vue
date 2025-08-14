<script setup lang="ts">
const SettingsStore = useSettingsStore()

const GeneralSettings = computed(() => SettingsStore.Settings.General)
const CharactersSettings = computed(() => SettingsStore.Settings.Characters)

function ClearCharactersCache() {
  if (import.meta.client) {
    localStorage.removeItem('Characters')
  }
}

function ClearWeaponsCache() {
  if (import.meta.client) {
    localStorage.removeItem('Weapons')
  }
}

function ClearEchoesCache() {
  if (import.meta.client) {
    localStorage.removeItem('Echoes')
  }
}

function ClearBuildsCache() {
  if (import.meta.client) {
    localStorage.removeItem('Builds')
  }
}

function ClearAllCache() {
  ClearCharactersCache()
  ClearWeaponsCache()
  ClearEchoesCache()
  ClearBuildsCache()
}
</script>

<template>
  <div class="space-y-4">
    <div class="space-y-2">
      <MSectionTitle title="General" color="red" orientation="vertical" class="mb-4" />
      <div class="space-y-2">
        <USwitch
          v-model="GeneralSettings.EnableAnimations"
          unchecked-icon="i-lucide-x"
          checked-icon="i-lucide-check"
          label="Enable Animations"
          description="Enable animations for a more dynamic experience."
        />
      </div>
    </div>
    <USeparator class="w-full" />
    <div class="space-y-2">
      <MSectionTitle title="Characters" color="blue" orientation="vertical" class="mb-4" />
      <div class="space-y-2">
        <USwitch
          v-model="CharactersSettings.EnableAnimatedArt"
          unchecked-icon="i-lucide-x"
          checked-icon="i-lucide-check"
          label="Animated Character Art"
          description="Display animated character splash art for a better experience."
        />
      </div>
    </div>
    <USeparator class="w-full" />
    <div class="space-y-2">
      <MSectionTitle title="Danger Zone" color="red" orientation="vertical" class="mb-4" />
      <div class="flex flex-col w-full space-y-2">
        <UButton
          :ui="{
            base: 'flex items-center justify-center',
          }"
          color="warning"
          variant="outline"
          class="rounded-full"
          label="Clear Characters Cache"
          @click="ClearCharactersCache"
        />
        <UButton
          :ui="{
            base: 'flex items-center justify-center',
          }"
          color="warning"
          variant="outline"
          class="rounded-full"
          label="Clear Weapons Cache"
          @click="ClearWeaponsCache"
        />
        <UButton
          :ui="{
            base: 'flex items-center justify-center',
          }"
          color="warning"
          variant="outline"
          class="rounded-full"
          label="Clear Echoes Cache"
          @click="ClearEchoesCache"
        />
        <UButton
          :ui="{
            base: 'flex items-center justify-center',
          }"
          color="error"
          variant="outline"
          class="rounded-full"
          label="Clear All Cache"
          @click="ClearAllCache"
        />
      </div>
    </div>
  </div>
</template>
