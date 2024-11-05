// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },

  app: {
    head: {
      link: [{rel: 'icon', type: 'image/png', href: '/logo.png'}]
    }
  },

  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  },

  modules: ['@nuxtjs/supabase'],

  runtimeConfig: {
    supabaseKey: process.env.SUPABASE_KEY || '',
    public: {
      supabaseUrl: process.env.SUPABASE_URL || '',
    },
  },

  supabase: {
    redirect: false
  }
})