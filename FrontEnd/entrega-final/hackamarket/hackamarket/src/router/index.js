import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/clients',
    name: 'Clientes',
    component: () => import('../views/Clientes.vue')
  },
  {
    path: '/register',
    name: 'Registro',
    component: () => import('../views/Registro.vue')
  },
  {
    path: '/products',
    name: 'Productos',
    component: () => import('../views/Productos.vue')
  },
  {
    path: '/add-products',
    name: 'AddProductos',
    component: () => import('../views/AddProductos.vue')
  },
  {
    path: '*',
    name: 'Error',
    component: () => import('../views/Error.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
