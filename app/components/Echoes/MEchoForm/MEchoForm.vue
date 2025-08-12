<script setup lang="ts">
import type Echo from '~/Core/Interfaces/Echo'
import type Sonata from '~/Core/Interfaces/Sonata'
import { v4 as uuidv4 } from 'uuid'
import { z } from 'zod'
import { EchoCost } from '~/Core/Enums/EchoCost'
import { Rarity } from '~/Core/Enums/Rarity'
import { StatType } from '~/Core/Enums/StatType'

interface EchoFormProps {
  echoSlot: number
  echo: Echo | undefined
  buildId?: string | undefined
  mode?: 'create' | 'edit'
  open?: boolean
}

const props = withDefaults(defineProps<EchoFormProps>(), {
  mode: 'create',
})

const emits = defineEmits<{
  close: []
}>()

const EchoesStore = useEchoesStore()

const CurrentCharacterStore = useCurrentCharacterStore()

const Steps = [
  { id: 'echo', title: 'Echo', description: 'Select your Echo and Sonata effect.' },
  { id: 'sonata', title: 'Sonata', description: 'Select your Sonata effect.' },
  { id: 'stats', title: 'Stats', description: 'Edit the statistics of your selected Echo.' },
]

const CurrentStep = ref(0)
const DisplayedEcho = ref<Echo | undefined>(undefined)

const Filters = reactive({
  sonata: undefined as Sonata | undefined,
  cost: undefined as EchoCost | undefined,
})

const State = reactive({
  EchoGameId: -1,
  EchoId: '',
  Rarity: Rarity.FIVE_STARS,
  Level: 25,
  MainStat: {
    Type: StatType.NONE,
    Value: '0',
  },
  SecondaryStat: {
    Type: StatType.NONE,
    Value: '0',
  },
  Cost: EchoCost.FOUR_COST,
  Sonata: {
    Name: '',
  },
  SubStats: Array.from({ length: 5 }, () => ({
    Type: StatType.NONE,
    Value: '0',
  })),
})

const EchoSelectionSchema = z.object({
  EchoGameId: z.number().min(0, 'Please select a valid Echo.'),
  Cost: z.enum(EchoCost),
})

const SonataSelectionSchema = z.object({
  EchoGameId: z.number().min(0, 'Please select a valid Echo.'),
  Cost: z.enum(EchoCost),
  Sonata: z.object({
    Name: z.string().min(1, 'Please select a Sonata effect.'),
  }),
})

const StatsConfigurationSchema = z.object({
  EchoGameId: z.number().min(0, 'Please select a valid Echo.'),
  Cost: z.enum(EchoCost),
  Level: z.number().min(1).max(25, 'Level must be between 1 and 25.'),
  Rarity: z.enum(Rarity),
  Sonata: z.object({
    Name: z.string().min(1, 'Please select a Sonata effect.'),
  }),
  MainStat: z.object({
    Type: z.enum(StatType).refine(
      val => val !== StatType.NONE,
      'Please select a main stat.',
    ),
    Value: z.string().min(1, 'Main stat value is required.').refine(
      val => !Number.isNaN(Number(val)) && Number(val) > 0,
      'Main stat value must be a positive number.',
    ),
  }),
  SecondaryStat: z.object({
    Type: z.enum(StatType).refine(
      val => val !== StatType.NONE,
      'Please select a secondary stat.',
    ),
    Value: z.string().min(1, 'Secondary stat value is required.').refine(
      val => !Number.isNaN(Number(val)) && Number(val) > 0,
      'Secondary stat value must be a positive number.',
    ),
  }),
  SubStats: z.array(z.object({
    Type: z.enum(StatType),
    Value: z.string().min(1, 'Sub stat value is required.').refine(
      val => !Number.isNaN(Number(val)) && Number(val) >= 0,
      'Sub stat value must be a non-negative number.',
    ),
  })),
})

const ValidationSchemas = {
  0: EchoSelectionSchema,
  1: SonataSelectionSchema,
  2: StatsConfigurationSchema,
}

const ValidationErrors = ref<Record<string, string[]>>({})

