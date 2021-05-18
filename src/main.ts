/*
 * @Author: Pmy
 * @Date: 2021-05-16 09:43:15
 * @LastEditors: Pmy
 * @LastEditTime: 2021-05-16 11:35:59
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import vant from 'vant'
import 'vant/lib/index.css'
import 'amfe-flexible/index.js'

createApp(App).use(router).use(store).use(vant).mount('#app')
