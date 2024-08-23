import { createRouter, createWebHistory } from 'vue-router'
import store from './../store'

const routes = [
  // {
  //   path: '/index',
  //   name: 'index',
  //   component: () => import('../pages/PageIndex.vue'),
  //   meta: {
  //     requiresAuth: true
  //   }
  // },

  {
    path: '/view/:type',
    name: 'view',
    component: () => import('../pages/PageView.vue'),
    meta: {
      requiresAuth: true
    }
  },
  // {
  //   path: '/404', // Первая, для перекрытия остальных
  //   name: '404',
  //   component: () => import('../pages/PageNotFound.vue')
  // },
  {
    path: '/login',
    name: 'login',
    component: () => import('../pages/PageLogin.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../pages/PageTest.vue')
  },
  {
    path: '/',
    name: 'status',
    component: () => import('../pages/PageStatus.vue')
  },
  // {
  //   path: '/naprav/:alias',
  //   name: 'naprav',
  //   component: () => import('../pages/PagePage.vue')
  // },
  // {
  //   path: '/naprav_vid/:alias',
  //   name: 'naprav_vid',
  //   component: () => import('../pages/PagePage.vue')
  // },
  // {
  //   path: '/about/:alias',
  //   name: 'about',
  //   component: () => import('../pages/PagePage.vue')
  // },
  // {
  //   path: '/admin',
  //   name: 'admin',
  //   component: () => import('../pages/PageAdmin.vue'),
  //   meta: {
  //     requiresAuth: true
  //   }
  // },
  // {
  //   path: '/:pathMatch(.*)*', // Для всех прочих кроме существующих
  //   redirect: '/404'
  // }
]

const router = createRouter({
  history: createWebHistory(), // process.env.BASE_URL
  routes,
})

router.beforeEach((to, from, next) => {
  const currentUserId = store.getters.currentUserId
  //console.log('currentUserId = ', currentUserId)
  // Проверить, что будет если зайти на стр. логина авторизованному пользователю
  // Сделать так, чтобы перебрасывало в админку
  if (to.path === '/view/order') next()
  else if (to.meta.requiresAuth && !currentUserId) next({ name: 'login' })
  else next()
})

export default router