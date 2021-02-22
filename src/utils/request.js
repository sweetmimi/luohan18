import axios from 'axios'
import store from '@/store'
import { Toast } from 'vant'
// 根据环境不同引入不同api地址
import { baseApi } from '@/config'
import { storage, sessionStorage } from '@/utils/storage'
// create an axios instance
const service = axios.create({
  baseURL: baseApi, // url = base api url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 25000 // request timeout
})

// request拦截器 request interceptor
service.interceptors.request.use(
  config => {

    //如果有openid
    if (sessionStorage.get('userinfo')) {

      //console.log(config.data)
      Object.assign(config.data, {
        openid: sessionStorage.get('userinfo').openid
      })
    }

    else {
      //调试
      // config.data.openid = 'oH7OV5mcMPyWCtEe5sgetjct4ZN4'

    }
    // 不传递默认开启loading
    if (!config.hideloading) {
      // loading
      Toast.loading({
        forbidClick: true
      })
    }
    if (store.getters.token) {
      config.headers['X-Token'] = ''
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)
// respone拦截器
service.interceptors.response.use(
  response => {
    Toast.clear()
    const res = response.data
    if (res.state && res.state !== 200 ) {
      // 登录超时,重新登录
      // Toast(res.msg || 'error');
      return Promise.reject(res || 'error')
    }
    else {

      return Promise.resolve(res)
    }
  },
  error => {
    Toast.clear()
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

export default service
