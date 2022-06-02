import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Whatwedo from '../views/Whatwedo.vue'
import Event from '../views/Event.vue'
import Startup from '../views/Startup.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/whatwedo',
      name: 'whatwedo',
      component: Whatwedo
    },
    {
      path: '/event',
      name: 'event',
      component: Event
    },
    {
      path: '/startup',
      name: 'startup',
      component: Startup
    }
  ]
})

export default router
