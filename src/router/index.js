import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TopPage',
      component: index.html
    },
    {
      path: '/about',
      name: 'AboutPage',
      component: about.html
    }
  ]
})
