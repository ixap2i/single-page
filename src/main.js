/* eslint-disable import/first */
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import { createApp } from 'vue/dist/vue.runtime.esm-bundler'
import * as createStore from 'vuex'
import App from './App.vue'
import { IonicVue } from '@ionic/vue'
import router from './router'

export const app = createApp(App)

app.config.compilerOptions.isCustomElement = tag => tag.startsWith('ion-')
app.use(IonicVue)
app.use(router)
app.mount('#app')
