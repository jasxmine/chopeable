import Vue from 'vue'
import VueKonva from 'vue-konva'
import firebase from 'firebase'
import VueTextareaAutosize from 'vue-textarea-autosize'
import VueTimepicker from 'vue2-timepicker'
import vuetify from './plugins/vuetify'
import Calendar from './pages/calendar.vue'
import 'vue2-timepicker/dist/VueTimepicker.css'

Vue.use(VueTextareaAutosize)
Vue.use(VueKonva)

Vue.component('vue-timepicker', VueTimepicker)

Vue.config.productionTip = false

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyBxbNnTzZGyrMjPKG_8fAM4HUc2d-aZ3eY',
    authDomain: 'vue-calendar-bda37.firebaseapp.com',
    databaseURL: 'https://vue-calendar-bda37.firebaseio.com',
    projectId: 'vue-calendar-bda37',
    storageBucket: 'vue-calendar-bda37.appspot.com',
    messagingSenderId: '419034357848',
    appId: '1:419034357848:web:4dce04cf47592266406a2d',
  })
}

export const db = firebase.firestore()
window.onload = function () {
  ;(() =>
    new Vue({
      // eslint-disable-line no-new
      vuetify,
      components: { VueTimepicker },
      render: (h) => h(Calendar),
    }))()
}
