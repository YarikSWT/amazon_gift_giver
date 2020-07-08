export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          'https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css',
      },
    ],
    script: [
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js',
      },
      { src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js' },
      {
        src:
          'https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js',
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: ['element-ui/lib/theme-chalk/index.css'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    '@/plugins/element-ui',
    { src: '@/plugins/vue-excel-export.js', mode: 'client' },
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyCR-NNmdLKXuK6xryDHXJTK4jHMUYlHztU',
          authDomain: 'gifter-fb.firebaseapp.com',
          databaseURL: 'https://gifter-fb.firebaseio.com',
          projectId: 'gifter-fb',
          storageBucket: 'gifter-fb.appspot.com',
          messagingSenderId: '535921478980',
          appId: '1:535921478980:web:a09176557aef6ec3085b11',
          measurementId: 'G-L1M1K1M0CB',
        },
        services: {
          auth: true, // Just as example. Can be any other service.
          realtimeDb: true,
        },
      },
    ],
    [
      'nuxt-mq',
      {
        // Default breakpoint for SSR
        defaultBreakpoint: 'default',
        breakpoints: {
          sm: 450,
          md: 1250,
          lg: Infinity,
        },
      },
    ],
    [
      '@nuxtjs/yandex-metrika',
      {
        id: 'XXXXXX',
        webvisor: true,
        // clickmap:true,
        // useCDN:false,
        // trackLinks:true,
        // accurateTrackBounce:true,
      },
    ],
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    transpile: [/^element-ui/],
  },
}
