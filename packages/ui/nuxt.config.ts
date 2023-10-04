// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@formkit/auto-animate/nuxt",
    "nuxt-icon",
    "@nuxt/image",
    '@pinia-plugin-persistedstate/nuxt',
  ],
  components: [{ path: "./components", prefix: "UI" }],
  ui: {
    global: true,
    icons: ["mdi", "simple-icons"],
  },
  image: {},
});
