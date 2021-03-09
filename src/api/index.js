const api = {
  Login: '/user/login',
  UserInfo: '/vote/api/v1/android/getUserInfo',//用户信息
  userShare:'/vote/api/v1/android/userShare',//用户分享
  getLohanListData:'/vote/api/v1/android/getLohanListData',//获取罗汉信息
  Authorization: '/vote/api/v1/android/authorization',//授权
  UserName: '/user/name',
  PleaseLohan: '/vote/api/v1/android/pleaseLohan',//请本尊
  luohanData:'/vote/api/v1/android/getLohanDataByArhatId',//获取本尊信息
  byArhat:'/vote/api/v1/android/byArhat',//白罗汉
  home:'/vote/api/v1/android/home',//互动
  wxsdk: '/vote/api/v1/android/getWxSDKConfig', //微信sdk配置
  share: '/vote/api/v1/android/isShare',//分享成功回调
}

export default api
