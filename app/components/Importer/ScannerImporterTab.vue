<script setup lang="ts">
import type { BaseCharacter } from '~/Core/Interfaces/Character'
import type Character from '~/Core/Interfaces/Character'
import type Echo from '~/Core/Interfaces/Echo'
import type Weapon from '~/Core/Interfaces/Weapon'
import type { BaseWeapon } from '~/Core/Interfaces/Weapon'
import { useAnalytics } from '~/composables/core/UseAnalytics'
import { useScanner } from '~/composables/scanner/UseScanner'
import { ScannerStatus as ScannerStatusType } from '~/Core/Scanner/ScannerTypes'
import { consola, LogLevels } from 'consola'

const { TrackEvent } = useAnalytics()

const Logger = consola.create({
  level: process.env.NODE_ENV === 'production' ? LogLevels.warn : LogLevels.info,
})

const EchoesStore = useEchoesStore()
const WeaponsStore = useWeaponsStore()
const BuildsStore = useBuildsStore()

const SelectedFile = ref<File | undefined>(undefined)
const IsScanning = ref<boolean>(false)

const ImportedCharacter = ref<BaseCharacter | undefined>(undefined)
const ImportedWeapon = ref<BaseWeapon | undefined>(undefined)
const ImportedEchoes = ref<Echo[]>([])

const Scanner = await useScanner()

onMounted(async () => {
  await Scanner.Initialize()
})

onUnmounted(() => {
  Scanner.Cleanup()
})

watch(() => Scanner.State.CurrentStatus.value, (newStatus) => {
  if (newStatus === ScannerStatusType.DONE) {
    IsScanning.value = false
  }
  else if (newStatus === ScannerStatusType.LOADING) {
    IsScanning.value = true
  }
})

watch(() => Scanner.State.CurrentError.value, (error) => {
  if (error) {
    IsScanning.value = false
  }
})

async function OnFileUploaded() {
  if (SelectedFile.value === undefined) {
    return
  }

  IsScanning.value = true

  ImportedCharacter.value = undefined
  ImportedWeapon.value = undefined
  ImportedEchoes.value = []

  try {
    await Scanner.LoadAsync(SelectedFile.value)
    const result = await Scanner.ScanAll()

    ImportedCharacter.value = result.character
    ImportedEchoes.value = result.echoes || []
    ImportedWeapon.value = result.weapon

    TrackEvent('scanner_import_success', {
      character: result.character?.Id,
      weapon: result.weapon?.GameId,
      echoes: result.echoes?.length,
    })
  }
  catch (error) {
    Logger.error(error)
    TrackEvent('scanner_import_error', { error })
  }
  finally {
    IsScanning.value = false
  }
}

async function OnConfirmClicked() {
  if (ImportedCharacter.value === undefined) {
    return
  }

  ImportedEchoes.value.forEach((echo) => {
    EchoesStore.AddOrUpdate(echo, ImportedCharacter.value!.Id)
  })

  BuildsStore.CreateBuild(
    'Imported Build',
    ImportedCharacter.value,
    ImportedWeapon.value ? WeaponsStore.CreateFromGameId(ImportedWeapon.value.GameId) : undefined,
    ImportedEchoes.value,
  )
}
</script>

<template>
  <div class="mx-auto my-8 max-w-7xl text-gray-300">
    <div class="flex flex-col gap-8">
      <!-- File Input Section -->
      <UFileUpload
        v-model="SelectedFile"
        size="xl"
        accept="image/*"
        variant="area"
        class="w-96 min-h-48 mx-auto"
        label="Drop your image here"
        description="JPEG, PNG, WEBP"
        @change="OnFileUploaded"
      />

      <!-- Progress Section -->
      <div class="w-full">
        <!-- Progress Bar -->
        <UProgress
          v-model="Scanner.State.Progress.value"
          :max="100"
          class="w-full mb-4"
        />
      </div>

      <!-- Results Section -->
      <div v-if="ImportedCharacter" class="w-full">
        <h3 class="text-lg font-medium mb-4">
          Scan Results
        </h3>

        <UAlert
          class="mb-6"
          color="warning" variant="subtle"
          description="⚠️ If some of the information is incorrect or missing, you can manually edit it directly from the character's profile. The imported data will be saved once you press the confirm button."
        />

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <MCharacterCard
            v-if="ImportedCharacter"
            :character="ImportedCharacter as Character"
          />
          <MWeaponCard
            v-if="ImportedWeapon"
            :weapon="ImportedWeapon as Weapon"
            :show-menu="false"
          />
        </div>

        <div v-if="ImportedEchoes.length > 0" class="mb-6">
          <h4 class="text-md font-medium mb-3">
            Echoes
          </h4>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            <MEchoCard
              v-for="(echo, idx) in ImportedEchoes"
              :key="echo.Id"
              :echo="echo"
              :echo-slot="idx"
              :show-score="false"
              :show-menu="false"
            />
          </div>
        </div>

        <!-- Confirm Button -->
        <div class="flex justify-center">
          <UButton
            color="primary"
            size="lg"
            icon="i-material-symbols:arrow-right-alt-rounded"
            @click="() => {
              OnConfirmClicked()
              navigateTo(`/characters/${ImportedCharacter!.Id}`)
            }"
          >
            Go to Character Profile
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>
