import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },


    {
      path: '/productos',
      name: 'productos',
      component: () => import('../views/ProductoView.vue'),
      children: [
      { path: '', component: () => import('../components/producto/ProductoList.vue') },
       { path: 'crear', component: () => import('../components/producto/ProductoCreate.vue') },
     {
        path: 'editar/:id',
       component: () => import('../components/producto/ProductoEdit.vue')
       }
      ]
    },



    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
