import api from './index'
// axios
import request from '@/utils/request'

// 登录
export function login(data) {
  return request({
    url: api.Login,
    method: 'post',
    data
  })
}


// 用户名称 get 方法
export function getUserName(params) {
  return request({
    url: api.UserName,
    method: 'get',
    params,
    hideloading: true
  })
}

//请本尊
// 用户信息 post 方法
export function getUserInfo(data) {
  return request({
    url: api.UserInfo,
    method: 'post',
    data,
    hideloading: true
  })
}

export function getPleaseLohan(params) {
  return request({
    url: api.PleaseLohan,
    method: 'post',
    params,
    hideloading: true
  })
}

export function getauthorization(params) {
  return request({
    url: api.Authorization,
    method: 'post',
    params,
    hideloading: true
  })
}
