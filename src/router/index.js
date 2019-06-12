import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'vuetify/dist/vuetify.min.css'

library.add(faCoffee)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TopPage'
    },
    {path: '/', redirect: { name: About }}
  ],
  name: 'async',
  metaInfo () {
    return {
      title: 'AKNK'
    }
  },
  data () {
    return {
      pageName: 'loading'
    }
  },
  mounted () {
    setTimeout(() => {
      this.pageName = 'async'
    }, 2000)
  }
})
