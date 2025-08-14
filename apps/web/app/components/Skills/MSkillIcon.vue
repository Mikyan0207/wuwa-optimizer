<script setup lang="ts">
import type Character from '~/Core/Interfaces/Character'
import type Skill from '~/Core/Interfaces/Skill'

interface SkillIconProps {
  skill?: Skill
  size?: 'xs'
  hasNoLevel?: boolean
  character: Character
}

const props = defineProps<SkillIconProps>()

const emit = defineEmits<{
  skillToggle: [skill: Skill]
}>()

const { t } = useI18n()

const SkillName = computed(() => {
  if (!props.skill) {
    return 'N/A'
  }

  const translationKey = `${props.character.Id}_${props.skill.Id.toLowerCase().replace(' ', '_')}`
  return t(translationKey)
})

const SkillType = computed(() => {
  if (!props.skill) {
    return 'N/A'
  }

  const skillId = props.skill.Id.toLowerCase().replace(' ', '_')
  return t(`skill_${skillId}`)
})

const IconPath = computed(() => {
  if (!props.skill)
    return ''

  if (props.character && !props.skill.Id.startsWith('Basic')) {
    return `/characters/${props.character.Id}/images/${props.skill.Icon}`
  }

  return `/images/icons/${props.skill.Icon}`
})

const IconClasses = computed(() => {
  const base = 'rotate-45 cursor-pointer border-1 rounded-xs bg-black backdrop-blur-4 transition-all duration-150'
  const border = props.skill?.Unlocked
    ? 'border-gold-500'
    : 'border-white/14 hover:border-white/75'

  const size = props.size === 'xs'
    ? 'min-h-[2.5em] h-[2.5em] min-w-[2.5em] w-[2.5em]'
    : 'min-h-[4em] h-[4em] min-w-[4em] w-[4em]'

  return `${base} ${border} ${size}`
})

const ShowLevelSlider = computed(() => props.hasNoLevel !== true && props.skill)

const ShowLevelText = computed(() => props.skill !== undefined && props.hasNoLevel !== true)

function HandleSkillToggle() {
  if (!props.skill)
    return

  emit('skillToggle', props.skill)
}
</script>

<template>
  <USkeleton
    v-if="!skill"
    class="min-h-[3em] min-w-[3em] rotate-45"
  />

  <UTooltip
    v-else
    arrow
    :delay-duration="0"
  >
    <template #content>
      <div class="flex w-46 flex-col" :class="[ShowLevelSlider ? 'gap-2' : '']">
        <div class="flex flex-col items-start gap-1 w-full">
          <span class="text-sm">{{ SkillName }}</span>
          <div class="flex items-center gap-1">
            <UBadge
              color="primary"
              variant="soft"
              size="sm"
              :label="`${t('label_level')} ${skill.Level}`"
            />
            <UBadge
              color="secondary"
              variant="soft"
              size="sm"
              :label="SkillType"
            />
          </div>
        </div>

        <p>{{ skill.Description }}</p>

        <USlider
          v-if="ShowLevelSlider"
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
        :class="IconClasses"
        @click="HandleSkillToggle"
      >
        <NuxtImg
          :src="IconPath"
          class="p-1 -rotate-45 w-full h-full object-container"
        />
      </div>

      <div
        v-if="ShowLevelText"
        class="text-center pt-3 font-semibold"
      >
        {{ t('label_level') }} {{ skill.Level }}
      </div>
    </div>
  </UTooltip>
</template>
