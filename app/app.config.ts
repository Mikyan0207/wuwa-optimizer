export default defineAppConfig({
  // 8a7a52
  ui: {
    colors: {
      primary: 'gold',
      neutral: 'neutral',
    },
    card: {
      slots: {
        root: 'bg-neutral-900/70 backdrop-blur-sm border border-gold-200/30 ring-0',
        body: 'p-2 sm:p-4',
      },
    },
    modal: {
      slots: {
        content: 'bg-neutral-900/70 backdrop-blur-sm ring-0 border border-gold-200/30',
      },
    },
    skeleton: {
      base: 'animate-none',
    },
    tooltip: {
      slots: {
        content: 'h-auto! p-2 text-xs font-normal bg-neutral-900/70 backdrop-blur-sm ring ring-gold-200/30',
        arrow: 'fill-(--color-gold-200)/30 backdrop-blur-sm',
      },
    },
  },
})
