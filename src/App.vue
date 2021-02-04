<template>
  <div id="app">
    <router-view v-wechat-title="$route.meta.title" />
    <div class="vc-tigger" @click="toggleVc"></div>
  </div>
</template>
<script>
import { env } from '@/config'
import { getUserInfo, getWxSDKConfig } from '@/api/user'
import wx from 'weixin-js-sdk'
// import util from './utils/wx'
export default {
  name: 'App',
  data() {
    return {
      lastClickTime: 0,
      count: 0,
      limit: env == 'production' ? 10 : 0
    }
  },
  created() {

  },
  mounted() {
    this.getUser()
    // this.checkUserAuth();
    this.getWechatConfig();
  },
  methods: {
    //授权(如果没有用户信息就授权)
    shouquan() {
      document.location.replace('http://luohan.wuhanhsj.com/vote/api/v1/android/authorization')
    },
    getUser() {
      getUserInfo({})
        .then(res => {
          this.$sessionStorage.set('userinfo', res.data)
        })
        .catch(error => {
          this.shouquan()
        })
    },
    // 通过判断cookie中是否有 openId 检查用户是否授权过
    checkUserAuth() {
      let openId = this.$cookie.get('openId')
      if (!openId) {
        // 通过修改地址栏发出get请求到后端
        window.location.href = API.wechatRedirect
      } else {
        this.getWechatConfig()
      }
    },
    getWechatConfig() {
      let url = location.href
      // 我们后代开发人员的接口，不是微信那边的
      getWxSDKConfig({
        url: url
      }).then(res => {
        console.log(res.data)
        let data = res.data
        wx.config({
          // 开启调试模式,调用的所有 api 的返回值会在客户端alert出来，
          // 若要查看传入的参数，可以在pc端打开，参数信息会通过log打
          // 出，仅在pc端时才会打印。
          debug: false,
          appId: data.appId, // 必填，公众号的唯一标识
          timestamp: data.timestamp, // 必填，生成签名的时间戳
          nonceStr: data.nonceStr, // 必填，生成签名的随机串
          signature: data.signature, // 必填，签名
          jsApiList: [
            // 必填，需要使用的JS接口列表
            'onMenuShareTimeline', // 分享到朋友圈接口
            'onMenuShareAppMessage', //  分享到朋友接口
            'onMenuShareQQ', // 分享到QQ接口
            'updateTimelineShareData',
            'updateAppMessageShareData'
          ]
        })
        wx.ready(() => {
          let url = ''
          if (this.$sessionStorage.get('userinfo')) {
            let href = location.href
            let UserInfo = this.$sessionStorage.get('userinfo')
            url = '?friendId=' + UserInfo.id + '&' + href
          }
          let shareInfo = {
            title: '新年好!数罗汉看运势,拜罗汉得保佑', // 分享标题
            desc: '我今年的本尊罗汉是xxx,今年特别关注的是身体和健康,邀请你一起来拜拜罗汉,相互增加好运!', // 分享描述
            // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            link: 'http://luohan.wuhanhsj.com/vote/api/v1/android/vote' + url,
            imgUrl: 'http://luohan.wuhanhsj.com/fileserver/static/bgluohan/2.jpeg' // 分享图标
          }
          wx.onMenuShareAppMessage(shareInfo)
          wx.onMenuShareTimeline(shareInfo)
          wx.onMenuShareQQ(shareInfo)
          wx.updateAppMessageShareData(shareInfo)
          wx.updateTimelineShareData(shareInfo)
        })
      })
    },
    hasClass(obj, cls) {
      return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'))
    },
    addClass(obj, cls) {
      if (!this.hasClass(obj, cls)) obj.className += ' ' + cls
    },
    toggleClass(obj, cls) {
      if (this.hasClass(obj, cls)) {
        this.removeClass(obj, cls)
      } else {
        this.addClass(obj, cls)
      }
    },
    removeClass(obj, cls) {
      if (this.hasClass(obj, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)')
        obj.className = obj.className.replace(reg, ' ')
      }
    },
    toggleVc() {
      const nowTime = new Date().getTime()
      if (nowTime - this.lastClickTime < 3000) {
        this.count++
      } else {
        this.count = 0
      }
      this.lastClickTime = nowTime
      if (this.count >= this.limit) {
        let vconDom = document.getElementById('__vconsole')
        this.toggleClass(vconDom, 'show')
        this.count = 0
      }
    }
  }
}
</script>
<style lang="scss">
.vc-tigger {
  position: absolute;
  top: 0;
  right: 0;
  width: 5px;
  height: 5px;
  // background: red;
}
.show {
  display: block !important;
}
</style>
