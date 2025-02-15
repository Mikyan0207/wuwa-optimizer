<script setup lang="ts">
import type Character from '~/Core/Interfaces/Character'
import type Skill from '~/Core/Interfaces/Skill'

const props = defineProps<{
  character: Character
}>()

const BasicAttack = computed<Skill | undefined>(() =>
  props.character.Skills?.find(skill => skill.Id === 'Basic_Attack' || skill.Id === 'Basic Attack'),
)

const BasicStatBonus1 = computed<Skill | undefined>(() =>
  props.character.Skills?.find(skill => skill.Id === 'Basic_Stat_Bonus_1'),
)

const BasicStatBonus2 = computed<Skill | undefined>(() =>
  props.character.Skills?.find(skill => skill.Id === 'Basic_Stat_Bonus_2'),
)

const ResonanceSkill = computed<Skill | undefined>(() =>
  props.character.Skills?.find(skill => skill.Id === 'Resonance_Skill' || skill.Id === 'Resonance Skill'),
)

const SkillStatBonus1 = computed<Skill | undefined>(() =>
  props.character.Skills?.find(skill => skill.Id === 'Skill_Stat_Bonus_1'),
)

const SkillStatBonus2 = computed<Skill | undefined>(() =>
  props.character.Skills?.find(skill => skill.Id === 'Skill_Stat_Bonus_2'),
)

const ResonanceLiberation = computed<Skill | undefined>(() =>
  props.character.Skills?.find(skill => skill.Id === 'Resonance_Liberation' || skill.Id === 'Resonance Liberation'),
)

const LiberationStatBonus1 = computed<Skill | undefined>(() =>
  props.character.Skills?.find(skill => skill.Id === 'Liberation_Stat_Bonus_1'),
)

const LiberationStatBonus2 = computed<Skill | undefined>(() =>
  props.character.Skills?.find(skill => skill.Id === 'Liberation_Stat_Bonus_2'),
)

const OutroSkill = computed<Skill | undefined>(() =>
  props.character.Skills?.find(skill => skill.Id === 'Outro_Skill' || skill.Id === 'Outro Skill'),
)

const ForteCircuit = computed<Skill | undefined>(() =>
  props.character.Skills?.find(skill => skill.Id === 'Forte_Circuit' || skill.Id === 'Forte Circuit'),
)

const InherentSkill1 = computed<Skill | undefined>(() =>
  props.character.Skills?.find(skill => skill.Id === 'Inherent_Skill_1'),
)

const InherentSkill2 = computed<Skill | undefined>(() =>
  props.character.Skills?.find(skill => skill.Id === 'Inherent_Skill_2'),
)

const IntroSkill = computed<Skill | undefined>(() =>
  props.character.Skills?.find(skill => skill.Id === 'Intro_Skill' || skill.Id === 'Intro Skill'),
)

const IntroStatBonus1 = computed<Skill | undefined>(() =>
  props.character.Skills?.find(skill => skill.Id === 'Intro_Stat_Bonus_1'),
)

const IntroStatBonus2 = computed<Skill | undefined>(() =>
  props.character.Skills?.find(skill => skill.Id === 'Intro_Stat_Bonus_2'),
)

// TODO: Simplify skill update with a single global method that is called on skill click.
</script>

<template>
  <UCard
    class="h-full w-full"
    :ui="{
      body: 'h-full',
      root: 'rounded-none rounded-br-xl border-0',
    }"
  >
    <template #default>
      <BorderLines />
      <div class="h-full w-full px-2 flex flex-col items-center justify-center gap-6">
        <!-- Normal Attack -->
        <div class="w-full flex items-center">
          <SkillIcon :skill="BasicAttack" :character="character" />
          <SkillIconSeparator :skill="BasicStatBonus1" />
          <SkillBonusIcon :skill="BasicStatBonus1" :next-skill="BasicStatBonus2" />
          <SkillIconSeparator :skill="BasicStatBonus2" />
          <SkillBonusIcon :skill="BasicStatBonus2" :previous-skill="BasicStatBonus1" class="mr-[4em]" />
        </div>
        <!-- Resonance Skill -->
        <div class="w-full flex items-center">
          <SkillIcon :skill="ResonanceSkill" :character="character" class="ml-[3em]" />
          <SkillIconSeparator :skill="SkillStatBonus1" />
          <SkillBonusIcon :skill="SkillStatBonus1" :next-skill="SkillStatBonus2" />
          <SkillIconSeparator :skill="SkillStatBonus2" />
          <SkillBonusIcon :skill="SkillStatBonus2" :previous-skill="SkillStatBonus1" class="mr-[2em]" />
        </div>
        <!-- Forte Circuit / Inherent Skills / Outro Skill -->
        <div class="w-full flex items-center">
          <SkillIcon :skill="OutroSkill" :character="character" size="xs" :has-no-level="true" />
          <SkillIcon :skill="ForteCircuit" :character="character" class="ml-[3em]" />
          <SkillIconSeparator :skill="InherentSkill1" />
          <SkillIcon :skill="InherentSkill1" :character="character" size="xs" :has-no-level="true" />
          <SkillIconSeparator :skill="InherentSkill2" />
          <SkillIcon :skill="InherentSkill2" :character="character" size="xs" :has-no-level="true" />
        </div>
        <!-- Resonance Liberation -->
        <div class="w-full flex items-center">
          <SkillIcon :skill="ResonanceLiberation" :character="character" class="ml-[3em]" />
          <SkillIconSeparator :skill="LiberationStatBonus1" />
          <SkillBonusIcon :skill="LiberationStatBonus1" :next-skill="LiberationStatBonus2" />
          <SkillIconSeparator :skill="LiberationStatBonus2" />
          <SkillBonusIcon :skill="LiberationStatBonus2" :previous-skill="LiberationStatBonus1" class="mr-[2em]" />
        </div>
        <!-- Intro Skill -->
        <div class="w-full flex items-center">
          <SkillIcon :skill="IntroSkill" :character="character" />
          <SkillIconSeparator :skill="IntroStatBonus1" />
          <SkillBonusIcon :skill="IntroStatBonus1" :next-skill="IntroStatBonus2" />
          <SkillIconSeparator :skill="IntroStatBonus2" />
          <SkillBonusIcon :skill="IntroStatBonus2" :previous-skill="IntroStatBonus1" class="mr-[4em]" />
        </div>
      </div>
    </template>
  </UCard>
</template>
