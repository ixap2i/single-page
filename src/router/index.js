import { createRouter, createWebHistory } from '@ionic/vue-router'
const Portfolio = () => import('../components/pages/Portfolio.vue')
const Job = () => import('../components/pages/Job.vue')
const Skill = () => import('../components/pages/Skill.vue')

const routes = [
  { path: '/skill',
    component: Skill
  },
  { path: '/job',
    component: Job
  },
  { path: '/portfolio',
    component: Portfolio
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
