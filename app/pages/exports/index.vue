<script setup lang="ts">
import FileSaver from 'file-saver'

const CharactersStore = useCharactersStore()
const WeaponsStore = useWeaponsStore()
const EchoesStore = useEchoesStore()

function OnExportClick() {
  if (!CharactersStore.Characters) {
    return
  }

  const blob = new Blob([
    JSON.stringify(CharactersStore.Characters),
    JSON.stringify(WeaponsStore.Weapons),
    JSON.stringify(EchoesStore.Echoes),
  ], { type: 'text/plain;charset=utf-8' })
  FileSaver.saveAs(blob, 'Export.json')
}
</script>

<template>
  <div class="mx-auto mb-8 max-w-2xl text-gray-300">
    <UButton @click.prevent="OnExportClick">
      Export
    </UButton>
  </div>
</template>
