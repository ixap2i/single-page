import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
const { createApp, h } = Vue
library.add(faCoffee)
Vue.component('font-awesome-icon', FontAwesomeIcon)

const NotFoundComponent = { template: '<p>Page not found</p>' }
const HomeComponent = { template: '<p>Home page</p>' }
const AboutComponent = { template: '<p>About page</p>' }

const routes = {
  '/': HomeComponent,
  '/about': AboutComponent
}

const SimpleRouter = {
  data: () => ({
    currentRoute: window.location.pathname
  }),

  computed: {
    CurrentComponent () {
      return routes[this.currentRoute] || NotFoundComponent
    }
  },

  render () {
    return h(this.CurrentComponent)
  }
}

createApp(SimpleRouter).mount('#app')
