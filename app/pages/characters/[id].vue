<script setup lang="ts">
import type { TabsItem } from '@nuxt/ui'

definePageMeta({
  layout: 'character-details',
})

const SelectedTab = ref<string>('0')

const Route = useRoute()
const { t } = useI18n()

const CharacterId = ref<number | undefined>(Number.parseInt(Route.params.id as string))

const CharacterName = computed(() => {
  if (CharacterId.value) {
    return t(`${CharacterId.value}_name`)
  }
  return 'Character'
})

onMounted(() => {
  if (!CharacterId.value) {
    navigateTo('/characters')
  }
})

useHead({
  title: computed(() => `${CharacterName.value} - Wuthering Waves Optimizer`),
  meta: [
    {
      name: 'description',
      content: computed(() => `Optimize your ${CharacterName.value} builds with our Wuthering Waves stats calculator. Compare echoes, weapons and sequences to maximize your damage.`),
    },
    {
      name: 'keywords',
      content: computed(() => `${CharacterName.value}, WuWa builds, Wuthering Waves, character optimization, echo calculator`),
    },
    {
      property: 'og:title',
      content: computed(() => `${CharacterName.value} Builds - Wuthering Waves Optimizer`),
    },
    {
      property: 'og:description',
      content: computed(() => `Optimize your ${CharacterName.value} builds with our Wuthering Waves stats calculator.`),
    },
    {
      property: 'og:type',
      content: 'website',
    },
  ],
})

const TabItems = [{
  label: 'Scorer',
  icon: 'i-solar-calculator-minimalistic-broken',
  disabled: false,
  slot: 'scorer' as const,
}, {
  label: 'Builds',
  icon: 'i-solar-settings-minimalistic-broken',
  disabled: false,
  slot: 'builds' as const,
}] as TabsItem[]
</script>

<template>
  <div class="mx-auto mb-4 xl:max-w-[100rem] px-8 text-sm text-gray-300">
    <UTabs
      v-model="SelectedTab"
      :unmount-on-hide="false"
      :items="TabItems"
      color="neutral"
      class="max-w-7xl xl:max-w-[100rem] mx-auto"
      :default-value="0"
      :ui="{
        list: 'rounded-none border-neutral-600',
        indicator: 'rounded-none bg-neutral-300',
      }"
    >
      <template #scorer>
        <CharacterScorerTab />
      </template>
      <template #builds>
        <CharacterBuildsTab />
      </template>
    </UTabs>
  </div>
</template>
