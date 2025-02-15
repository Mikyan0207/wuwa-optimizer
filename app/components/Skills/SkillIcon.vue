<script setup lang="ts">
import type { ISkill } from '~/Core/Interfaces/ISkill'
import type { Character } from '~/Core/Models/Character'

const props = defineProps<{
  skill?: ISkill
  size?: 'xs'
  hasNoLevel?: boolean
  character: Character
}>()

const { t } = useI18n()

const GetSkillName = computed(() => {
  if (!props.skill) {
    return 'N/A'
  }

  const v = `${props.character.Id}_${props.skill.Id.toLowerCase().replace(' ', '_')}`
  return t(v)
})

const GetSkillType = computed(() => {
  if (!props.skill) {
    return 'N/A'
  }

  const skillId = props.skill.Id.toLowerCase().replace(' ', '_')

  return t(`skill_${skillId}`)
})
</script>

<template>
  <USkeleton v-if="!skill" class="min-h-[3em] min-w-[3em] rotate-45" />
  <UTooltip
    v-else
    arrow
    :delay-duration="0"
  >
    <template #content>
      <div class="flex w-46 flex-col" :class="[hasNoLevel !== true ? 'gap-2' : '']">
        <div class="flex flex-col items-start gap-1 w-full">
          <span class="text-sm">{{ GetSkillName }}</span>
          <div class="flex items-center gap-1">
            <UBadge color="primary" variant="soft" size="sm" :label="`${t('label_level')} ${skill.Level}`" />
            <UBadge color="secondary" variant="soft" size="sm" :label="`${GetSkillType}`" />
          </div>
        </div>
        <p>{{ skill.Description }}</p>
        <USlider
          v-if="hasNoLevel !== true"
          v-model="skill!.Level"
          class="w-full mb-1"
          color="neutral"
          size="xs"
          :step="1"
          :default-value="1"
          :max="10"
          :min="1"
        />
      </div>
    </template>
    <div
      class="rotate-45 cursor-pointer border-1 rounded-xs bg-black/88 backdrop-blur-4 transition-all duration-150"
      :class="{
        'border-gold-500': skill.Unlocked,
        'border-white/14 hover:border-white/75': !skill.Unlocked,
        'min-h-[3em] min-w-[3em]': !size,
        'min-h-[2em] min-w-[2em]': size === 'xs',
      }"
    >
      <NuxtImg v-if="character && !skill.Id.startsWith('Basic')" :src="`/images/characters/${character.Id}/${skill.Icon}`" class="p-1 -rotate-45" />
      <NuxtImg v-else :src="`/images/icons/${skill.Icon}`" class="p-1 -rotate-45" />
    </div>
  </UTooltip>
</template>
