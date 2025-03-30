import type Rotation from '~/Core/Interfaces/Rotation'

export const useRotationsStore = defineStore('RotationsStore', () => {
  const Rotations = useLocalStorage<Rotation[]>('rotationsd', [])

  return {
    Rotations,
  }
})
