<script setup lang="ts">
import type Character from '~/Core/Interfaces/Character'
import type Echo from '~/Core/Interfaces/Echo'
import type Weapon from '~/Core/Interfaces/Weapon'
import ImportedEchoCard from './Cards/ImportedEchoCard.vue'

const Step = ref<number>(0)
const Scanner = await useCharacterScanner()

const EchoesStore = useEchoesStore()
const WeaponsStore = useWeaponsStore()

const FileInput = ref<HTMLInputElement | null>(null)
const SelectedFile = ref<File | undefined>(undefined)
const PreviewUrl = ref<string | undefined>()
const LockImportButton = ref<boolean>(false)
const Progress = ref<ScannerStatus>(ScannerStatus.IDLE)
const ScannerResult = ref<ScannerResultStatus>(ScannerResultStatus.SUCCESS)

const ImportedCharacter = ref<Character | undefined>(undefined)
const ImportedWeapon = ref<Weapon | undefined>(undefined)
const ImportedEchoes = ref<Echo[]>([])

async function OnImportClicked() {
  if (SelectedFile.value === undefined) {
    return
  }

  ScannerResult.value = ScannerResultStatus.SUCCESS

  await Scanner.LoadAsync(SelectedFile.value)
  const {
    Status,
    Character,
    Weapon,
    Echoes,
  } = await Scanner.ScanAsync((status) => {
    Progress.value = status

    if (Progress.value === ScannerStatus.DONE || Progress.value !== ScannerStatus.IDLE) {
      LockImportButton.value = true
    }
  })

  if (Status !== ScannerResultStatus.SUCCESS) {
    LockImportButton.value = true
  }

  ScannerResult.value = Status
  ImportedCharacter.value = Character
  ImportedWeapon.value = Weapon
  ImportedEchoes.value = Echoes || []
  Step.value = 3
}

function GetFileObject(event: Event) {
  const input = event.target as HTMLInputElement

  if (input?.files?.[0]) {
    SetFile(input.files[0])
  }
}

function SetFile(file: File) {
  SelectedFile.value = file
  PreviewUrl.value = URL.createObjectURL(file)

  // Selected file changed, enable import again.
  LockImportButton.value = false
  Progress.value = ScannerStatus.IDLE
  Step.value = 2
}

function TriggerFileInput() {
  FileInput.value?.click()
}

function HandleDrop(event: DragEvent) {
  const file = event.dataTransfer?.files?.[0]
  if (file) {
    SetFile(file)
  }
}

function HandlePaste(event: ClipboardEvent) {
  const item = Array.from(event.clipboardData?.items || []).find(i => i.type.startsWith('image'))
  if (item) {
    const file = item.getAsFile()

    if (file) {
      SetFile(file)
    }
  }
}

function OnConfirmClicked() {
  if (ImportedCharacter.value === undefined || ImportedWeapon.value === undefined || ImportedEchoes.value === undefined) {
    return
  }

  ImportedEchoes.value.forEach((echo) => {
    EchoesStore.AddOrUpdate(echo, ImportedCharacter.value!.Id)
  })

  const weapon = WeaponsStore.CreateFromGameId(ImportedWeapon.value!.GameId)

  const BuildsStore = useBuildsStore()
  const existingDefaultBuild = BuildsStore.GetDefaultBuild(ImportedCharacter.value!.Id)

  if (existingDefaultBuild
    && (!existingDefaultBuild.WeaponId || existingDefaultBuild.WeaponId === undefined)
    && (!existingDefaultBuild.Echoes || existingDefaultBuild.Echoes.length === 0
      || existingDefaultBuild.Echoes.every(echo => echo.GameId === -1))) {
    BuildsStore.DeleteBuild(existingDefaultBuild.Id)
  }

  const existingBuilds = BuildsStore.GetBuildsByCharacter(ImportedCharacter.value!.Id)
  const equippedEchoes = ImportedEchoes.value.map(echo => echo.GameId)

  const existingActiveBuild = existingBuilds.find(build =>
    build.IsDefault
    && build.WeaponId === weapon?.Id
    && build.Echoes.length === equippedEchoes.length
    && build.Echoes.every(echo => equippedEchoes.includes(echo.GameId)),
  )

  if (existingActiveBuild) {
    BuildsStore.DeleteBuild(existingActiveBuild.Id)
  }

  const importedBuild = BuildsStore.CreateBuild(
    'Imported Build',
    ImportedCharacter.value!.Id,
    weapon?.Id,
    ImportedEchoes.value,
  )

  if (importedBuild) {
    BuildsStore.SetDefaultBuild(importedBuild.Id)
  }
}
</script>

