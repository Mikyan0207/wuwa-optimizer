import type Character from '~/Core/Interfaces/Character'
import { Loader } from '@pixi/loaders'
import { Spine } from 'pixi-spine'
import * as PIXI from 'pixi.js'
import { useCharacter } from '~/composables/characters/UseCharacter'

export function useAnimatedArt(character: Character, canvasRef: Ref<HTMLCanvasElement | undefined>) {
  const { GetAnimatedArt } = useCharacter(character)
  const AnimatedArt = computed(() => GetAnimatedArt())

  const CanvasRef = computed(() => toValue(canvasRef))
  const App = ref<PIXI.Application | undefined>(undefined)
  const LoaderInstance = ref<Loader>()
  const SpineAnimation = ref<Spine>()
  const IsSpineLoaded = ref(false)

  function Initialize() {
    if (App.value || !CanvasRef.value)
      return

    const container = CanvasRef.value.parentElement

    if (!container)
      return

    const rect = container.getBoundingClientRect()

    App.value = new PIXI.Application({
      view: CanvasRef.value,
      width: rect.width,
      height: rect.height,
      backgroundColor: 0x000000,
      antialias: true,
      resolution: window.devicePixelRatio || 1,
      autoDensity: true,
    })
  }

  function Destroy() {
    if (App.value) {
      App.value.destroy(true, { children: true })
    }
  }

  function LoadSpineModel() {
    if (!App.value)
      return

    if (!AnimatedArt.value)
      return

    if (!LoaderInstance.value)
      LoaderInstance.value = new Loader()

    const cachedResource = LoaderInstance.value.resources[`${character.Id}`]

    console.log('Cached Resource', cachedResource)

    if (cachedResource && cachedResource.spineData) {
      SpineAnimation.value = new Spine(cachedResource.spineData)

      AdjustSpineToContainer(AnimatedArt.value.OffsetX ?? 0, AnimatedArt.value.OffsetY ?? 0)

      if (SpineAnimation.value.state.hasAnimation('idle')) {
        SpineAnimation.value.state.setAnimation(0, 'idle', true)
      }

      App.value!.stage.addChild(SpineAnimation.value)
      IsSpineLoaded.value = true

      return
    }

    LoaderInstance
      .value
      .add(`${character.Id}`, AnimatedArt.value.Skeleton, {
        metadata: {
          spineAtlasFile: AnimatedArt.value.Atlas,
        },
      })
      .load((_, resources) => {
        const resource = resources[`${character.Id}`]
        if (resource && resource.spineData) {
          SpineAnimation.value = new Spine(resource.spineData)

          AdjustSpineToContainer(AnimatedArt.value!.OffsetX ?? 0, AnimatedArt.value!.OffsetY ?? 0)

          if (SpineAnimation.value.state.hasAnimation('idle')) {
            SpineAnimation.value.state.setAnimation(0, 'idle', true)
          }

          App.value!.stage.addChild(SpineAnimation.value)
          IsSpineLoaded.value = true
        }
      })
  }

  function AdjustSpineToContainer(offsetX: number, offsetY: number) {
    if (!SpineAnimation.value || !App.value)
      return

    const container = CanvasRef.value?.parentElement

    if (!container)
      return

    const rect = container.getBoundingClientRect()
    const spineBounds = SpineAnimation.value.getLocalBounds()

    const scaleX = rect.width / spineBounds.width
    const scaleY = rect.height / spineBounds.height
    const scale = Math.max(scaleX, scaleY) * 2

    SpineAnimation.value.scale.set(scale)
    SpineAnimation.value.x = rect.width / 2 + offsetX
    SpineAnimation.value.y = rect.height / 2 + offsetY
  }

  return {
    Initialize,
    Destroy,
    LoadSpineModel,
    IsSpineLoaded,
  }
}
