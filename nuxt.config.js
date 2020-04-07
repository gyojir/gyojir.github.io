module.exports = {
  css: [
    'normalize.css',
    '@/assets/css/main.scss'
  ],
  modules: [
    'nuxt-webfontloader'
  ],
  webfontloader: {
    google: {
      families: ['Noto+Sans+JP', 'Roboto']
    }
  },
}