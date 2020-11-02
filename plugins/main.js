import Vue from 'vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import vuetify from './vuetify' // path to vuetify export

const vuetifyOptions = {}
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(vuetify)

new Vue({
  el: '#app',
  vuetify: new Vuetify(vuetifyOptions),
})
