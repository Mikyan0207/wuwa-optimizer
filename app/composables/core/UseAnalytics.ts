export function useAnalytics() {
  const { gtag } = useGtag()
  const route = useRoute()

  function TrackPageView(screenName?: string, pageTitle?: string) {
    if (import.meta.client) {
      gtag('event', 'screen_view', {
        app_name: 'Wuthering Waves Optimizer',
        screen_name: screenName || route.name || 'Unknown',
        page_title: pageTitle || route.name || 'Wuthering Waves Optimizer',
        page_location: route.fullPath,
      })
    }
  }

  function TrackEvent(eventName: string, eventData: Record<string, any>) {
    if (import.meta.client) {
      gtag('event', eventName, eventData)
    }
  }

  return {
    TrackPageView,
    TrackEvent,
  }
}
