import Vue from 'vue'
import VueRouter from 'vue-router'
import Formulario from '../views/Form.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Formulario',
    component: Formulario
  },
  {
    path: '/lista',
    name: 'Lista',
    component: () => import( '../views/ListaUsuarios.vue')
  },
  {
    path: '/editar/:id',
    name: 'Editar',
    component: () => import( '../views/Edit.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
