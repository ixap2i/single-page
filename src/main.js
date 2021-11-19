/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css'
import '@ionic/vue/css/structure.css'
import '@ionic/vue/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css'
import '@ionic/vue/css/float-elements.css'
import '@ionic/vue/css/text-alignment.css'
import '@ionic/vue/css/text-transformation.css'
import '@ionic/vue/css/flex-utils.css'
import '@ionic/vue/css/display.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { IonicVue } from '@ionic/vue'
import Vue, { createApp } from 'vue'

import App from './App.vue'
import router from './router'

library.add(faUserSecret)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

const app = createApp(App)
  .use(IonicVue)
  .use(router)

router.isReady().then(() => {
  app.mount('#app')
})
