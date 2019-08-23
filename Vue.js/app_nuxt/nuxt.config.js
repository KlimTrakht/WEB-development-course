import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: 'red' },
  // loading: '~/components/Loader.vue',

  /*
  ** Global CSS
  */
  css: [
    '~/assets/scss/style.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/core-components',
    '@/plugins/bus',
    '@/plugins/axios',

    // {src: '@/plugins/core-components', ssr: false}
    // {src: '@/plugins/core-components', mode: 'client'},
    // {src: '@/plugins/core-components', mode: 'server'}
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseUrl: 'http://localhost/api/v1'
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },

  router: {
    middleware: 'auth'
  },

  // generate: {
  //   dir: './dist/subdir',
  //   routes: function () {
  //     return [
  //
  //     ]
  //   }
  // }



}
