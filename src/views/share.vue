<!-- home -->
<template>
  <div class="index-container">
    <div class="pageLoading" v-if="!infoData">
      <van-loading type="spinner" class="lod"/>
    </div>
    <div class="main" v-else>
    <div class="top_bg">
      <img :src="infoData.arhat.arhatBackgroundPic" alt="" />
    </div>
    <div class="lh18">
      <img src="@/assets/images/lh18.png" alt="" />
    </div>
    <div class="card">
      <div class="title">
        <div class="text">
          <img :src="infoData.userInfo.headUrl" alt="" width="100%" />
          <span class="name"> {{infoData.userInfo.nickName}}· 牛年本尊罗汉</span>
        </div>
      </div>
      <div class="line" style="width: 90%"></div>
      <div class="lhName">
        <img src="@/assets/images/fo.png" alt="" width="100%" />
        <span class="name">· {{infoData.arhat.arhatName}}</span>
      </div>
      <p class="blueTitle">【{{infoData.arhat.arhatName}}】{{infoData.arhat.descName}}</p>
      <div class="detl">
        <p>
         {{infoData.arhat.describe}}
        </p>
      </div>
      <div class="line" style="width: 90%"></div>
      <div class="yaoqin" @click="showMask = true">
        <img src="@/assets/images/handel.png" alt="" width="100%" />
        <span class="text" v-if="!friendId">
           邀请好友互拜对方的本尊罗汉，给自己和朋友都带来好运！</span>
           <span class="text" v-else>
           拜好友的本尊罗汉，庇佑好友及家人一年健康好运！</span>
      </div>
      <div class="btn yl_btn" @click="byArhat">
        <span class="btn_text"> 拜罗汉 </span>
      </div>
      <div class="btn gren_btn" @click="share" >
        <span class="btn_text"> 返回 </span>
      </div>
    </div>
    <!-- 音乐 -->
    <BgcMusic></BgcMusic>
    <!-- 分享 -->
    <div class="mask" v-show="showMask" @click="showMask = false">
      <div class="point">
        <img src="@/assets/images/share.png" alt="" />
      </div>
      <div class="text">
        <img src="@/assets/images/share_rulai.png" alt="" />
        <span>点击右上角分享到您的朋友或朋友圈 与您的朋友一起拜罗汉，分享好运</span>
      </div>
    </div>
    <!-- 拜罗汉 -->
    <div class="masklh" v-show="Masklh" @click="Masklh = false">
      <div class="main">
        <div class="header">
          <span> {{infoData.arhat.arhatName}}</span>
        </div>
        <div class="img">
          <img :src="infoData.arhat.arhatBackgroundPic" alt="" width="100%" />
        </div>

        <div class="text">
          <div class="title">拜本尊罗汉积累福泽</div>
          <div class="del">{{infoData.arhat.arhatName}}将庇佑您及家人一年健康好运</div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import {getluohanData,getbyArhat,getUserInfo}from '@/api/user.js'
