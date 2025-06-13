import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import aboutme from '../views/aboutme.vue'
import contact from '../views/contact.vue'

const router = createRouter({
  history: createWebHistory(),
  routes:[
    {
      path: '/',
      component: home
    },
     {
      path: '/about',
      component: aboutme
    },
     {
      path: '/contact',
      component: contact
    }
  ]
})

export default router
