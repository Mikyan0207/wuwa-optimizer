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
  props.character.Skills?.find(skill => skill.Id === 'Skill_Stat_Bonus_1'),
)

const ResonanceLiberation = computed<ISkill | undefined>(() =>
  props.character.Skills?.find(skill => skill.Id === 'Resonance Liberation'),
)

const LiberationStatBonus1 = computed<ISkill | undefined>(() =>
  props.character.Skills?.find(skill => skill.Id === 'Liberation_Stat_Bonus_1'),
)

const LiberationStatBonus2 = computed<ISkill | undefined>(() =>
  props.character.Skills?.find(skill => skill.Id === 'Liberation_Stat_Bonus_1'),
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
</script>

<template>
  <Card>
    <div class="h-full w-full flex flex-col items-start justify-center gap-6">
      <!-- Normal Attack -->
      <div class="w-full flex items-center">
        <USkeleton v-if="!BasicAttack" class="min-h-3em min-w-3em rotate-45" :ui="{ base: '' }" />
        <div v-else class="min-h-3em min-w-3em rotate-45 border-2 border-white/14 rounded-md bg-black/66">
          <NuxtImg :src="`/images/icons/${BasicAttack.Icon}`" class="p-1 -rotate-45" />
        </div>
        <div class="h-1px w-full bg-white/7" />
        <USkeleton v-if="!BasicStatBonus1" class="min-h-2em min-w-2em rounded-full" :ui="{ base: '' }" />
        <div v-else class="min-h-2em min-w-2em border-2 border-white/14 rounded-full bg-black/66">
          <NuxtImg :src="`/images/icons/${BasicStatBonus1.Icon}`" class="p-1" />
        </div>
        <div class="h-1px w-full bg-white/7" />
        <USkeleton v-if="!BasicStatBonus2" class="mr-4em min-h-2em min-w-2em rounded-full" :ui="{ base: '' }" />
        <div v-else class="mr-4em min-h-2em min-w-2em border-2 border-white/14 rounded-full bg-black/66">
          <NuxtImg :src="`/images/icons/${BasicStatBonus2.Icon}`" class="p-1" />
        </div>
      </div>
      <!-- Resonance Skill -->
      <div class="w-full flex items-center">
        <USkeleton v-if="!ResonanceSkill" class="ml-3em min-h-3em min-w-3em rotate-45" :ui="{ base: '' }" />
        <div v-else class="ml-3em min-h-3em min-w-3em rotate-45 border-2 border-white/14 rounded-md bg-black/66">
          <NuxtImg :src="`/images/characters/${character.Id}/${ResonanceSkill.Icon}`" class="p-1 -rotate-45" />
        </div>
        <div class="h-1px w-full bg-white/7" />
        <USkeleton v-if="!SkillStatBonus1" class="min-h-2em min-w-2em rounded-full" :ui="{ base: '' }" />
        <div v-else class="min-h-2em min-w-2em border-2 border-white/14 rounded-full bg-black/66">
          <NuxtImg :src="`/images/icons/${SkillStatBonus1.Icon}`" class="p-1" />
        </div>
        <div class="h-1px w-full bg-white/7" />
        <USkeleton v-if="!SkillStatBonus2" class="mr-2em min-h-2em min-w-2em rounded-full" :ui="{ base: '' }" />
        <div v-else class="mr-2em min-h-2em min-w-2em border-2 border-white/14 rounded-full bg-black/66">
          <NuxtImg :src="`/images/icons/${SkillStatBonus2.Icon}`" class="p-1" />
        </div>
      </div>
      <!-- Forte Circuit / Inherent Skills / Outro Skill -->
      <div class="w-full flex items-center">
        <USkeleton v-if="!OutroSkill" class="min-h-2em min-w-2em rotate-45" :ui="{ base: '' }" />
        <div v-else class="min-h-2em min-w-2em rotate-45 border-2 border-white/14 rounded-md bg-black/66">
          <NuxtImg :src="`/images/characters/${character.Id}/${OutroSkill.Icon}`" class="p-1 -rotate-45" />
        </div>
        <USkeleton v-if="!ForteCircuit" class="ml-3em min-h-3em min-w-3em rotate-45" :ui="{ base: '' }" />
        <div v-else class="ml-3em min-h-3em min-w-3em rotate-45 border-2 border-white/14 rounded-md bg-black/66">
          <NuxtImg :src="`/images/characters/${character.Id}/${ForteCircuit.Icon}`" class="p-1 -rotate-45" />
        </div>
        <div class="h-1px w-full bg-white/7" />
        <USkeleton v-if="!InherentSkill1" class="min-h-2em min-w-2em rotate-45 rounded" :ui="{ base: '' }" />
        <div v-else class="min-h-2em min-w-2em rotate-45 border-2 border-white/14 rounded-md bg-black/66">
          <NuxtImg :src="`/images/characters/${character.Id}/${InherentSkill1.Icon}`" class="p-1 -rotate-45" />
        </div>
        <div class="h-1px w-full bg-white/7" />
        <USkeleton v-if="!InherentSkill2" class="min-h-2em min-w-2em rotate-45 rounded" :ui="{ base: '' }" />
        <div v-else class="min-h-2em min-w-2em rotate-45 border-2 border-white/14 rounded-md bg-black/66">
          <NuxtImg :src="`/images/characters/${character.Id}/${InherentSkill2.Icon}`" class="p-1 -rotate-45" />
        </div>
      </div>
      <!-- Resonance Liberation -->
      <div class="w-full flex items-center">
        <USkeleton v-if="!ResonanceLiberation" class="ml-3em min-h-3em min-w-3em rotate-45" :ui="{ base: '' }" />
        <div v-else class="ml-3em min-h-3em min-w-3em rotate-45 border-2 border-white/14 rounded-md bg-black/66">
          <NuxtImg :src="`/images/characters/${character.Id}/${ResonanceLiberation.Icon}`" class="p-1 -rotate-45" />
        </div>
        <div class="h-1px w-full bg-white/7" />
        <USkeleton v-if="!LiberationStatBonus1" class="min-h-2em min-w-2em rounded-full" :ui="{ base: '' }" />
        <div v-else class="min-h-2em min-w-2em border-2 border-white/14 rounded-full bg-black/66">
          <NuxtImg :src="`/images/icons/${LiberationStatBonus1.Icon}`" class="p-1" />
        </div>
        <div class="h-1px w-full bg-white/7" />
        <USkeleton v-if="!LiberationStatBonus2" class="mr-2em min-h-2em min-w-2em rounded-full" :ui="{ base: '' }" />
        <div v-else class="mr-2em min-h-2em min-w-2em border-2 border-white/14 rounded-full bg-black/66">
          <NuxtImg :src="`/images/icons/${LiberationStatBonus2.Icon}`" class="p-1" />
        </div>
      </div>
      <!-- Intro Skill -->
      <div class="w-full flex items-center">
        <USkeleton v-if="!IntroSkill" class="min-h-3em min-w-3em rotate-45" :ui="{ base: '' }" />
        <div v-else class="min-h-3em min-w-3em rotate-45 border-2 border-white/14 rounded-md bg-black/66">
          <NuxtImg :src="`/images/characters/${character.Id}/${IntroSkill.Icon}`" class="p-1 -rotate-45" />
        </div>
        <div class="h-1px w-full bg-white/7" />
        <USkeleton v-if="!IntroStatBonus1" class="min-h-2em min-w-2em rounded-full" :ui="{ base: '' }" />
        <div v-else class="min-h-2em min-w-2em border-2 border-white/14 rounded-full bg-black/66">
          <NuxtImg :src="`/images/icons/${IntroStatBonus1.Icon}`" class="p-1" />
        </div>
        <div class="h-1px w-full bg-white/7" />
        <USkeleton v-if="!IntroStatBonus2" class="mr-4em min-h-2em min-w-2em rounded-full" :ui="{ base: '' }" />
        <div v-else class="mr-4em min-h-2em min-w-2em border-2 border-white/14 rounded-full bg-black/66">
          <NuxtImg :src="`/images/icons/${IntroStatBonus2.Icon}`" class="p-1" />
        </div>
      </div>
    </div>
  </Card>
</template>
