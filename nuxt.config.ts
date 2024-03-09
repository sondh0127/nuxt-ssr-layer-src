import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  css: [
    resolve('./hyrd-ui/hyrd-ui.css'),
  ],
})
