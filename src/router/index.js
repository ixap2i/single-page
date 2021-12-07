import { createRouter, createWebHistory } from 'vue-router'
const Portfolio = () => import('../components/pages/Portfolio.vue')
const Job = () => import('../components/pages/Job.vue')
const Skill = () => import('../components/pages/Skill.vue')
const Updates = () => import('../components/pages/Updates.vue')

const routes = [
  { path: '/skill',
    component: Skill
  },
  { path: '/job',
    component: Job
  },
  { path: '/portfolio',
    component: Portfolio
  },
  { path: '/',
    component: Updates
  }
]
console.log('base url' + process.env.BASE_URL)
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
