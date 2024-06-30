export default defineNuxtConfig({
  css: [
    'normalize.css',
    '@/assets/css/main.scss'
  ],
  head: {
    titleTemplate: "%s | gyojir",
    meta: [
      { charset: 'utf-8' },
      {name: "viewport", content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"}
    ]
  },
  modules: [
    '@nuxtjs/google-fonts',
    'nuxt-gtag',
  ],
  googleFonts: {
    families: {
      'Noto+Sans+JP': true,
      'Roboto': true
    },
  },
  gtag: {
    id: 'G-YLDS0L17KF',
  },
})