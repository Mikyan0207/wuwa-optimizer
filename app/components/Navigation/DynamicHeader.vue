<script setup lang="ts">
const Route = useRoute()
const { t, setLocale, locale } = useI18n()

const Routes = computed(() => {
  const pathSegments = Route.path.split('/').filter(p => p !== undefined && p.length !== 0)
  const breadcrumbItems = []
  let currentPath = ''

  for (const segment of pathSegments) {
    currentPath += `/${segment}`

    if (Number.isInteger(+segment)) {
      // Means this is a character Id...?
      breadcrumbItems.push({
        label: t(`${segment}_name`),
        to: currentPath,
      })
    }
    else {
      breadcrumbItems.push({
        label: t(`${segment}_navigation_title`),
        to: currentPath,
      })
    }
  }

  return breadcrumbItems
})

// const MenuItems = computed(() => [
//   {
//     label: 'English',
//     id: 'en',
//     icon: 'circle-flags:en',
//     onSelect() {
//       setLocale('en')
//     },
//   },
//   // {
//   //   label: 'Français',
//   //   id: 'fr',
//   //   icon: 'circle-flags:fr',
//   //   onSelect() {
//   //     setLocale('fr')
//   //   },
//   // },
//   // {
//   //   label: '日本語',
//   //   id: 'jp',
//   //   icon: 'circle-flags:jp',
//   //   onSelect() {
//   //     setLocale('jp')
//   //   },
//   // },
// ])

// const SelectedMenuItem = computed(() => MenuItems.value.find(x => x.id === locale.value))

onMounted(() => {
  if (locale.value === undefined) {
    setLocale('en')
  }
})
</script>

<template>
  <div
    class="fixed left-16 top-0 right-0 z-30 h-12  flex items-center justify-between gap-2 bg-neutral-900 p-3 text-sm backdrop-blur-md"
  >
    <UBreadcrumb :items="Routes" />
    <div class="flex items-center">
      <UButton href="https://github.com/Mikyan0207/wuwa-optimizer/issues" target="_blank" icon="mdi:github" size="xl" variant="link" color="neutral" />
      <!-- <UDropdownMenu
        :items="MenuItems"
        arrow
        :modal="false"
        :content="{
          sideOffset: 8,
        }"
      >
        <UButton :icon="`${SelectedMenuItem ? SelectedMenuItem.icon : 'mdi:translate'}`" color="neutral" variant="ghost" size="md" />
      </UDropdownMenu> -->
    </div>
  </div>
</template>
