import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About.vue'

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
