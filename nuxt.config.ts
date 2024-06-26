// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
