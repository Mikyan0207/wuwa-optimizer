<script setup lang="ts">
import type Weapon from '~/Core/Interfaces/Weapon'
import { v4 as uuidv4 } from 'uuid'
import { z } from 'zod'
import { useBuild } from '~/composables/builds/UseBuild'
import { useCharacter } from '~/composables/characters/UseCharacter'
import { Rarity } from '~/Core/Enums/Rarity'
import { StatType } from '~/Core/Enums/StatType'
import { TemplateWeapons } from '~/Core/Weapons'

interface WeaponFormProps {
  mode?: 'create' | 'edit'
  open?: boolean
}

const props = withDefaults(defineProps<WeaponFormProps>(), {
  mode: 'create',
})

const emits = defineEmits<{
  close: []
}>()

const { CurrentWeapon } = useBuild()
const { CurrentCharacter } = useCharacter()
const WeaponsStore = useWeaponsStore()
const { t } = useI18n()

const Steps = [
  { id: 'weapon', title: 'Weapon', description: 'Select your weapon type and model.' },
  { id: 'enhancement', title: 'Enhancement', description: 'Configure weapon level and rank.' },
]

const CurrentStep = ref(0)
const DisplayedWeapon = ref<Weapon | undefined>(undefined)

const State = reactive({
  Id: undefined as string | undefined,
  GameId: -1,
  Rarity: Rarity.FIVE_STARS,
  Level: 1,
  Rank: 1,
  MainStat: {
    Type: StatType.NONE,
    Value: '0',
  },
  SecondaryStat: {
    Type: StatType.NONE,
    Value: '0',
  },
})

const WeaponSelectionSchema = z.object({
  GameId: z.number().min(0, 'Please select a valid weapon.'),
})

const EnhancementConfigurationSchema = z.object({
  GameId: z.number().min(0, 'Please select a valid weapon.'),
  Level: z.number().min(1).max(90, 'Level must be between 1 and 90.'),
  Rank: z.number().min(1).max(5, 'Rank must be between 1 and 5.'),
  Rarity: z.enum(Object.values(Rarity) as [Rarity, ...Rarity[]]),
})

const ValidationSchemas = {
  0: WeaponSelectionSchema,
  1: EnhancementConfigurationSchema,
}

const ValidationErrors = ref<Record<string, string[]>>({})

const ValidationRules: Record<number, () => boolean> = {
  0: () => State.GameId !== -1,
  1: () => State.GameId !== -1 && State.Level >= 1 && State.Level <= 90 && State.Rank >= 1 && State.Rank <= 5,
}

const IsFormValid = computed(() => {
  const validation = ValidateCurrentStep()
  return validation.isValid && (ValidationRules[CurrentStep.value]?.() ?? false)
})

const FormSteps = computed(() => Steps.map((step, index) => ({
  ...step,
  isActive: CurrentStep.value === index,
  isCompleted: CurrentStep.value > index,
})))

const AvailableWeapons = computed(() => {
  return TemplateWeapons
    .filter((weapon: Weapon) => {
      if (weapon.Type !== CurrentCharacter.value?.WeaponType) {
        return false
      }
      return true
    })
    .sort((a, b) => {
      const rarityComparison = GetRarityAsNumber(b.Rarity) - GetRarityAsNumber(a.Rarity)
      if (rarityComparison !== 0) {
        return rarityComparison
      }
      return t(`${a.GameId}_name`).localeCompare(t(`${b.GameId}_name`))
    })
})

onMounted(() => {
  if (props.mode === 'edit' && CurrentWeapon.value) {
    State.Id = CurrentWeapon.value.Id
    State.GameId = CurrentWeapon.value.GameId
    State.Level = CurrentWeapon.value.Level
    State.Rank = CurrentWeapon.value.Rank
    State.Rarity = CurrentWeapon.value.Rarity

    if (CurrentWeapon.value.MainStatistic) {
      State.MainStat.Type = CurrentWeapon.value.MainStatistic.Type
      State.MainStat.Value = CurrentWeapon.value.MainStatistic.Value.toFixed(1)
    }

    if (CurrentWeapon.value.SecondaryStatistic) {
      State.SecondaryStat.Type = CurrentWeapon.value.SecondaryStatistic.Type
      State.SecondaryStat.Value = CurrentWeapon.value.SecondaryStatistic.Value.toFixed(1)
    }

    if (State.GameId !== -1) {
      DisplayedWeapon.value = CurrentWeapon.value
      CurrentStep.value = 1
    }
  }
})

function NavigateStep(direction: 'next' | 'previous') {
  if (direction === 'next') {
    const validation = ValidateCurrentStep()

    if (!validation.isValid) {
      console.warn('Validation failed:', validation.errors)
      return
    }
  }

  const newStep = direction === 'next' ? CurrentStep.value + 1 : CurrentStep.value - 1
  if (newStep >= 0 && newStep < Steps.length) {
    CurrentStep.value = newStep
    ValidationErrors.value = {}
  }
}

function HandleWeaponSelection(weaponId: number) {
  State.GameId = weaponId
  const selectedWeapon = TemplateWeapons.find(w => w.GameId === weaponId)
  if (selectedWeapon) {
    DisplayedWeapon.value = selectedWeapon
    State.Rarity = selectedWeapon.Rarity
    if (selectedWeapon.MainStatistic) {
      State.MainStat.Type = selectedWeapon.MainStatistic.Type
      State.MainStat.Value = selectedWeapon.MainStatistic.Value.toFixed(1)
    }
    if (selectedWeapon.SecondaryStatistic) {
      State.SecondaryStat.Type = selectedWeapon.SecondaryStatistic.Type
      State.SecondaryStat.Value = selectedWeapon.SecondaryStatistic.Value.toFixed(1)
    }
  }

  NavigateStep('next')
}

