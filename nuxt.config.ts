// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },

  app: {
    head: {
      title: "DownWonder",
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon.ico",
        },
      ],
    },
  },

  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxtjs/supabase", "@pinia/nuxt"],

  runtimeConfig: {
    supabaseKey: process.env.SUPABASE_KEY || "",
    public: {
      supabaseUrl: process.env.SUPABASE_URL || "",
    },
  },

  pinia: {
    storesDirs: ["./stores/**"],
  },

  supabase: {
    redirect: true,
    redirectOptions: {
      login: "/login",
      callback: "/confirm",
      include: ["/admin/*"],
    },
  },
});
