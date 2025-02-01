<script setup lang="ts">
import type { ISkill } from '~/Core/Interfaces/ISkill'
import type { Character } from '~/Core/Models/Character'

const props = defineProps<{
  character: Character
}>()

const BasicAttack = computed<ISkill | undefined>(() =>
  props.character.Skills?.find(skill => skill.Id === 'Basic Attack'),
)

const BasicStatBonus1 = computed<ISkill | undefined>(() =>
  props.character.Skills?.find(skill => skill.Id === 'Basic_Stat_Bonus_1'),
)

const BasicStatBonus2 = computed<ISkill | undefined>(() =>
  props.character.Skills?.find(skill => skill.Id === 'Basic_Stat_Bonus_2'),
)

const ResonanceSkill = computed<ISkill | undefined>(() =>
  props.character.Skills?.find(skill => skill.Id === 'Resonance Skill'),
)

const SkillStatBonus1 = computed<ISkill | undefined>(() =>
  props.character.Skills?.find(skill => skill.Id === 'Skill_Stat_Bonus_1'),
)

const SkillStatBonus2 = computed<ISkill | undefined>(() =>
  props.character.Skills?.find(skill => skill.Id === 'Skill_Stat_Bonus_2'),
)

const ResonanceLiberation = computed<ISkill | undefined>(() =>
  props.character.Skills?.find(skill => skill.Id === 'Resonance Liberation'),
)

const LiberationStatBonus1 = computed<ISkill | undefined>(() =>
  props.character.Skills?.find(skill => skill.Id === 'Liberation_Stat_Bonus_1'),
)

const LiberationStatBonus2 = computed<ISkill | undefined>(() =>
  props.character.Skills?.find(skill => skill.Id === 'Liberation_Stat_Bonus_2'),
)

const OutroSkill = computed<ISkill | undefined>(() =>
  props.character.Skills?.find(skill => skill.Id === 'Outro Skill'),
)

const ForteCircuit = computed<ISkill | undefined>(() =>
  props.character.Skills?.find(skill => skill.Id === 'Forte Circuit'),
)

const InherentSkill1 = computed<ISkill | undefined>(() =>
  props.character.Skills?.find(skill => skill.Id === 'Inherent_Skill_1'),
)

const InherentSkill2 = computed<ISkill | undefined>(() =>
  props.character.Skills?.find(skill => skill.Id === 'Inherent_Skill_2'),
)

const IntroSkill = computed<ISkill | undefined>(() =>
  props.character.Skills?.find(skill => skill.Id === 'Intro Skill'),
)

const IntroStatBonus1 = computed<ISkill | undefined>(() =>
  props.character.Skills?.find(skill => skill.Id === 'Intro_Stat_Bonus_1'),
)

const IntroStatBonus2 = computed<ISkill | undefined>(() =>
  props.character.Skills?.find(skill => skill.Id === 'Intro_Stat_Bonus_2'),
)

// TODO: Simplify skill update with a single global method that is called on skill click.
</script>

<template>
  <Card>
    <div class="h-full w-full flex flex-col items-start justify-center gap-6">
      <!-- Normal Attack -->
      <div class="w-full flex items-center">
        <SkillIcon :skill="BasicAttack" />
        <SkillIconSeparator :skill="BasicStatBonus1" />
        <SkillBonusIcon :skill="BasicStatBonus1" :next-skill="BasicStatBonus2" />
        <SkillIconSeparator :skill="BasicStatBonus2" />
        <SkillBonusIcon :skill="BasicStatBonus2" :previous-skill="BasicStatBonus1" class="mr-4em" />
      </div>
      <!-- Resonance Skill -->
      <div class="w-full flex items-center">
        <SkillIcon :skill="ResonanceSkill" :character-id="character.Id" class="ml-3em" />
        <SkillIconSeparator :skill="SkillStatBonus1" />
        <SkillBonusIcon :skill="SkillStatBonus1" :next-skill="SkillStatBonus2" />
        <SkillIconSeparator :skill="SkillStatBonus2" />
        <SkillBonusIcon :skill="SkillStatBonus2" :previous-skill="SkillStatBonus1" class="mr-2em" />
      </div>
      <!-- Forte Circuit / Inherent Skills / Outro Skill -->
      <div class="w-full flex items-center">
        <SkillIcon :skill="OutroSkill" :character-id="character.Id" size="xs" />
        <SkillIcon :skill="ForteCircuit" :character-id="character.Id" class="ml-3em" />
        <SkillIconSeparator :skill="InherentSkill1" />
        <SkillIcon :skill="InherentSkill1" :character-id="character.Id" size="xs" />
        <SkillIconSeparator :skill="InherentSkill2" />
        <SkillIcon :skill="InherentSkill2" :character-id="character.Id" size="xs" />
      </div>
      <!-- Resonance Liberation -->
      <div class="w-full flex items-center">
        <SkillIcon :skill="ResonanceLiberation" :character-id="character.Id" class="ml-3em" />
        <SkillIconSeparator :skill="LiberationStatBonus1" />
        <SkillBonusIcon :skill="LiberationStatBonus1" :next-skill="LiberationStatBonus2" />
        <SkillIconSeparator :skill="LiberationStatBonus2" />
        <SkillBonusIcon :skill="LiberationStatBonus2" :previous-skill="LiberationStatBonus1" class="mr-2em" />
      </div>
      <!-- Intro Skill -->
      <div class="w-full flex items-center">
        <SkillIcon :skill="IntroSkill" :character-id="character.Id" />
        <SkillIconSeparator :skill="IntroStatBonus1" />
        <SkillBonusIcon :skill="IntroStatBonus1" :next-skill="IntroStatBonus2" />
        <SkillIconSeparator :skill="IntroStatBonus2" />
        <SkillBonusIcon :skill="IntroStatBonus2" :previous-skill="IntroStatBonus1" class="mr-4em" />
      </div>
    </div>
  </Card>
</template>
