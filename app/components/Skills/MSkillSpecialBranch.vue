<script setup lang="ts">
import type { SkillBranch } from '~/composables/characters/UseSkillTree'
import type Character from '~/Core/Interfaces/Character'
import type Skill from '~/Core/Interfaces/Skill'

interface SkillSpecialBranchProps {
  character: Character
  branch: SkillBranch
}

const props = defineProps<SkillSpecialBranchProps>()

const emit = defineEmits<{
  skillToggle: [skill: Skill, branch: SkillBranch]
}>()

function HandleSkillToggle(skill: Skill) {
  emit('skillToggle', skill, props.branch)
}
</script>

<template>
  <div class="h-full flex flex-col-reverse items-center justify-between">
    <MSkillIcon
      :skill="branch.skills?.[0]"
      :character="character"
      size="xs"
      :has-no-level="true"
      class="mt-4"
      @skill-toggle="HandleSkillToggle"
    />

    <MSkillIcon
      :skill="branch.mainSkill"
      :character="character"
      @skill-toggle="HandleSkillToggle"
    />

    <MSkillIconSeparator :skill="branch.skills?.[1]" />

    <MSkillIcon
      :skill="branch.skills?.[1]"
      :character="character"
      size="xs"
      :has-no-level="true"
      @skill-toggle="HandleSkillToggle"
    />

    <MSkillIconSeparator :skill="branch.skills?.[2]" />

    <MSkillIcon
      :skill="branch.skills?.[2]"
      :character="character"
      size="xs"
      :has-no-level="true"
      @skill-toggle="HandleSkillToggle"
    />
  </div>
</template>
