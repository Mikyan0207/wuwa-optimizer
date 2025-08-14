export function useAnalytics() {
  const { gtag } = useGtag()

  function AutoTrackPageView() {
    if (import.meta.client) {
      gtag('event', 'screen_view', {
        app_name: 'Wuthering Waves Optimizer',
        screen_name: document.title || 'Unknown',
        page_title: document.title || 'Wuthering Waves Optimizer',
        page_location: window.location.href,
      })
    }
  }

  function TrackEvent(eventName: string, eventData: Record<string, any>) {
    if (import.meta.client) {
      gtag('event', eventName, eventData)
    }
  }

  return {
    AutoTrackPageView,
    TrackEvent,
  }
}
