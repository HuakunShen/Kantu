// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: [
    '@nuxt/ui',
    '@formkit/auto-animate/nuxt',
    '@nuxt/image'
  ],
  components: [{ path: "./components", prefix: "UI" }],
  css: ['~/assets/css/app.css'],
  ui: {
    global: true,
    icons: ['mdi', 'simple-icons']
  },
  image: {

  }
})
