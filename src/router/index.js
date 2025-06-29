import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import aboutme from '../views/aboutme.vue'
import services from '../views/services.vue'
import contact from '../views/contact.vue'
import prova from '../views/prova.vue'

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
      path: '/services',
      component: services
    },
     {
      path: '/contact',
      component: contact
    },
    {
      path: '/prova',
      component: prova
    }
  ]
})

export default router
