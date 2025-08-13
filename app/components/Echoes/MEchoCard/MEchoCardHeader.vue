<script setup lang="ts">
import type Echo from '~/Core/Interfaces/Echo'

interface EchoCardHeaderProps {
  echo: Echo | undefined
}

const props = defineProps<EchoCardHeaderProps>()

const { t } = useI18n()

const IsValidEcho = computed(() => props.echo && (props.echo.GameId !== -1 || props.echo.Id !== undefined))

const MainStatistic = computed(() => {
  return props.echo?.MainStatistic
})
</script>

<template>
  <div class="w-full flex flex-row items-start">
    <MEchoIconAlt v-motion-pop :delay="400" :echo="echo" />
    <div v-motion-pop :delay="400" class="flex flex-col h-full justify-between min-w-0 gap-2 items-end flex-1">
      <div v-if="IsValidEcho" class="text-white pt-0.5 flex items-start justify-end" :title="t(`${echo!.GameId}_name`)">
        <span class="text-lg leading-none text-right break-words hyphens-auto max-w-full">{{ t(`${echo!.GameId}_name`) }}</span>
      </div>
      <USkeleton v-else class="h-4 w-32 rounded-sm" />
      <MStatLineBig :stat="MainStatistic" />
    </div>
  </div>
</template>
