module.exports = {
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
    'nuxt-webfontloader'
  ],
  webfontloader: {
    google: {
      families: ['Noto+Sans+JP', 'Roboto']
    }
  },
  buildModules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-110333905-1'
    }]
  ]
}