// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    baseUrl: process.env.BASE_URL,
    requestHeaders: process.env.REQUEST_HEADERS
  }
})
