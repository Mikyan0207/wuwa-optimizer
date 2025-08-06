<script setup lang="ts">
import type Skill from '~/Core/Interfaces/Skill'

const { CurrentCharacter } = useCharacterContext()

const BasicAttack = computed<Skill | undefined>(() =>
  CurrentCharacter.value.Skills?.find(skill => skill.Id === 'Basic_Attack' || skill.Id === 'Basic Attack'),
)

const BasicStatBonus1 = computed<Skill | undefined>(() =>
  CurrentCharacter.value.Skills?.find(skill => skill.Id === 'Basic_Stat_Bonus_1' || skill.Id === 'Basic_Attack_Bonus_Stat_01'),
)

const BasicStatBonus2 = computed<Skill | undefined>(() =>
  CurrentCharacter.value.Skills?.find(skill => skill.Id === 'Basic_Stat_Bonus_2' || skill.Id === 'Basic_Attack_Bonus_Stat_02'),
)

const ResonanceSkill = computed<Skill | undefined>(() =>
  CurrentCharacter.value.Skills?.find(skill => skill.Id === 'Resonance_Skill' || skill.Id === 'Resonance Skill'),
)

const SkillStatBonus1 = computed<Skill | undefined>(() =>
  CurrentCharacter.value.Skills?.find(skill => skill.Id === 'Skill_Stat_Bonus_1' || skill.Id === 'Resonance_Skill_Bonus_Stat_01'),
)

const SkillStatBonus2 = computed<Skill | undefined>(() =>
  CurrentCharacter.value.Skills?.find(skill => skill.Id === 'Skill_Stat_Bonus_2' || skill.Id === 'Resonance_Skill_Bonus_Stat_02'),
)

const ResonanceLiberation = computed<Skill | undefined>(() =>
  CurrentCharacter.value.Skills?.find(skill => skill.Id === 'Resonance_Liberation' || skill.Id === 'Resonance Liberation'),
)

const LiberationStatBonus1 = computed<Skill | undefined>(() =>
  CurrentCharacter.value.Skills?.find(skill => skill.Id === 'Liberation_Stat_Bonus_1' || skill.Id === 'Resonance_Liberation_Bonus_Stat_01'),
)

const LiberationStatBonus2 = computed<Skill | undefined>(() =>
  CurrentCharacter.value.Skills?.find(skill => skill.Id === 'Liberation_Stat_Bonus_2' || skill.Id === 'Resonance_Liberation_Bonus_Stat_02'),
)

const OutroSkill = computed<Skill | undefined>(() =>
  CurrentCharacter.value.Skills?.find(skill => skill.Id === 'Outro_Skill' || skill.Id === 'Outro Skill'),
)

const ForteCircuit = computed<Skill | undefined>(() =>
  CurrentCharacter.value.Skills?.find(skill => skill.Id === 'Forte_Circuit' || skill.Id === 'Forte Circuit'),
)

const InherentSkill1 = computed<Skill | undefined>(() =>
  CurrentCharacter.value.Skills?.find(skill => skill.Id === 'Inherent_Skill_1' || skill.Id === 'Inherent_Skill_01'),
)

const InherentSkill2 = computed<Skill | undefined>(() =>
  CurrentCharacter.value.Skills?.find(skill => skill.Id === 'Inherent_Skill_2' || skill.Id === 'Inherent_Skill_02'),
)

const IntroSkill = computed<Skill | undefined>(() =>
  CurrentCharacter.value.Skills?.find(skill => skill.Id === 'Intro_Skill' || skill.Id === 'Intro Skill'),
)

const IntroStatBonus1 = computed<Skill | undefined>(() =>
  CurrentCharacter.value.Skills?.find(skill => skill.Id === 'Intro_Stat_Bonus_1' || skill.Id === 'Intro_Skill_Bonus_Stat_01'),
)

const IntroStatBonus2 = computed<Skill | undefined>(() =>
  CurrentCharacter.value.Skills?.find(skill => skill.Id === 'Intro_Stat_Bonus_2' || skill.Id === 'Intro_Skill_Bonus_Stat_02'),
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
      <MBorderLines />
      <div class="h-full w-full p-4 flex items-center justify-evenly gap-6">
        <!-- Normal Attack -->
        <div class="h-full flex flex-col-reverse items-center">
          <SkillIcon :skill="BasicAttack" :character="CurrentCharacter" />
          <SkillIconSeparator :skill="BasicStatBonus1" />
          <SkillBonusIcon :skill="BasicStatBonus1" :next-skill="BasicStatBonus2" />
          <SkillIconSeparator :skill="BasicStatBonus2" />
          <SkillBonusIcon :skill="BasicStatBonus2" :previous-skill="BasicStatBonus1" class="mt-[6em]" />
        </div>
        <!-- Resonance Skill -->
        <div class="h-full flex flex-col-reverse items-center">
          <SkillIcon :skill="ResonanceSkill" :character="CurrentCharacter" class="mb-[2em]" />
          <SkillIconSeparator :skill="SkillStatBonus1" />
          <SkillBonusIcon :skill="SkillStatBonus1" :next-skill="SkillStatBonus2" />
          <SkillIconSeparator :skill="SkillStatBonus2" />
          <SkillBonusIcon :skill="SkillStatBonus2" :previous-skill="SkillStatBonus1" class="mt-[4em]" />
        </div>
        <!-- Forte Circuit / Inherent Skills / Outro Skill -->
        <div class="h-full flex flex-col-reverse items-center">
          <SkillIcon :skill="OutroSkill" :character="CurrentCharacter" size="xs" :has-no-level="true" class="mt-[3em]" />
          <SkillIcon :skill="ForteCircuit" :character="CurrentCharacter" />
          <SkillIconSeparator :skill="InherentSkill1" />
          <SkillIcon :skill="InherentSkill1" :character="CurrentCharacter" size="xs" :has-no-level="true" />
          <SkillIconSeparator :skill="InherentSkill2" />
          <SkillIcon :skill="InherentSkill2" :character="CurrentCharacter" size="xs" :has-no-level="true" />
        </div>
        <!-- Resonance Liberation -->
        <div class="h-full flex flex-col-reverse items-center">
          <SkillIcon :skill="ResonanceLiberation" :character="CurrentCharacter" class="mb-[2em]" />
          <SkillIconSeparator :skill="LiberationStatBonus1" />
          <SkillBonusIcon :skill="LiberationStatBonus1" :next-skill="LiberationStatBonus2" />
          <SkillIconSeparator :skill="LiberationStatBonus2" />
          <SkillBonusIcon :skill="LiberationStatBonus2" :previous-skill="LiberationStatBonus1" class="mt-[4em]" />
        </div>
        <!-- Intro Skill -->
        <div class="h-full flex flex-col-reverse items-center">
          <SkillIcon :skill="IntroSkill" :character="CurrentCharacter" />
          <SkillIconSeparator :skill="IntroStatBonus1" />
          <SkillBonusIcon :skill="IntroStatBonus1" :next-skill="IntroStatBonus2" />
          <SkillIconSeparator :skill="IntroStatBonus2" />
          <SkillBonusIcon :skill="IntroStatBonus2" :previous-skill="IntroStatBonus1" class="mt-[6em]" />
        </div>
      </div>
    </template>
  </UCard>
</template>
