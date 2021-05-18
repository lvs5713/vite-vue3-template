/*
 * @Author: Pmy
 * @Date: 2021-05-13 17:59:33
 * @LastEditors: Pmy
 * @LastEditTime: 2021-05-14 00:13:05
 */
import {request} from './request'

export function getHomeAllData(){
  return request({
    url:'/api/index',
    // method:'get',
    // params:{

    // }
  })
}

