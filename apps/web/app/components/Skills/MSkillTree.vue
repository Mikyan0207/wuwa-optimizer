<script setup lang="ts">
import type { SkillBranch } from '~/composables/characters/UseSkillTree'
import type Character from '~/Core/Interfaces/Character'
import type Skill from '~/Core/Interfaces/Skill'
import { UseSkillTree } from '~/composables/characters/UseSkillTree'

interface SkillTreeProps {
  character: Character
}

const props = defineProps<SkillTreeProps>()

const emit = defineEmits<{
  skillToggle: [skill: Skill, branch: SkillBranch]
}>()

const { GetSkillTree, ToggleSkill } = UseSkillTree(props.character)

const SkillTree = computed(() => GetSkillTree())

function HandleSkillToggle(skill: Skill, branch: SkillBranch) {
  ToggleSkill(skill, branch)
  emit('skillToggle', skill, branch)
}
</script>

<template>
  <div class="h-full w-full">
    <div class="h-full w-full p-4 flex items-stretch justify-evenly gap-6">
      <!-- Basic Attack Branch -->
      <MSkillBranch
        v-if="SkillTree.branches[0]"
        :character="character"
        :branch="SkillTree.branches[0]"
        @skill-toggle="HandleSkillToggle"
      />

      <!-- Resonance Skill Branch -->
      <MSkillBranch
        v-if="SkillTree.branches[1]"
        :character="character"
        :branch="SkillTree.branches[1]"
        @skill-toggle="HandleSkillToggle"
      />

      <!-- Forte Circuit Branch (Special) -->
      <MSkillSpecialBranch
        v-if="SkillTree.branches[2]"
        :character="character"
        :branch="SkillTree.branches[2]"
        @skill-toggle="HandleSkillToggle"
      />

      <!-- Resonance Liberation Branch -->
      <MSkillBranch
        v-if="SkillTree.branches[3]"
        :character="character"
        :branch="SkillTree.branches[3]"
        @skill-toggle="HandleSkillToggle"
      />

      <!-- Intro Skill Branch -->
      <MSkillBranch
        v-if="SkillTree.branches[4]"
        :character="character"
        :branch="SkillTree.branches[4]"
        @skill-toggle="HandleSkillToggle"
      />
    </div>
  </div>
</template>
