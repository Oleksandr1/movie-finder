// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss', '@element-plus/nuxt', '@nuxtjs/eslint-module', '@element-plus/nuxt'],
  // elementPlus: { /** Options */ }
});
