/*
 * @Author: Pmy
 * @Date: 2021-05-13 17:54:36
 * @LastEditors: Pmy
 * @LastEditTime: 2021-05-16 15:55:11
 */
import axios from "axios";
const baseURL = import.meta.env.VITE_BASE_URL;
console.log(baseURL)
export function request(config: object) {
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