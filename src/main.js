import { IonicVue } from '@ionic/vue'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)
  .use(IonicVue)
  .use(router)

router.isReady().then(() => {
  app.mount('#app')
})
