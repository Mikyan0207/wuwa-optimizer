<script setup lang="ts">
import type { Action } from '~/Core/Interfaces/Action'
import type { Section } from '~/Core/Interfaces/Section'
import type Skill from '~/Core/Interfaces/Skill'
import CharacterSelectionCard from '../Cards/CharacterSelectionCard.vue'

interface Props {
  section: Section
  action: Action
  sectionIndex: number
  actionIndex: number
}

const props = defineProps<Props>()
const emit = defineEmits<{ close: [] }>()

const { t } = useI18n()

const RotationBuilderStore = useRotationBuilderStore()

const EditedAction = ref<Action>({
  ...props.action,
  Order: props.action.Order || 1,
  RepeatCount: props.action.RepeatCount || 1,
})

const AvailableCharacters = computed(() => RotationBuilderStore.SelectedTeam)
const AvailableSkills = computed(() => {
  const characterSkills = EditedAction.value.Character1?.Skills || []
  const filteredCharacterSkills = characterSkills.filter(skill =>
    !skill.Id.includes('Bonus_Stat')
    && !skill.Stat
    && !skill.Id.includes('Inherent_Skill'),
  )

  const echoSkill = {
    Id: 'Echo_Skill',
    Name: 'Echo Skill',
    Icon: '/images/icons/echo.webp',
    Unlocked: true,
    Level: 1,
  }

  return [echoSkill, ...filteredCharacterSkills]
})

function SaveChanges() {
  const section = RotationBuilderStore.Steps[props.sectionIndex]
  if (section && section.Actions[props.actionIndex]) {
    section.Actions[props.actionIndex] = { ...EditedAction.value }
  }
  emit('close')
}

function CancelEdit() {
  emit('close')
}

function DeleteAction() {
  RotationBuilderStore.RemoveAction(props.sectionIndex, props.actionIndex)
  emit('close')
}

function GetSkillType(skillId: string): string {
  if (skillId === 'Echo_Skill') {
    return 'Echo Skill'
  }
  if (skillId.includes('Basic_Attack')) {
    return 'Basic Attack'
  }
  if (skillId.includes('Forte_Circuit')) {
    return 'Forte Circuit'
  }
  if (skillId.includes('Resonance_Skill')) {
    return 'Resonance Skill'
  }
  if (skillId.includes('Resonance_Liberation')) {
    return 'Resonance Liberation'
  }
  if (skillId.includes('Intro_Skill')) {
    return 'Intro Skill'
  }
  if (skillId.includes('Outro_Skill')) {
    return 'Outro Skill'
  }
  if (skillId.includes('Inherent_Skill')) {
    return 'Inherent Skill'
  }
  return 'Skill'
}

function GetSkillName(skill: Skill): string {
  if (!skill) {
    return 'N/A'
  }
  if (skill.Id === 'Echo_Skill') {
    return 'Echo Skill'
  }
  if (!EditedAction.value.Character1) {
    return 'N/A'
  }
  const skillKey = `${EditedAction.value.Character1.Id}_${skill.Id.toLowerCase().replace(' ', '_')}`
  return t(skillKey)
}
</script>

<template>
  <div class="h-full flex flex-col bg-black min-h-0">
    <div class="sticky top-0 z-10 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div class="flex items-center justify-between px-4 py-3">
        <div class="flex items-center gap-3">
          <h2 class="text-lg font-semibold text-white flex items-center gap-2">
            <UIcon name="i-carbon-edit" class="h-5 w-5 text-primary-400" />
            Edit Action
          </h2>
          <UBadge v-if="action.Type === 'ACTION'" color="success" variant="subtle" label="Action" />
          <UBadge v-else color="warning" variant="subtle" label="Swap" />
        </div>
        <UButton
          icon="i-carbon-close"
          color="neutral"
          variant="ghost"
          size="sm"
          @click="CancelEdit"
        />
      </div>
    </div>

    <div class="flex-1 overflow-y-auto p-4 space-y-6">
      <CharacterSelectionCard
        :available-characters="AvailableCharacters"
        :selected-character="EditedAction.Character1"
        label="Select Character"
        :allow-deselect="true"
        @update:selected-character="EditedAction.Character1 = $event"
      />

      <div v-if="EditedAction.Character1 && AvailableSkills.length > 0" class="space-y-3">
        <label class="text-sm font-medium text-neutral-300">Select Skill</label>
        <div class="grid grid-cols-2 gap-3">
          <div
            v-for="skill in AvailableSkills"
            :key="skill.Id"
            class="p-3 border rounded-lg cursor-pointer transition-all hover:border-neutral-500 relative"
            :class="{
              'border-primary-500 bg-primary-500/10': EditedAction.Skill?.Id === skill.Id,
              'border-neutral-600': EditedAction.Skill?.Id !== skill.Id,
            }"
            @click="EditedAction.Skill = EditedAction.Skill?.Id === skill.Id ? undefined : skill"
          >
            <div v-if="EditedAction.Skill?.Id === skill.Id" class="absolute -top-1 -right-1">
              <div class="w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center">
                <UIcon name="i-carbon-checkmark" class="w-3 h-3 text-white" />
              </div>
            </div>

            <h4 class="text-sm font-semibold text-white text-center mb-2">
              {{ GetSkillName(skill) }}
            </h4>

            <div class="flex justify-center mb-2">
              <UBadge
                :label="GetSkillType(skill.Id)"
                color="neutral"
                variant="soft"
                size="xs"
              />
            </div>
          </div>
        </div>
      </div>

      <div v-if="EditedAction.Character1" class="space-y-3">
        <label class="text-sm font-medium text-neutral-300">Repeat Count</label>
        <div class="flex items-center gap-3">
          <UButton
            icon="i-carbon-subtract"
            size="sm"
            color="neutral"
            variant="outline"
            :disabled="(EditedAction.RepeatCount || 1) <= 1"
            @click="EditedAction.RepeatCount = Math.max(1, (EditedAction.RepeatCount || 1) - 1)"
          />
          <span class="text-lg font-semibold text-white min-w-[3rem] text-center">
            {{ EditedAction.RepeatCount || 1 }}
          </span>
          <UButton
            icon="i-carbon-add"
            size="sm"
            color="neutral"
            variant="outline"
            :disabled="(EditedAction.RepeatCount || 1) >= 10"
            @click="EditedAction.RepeatCount = Math.min(10, (EditedAction.RepeatCount || 1) + 1)"
          />
        </div>
        <p class="text-xs text-neutral-400">
          This action will be repeated {{ EditedAction.RepeatCount || 1 }} time{{ (EditedAction.RepeatCount || 1) > 1 ? 's' : '' }}
        </p>
      </div>
    </div>

    <div class="sticky bottom-0 bg-black/90 backdrop-blur-md border-t border-white/10 p-4">
      <div class="flex items-center justify-between gap-3">
        <UButton
          color="error"
          variant="outline"
          size="sm"
          @click="DeleteAction"
        >
          <UIcon name="i-carbon-trash-can" class="mr-2" />
          Delete
        </UButton>

        <div class="flex gap-2">
          <UButton
            color="neutral"
            variant="outline"
            size="sm"
            @click="CancelEdit"
          >
            Cancel
          </UButton>
          <UButton
            color="primary"
            size="sm"
            @click="SaveChanges"
          >
            <UIcon name="i-carbon-checkmark" class="mr-2" />
            Save
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>
