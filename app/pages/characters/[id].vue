<script setup lang="ts">
definePageMeta({
  layout: 'character-details',
})

const SelectedTab = ref<string>('0')

const Route = useRoute()
const { t } = useI18n()

const CharacterId = computed<string | undefined>(() => {
  if (Route.params
    && typeof (Route.params as Record<string, unknown>).id === 'string') {
    return (Route.params as { id: string }).id
  }

  return undefined
})

const CharacterName = computed(() => {
  if (CharacterId.value) {
    return t(`${CharacterId.value}_name`)
  }
  return 'Character'
})

const IsCharacterAvailable = computed(() => {
  return CharacterId.value
    && Number(CharacterId.value) < 2000
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

onMounted(() => {
  if (!CharacterId.value
    || Number(CharacterId.value) >= 2000) {
    navigateTo('/characters')
  }
})

const TabItems = [{
  label: 'Scorer',
  icon: 'i-solar-calculator-minimalistic-broken',
  disabled: false,
}, {
  label: 'Builds',
  icon: 'i-solar-settings-minimalistic-broken',
  disabled: false,
}]
</script>

<template>
  <div v-if="IsCharacterAvailable">
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
