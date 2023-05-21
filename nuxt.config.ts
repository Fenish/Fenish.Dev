// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt"],
  components: true,
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    viewer: true,
  },
});