<template>
  <div class="mx-auto my-8 max-w-6xl text-gray-300" @paste="HandlePaste">
    <!-- <div class="flex items-center gap-2 mx-auto">
      <canvas id="srcCanvas" width="186" height="186" />
      <canvas id="templCanvas" width="186" height="186" />
    </div> -->
    <div class="flex flex-col gap-2">
      <!-- Step 1 -->
      <div v-if="Step >= 0" v-motion-slide-left :delay="100" class="w-full flex gap-2">
        <div class="flex flex-col gap-2">
          <UBadge color="neutral" variant="solid" class="rounded-full">
            1
          </UBadge>
          <USeparator class="h-full" orientation="vertical" size="xs" />
        </div>
        <div class="mt-0.5 w-full">
          <p>Select an Image</p>
          <div class="my-8 space-y-2 text-gray-400">
            <div
              class="flex flex-col items-center justify-center w-full h-48 border border-dashed border-gold-500 rounded cursor-pointer bg-neutral-800/50 hover:bg-neutral-800/85 duration-75 transition"
              @dragover.prevent
              @dragenter.prevent
              @drop.prevent="HandleDrop"
              @click="TriggerFileInput"
            >
              <div v-if="PreviewUrl" v-motion-pop>
                <img :src="PreviewUrl" alt="Preview" class="object-contain p-4 mx-auto w-auto h-40">
              </div>
              <p class="text-gray-500">
                Drop your image, paste it, or click to select
              </p>
              <input
                ref="FileInput"
                type="file" accept="image/*"
                class="hidden"
                @change="GetFileObject"
              >
            </div>

            <p class="text-sm">
              Please select an Image generated by the official Wuthering Waves Bot.
            </p>
          </div>
        </div>
      </div>
      <!-- Step 2 -->
      <div v-if="Step >= 1" v-motion-slide-left class="w-full flex gap-2">
        <div class="flex flex-col gap-2">
          <UBadge color="neutral" variant="solid" class="rounded-full">
            2
          </UBadge>
          <USeparator class="h-full" orientation="vertical" size="xs" />
        </div>
        <div class="mt-0.5 w-full">
          <p>Import the data</p>
          <div class="mt-8 space-y-2">
            <UButton
              color="neutral" variant="outline"
              label="Import"
              :disabled="LockImportButton"
              @click.prevent="OnImportClicked()"
            />
            <UProgress
              v-model="Progress"
              class="w-full mt-4"
              status
              animation="carousel"
              :max="['Waiting...', 'Character...', 'Weapon...', 'Echoes...', 'Echo 1/5', 'Echo 2/5', 'Echo 3/5', 'Echo 4/5', 'Echo 5/5', 'Done!']"
            >
              <template #step-1="{ step }">
                <div class="flex items-center w-full justify-end gap-2">
                  <UIcon name="solar:record-circle-broken" class="text-primary-500 animate-spin" size="24" />
                  <span>{{ step }}</span>
                </div>
              </template>
              <template #step-2="{ step }">
                <div class="flex items-center w-full justify-end gap-2">
                  <UIcon name="solar:record-circle-broken" class="text-primary-500 animate-spin" size="24" />
                  <span>{{ step }}</span>
                </div>
              </template>
              <template #step-3="{ step }">
                <div class="flex items-center w-full justify-end gap-2">
                  <UIcon name="solar:record-circle-broken" class="text-primary-500 animate-spin" size="24" />
                  <span>{{ step }}</span>
                </div>
              </template>
              <template #step-4="{ step }">
                <div class="flex items-center w-full justify-end gap-2">
                  <UIcon name="solar:record-circle-broken" class="text-primary-500 animate-spin" size="24" />
                  <span>{{ step }}</span>
                </div>
              </template>
              <template #step-5="{ step }">
                <div class="flex items-center w-full justify-end gap-2">
                  <UIcon name="solar:record-circle-broken" class="text-primary-500 animate-spin" size="24" />
                  <span>{{ step }}</span>
                </div>
              </template>
              <template #step-6="{ step }">
                <div class="flex items-center w-full justify-end gap-2">
                  <UIcon name="solar:record-circle-broken" class="text-primary-500 animate-spin" size="24" />
                  <span>{{ step }}</span>
                </div>
              </template>
              <template #step-7="{ step }">
                <div class="flex items-center w-full justify-end gap-2">
                  <UIcon name="solar:record-circle-broken" class="text-primary-500 animate-spin" size="24" />
                  <span>{{ step }}</span>
                </div>
              </template>
              <template #step-8="{ step }">
                <div class="flex items-center w-full justify-end gap-2">
                  <UIcon name="solar:record-circle-broken" class="text-primary-500 animate-spin" size="24" />
                  <span>{{ step }}</span>
                </div>
              </template>
              <template #step-9>
                <div class="flex items-center w-full justify-end gap-2">
                  <UIcon name="solar:check-circle-broken" class="text-primary-500" size="24" />
                </div>
              </template>
            </UProgress>
            <UAlert v-if="ScannerResult === ScannerResultStatus.INVALID_CHARACTER" color="error" variant="subtle">
              <template #title>
                ❌ Character could not be identified.
              </template>
              <template #description>
                <div class="mt-4">
                  This may happen if:
                  <ul>
                    <li>・The characters name is partially cropped or unreadable</li>
                    <li>・The image resolution is too low or blurry</li>
                    <li>・An unsupported language or font is being used</li>
                    <li>・The image is not from Wuthering Waves or does not show a valid character profile</li>
                    <li>・The character is not yet available in the game and is not recognized by the optimizer</li>
                  </ul>
                </div>
                <p class="mt-4 font-semibold">
                  Please try again with a valid screenshot.
                </p>
              </template>
            </UAlert>
          </div>
        </div>
      </div>

      <!-- Step 3 -->
      <div v-if="Step >= 3 && ScannerResult === ScannerResultStatus.SUCCESS" v-motion-slide-left class="w-full flex gap-2">
        <div class="flex flex-col gap-2">
          <UBadge color="neutral" variant="solid" class="rounded-full">
            3
          </UBadge>
          <USeparator class="h-full" orientation="vertical" size="xs" />
        </div>
        <div class="mt-0.5 w-full">
          <p>Verify the imported data</p>
          <UAlert
            class="my-8"
            color="warning" variant="subtle"
            description="⚠️ If some of the information is incorrect or missing, you can manually edit it directly from the character's profile. The imported data will be saved once you press the confirm button."
          />

          <div class="my-2 w-full grid grid-cols-3 gap-1">
            <ImportedCharacterCard
              v-if="ImportedCharacter"
              :character="ImportedCharacter"
              class="col-span-1"
            />
            <ImportedWeaponCard
              v-if="ImportedWeapon"
              :weapon="ImportedWeapon"
              class="col-span-1"
            />
          </div>
          <div class="w-full mb-8 grid grid-cols-3 gap-2">
            <ImportedEchoCard v-for="echo in ImportedEchoes" :key="echo.Id" :echo="echo" />
          </div>
        </div>
      </div>

      <!-- Step 4 -->
      <div v-if="Step >= 3 && ScannerResult === ScannerResultStatus.SUCCESS" v-motion-slide-left class="w-full flex gap-2">
        <div class="flex flex-col gap-2">
          <UBadge color="neutral" variant="solid" class="rounded-full">
            4
          </UBadge>
          <USeparator class="h-full" orientation="vertical" size="xs" />
        </div>
        <div class="mt-0.5 w-full">
          <p>Confirm</p>
          <div class="my-8 space-y-4 w-full">
            <UButtonGroup>
              <UButton
                color="neutral" variant="subtle" icon="i-material-symbols:arrow-right-alt-rounded" @click.prevent="() => {
                  OnConfirmClicked()
                  navigateTo(`/characters/${ImportedCharacter!.Id}`)
                }"
              >
                Character Profile
              </UButton>
            </UButtonGroup>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
