export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Chopeable | Discover & Book Your Favourite Restaurants',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  ssr: false,
  // target: 'static',

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/vuetify', ssr: false },
    { src: '~/plugins/google-maps', ssr: false },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/dotenv',
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: process.env.FIREBASE_API_KEY,
          authDomain: "vue-calendar-bda37.firebaseapp.com",
          databaseURL: "https://vue-calendar-bda37.firebaseio.com",
          projectId: "vue-calendar-bda37",
          storageBucket: "vue-calendar-bda37.appspot.com",
          messagingSenderId: "419034357848",
          appId: "1:419034357848:web:4dce04cf47592266406a2d"
        },
        services: {
          firestore: true
        }
      }
    ]
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend(config, ctx) {
      config.resolve.alias['vue'] = 'vue/dist/vue.common',
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true,
          },
        })
    },

    transpile: [/^vue2-google-maps($|\/)/],
  },
}
