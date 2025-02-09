export default defineAppConfig({
  ui: {
    colors: {
      primary: 'amber',
      neutral: 'zinc',
    },
    tooltip: {
      slots: {
        content: 'h-auto! p-2 text-xs font-normal bg-black/44 backdrop-blur-sm',
      },
    },
    button: {
      slots: {
        base: 'cursor-pointer',
      },
    },
    modal: {
      slots: {
        content: 'bg-black/44 ring-2 border border-white/14 rounded-xs ring-white/14 backdrop-blur-sm',
      },
    },
    card: {
      slots: {
        root: 'bg-black/44 ring border border-white/14 rounded-xs ring-white/14 backdrop-blur-sm',
        body: 'p-4 sm:p-4',
      },
    },
    skeleton: {
      base: 'animate-none',
    },
  },
})
