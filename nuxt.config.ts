// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    'nuxt-icon'
  ],
  content: {
    // ... options
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      link: [
        { rel: 'preconnect', href: "https://rsms.me/" },
        { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' },
      ],
    },
    buildAssetsDir: "/static/", // github pages
  },
  css: ['~/assets/css/main.css'],
  ssr: false, // github pages
  content: {
    experimental: {
        clientDb: true // github pages
    }
},
})
