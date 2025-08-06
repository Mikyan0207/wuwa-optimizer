<script setup lang="ts">
useHead({
  title: 'Echoes - Wuthering Waves Optimizer',
  meta: [
    {
      name: 'description',
      content: 'Browse all Wuthering Waves echoes and optimize your equipment. Find the best echoes for each character and maximize your damage with our echo calculator.',
    },
    {
      name: 'keywords',
      content: 'WuWa echoes, Wuthering Waves echoes, echo guide, echo calculator, echo optimization, WuWa equipment, sonata guide',
    },
    {
      property: 'og:title',
      content: 'Echoes - Wuthering Waves Optimizer',
    },
    {
      property: 'og:description',
      content: 'Browse all Wuthering Waves echoes and optimize your equipment.',
    },
    {
      property: 'og:type',
      content: 'website',
    },
  ],
})

const EchoesStore = useEchoesStore()
</script>

<template>
  <div>
    <div class="mx-auto xl:max-w-7xl px-8 xl:px-0 flex flex-wrap items-start justify-center gap-2">
      <EchoIcon
        v-for="e in EchoesStore.Echoes"
        :key="e.Id"
        :echo="e"
      />
    </div>
  </div>
</template>
