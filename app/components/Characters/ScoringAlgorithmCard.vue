<script setup lang="ts">
import type Character from '~/Core/Interfaces/Character'
import * as z from 'zod'
import { StatType } from '~/Core/Enums/StatType'

const props = defineProps<{
  character: Character
}>()

const { t } = useI18n()

const CharactersStore = useCharactersStore()
const ShowWeightsModal = ref<boolean>(false)

const EditWeightsSchema = z.object({
  Weights: z.array(z.object({
    Type: z.nativeEnum(StatType),
    Value: z.number().nonnegative(),
  })),
})

type FormSchema = z.output<typeof EditWeightsSchema>

const State = reactive<Partial<FormSchema>>({
  Weights: Object.entries(props.character.StatsWeights!)
    .filter(([key]) => key !== StatType.NONE)
    .map(([key, value]) => {
      return {
        Type: key as StatType,
        Value: value,
      }
    }),
})

function OnSubmit() {
  if (State.Weights !== undefined) {
    CharactersStore.UpdateStatsWeights(props.character.Id, State.Weights)
  }
  ShowWeightsModal.value = false
}

function OnClose() {
  ShowWeightsModal.value = false
}
</script>

<template>
  <UModal
    v-model:open="ShowWeightsModal"
    :title="t('title_scoring_modal')"
    :ui="{
      content: 'xl:min-w-4xl w-5xl min-w-5xl xl:w-4xl',
      body: '',
    }"
    @close.prevent="OnClose"
  >
    <UButton
      color="neutral"
      variant="subtle"
      icon="i-carbon:distribute-horizontal-center"
      :trailing="false" size="xs"
      @click.prevent="ShowWeightsModal = true"
    >
      {{ t('label_scoring_algorithm') }}
    </UButton>
    <template #body>
      <div class="grid grid-cols-2 gap-2">
        <UCard>
          <USeparator label="Weights" class="mb-3" />
          <UForm :schema="EditWeightsSchema" :state="State" @submit="OnSubmit">
            <div v-if="State.Weights" class="grid grid-cols-2 gap-4">
              <div v-for="(v, idx) in State.Weights" :key="idx">
                <UFormField :label="t(`label_stat_${v.Type.toLowerCase()}`)">
                  <UInputNumber
                    v-model="v.Value"
                    :min="0"
                    :max="1"
                    :step="0.05"
                    orientation="vertical"
                    color="neutral"
                    variant="subtle"
                    size="xs"
                  />
                </UFormField>
              </div>
            </div>
          </UForm>
        </UCard>
        <div class="space-y-2">
          <UCard>
            <USeparator label="Character Scoring" class="mb-3" />
          </UCard>
          <UCard>
            <USeparator label="Echoes Scoring" class="mb-3" />
          </UCard>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="w-full flex justify-end">
        <UButtonGroup size="md">
          <UButton
            color="neutral" variant="outline" label="Close"
            @click.prevent="OnClose()"
          />
          <UButton color="primary" variant="subtle" label="Submit" @click.prevent="OnSubmit()" />
        </UButtonGroup>
      </div>
    </template>
  </UModal>
</template>
