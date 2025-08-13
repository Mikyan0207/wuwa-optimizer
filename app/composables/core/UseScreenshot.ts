import { domToBlob } from 'modern-screenshot'

export function useScreenshot(htmlRef: Ref<HTMLElement | null>) {
  const HtmlElement = computed(() => toValue(htmlRef))
  const Toast = useToast()

  const TargetWidth = ref(2560)
  const TargetHeight = ref(1440)

  async function TakeScreenShotAsync(onBeforeScreenshot?: () => void, onAfterScreenshot?: () => void) {
    if (!HtmlElement.value) {
      return
    }

    await new Promise(resolve => setTimeout(resolve, 100))

    const originalWidth = HtmlElement.value.clientWidth
    const originalHeight = HtmlElement.value.clientHeight
    const aspectRatio = originalWidth / originalHeight

    let targetWidth = TargetWidth.value
    let targetHeight = TargetHeight.value

    if (aspectRatio > 16 / 9) {
      targetHeight = Math.round(targetWidth / aspectRatio)
    }
    else {
      targetWidth = Math.round(targetHeight * aspectRatio)
    }

    const scaleX = targetWidth / originalWidth
    const scaleY = targetHeight / originalHeight
    const scale = Math.max(scaleX, scaleY)

    try {
      onBeforeScreenshot?.()
      const blob = await domToBlob(HtmlElement.value, {
        height: targetHeight,
        width: targetWidth,
        style: {
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
          imageRendering: 'crisp-edges',
        },
        quality: 1,
        type: 'image/png',
        backgroundColor: '#000000',
      })

      if (blob) {
        const url = URL.createObjectURL(blob)
        window.open(url, '_blank')

        setTimeout(() => {
          URL.revokeObjectURL(url)
        }, 1000)

        Toast.add({
          title: 'Screenshot generated!',
          description: `Generated image (${targetWidth}x${targetHeight}) opened in new tab.`,
          color: 'success',
        })
      }
    }
    catch (error) {
      Toast.add({
        title: 'Screenshot failed',
        description: 'Failed to generate high-quality screenshot.',
        color: 'error',
      })
    }
    finally {
      onAfterScreenshot?.()
    }
  }

  return {
    TargetWidth,
    TargetHeight,
    TakeScreenShotAsync,
  }
}
