export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  nitro: {
    prerender: {
      routes: ['/'],
    },
  },
})
