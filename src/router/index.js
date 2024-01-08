import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  { // cria a rota para a pagina de busca de cep
    path: '/buscar-cep',
    name: 'buscar-cep', 
    component: () => import('../views/buscar-cep.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
