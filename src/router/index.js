import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path:'/login',
    name:'login',
    component:()=>import('@/views/login/Login.vue')
  },
  {
    path:'/register',
    name:'register',
    component:()=>import('@/views/login/Register.vue')
  },
  {
    path: '/',
    name: 'home',
    component: ()=>import('../views/Index.vue'),
    children:[
    ]
  },
  {
    path: '/team',
    name: 'team',
    component: () => import('../views/team/TeamInfoView.vue')
  },
  {
    path: '/team/create',
    name: 'teamCreate',
    component: () => import('../views/team/TeamCreateView.vue')
  },
  {
    path: '/editor',
    name:'editor',
    component: ()=>import('../views/Editor.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
