// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { name: "Icarus.Sun's Blog" }
      ]
    }
  },
  devtools: { enabled: true },
  srcDir: 'src/',
  css: [
    '@/assets/styles/main.css',
  ],
  modules: [
    '@unocss/nuxt',
    '@vueuse/nuxt',
  ],
})
