<script setup lang="ts">
import type { SkillBranch } from '~/composables/characters/UseSkillTree'
import type Character from '~/Core/Interfaces/Character'
import type Skill from '~/Core/Interfaces/Skill'

interface SkillBranchProps {
  character: Character
  branch: SkillBranch
}

const props = defineProps<SkillBranchProps>()

const emit = defineEmits<{
  skillToggle: [skill: Skill, branch: SkillBranch]
}>()

function HandleSkillToggle(skill: Skill) {
  emit('skillToggle', skill, props.branch)
}
</script>

<template>
  <div class="h-full flex flex-col-reverse items-center justify-between">
    <div :class="branch.spacingBefore" />
    <MSkillIcon
      :skill="branch.mainSkill"
      :character="character"
      @skill-toggle="HandleSkillToggle"
    />

    <template v-for="(skill, index) in branch.skills" :key="skill?.Id || index">
      <MSkillIconSeparator :skill="skill" />
      <MSkillBonusIcon
        :skill="skill"
        :character="character"
        @skill-toggle="HandleSkillToggle"
      />
    </template>
    <div :class="branch.spacingAfter" />
  </div>
</template>
