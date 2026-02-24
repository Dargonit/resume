import { createRouter, createWebHistory } from 'vue-router'
import HomeScreen from '../components/Home.vue'
import AboutMe from '../components/AboutMe.vue' // or wherever your About component is

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeScreen
  },
  {
    path: '/about',
    name: 'About',
    component: AboutMe
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router