/*
 * @Author: Pmy
 * @Date: 2021-05-16 14:22:09
 * @LastEditors: Pmy
 * @LastEditTime: 2021-05-16 15:50:27
 */
const baseURL = import.meta.env.VITE_BASE_URL;

import axios from "axios";

export function request(config) {
  const instance = axios.create({
    baseURL,
    timeout: 5000,
  })

  // 请求拦截
  instance.interceptors.request.use(config => {
    return config
  }, error => {

  })

  // 响应拦截
  instance.interceptors.response.use(response => {
    return response.data
  }, error => {

  })

  return instance(config)
}