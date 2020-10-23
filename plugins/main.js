import Vue from 'vue'
import vuetify from './vuetify' // path to vuetify export

const vuetifyOptions = { }
Vue.use(Vuetify)

new Vue({
  el: '#app',
  vuetify: new Vuetify(vuetifyOptions)
})