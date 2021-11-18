import { createRouter, createWebHistory } from '@ionic/vue-router'
const About = () => import('../components/About.vue')
const Job = () => import('../components/Job.vue')
const Skill = () => import('../components/pages/Skill.vue')

const routes = [
  { path: '/about',
    component: About
  },
  { path: '/skill',
    component: Skill
  },
  { path: '/job',
    component: Job
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
