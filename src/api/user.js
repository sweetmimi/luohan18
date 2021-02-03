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

//微信sdk  wxsdk
export function getWxSDKConfig(data) {
  return request({
    url: api.wxsdk,
    method: 'post',
    data,
    hideloading: true
  })
}

// 用户信息 post 方法
export function getUserInfo(data) {
  return request({
    url: api.UserInfo,
    method: 'post',
    data,
    hideloading: true
  })
}

export function getPleaseLohan(data) {
  return request({
    url: api.PleaseLohan,
    method: 'post',
    data,
    hideloading: true
  })
}

export function getauthorization(data) {
  return request({
    url: api.Authorization,
    method: 'post',
    data,
    hideloading: true
  })
}

export function getluohanData(data) {
  return request({
    url: api.luohanData,
    method: 'post',
    data,
    hideloading: true
  })
}

//拜罗汉

export function getbyArhat(data) {
  return request({
    url: api.byArhat,
    method: 'post',
    data,
    hideloading: true
  })
}

export function gethome(data) {
  return request({
    url: api.home,
    method: 'post',
    data,
    hideloading: true
  })
}
