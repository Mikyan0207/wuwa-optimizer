/* eslint-disable perfectionist/sort-imports */
import { Spine } from "pixi-spine"

import type Character from "~/Core/Interfaces/Character"
import * as PIXI from "pixi.js"
import { GetCharacterAnimatedArt, HasAnimatedArt } from "~/Core/Utils/CharacterUtils"

// Check if 'console' is undefined and, if so, create a basic fallback.
if (typeof console === "undefined") {
  // Define a global 'console' object.
  (window as any).console = {
    // Provide a no-op function for 'log' and other common methods.
    log: () => {},
    warn: () => {},
    error: () => {},
    info: () => {},
    debug: () => {},
  }
}

export function useAnimatedArt(character: Ref<Character | undefined>, canvasRef: Ref<HTMLCanvasElement | undefined>) {
  const CurrentCharacter = computed(() => toValue(character))
  const AnimatedArt = computed(() => GetAnimatedArt())

  const CanvasRef = computed(() => toValue(canvasRef))
  const App = ref<PIXI.Application | undefined>(undefined)
  const SpineAnimation = ref<Spine>()
  const IsSpineLoaded = ref(false)

  function Initialize() {
    if (App.value || !CanvasRef.value || import.meta.server)
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
      powerPreference: "high-performance",
    })
  }

  function Destroy() {
    if (App.value) {
      App.value.destroy(true, { children: true })
    }
  }

  async function LoadSpineModel() {
    if (!App.value || !CurrentCharacter.value || import.meta.server)
      return

    if (!AnimatedArt.value)
      return

    const cachedResource = PIXI.Assets.cache.get(`${CurrentCharacter.value.Id}-skeleton`)

    if (cachedResource && cachedResource.spineData) {
      SpineAnimation.value = new Spine(cachedResource.spineData)

      AdjustSpineToContainer(AnimatedArt.value.OffsetX ?? 0, AnimatedArt.value.OffsetY ?? 0)

      if (SpineAnimation.value.state.hasAnimation("idle")) {
        SpineAnimation.value.state.setAnimation(0, "idle", true)
      }

      App.value!.stage.addChild(SpineAnimation.value)
      IsSpineLoaded.value = true

      return
    }

    PIXI.Assets.addBundle(`${CurrentCharacter.value.Id}`, {
      atlas: AnimatedArt.value.Atlas,
      skeleton: AnimatedArt.value.Skeleton,
    })

    const bundle = await PIXI.Assets.loadBundle(`${CurrentCharacter.value.Id}`) as { atlas: PIXI.TextureSource, skeleton: any }

    if (bundle.skeleton && bundle.atlas) {
      SpineAnimation.value = new Spine(bundle.skeleton.spineData)

      AdjustSpineToContainer(AnimatedArt.value!.OffsetX ?? 0, AnimatedArt.value!.OffsetY ?? 0)

      if (SpineAnimation.value.state.hasAnimation("idle")) {
        SpineAnimation.value.state.setAnimation(0, "idle", true)
      }

      App.value!.stage.addChild(SpineAnimation.value)
      IsSpineLoaded.value = true
    }
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
    const scale = Math.max(scaleX, scaleY) * (AnimatedArt.value?.Scale ?? 1.5)

    SpineAnimation.value.scale.set(scale)
    SpineAnimation.value.x = rect.width / 2 + offsetX
    SpineAnimation.value.y = rect.height / 2 + offsetY
  }

  function GetAnimatedArt() {
    if (!CurrentCharacter.value)
      return undefined

    if (HasAnimatedArt(CurrentCharacter.value)) {
      return GetCharacterAnimatedArt(CurrentCharacter.value)
    }

    return undefined
  }

  return {
    Initialize,
    Destroy,
    LoadSpineModel,
    IsSpineLoaded,
  }
}
