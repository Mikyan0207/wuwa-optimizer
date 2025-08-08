<script setup lang="ts">
import type Echo from '~/Core/Interfaces/Echo'
import { GetEchoIcon, GetSonataIcon } from '~/Core/Utils/EchoUtils'

interface EchoCardHeaderProps {
  echo: Echo | undefined
}

const props = defineProps<EchoCardHeaderProps>()

const { t } = useI18n()

const IsValidEcho = computed(() => props.echo && props.echo.GameId !== -1)
const SelectedSonata = computed(() => props.echo && props.echo.Sonata.find(x => x.IsSelected === true))

const MainStatistic = computed(() => {
  return props.echo?.MainStatistic
})
</script>

<template>
  <div class="w-full flex flex-row items-start">
    <div v-motion-pop :delay="400" class="flex flex-col items-center gap-2 overflow-clip relative">
      <NuxtImg v-if="SelectedSonata" :src="GetSonataIcon(SelectedSonata)" class="h-6 w-6 flex-shrink-0 absolute top-1 right-1" />
      <NuxtImg v-if="IsValidEcho" :src="GetEchoIcon(echo!)" class="w-auto rounded-md border border-neutral-700 object-cover h-22" />
      <USkeleton v-else class="h-12 w-12 rounded-full" />
    </div>
    <div v-motion-pop :delay="400" class="flex flex-col h-full justify-between min-w-0 gap-2 items-end flex-1">
      <div v-if="IsValidEcho" class="text-white flex items-start justify-end" :title="t(`${echo!.GameId}_name`)">
        <span class="text-lg leading-none text-right break-words hyphens-auto max-w-full">{{ t(`${echo!.GameId}_name`) }}</span>
      </div>
      <USkeleton v-else class="h-4 w-32" />
      <MStatLineBig :stat="MainStatistic" />
    </div>
  </div>
</template>
