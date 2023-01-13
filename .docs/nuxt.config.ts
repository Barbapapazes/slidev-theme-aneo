export default defineNuxtConfig({
  app: { baseURL: process.env.NUXT_APP_BASE_URL || '' },
  extends: '@nuxt-themes/docus',
  nitro: {
    prerender: {
      routes: ['/'],
    },
  },
})
