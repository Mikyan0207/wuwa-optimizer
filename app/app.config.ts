export default defineAppConfig({
  ui: {
    colors: {
      primary: 'amber',
      neutral: 'neutral',
    },
    card: {
      slots: {
        root: 'bg-neutral-900/70 backdrop-blur-sm ring ring-white/10',
        body: 'p-2 sm:p-4',
      },
    },
    modal: {
      slots: {
        content: 'bg-neutral-900/70 backdrop-blur-sm ring ring-white/10',
      },
    },
    skeleton: {
      base: 'animate-none',
    },
    tooltip: {
      slots: {
        content: 'h-auto! p-2 text-xs font-normal bg-neutral-900/70 backdrop-blur-sm ring ring-white/10',
        arrow: 'fill-white/15 backdrop-blur-sm',
      },
    },
  },
})
