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
      limit: env == 'production' ? 5 : 0
    }
  },
  created() {

  },
  mounted() {
    this.getUser()
    // this.checkUserAuth();

  },
  methods: {
    //授权(如果没有用户信息就授权)
    shouquan() {
      if(!this.$sessionStorage.get('userinfo')){

        let url = encodeURIComponent(location.href)
       window.location.href=`http://luohan.wuhanhsj.com/vote/api/v1/android/authorization?from=${url}`

      }

    },
    getUser() {
      getUserInfo({})
        .then(res => {
            this.$sessionStorage.set('userinfo', res.data)
            this.getWechatConfig();
        })
        .catch(error => {
          let _this = this
          setTimeout(() => {
            env == 'production'?_this.shouquan():this.$toast('调试环境')
          }, 1000);
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
        if(res.state==200){
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


            "onMenuShareWeibo",
            "onMenuShareQZone",
            "updateTimelineShareData",
            "updateAppMessageShareData"
          ]
        })
        wx.checkJsApi({
          jsApiList: [
            // 必填，需要使用的JS接口列表
            "onMenuShareWeibo",
            "onMenuShareQZone",
            "updateTimelineShareData",
            "updateAppMessageShareData"
          ],
          success: function (res) {
            // alert("checkJsApi:success1111111111111");
          },
        });
        wx.ready((res) => {
          let url =""
          let UserInfo = this.$sessionStorage.get('userinfo')
          let shareInfo ={}
          if(UserInfo.arhatName){
            url = `http://luohan.wuhanhsj.com/h5/#/share?friendId=${UserInfo.id}&arhatId=${UserInfo.yidamArhatId}`
            shareInfo = {
            title: '拜罗汉,得保佑', // 分享标题
            desc: `新年数罗汉,看一年的运势和重点! --我今年的本尊罗汉是${UserInfo.arhatName}`, // 分享描述
            link: url,//分享url
            imgUrl: UserInfo.arhatUrl // 分享图标
          }
         }else{
            url = `http://luohan.wuhanhsj.com/h5/#/step1?friendId=${UserInfo.id}`
            shareInfo = {
            title: '拜罗汉,得保佑', // 分享标题
            desc: `新年数罗汉,${UserInfo.nickName}邀请你一起来拜拜罗汉!`, // 分享描述
            link: url,//分享url
            imgUrl: UserInfo.headUrl // 分享图标
           }
         }
          wx.onMenuShareWeibo(shareInfo)
          wx.onMenuShareQZone(shareInfo)
          wx.updateTimelineShareData(shareInfo)
          wx.updateAppMessageShareData(shareInfo)
        })}
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
    toggleVc(){
            const nowTime = new Date().getTime();
            if(nowTime - this.lastClickTime < 3000){
              this.count ++;
            } else {
              this.count = 0;
            }
            this.lastClickTime = nowTime;
            if(this.count >= this.limit) {
              let vconDom = document.getElementById('__vconsole');
              this.toggleClass(vconDom,'show')
              this.count = 0;

            }
          }
  }
}
</script>
<style lang="scss">
.vc-tigger {
  position: fixed;
  z-index: 9999;
  width: 160px;
  height: 80px;
  right: 20px;
  bottom: 20px;
}
.show {
  display: block !important;
}
</style>
