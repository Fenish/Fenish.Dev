// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt", "nuxt-icon"],
  components: true,
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    viewer: true,
  },
});
