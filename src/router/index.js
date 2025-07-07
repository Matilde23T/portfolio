import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import about from '@/views/about.vue'
import services from '../views/services.vue'
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
      component: about
    },
    {
      path: '/services',
      component: services
    },
     {
      path: '/contact',
      component: contact
    },
    
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router
