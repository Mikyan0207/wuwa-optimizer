export default defineAppConfig({
  // 8a7a52
  ui: {
    badge: {
      slots: {
        base: 'rounded-xs!',
      },
    },
    colors: {
      primary: 'gold',
      neutral: 'neutral',
    },
    card: {
      slots: {
        root: 'bg-neutral-900 backdrop-blur-sm rounded-xs border border-neutral-700 ring-0',
        body: 'p-2 sm:p-4',
      },
    },
    modal: {
      slots: {
        content: 'bg-neutral-900/70 backdrop-blur-sm rounded-xs',
      },
    },
    skeleton: {
      base: 'animate-none rounded-xs',
    },
    tabs: {
      slots: {
        list: 'bg-neutral-900/70 backdrop-blur-sm ring-0 border border-gold-600',
      },
    },
    tooltip: {
      slots: {
        content: 'h-auto! p-2 text-xs font-normal bg-neutral-900/70 backdrop-blur-sm ring ring-gold-600',
        arrow: 'fill-(--color-gold-500) backdrop-blur-sm',
      },
    },
  },
})
