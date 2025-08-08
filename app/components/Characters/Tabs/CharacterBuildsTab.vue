<script setup lang="ts">
import type Build from '~/Core/Interfaces/Build'
import type Echo from '~/Core/Interfaces/Echo'
import { v4 as uuidv4 } from 'uuid'
import VueDraggable from 'vuedraggable'
import { useBuild } from '~/composables/builds/UseBuild'
import { useCharacter } from '~/composables/characters/UseCharacter'

const { CurrentCharacter } = useCharacter()
const { CurrentWeapon } = useBuild()
const BuildsStore = useBuildsStore()
const Toast = useToast()
const { t } = useI18n()

function IsBuildEmpty(build: Build): boolean {
  if (build.WeaponId) {
    return false
  }

  if (build.Echoes && build.Echoes.length > 0) {
    return false
  }

  if (build.Echoes && build.Echoes.length > 0) {
    return false
  }

  return true
}

const Builds = computed(() =>
  BuildsStore.GetBuildsByCharacter(CurrentCharacter.value?.Id || 0)
    .filter(build => !IsBuildEmpty(build) || !build.IsDefault),
)

const AllBuilds = computed(() =>
  BuildsStore.Builds.filter(build =>
    build.CharacterId !== CurrentCharacter.value?.Id
    && (!IsBuildEmpty(build) || !build.IsDefault),
  ),
)

const ShowAllBuilds = ref(false)

const SelectedSonatas = ref<string[]>([])

const AvailableSonatas = computed(() => {
  const sonatas = new Set<string>()

  AllBuilds.value.forEach((build) => {
    if (build.Echoes) {
      build.Echoes.forEach((echo: Echo) => {
        if (echo.Sonata && echo.Sonata.length > 0) {
          const selectedSonata = echo.Sonata.find((s: any) => s.IsSelected) || echo.Sonata[0]
          if (selectedSonata && selectedSonata.Name) {
            sonatas.add(selectedSonata.Name)
          }
        }
      })
    }
  })

  return Array.from(sonatas).map(name => ({ name }))
})

const FilteredAllBuilds = computed(() => {
  if (SelectedSonatas.value.length === 0)
    return AllBuilds.value

  return AllBuilds.value.filter((build) => {
    if (!build.Echoes)
      return false

    const buildSonatas = new Set<string>()
    build.Echoes.forEach((echo: Echo) => {
      if (echo.Sonata && echo.Sonata.length > 0) {
        const selectedSonata = echo.Sonata.find((s: any) => s.IsSelected) || echo.Sonata[0]
        if (selectedSonata && selectedSonata.Name) {
          buildSonatas.add(selectedSonata.Name)
        }
      }
    })

    return SelectedSonatas.value.some(sonata => buildSonatas.has(sonata))
  })
})

const DraggableBuilds = computed({
  get: () => Builds.value,
  set: (newOrder: Build[]) => {
    newOrder.forEach((build, index) => {
      BuildsStore.UpdateBuild(build.Id, {
        Order: index,
      })
    })
  },
})

const SelectedBuild = ref<Build | null>(null)
const IsEditingAnyBuild = ref(false)

function IsCurrentBuild(build: Build): boolean {
  if (!CurrentCharacter.value || !CurrentWeapon.value) {
    return false
  }

  if (build.WeaponId !== CurrentWeapon.value.Id) {
    return false
  }

  return false
}

function LoadBuild(build: Build) {
  BuildsStore.LoadBuild(build.Id)
  SelectedBuild.value = build
}

function DeleteBuild(build: Build) {
  console.warn('Deleting build:', build.Id, build.Name)

  BuildsStore.DeleteBuild(build.Id)

  if (SelectedBuild.value?.Id === build.Id) {
    SelectedBuild.value = null
  }

  Toast.add({
    title: 'Build deleted!',
    description: `"${build.Name}" has been deleted successfully.`,
    color: 'success',
  })
}

function SetDefaultBuild(build: Build) {
  BuildsStore.SetDefaultBuild(build.Id)
}

function EditBuild(build: Build) {
  BuildsStore.UpdateBuild(build.Id, {
    Name: build.Name,
  })

  Toast.add({
    title: 'Build updated!',
    description: `"${build.Name}" has been updated successfully.`,
    color: 'success',
  })
}

function HandleEditingChange(isEditing: boolean) {
  IsEditingAnyBuild.value = isEditing
}

