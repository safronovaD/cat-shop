// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Cat shop',
      htmlAttrs: {lang: 'ru'},
      link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}],
    }
  },
  modules: [
    '@pinia/nuxt',
  ],
  css: [
    '@/assets/styles/styles.scss'
  ]
})