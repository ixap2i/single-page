import Vue from 'vue'
import App from './App'
import vuetify from './plugins/vuetify'
// support icons
import '@fortawesome/fontawesome-free/css/all.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.component('font-awesome-icon', FontAwesomeIcon)
library.add(faUserSecret)

new Vue({
  render: h => h(App),
  vuetify
}).$mount('#app')