function HandleStateUpdate(newState: Partial<typeof State>) {
  Object.assign(State, newState)
  ValidateCurrentStep()
}

function OnSubmit() {
  const validation = ValidateCurrentStep()
  if (!validation.isValid) {
    console.error('Form validation failed:', validation.errors)
    return
  }

  if (!IsFormValid.value) {
    console.error('Form validation failed:', validation.errors)
    return
  }

  const selectedWeapon = TemplateWeapons.find(w => w.GameId === State.GameId)
  if (!selectedWeapon) {
    return OnClose()
  }

  let weaponId: string
  let isNewWeapon: boolean

  if (props.mode === 'edit' && CurrentWeapon.value) {
    if (CurrentWeapon.value.GameId === State.GameId && CurrentWeapon.value.Id) {
      weaponId = CurrentWeapon.value.Id
      isNewWeapon = false
    }
    else {
      weaponId = uuidv4()
      isNewWeapon = true
    }
  }
  else {
    weaponId = uuidv4()
    isNewWeapon = true
  }

  const weaponToCreate: Weapon = {
    ...selectedWeapon,
    Id: weaponId,
    Level: State.Level,
    Rank: State.Rank,
    Rarity: State.Rarity,
    MainStatistic: {
      Type: State.MainStat.Type,
      Value: Number.parseFloat(State.MainStat.Value),
    },
    SecondaryStatistic: {
      Type: State.SecondaryStat.Type,
      Value: Number.parseFloat(State.SecondaryStat.Value),
    },
  }

  if (isNewWeapon) {
    WeaponsStore.Add(weaponToCreate)
  }

  CurrentWeapon.value = weaponToCreate

  return OnClose()
}

function OnClose() {
  emits('close')
}

function GetFieldErrors(fieldPath: string): string[] {
  return ValidationErrors.value[fieldPath] || []
}

function ValidateCurrentStep() {
  const schema = ValidationSchemas[CurrentStep.value as keyof typeof ValidationSchemas]
  if (!schema) {
    return {
      isValid: true,
      errors: {},
    }
  }

  try {
    schema.parse(State)
    ValidationErrors.value = {}
    return {
      isValid: true,
      errors: {},
    }
  }
  catch (error) {
    if (error instanceof z.ZodError) {
      ValidationErrors.value = z.treeifyError(error)
      return {
        isValid: false,
        errors: ValidationErrors.value,
      }
    }
    return {
      isValid: false,
      errors: {},
    }
  }
}

function GetRarityAsNumber(rarity: Rarity) {
  switch (rarity) {
    case Rarity.FIVE_STARS:
      return 5
    case Rarity.FOUR_STARS:
      return 4
    case Rarity.THREE_STARS:
      return 3
    case Rarity.TWO_STARS:
      return 2
    case Rarity.ONE_STAR:
      return 1
    default:
      return 1
  }
}

const FormTitle = computed(() => props.mode === 'create' ? 'Create Weapon' : 'Edit Weapon')
const FormIcon = computed(() => props.mode === 'create' ? 'i-lucide-plus-circle' : 'i-lucide-edit-3')
const SubmitButtonLabel = computed(() => props.mode === 'create' ? 'Create Weapon' : 'Update Weapon')
</script>

<template>
  <MFormContainer
    :title="FormTitle"
    :icon="FormIcon"
    :show-steps="true"
    :steps="FormSteps"
    @close="OnClose"
  >
    <div class="h-full flex flex-col">
      <!-- Step 1: Weapon Selection -->
      <MWeaponFormWeaponStep
        v-if="CurrentStep === 0"
        :available-weapons="AvailableWeapons"
        :selected-weapon-id="State.GameId"
        :errors="GetFieldErrors('GameId')"
        @select-weapon="HandleWeaponSelection"
      />

      <!-- Step 2: Enhancement Configuration -->
      <MWeaponFormEnhancementStep
        v-if="CurrentStep === 1"
        :displayed-weapon="DisplayedWeapon"
        :state="{
          Level: State.Level,
          Rank: State.Rank,
          Rarity: State.Rarity,
          MainStat: State.MainStat,
          SecondaryStat: State.SecondaryStat,
        }"
        :errors="{
          Level: GetFieldErrors('Level'),
          Rank: GetFieldErrors('Rank'),
          Rarity: GetFieldErrors('Rarity'),
        }"
        @update:state="HandleStateUpdate"
      />
    </div>

    <!-- Footer avec navigation -->
    <template #footer>
      <div class="flex justify-between items-center">
        <UButton
          v-if="CurrentStep > 0"
          color="neutral"
          variant="outline"
          label="Previous"
          @click="NavigateStep('previous')"
        />
        <div v-else />

        <UButton
          v-if="CurrentStep < Steps.length - 1"
          color="primary"
          variant="soft"
          label="Next"
          :disabled="!IsFormValid"
          @click="NavigateStep('next')"
        />
        <UButton
          v-else
          color="primary"
          variant="solid"
          :label="SubmitButtonLabel"
          type="submit"
          :disabled="!IsFormValid"
          @click="OnSubmit"
        />
      </div>
    </template>
  </MFormContainer>
</template>
