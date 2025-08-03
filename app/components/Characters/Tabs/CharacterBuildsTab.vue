<script setup lang="ts">
import type Build from '~/Core/Interfaces/Build'
import VueDraggable from 'vuedraggable'

const { CurrentCharacter, CurrentWeapon } = useCharacterContext()
const BuildsStore = useBuildsStore()
const Toast = useToast()

const Builds = computed(() =>
  BuildsStore.GetBuildsByCharacter(CurrentCharacter.value?.Id || 0),
)

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

function IsCurrentBuild(build: Build): boolean {
  if (!CurrentCharacter.value || !CurrentWeapon.value) {
    return false
  }

  if (build.WeaponId !== CurrentWeapon.value.Id) {
    return false
  }

  const currentEchoIds = CurrentCharacter.value.EquipedEchoes
  if (build.EquipedEchoes.length !== currentEchoIds.length) {
    return false
  }

  return build.EquipedEchoes.every(echoId => currentEchoIds.includes(echoId))
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
  BuildsStore.SetDefaultBuild(CurrentCharacter.value?.Id || 0, build.Id)
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
</script>

<template>
  <div class="mb-14 xl:mb-4">
    <div v-if="Builds.length === 0" class="text-center py-12">
      <UIcon name="i-solar-folder-broken" class="w-16 h-16 text-gray-400 mx-auto mb-4" />
      <h3 class="text-lg font-medium text-gray-300 mb-2">
        No builds yet
      </h3>
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <VueDraggable
        v-model="DraggableBuilds"
        :animation="200"
        ghost-class="opacity-65"
        chosen-class="scale-102"
        drag-class="scale-106"
        class="contents"
        item-key="Id"
      >
        <template #item="{ element: build }">
          <BuildCard
            :build="build"
            :is-selected="IsCurrentBuild(build)"
            @load="LoadBuild"
            @edit="EditBuild"
            @delete="DeleteBuild"
            @set-default="SetDefaultBuild"
          />
        </template>
      </VueDraggable>
    </div>
  </div>
</template>
