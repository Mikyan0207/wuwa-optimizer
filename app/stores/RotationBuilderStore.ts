import type { Section } from '~/Core/Interfaces/Section'

export const useRotationBuilderStore = defineStore('RotationBuilderStore', () => {
  const Steps = ref<Section[]>([
    {
      Index: 0,
      Title: 'opener',
      Actions: [],
    },
  ])

  function AddCharacterAction() {
    const section = Steps.value[Steps.value.length - 1]

    if (section === undefined) {
      return
    }

    section.Actions.push({
      Index: section.Actions.length,
      Type: 'ACTION',
    })
  }

  function AddCharacterSwap() {
    const section = Steps.value[Steps.value.length - 1]

    if (section === undefined) {
      return
    }

    section.Actions.push({
      Index: section.Actions.length,
      Type: 'SWAP',
    })
  }

  function AddSection() {
    Steps.value.push({
      Index: Steps.value.length,
      Title: 'SECTION',
      Actions: [],
    })
  }

  function RemoveCharacterAction(sectionIdx: number, idx: number) {
    const section = Steps.value[sectionIdx]

    if (section && idx >= 0 && idx < section.Actions.length) {
      section.Actions.splice(idx, 1)
    }
  }

  return {
    Steps,
    AddCharacterAction,
    AddCharacterSwap,
    AddSection,
    RemoveCharacterAction,
  }
})
