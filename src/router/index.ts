/*
 * @Author: Pmy
 * @Date: 2021-05-16 09:56:49
 * @LastEditors: Pmy
 * @LastEditTime: 2021-05-16 10:26:15
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import Home from 'views/Home/home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('views/About/about.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router