function ToggleSonataFilter(sonataName: string) {
  const index = SelectedSonatas.value.indexOf(sonataName)
  if (index > -1) {
    SelectedSonatas.value.splice(index, 1)
  }
  else {
    SelectedSonatas.value.push(sonataName)
  }
}

function CopyBuildToCurrentCharacter(build: Build) {
  const newBuild = BuildsStore.CreateBuild(
    `${build.Name} (copied from ${t(`${build.CharacterId}_name`)})`,
    CurrentCharacter.value?.Id || 0,
  )

  if (!newBuild) {
    Toast.add({
      title: 'Build not copied!',
      description: `"${build.Name}" already exists in ${t(`${CurrentCharacter.value?.Id}_name`)}.`,
      color: 'error',
    })

    return
  }

  BuildsStore.UpdateBuild(newBuild.Id, {
    WeaponId: build.WeaponId,
    Echoes: build.Echoes.map(echo => ({
      ...echo,
      Id: uuidv4(),
      EquipedSlot: echo.EquipedSlot,
      EquipedBy: CurrentCharacter.value?.Id || 0,
      BuildId: newBuild.Id,
    })),
    Score: build.Score,
    Note: build.Note,
  })

  Toast.add({
    title: 'Build copied!',
    description: `"${build.Name}" has been copied to ${t(`${CurrentCharacter.value?.Id}_name`)}.`,
    color: 'success',
  })
}

function navigateToCharacter(characterId: number) {
  navigateTo(`/characters/${characterId}`)
}
</script>

<template>
  <div class="mb-14 xl:mb-4">
    <div class="mb-8">
      <h3 class="text-lg font-medium text-gray-300 mb-4">
        Builds for {{ t(`${CurrentCharacter?.Id}_name`) }}
      </h3>

      <div v-if="Builds.length === 0" class="text-center py-12">
        <UIcon name="i-solar-folder-broken" class="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h3 class="text-lg font-medium text-gray-300 mb-2">
          No builds yet
        </h3>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <VueDraggable
          v-model="DraggableBuilds"
          :animation="200"
          ghost-class="opacity-65"
          chosen-class="scale-102"
          drag-class="scale-106"
          class="contents"
          item-key="Id"
          :disabled="IsEditingAnyBuild"
        >
          <template #item="{ element: build }">
            <BuildCard
              :build="build"
              :is-selected="IsCurrentBuild(build)"
              @load="LoadBuild"
              @edit="EditBuild"
              @delete="DeleteBuild"
              @set-default="SetDefaultBuild"
              @editing-change="HandleEditingChange"
            />
          </template>
        </VueDraggable>
      </div>
    </div>

    <div v-if="AllBuilds.length > 0" class="mb-8">
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-lg font-medium text-gray-300">
          All my builds
        </h3>
        <UButton
          :variant="ShowAllBuilds ? 'solid' : 'ghost'"
          size="sm"
          :icon="ShowAllBuilds ? 'solar:eye-closed-broken' : 'solar:eye-broken'"
          @click="ShowAllBuilds = !ShowAllBuilds"
        >
          {{ ShowAllBuilds ? 'Hide' : 'Show' }}
        </UButton>
      </div>

      <div v-if="ShowAllBuilds" class="mb-4">
        <div class="px-4 py-3 border border-neutral-800 bg-neutral-900 rounded-br-xs">
          <div class="flex flex-wrap items-center gap-1.5">
            <div
              v-for="sonata in AvailableSonatas"
              :key="sonata.name"
              class="group cursor-pointer bg-black/50 border border-white/10 rounded-md px-2 py-1.5 transition-all duration-200 hover:bg-white/10 hover:border-white/20 flex items-center gap-1.5"
              :class="{
                'bg-primary-500/20 border-primary-500/50 text-primary-300': SelectedSonatas.includes(sonata.name),
                'text-white/80 hover:text-white': !SelectedSonatas.includes(sonata.name),
              }"
              @click="ToggleSonataFilter(sonata.name)"
            >
              <span class="text-xs font-medium whitespace-nowrap">{{ sonata.name }}</span>
            </div>
          </div>
        </div>
      </div>

      <div v-if="ShowAllBuilds" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <BuildCard
          v-for="build in FilteredAllBuilds"
          :key="build.Id"
          :build="build"
          :is-other-character="true"
          @load="CopyBuildToCurrentCharacter"
          @edit="EditBuild"
          @delete="DeleteBuild"
          @navigate-to-character="navigateToCharacter"
        />
      </div>
    </div>
  </div>
</template>
