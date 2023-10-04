// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
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
    icons: ["mdi", "simple-icons", "tabler", "game-icons"],
  },
  components: true,
  extends: ["../../packages/ui"]
});
