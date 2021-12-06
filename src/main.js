/* eslint-disable import/first */
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import { createApp } from 'vue/dist/vue.runtime.esm-bundler'
import App from './App.vue'
import { IonicVue } from '@ionic/vue'
import router from './router'
import { store } from './store/store'

export const app = createApp(App)
app.config.devtools = true

app.config.compilerOptions.isCustomElement = tag => tag.startsWith('ion-')
app.use(IonicVue)
app.use(router)
app.use(store)
app.mount('#app')
