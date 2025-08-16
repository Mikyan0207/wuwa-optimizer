import "pixi-spine"
import * as PIXI from "pixi.js"

export default defineNuxtPlugin({
  name: "pixi-plugin",
  enforce: "post",
  setup() {
    return {
        provide: {
            Pixi: PIXI,
        }
    }
  },
})

declare module "#app" {
  interface NuxtApp {
    Pixi: typeof PIXI
  }
}

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    Pixi: typeof PIXI
  }
}
