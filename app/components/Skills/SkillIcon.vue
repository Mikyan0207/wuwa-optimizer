<script setup lang="ts">
import type Character from '~/Core/Interfaces/Character'
import type Skill from '~/Core/Interfaces/Skill'

const props = defineProps<{
  skill?: Skill
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
    <div class="relative">
      <div
        class="rotate-45 cursor-pointer border-1 rounded-xs bg-black backdrop-blur-4 transition-all duration-150"
        :class="{
          'border-gold-500': skill.Unlocked,
          'border-white/14 hover:border-white/75': !skill.Unlocked,
          'min-h-[4em] h-[4em] min-w-[4em] w-[4em]': !size,
          'min-h-[2.5em] h-[2.5em] min-w-[2.5em] w-[2.5em]': size === 'xs',
        }"
      >
        <NuxtImg v-if="character && !skill.Id.startsWith('Basic')" :src="`/images/characters/${character.Id}/${skill.Icon}`" class="p-1 -rotate-45" />
        <NuxtImg v-else :src="`/images/icons/${skill.Icon}`" class="p-1 -rotate-45" />
      </div>
      <div v-if="skill !== undefined && hasNoLevel !== true" class="text-center pt-3 font-semibold">
        {{ t('label_level') }} {{ skill.Level }}
      </div>
    </div>
  </UTooltip>
</template>
