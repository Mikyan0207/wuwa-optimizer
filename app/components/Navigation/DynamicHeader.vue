<script setup lang="ts">
const Route = useRoute()
const { t, setLocale, locale } = useI18n()

const Routes = computed(() => Route.path.split('/').filter(p => p !== undefined && p.length !== 0).map((p) => {
  if (Number.isInteger(+p)) {
    // Means this is a character Id...?
    return {
      label: t(`${p}_name`),
    }
  }

  return {
    label: t(`${p}_navigation_title`),
  }
}))

const MenuItems = computed(() => [
  {
    label: 'English',
    id: 'en',
    icon: 'circle-flags:en',
    onSelect() {
      setLocale('en')
    },
  },
  {
    label: 'Français',
    id: 'fr',
    icon: 'circle-flags:fr',
    onSelect() {
      setLocale('fr')
    },
  },
  {
    label: '日本語',
    id: 'jp',
    icon: 'circle-flags:jp',
    onSelect() {
      setLocale('jp')
    },
  },
])

const SelectedMenuItem = computed(() => MenuItems.value.find(x => x.id === locale.value))
</script>

<template>
  <!-- Header -->
  <div
    class="fixed left-16 top-0 right-0 z-30 h-12  flex items-center justify-between gap-2 bg-neutral-900 p-3 text-sm backdrop-blur-md"
  >
    <UBreadcrumb :items="Routes" />
    <UDropdownMenu
      :items="MenuItems"
      arrow
      :modal="false"
      :content="{
        sideOffset: 8,
      }"
    >
      <UButton :icon="`${SelectedMenuItem ? SelectedMenuItem.icon : 'mdi:translate'}`" color="neutral" variant="ghost" size="md" />
    </UDropdownMenu>
  </div>
</template>
