export default defineAppConfig({
  ui: {
    colors: {
      primary: 'amber',
      neutral: 'neutral',
    },
    card: {
      slots: {
        body: 'p-4 sm:p-2',
      },
    },
    skeleton: {
      base: 'animate-none',
    },
    tooltip: {
      slots: {
        content: 'h-auto! p-2 text-xs font-normal',
      },
    },
  },
})
