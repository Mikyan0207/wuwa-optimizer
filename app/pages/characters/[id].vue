<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

const SelectedTab = ref<string>('0')

const TabItems = [{
  label: 'Scorer',
  icon: 'i-solar-calculator-minimalistic-broken',
  disabled: false,
},
// {
//   label: 'Ascension',
//   icon: 'i-material-symbols:arrow-upload-progress-rounded',
// },
{
  label: 'Builds',
  icon: 'i-solar-settings-minimalistic-broken',
  disabled: false,
}]
</script>

<template>
  <div>
    <Suspense>
      <template #default>
        <div class="mx-auto mb-4 xl:max-w-[100rem] px-8 text-sm text-gray-300">
          <UTabs
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
              <CharacterScorerTab v-if="SelectedTab === '0'" />
              <CharacterBuildsTab v-if="SelectedTab === '1'" />
            </template>
          </UTabs>
        </div>
      </template>
      <template #fallback>
        <div />
      </template>
    </Suspense>
  </div>
</template>
