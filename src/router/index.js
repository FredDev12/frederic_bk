import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Contact from '../pages/Contact.vue'
import Projects from '../pages/Projects.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/projects', name: 'Projects', component: Projects },
]
const BASE = import.meta.env.BASE_URL || '/frederic_bk/'


export default createRouter({
  history: createWebHistory(BASE),
  routes,
  scrollBehavior: () => ({ top: 0 }),
})
