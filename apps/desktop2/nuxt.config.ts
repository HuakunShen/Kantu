// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: [
    "@nuxt/ui",
    "@formkit/auto-animate/nuxt",
    "nuxt-icon",
    "@nuxt/image",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
  ],
  ui: {
    global: true,
    icons: [
      "mdi",
      "simple-icons",
      "bi",
      "icon-park-outline",
      "ion",
      "tabler",
      "uil",
    ],
  },
  components: true,
  extends: ["../../packages/ui"],
})
