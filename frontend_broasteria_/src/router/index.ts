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
      path: '/categorias',
      name: 'categorias',
      component: () => import('../views/CategoriaView.vue'),
      children: [
        { path: '', component: () => import('../components/categoria/CategoriaList.vue') }
        //    { path: 'crear', component: () => import('../components/producto/ProductoCreate.vue') },
        //  {
        //     path: 'editar/:id',
        //    component: () => import('../components/producto/ProductoEdit.vue')
        //    }
      ]
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
      path: '/clientes',
      name: 'clientes',
      component: () => import('../views/ClienteView.vue'),
      children: [
        { path: '', component: () => import('../components/cliente/ClienteList.vue') },
        { path: 'crear', component: () => import('../components/cliente/ClienteCreate.vue') },
        {
          path: 'editar/:id',
          component: () => import('../components/cliente/ClienteEdit.vue')
        }
      ]
    },

    {
      path: '/usuarios',
      name: 'usuarios',
      component: () => import('../views/UsuarioView.vue'),
      children: [
      { path: '', component: () => import('../components/usuario/UsuarioList.vue') },
       { path: 'crear', component: () => import('../components/usuario/UsuarioCreate.vue') },
     {
        path: 'editar/:id',
       component: () => import('../components/usuario/UsuarioEdit.vue')
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