import BgcMusic from '@/components/BgcMusic'
export default {
  components: {
    BgcMusic
  },
  data() {
    return {
      friendId:undefined,
      infoData:"",
      showMask: false,
      Masklh: false
    }
  },
async created() {

    this.getUser()
    this.initData()
  },
  computed: {},

  mounted() {
    //如果自己分享自己
    this.comeback()
  },

  methods: {
     getUser() {
      getUserInfo({})
        .then(res => {
          if(res.data!=undefined){
             this.$sessionStorage.set('userinfo', res.data)
          }

        })
        .catch(error => {
          this.shouquan()
        })
    },
     shouquan() {
      if(!this.$sessionStorage.get('userinfo')){
        let url = encodeURIComponent(location.href)
       window.location.href=`http://luohan.wuhanhsj.com/vote/api/v1/android/authorization?form=${url}`

      }

    },
    comeback(){
      if(this.friendId==this.$sessionStorage.get('userinfo').id){

        let UserInfo=this.$sessionStorage.get('userinfo')
        window.location.href=`http://luohan.wuhanhsj.com/h5/#/home?friendId=${UserInfo.id}&arhatId=${UserInfo.yidamArhatId}`
      }
    },
     initData() {
       try {
         this.arhatId=this.$route.query.arhatId
       } catch (error) {

       }
        try {
        this.friendId=this.$route.query.friendId
       } catch (error) {

       }
      getluohanData({
         friendId:this.friendId,
        arhatId :this.arhatId
      })
        .then(res => {
          this.infoData = res.data;
          console.log(res.data)
        })
        .catch(() => {})
    },
    byArhat() {
       try {
         this.arhatId=this.$route.query.arhatId
       } catch (error) {

       }
        try {
        this.friendId=this.$route.query.friendId
       } catch (error) {

       }
      // 如果新用户 关注公众号
      getbyArhat({
        friendId:this.friendId,
         arhatId :this.arhatId
      }).then(res=>{
        if(res.state==200){

              this.Masklh = true

        }
      })

    },
    share() {
      if(this.$sessionStorage.get('userinfo').id){
         let UserInfo=this.$sessionStorage.get('userinfo')

        window.location.href=`http://luohan.wuhanhsj.com/h5/#/home?friendId=${UserInfo.id}&arhatId=${UserInfo.yidamArhatId}`
      }else{
        window.location.href=`http://luohan.wuhanhsj.com/h5/step1`
      }

    }
  }
}
</script>
<style lang="scss" scoped>
.index-container {
  .mask {
    position: fixed;
    z-index: 1001;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    .point {
      right: 62px;
      top: 21px;
      width: 414px;
      height: 368px;
      position: absolute;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .text {
      position: absolute;
      top: 405px;
      height: 112px;
      padding: 20px;
      img {
        width: 112px;
        height: 112px;
        float: left;
        vertical-align: middle;
        margin-left: 40px;
        margin-right: 27px;
      }
      span {
        vertical-align: middle;
        font-size: 32px;
        font-family: PingFang-SC-Bold, PingFang-SC;
        font-weight: bold;
        color: #ffffff;
        line-height: 1.6;
      }
    }
  }
  .masklh {
    position: fixed;
    z-index: 1001;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    .main {
      position: absolute;
      z-index: 1002;
      left: 125px;
      top: 270px;
      width: 499px;
      height: 776px;

      background: linear-gradient(90deg, #fbe09b 0%, #e7bf7b 100%);
      border-radius: 21px;
      .header {
        text-align: center;

        position: absolute;
        top: -6px;
        left: 0;
        right: 0;
        border-top: 56px solid #EFC75D;
        border-left: 25px solid transparent;
        border-right: 25px solid transparent;
        height: 0;
        margin: 0 auto;
        width: 220px;
        span {
          top: -50px;
          left: 0px;
          right: 0;
          margin: 0 auto;
          position: absolute;
          font-size: 36px;
          font-family: PingFang-SC-Bold, PingFang-SC;
          font-weight: bold;
          color: #ffffff;
        }
      }
      .img {
        width: 403px;
        height: 526px;
        margin: 79px auto 0px;
      }
      .text {
        position: absolute;
        width: 325px;
        margin: 0 auto;
        left: 0;
        right: 0;

        .title {
          text-align: center;
          height: 45px;
          font-size: 32px;
          font-family: PingFang-SC-Bold, PingFang-SC;
          font-weight: bold;
          color: #b88858;
          line-height: 45px;
          margin-bottom: 20px;
        }
        .del {
          text-align: left;
          width: 325px;
          height: 80px;
          font-size: 28px;
          font-family: PingFang-SC-Medium, PingFang-SC;
          font-weight: 500;
          color: #4e5455;
          line-height: 40px;
        }
      }
      .close {
        position: absolute;
        top: 500px;
      }
    }
    .main:after {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      right: 0;
      margin: 0 auto;
      bottom: -100px;
      background-image: url('~@/assets/images/close.png');
      background-size: 100%;
      background-repeat: no-repeat;
      border-radius: 50%;
      width: 64px;
      height: 64px;
    }
  }
  .top_bg {
    width: 750px;
    height: 470px;
    position: fixed;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .lh18 {
    width: 68px;
    height: 85px;
    position: fixed;
    left: 100px;
    top: 45px;
    z-index: 100;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .card {
    position: fixed;
    box-sizing: border-box;
    padding: 10px 20px;

    top: 280px;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: 100;
    width: 690px;
    height: 880px;
    background: #ffffff;
    box-shadow: 1px 3px 10px 1px rgba(164, 164, 164, 0.22);
    .title {
      height: 143px;
      width: 80%;
      margin-left: 10%;

      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      .text {
        .name {
          vertical-align: middle;
          font-size: 32px;
          font-family: PingFang-SC-Bold, PingFang-SC;
          font-weight: 600;
          color: #4e5455;
          line-height: 1.2;
        }
      }
      img {
        width: 80px;
        height: 80px;
        vertical-align: middle;
        margin-right: 20px;
      }
    }
    .lhName {
      margin: 22px auto;
      text-align: center;
      img {
        width: 32px;
        height: 47px;
        vertical-align: middle;
        margin-right: 20px;
      }
      .name {
        vertical-align: middle;
        font-size: 36px;
        font-family: PingFang-SC-Bold, PingFang-SC;
        font-weight: 600;
        color: #4e5455;
        line-height: 1.2;
      }
    }
    .blueTitle {
      text-align: left;
      font-size: 28px;
      font-family: PingFang-SC-Bold, PingFang-SC;
      font-weight: 600;
      color: #303f7b;
      line-height: 1.4;
    }
    .detl {
      letter-spacing: 1px;
      padding: 10px;
      margin-bottom: 20px;
      font-size: 28px;
      font-family: PingFang-SC-Medium, PingFang-SC;
      font-weight: 500;
      color: #666666;
      line-height: 45px;
    }
    .yaoqin {
      margin: 20px 35px;

      img {
        float: left;
        width: 28px;
        height: 49px;
        vertical-align: middle;
        margin-top: 20px;
        margin-right: 20px;
      }
      .text {
        vertical-align: middle;
        font-size: 28px;
        font-family: PingFang-SC-Bold, PingFang-SC;
        color: #b88858;
        line-height: 40px;
      }
    }
    .yl_btn {
      width: 420px;
      height: 80px;
      border-radius: 44px;
      .btn_text {
        font-size: 32px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 600;
        line-height: 80px;
        color: #ffffff;
      }
    }
    .gren_btn {
      width: 420px;
      background: #03c160;
      height: 80px;
      border-radius: 44px;
      .btn_text {
        font-size: 32px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 600;
        line-height: 80px;
        color: #ffffff;
      }
    }
  }

  .card:before {
    content: '';
    display: block;
    position: absolute;
    left: -25px;
    top: 170px;
    background: #f8f8f8;
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
  .card:after {
    content: '';
    display: block;
    position: absolute;
    right: -25px;
    top: 170px;
    background: #f8f8f8;
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
}
</style>
