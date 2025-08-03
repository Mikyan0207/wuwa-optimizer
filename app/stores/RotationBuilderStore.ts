import type Character from '~/Core/Interfaces/Character'
import type { Section } from '~/Core/Interfaces/Section'

export const useRotationBuilderStore = defineStore('RotationBuilderStore', () => {
  const Steps = ref<Section[]>([
    {
      Index: 0,
      Title: 'Opener',
      Actions: [],
    },
  ])

  const SelectedTeam = ref<Character[]>([])

  function ResetStore() {
    Steps.value = [
      {
        Index: 0,
        Title: 'Opener',
        Actions: [],
      },
    ]
    SelectedTeam.value = []
  }

  function AddCharacterAction(sectionIdx?: number) {
    const targetSectionIdx = sectionIdx ?? Steps.value.length - 1
    const section = Steps.value[targetSectionIdx]

    if (section === undefined) {
      return
    }

    section.Actions.push({
      Index: section.Actions.length,
      Type: 'ACTION',
      RepeatCount: 1,
    })
  }

  function AddCharacterSwap(sectionIdx?: number) {
    const targetSectionIdx = sectionIdx ?? Steps.value.length - 1
    const section = Steps.value[targetSectionIdx]

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

  function RemoveSection(sectionIdx: number) {
    if (sectionIdx >= 0 && sectionIdx < Steps.value.length) {
      Steps.value.splice(sectionIdx, 1)
      Steps.value.forEach((section, index) => {
        section.Index = index
      })
    }
  }

  function RemoveAction(sectionIdx: number, idx: number) {
    const section = Steps.value[sectionIdx]

    if (section && idx >= 0) {
      section.Actions.splice(idx, 1)
      section.Actions.forEach((action, index) => {
        action.Index = index
      })
    }
  }

  function MoveSection(fromIndex: number, toIndex: number) {
    if (fromIndex === toIndex || fromIndex < 0 || toIndex < 0 || fromIndex >= Steps.value.length || toIndex >= Steps.value.length) {
      return
    }

    if (!Steps.value[fromIndex] || !Steps.value[toIndex]) {
      return
    }

    const sections = Steps.value.splice(fromIndex, 1)
    if (sections.length === 0)
      return

    const section = sections[0]
    if (section) {
      Steps.value.splice(toIndex, 0, section)

      Steps.value.forEach((section, index) => {
        section.Index = index
      })
    }
  }

  function MoveAction(fromSectionIdx: number, fromActionIdx: number, toSectionIdx: number, toActionIdx: number) {
    if (fromSectionIdx < 0 || toSectionIdx < 0
      || fromSectionIdx >= Steps.value.length || toSectionIdx >= Steps.value.length) {
      return
    }

    const fromSection = Steps.value[fromSectionIdx]
    const toSection = Steps.value[toSectionIdx]

    if (!fromSection || !toSection) {
      return
    }

    if (fromActionIdx < 0 || fromActionIdx >= fromSection.Actions.length) {
      return
    }

    if (toActionIdx < 0 || toActionIdx > toSection.Actions.length) {
      return
    }

    const actionToMove = fromSection.Actions[fromActionIdx]
    if (!actionToMove) {
      return
    }

    if (fromSectionIdx === toSectionIdx && fromActionIdx === toActionIdx) {
      return
    }

    fromSection.Actions.splice(fromActionIdx, 1)

    if (fromSectionIdx === toSectionIdx) {
      const newIndex = fromActionIdx < toActionIdx ? toActionIdx - 1 : toActionIdx
      fromSection.Actions.splice(newIndex, 0, actionToMove)
    }
    else {
      toSection.Actions.splice(toActionIdx, 0, actionToMove)
    }

    ReindexAllActions()
  }

  function ReindexAllActions() {
    try {
      Steps.value.forEach((section, sectionIndex) => {
        if (section) {
          section.Index = sectionIndex
          if (section.Actions && Array.isArray(section.Actions)) {
            section.Actions.forEach((action, actionIndex) => {
              if (action) {
                action.Index = actionIndex
              }
            })
          }
        }
      })
    }
    catch (error) {
      console.error('Error reindexing actions:', error)
    }
  }

  return {
    Steps,
    SelectedTeam,
    ResetStore,
    AddCharacterAction,
    AddCharacterSwap,
    AddSection,
    RemoveSection,
    RemoveAction,
    MoveSection,
    MoveAction,
    ReindexAllActions,
  }
})
