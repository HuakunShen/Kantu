// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@formkit/auto-animate/nuxt",
    "nuxt-icon",
    "@nuxt/image",
    "@pinia/nuxt",
  ],
  ui: {
    global: true,
    icons: ["mdi", "simple-icons"],
  },
  components: true,
  extends: ["../../packages/ui"],
});
