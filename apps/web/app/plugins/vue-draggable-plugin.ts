import VueDraggable from 'vuedraggable'

export default defineNuxtPlugin({
  name: 'vue-draggable-plugin',
  enforce: 'post',
  async setup(nuxtApp) {
    nuxtApp.vueApp.component('VueDraggable', VueDraggable)
  },
})