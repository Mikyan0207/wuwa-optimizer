<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui'
import type { Character } from '~/Core/Models/Character'
import * as z from 'zod'
import { StatType } from '~/Core/Enums/StatType'
import { STAT_NAMES } from '~/Core/Statistics'

const props = defineProps<{
  character: Character
}>()

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

function OnSubmit(_: FormSubmitEvent<FormSchema>) {
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
    title="Stats Weights"
    @close.prevent="OnClose"
  >
    <UButton
      color="neutral"
      variant="subtle"
      icon="i-carbon:distribute-horizontal-center"
      :trailing="false" size="xs"
      @click.prevent="ShowWeightsModal = true"
    >
      Scoring Algorithm
    </UButton>
    <template #body>
      <UForm :schema="EditWeightsSchema" :state="State" @submit="OnSubmit">
        <div v-if="State.Weights" class="grid grid-cols-2 gap-2">
          <div v-for="(v, idx) in State.Weights" :key="idx">
            <UFormField :label="STAT_NAMES[v.Type]">
              <UInputNumber
                v-model="v.Value"
                :min="0"
                :max="1"
                :step="0.25"
                orientation="vertical"
                color="neutral"
                variant="subtle"
                :highlight="true"
              />
            </UFormField>
          </div>
        </div>
        <div class="w-full flex items-center justify-end gap-2">
          <UButton label="Cancel" color="neutral" variant="soft" size="xs" @click.prevent="OnClose()" />
          <UButton type="submit" label="Submit" color="primary" variant="solid" size="xs" />
        </div>
      </UForm>
    </template>
  </UModal>
</template>
