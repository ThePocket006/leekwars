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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/leekwars',
      name: 'leekwars',
      children: [
        {
          path: '',
          name: 'leekwars.home',
          component: () => import('../views/leekwars/LeekHomeView.vue')
        },
        {
          path: 'user',
          name: 'leekwars.user',
          children: [
            // {
            //   path: '',
            //   name: 'leekwars.user.home',
            //   component: () => import('../views/leekwars/LeekUserView.vue')
            // },
            {
              path: 'add',
              name: 'leekwars.user.add',
              component: () => import('../views/leekwars/LeekAddUser.vue')
            }
          ]
        },
        {
          path: 'api',
          name: 'leekwars.api',
          component: () => import('../views/leekwars/LeekApiView.vue')
        }
      ]
    }
  ]
})

export default router