const ValidationRules: Record<number, () => boolean> = {
  0: () => State.EchoGameId !== -1,
  1: () => State.EchoGameId !== -1 && State.Sonata.Name !== '',
  2: () => State.EchoGameId !== -1 && State.Sonata.Name !== '' && State.MainStat.Type !== StatType.NONE && State.SecondaryStat.Type !== StatType.NONE,
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

const CurrentEcho = computed<Echo | undefined>(() =>
  props.mode === 'edit' ? props.echo : undefined,
)

onMounted(() => {
  if (props.mode === 'edit' && CurrentEcho.value !== undefined && CurrentEcho.value.Id !== undefined) {
    State.EchoGameId = CurrentEcho.value.GameId
    State.EchoId = CurrentEcho.value.Id
    State.MainStat.Type = CurrentEcho.value.MainStatistic!.Type
    State.MainStat.Value = CurrentEcho.value.MainStatistic!.Value.toFixed(1)
    State.SecondaryStat.Type = CurrentEcho.value.SecondaryStatistic!.Type
    State.SecondaryStat.Value = CurrentEcho.value.SecondaryStatistic!.Value.toFixed(1)
    State.Sonata.Name = CurrentEcho.value.Sonata.find(x => x.IsSelected)?.Name || ''
    State.Level = CurrentEcho.value.Level
    State.Rarity = CurrentEcho.value.Rarity
    State.Cost = CurrentEcho.value.Cost

    const existingStats = CurrentEcho.value.Statistics || []
    State.SubStats = Array.from({ length: 5 }, (_, index) => {
      if (index < existingStats.length && existingStats[index]) {
        return {
          Type: existingStats[index]!.Type,
          Value: existingStats[index]!.Value.toFixed(1),
        }
      }
      else {
        return {
          Type: StatType.NONE,
          Value: '0',
        }
      }
    })

    if (State.EchoGameId !== -1 && State.Sonata.Name !== '') {
      DisplayedEcho.value = CurrentEcho.value
      CurrentStep.value = 2
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

function HandleEchoSelection(echoId: number, cost: EchoCost) {
  State.EchoGameId = echoId
  State.Cost = cost
  DisplayedEcho.value = EchoesStore.GetByGameId(echoId)
  NavigateStep('next')
}

function HandleSonataSelection(sonata: Sonata) {
  State.Sonata.Name = sonata.Name
  NavigateStep('next')
}

function HandleStateUpdate(newState: Partial<typeof State>) {
  Object.assign(State, newState)
  ValidateCurrentStep()
}

async function OnSubmit() {
  const validation = ValidateCurrentStep()
  if (!validation.isValid) {
    console.error('Form validation failed:', validation.errors)
    return
  }

  if (!IsFormValid.value) {
    return
  }

  const e = unref(EchoesStore.GetByGameId(State.EchoGameId))

  if (!e) {
    return OnClose()
  }

  DisplayedEcho.value = e

  CurrentCharacterStore.UpdateEcho(props.echoSlot, {
    ...e,
    Id: props.mode === 'create' ? uuidv4() : State.EchoId,
    Rarity: State.Rarity,
    Level: State.Level,
    MainStatistic: {
      Type: State.MainStat.Type,
      Value: Number.parseFloat(State.MainStat.Value),
    },
    SecondaryStatistic: {
      Type: State.SecondaryStat.Type,
      Value: Number.parseFloat(State.SecondaryStat.Value),
    },
    Statistics: State.SubStats
      .filter(s => s.Type !== StatType.NONE)
      .map(s => ({
        Type: s.Type,
        Value: Number.parseFloat(s.Value),
      })),
    Sonata: e.Sonata.map(s => ({
      ...s,
      IsSelected: s.Name === State.Sonata.Name,
    })),
  })

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

const FormTitle = computed(() => props.mode === 'create' ? 'Create Echo' : 'Edit Echo')
const FormIcon = computed(() => props.mode === 'create' ? 'i-lucide-plus-circle' : 'i-lucide-edit-3')
const SubmitButtonLabel = computed(() => props.mode === 'create' ? 'Create Echo' : 'Update Echo')
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
      <!-- Step 1: Echo Selection -->
      <MEchoFormEchoStep
        v-if="CurrentStep === 0"
        :state="{ EchoId: State.EchoGameId, Cost: State.Cost }"
        :filters="Filters"
        :errors="GetFieldErrors('EchoId')"
        @update:state="(newState: { EchoId: number; Cost: EchoCost }) => { State.EchoGameId = newState.EchoId; State.Cost = newState.Cost }"
        @update:filters="(newFilters: typeof Filters) => Object.assign(Filters, newFilters)"
        @select-echo="HandleEchoSelection"
      />

      <!-- Step 2: Sonata Selection -->
      <MEchoFormSonataStep
        v-if="CurrentStep === 1"
        :displayed-echo="DisplayedEcho"
        :selected-sonata-name="State.Sonata.Name"
        :errors="GetFieldErrors('Sonata.Name')"
        @select-sonata="HandleSonataSelection"
      />

      <!-- Step 3: Stats Configuration -->
      <MEchoFormStatsStep
        v-if="CurrentStep === 2"
        :displayed-echo="DisplayedEcho"
        :selected-sonata-name="State.Sonata.Name"
        :echo-slot="props.echoSlot"
        :state="{
          Level: State.Level,
          Rarity: State.Rarity,
          MainStat: State.MainStat,
          SecondaryStat: State.SecondaryStat,
          SubStats: State.SubStats,
          Cost: State.Cost,
        }"
        :errors="{
          Level: GetFieldErrors('Level'),
          Rarity: GetFieldErrors('Rarity'),
          MainStat: GetFieldErrors('MainStat'),
          SecondaryStat: GetFieldErrors('SecondaryStat'),
          SubStats: GetFieldErrors('SubStats'),
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
