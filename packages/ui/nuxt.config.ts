// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: [
    "@nuxt/ui",
    "@formkit/auto-animate/nuxt",
    "nuxt-icon",
    "@nuxt/image",
  ],
  components: [{ path: "./components", prefix: "UI" }],
  ui: {
    global: true,
    icons: ["mdi", "simple-icons"],
  },
  image: {},
});
