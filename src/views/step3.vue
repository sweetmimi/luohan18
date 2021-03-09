<!-- home -->
<template>
  <div class="step3-container">
    <div class="pageLoading" v-if="!infoData">
      <van-loading type="spinner" class="lod" />
    </div>
    <div class="card" v-else>
      <div class="header">
        <div class="left">
          <img :src="infoData.userInfo.headUrl" alt="" />
        </div>
        <div class="right">
          <div class="top">{{ infoData.userInfo.nickName }}</div>
          <div class="bottom">
            <img src="@/assets/images/fo.png" alt="" width="100%" />
            <div class="lhName">·{{ infoData.arhat.arhatName }}</div>
            <div class="biaoqian">{{ nowYear }}本尊罗汉</div>
          </div>
        </div>
      </div>
      <div class="line" style="width: 70%"></div>
      <div class="main">
        <div class="header">
          <span>{{ infoData.arhat.arhatName }}</span>
        </div>

        <div class="img" @click="topage()">
          <img :src="infoData.arhat.arhatBackgroundPic" alt="" width="100%" />
        </div>
        <div class="minhandel" @click="topage()">
          <img src="@/assets/images/minhandel.png" alt="" />
          <div class="div">点击罗汉</div>
        </div>
      </div>

      <div class="text">
        <div class="title">
          <div class="luohandet">
            <ul>
              <li>
                <div class="left">您今年的本尊罗汉是:</div>
                <div class="right">{{ infoData.arhat.arhatName }}</div>
              </li>
              <li>
                <div class="left">{{ infoData.arhat.arhatName }}的寓意是:</div>
                <div class="right">{{ infoData.arhat.implication }}</div>
              </li>
            </ul>
          </div>
          <!-- <p>点击罗汉关注公众号收藏您的本尊罗汉，您以后可以从公众号“我的本尊罗汉”页面拜您的本尊罗汉，护佑您一年的运势</p> -->
          <!-- <p v-if="isExist == 1">
            {{ tip }}
          </p> -->
          <p class="tips">分享到朋友圈，可以看到您几年的 <span>特别关注</span> 和 <span>运势寄语</span> 。</p>
        </div>
      </div>
      <!-- <div class="bottomBtn" v-if="isExist == 1">
        <div class="cancelBtn btn" @click="isreplace('0')">取消</div>
        <div class="okBtn btn" @click="isreplace('1')">确定</div>
      </div>

      <BgcMusic></BgcMusic> -->
    </div>
    <div class="codeModel" v-show="showcode">
      <div class="img">
        <p>慧生觉</p>
        <img src="@/assets/images/vcode.jpg" alt="" width="100%" />
      </div>
      <p>长按二维码识别-关注微信公众号</p>
    </div>
  </div>
</template>

<script>
import BgcMusic from '@/components/BgcMusic'
// 请求接口
import { getPleaseLohan, getluohanData } from '@/api/user.js'
import { mapGetters } from 'vuex'
export default {
  components: {
    BgcMusic
  },
  data() {
    return {
      tip: '',
      infoData: '',
      isExist: '', //是否有本尊
      list: [],
      showcode:false,
      loading: false,
      finished: false,
      refreshing: false
    }
  },
  computed: {
    nowYear() {
      var date = new Date()
      return date.getFullYear()
    },
    ...mapGetters(['userName'])
  },
  created() {
    this.oldArhatId = this.$route.query.oldArhatId
    this.arhatId = this.$route.query.arhatId

    this.isExist = this.$route.query.isExist
    this.tip = this.$sessionStorage.get('oldArhatTip')

    this.initData();

  },
  mounted() {},
  methods: {
    isreplace(type) {
      //如果type =1 替换罗汉

      this.isExist = 0
      if (type == 1) {
        getPleaseLohan({
          arhatId: this.arhatId,
          replace: 1
        }).then(res => {
          if (res.state == 200) {
            this.$sessionStorage.set('userinfo', res.data.userInfo)
            this.$sessionStorage.set('oldArhatTip', res.data.tip)
            // this.arhatId=this.oldArhatId;
            this.infoData = res.data
            this.infoData.arhat.describe = res.data.tip
            this.topage()
          }
        })
      }
    },

    topage() {
      if (this.issubscribe != 1) {
           this.$toast({
             message:'关注公众号不迷路',
             position: 'top',
           })
           setTimeout(() => {
             this.goattention()
           }, 1500);

      }else{
         this.$router.replace({
          path: '/my'
      })
      }

    },
    goattention() {
      var date = new Date
      var motg = date.getMonth();
      var wechatInfo = navigator.userAgent.match(/MicroMessenger\/([\d\.]+)/i)
      console.log(wechatInfo[1])
      // this.$toast({
      //        message:wechatInfo[1],
      //      })
    if( !wechatInfo ) {
        alert("请在微信打开此页面") ;
        return
    } else if ( wechatInfo[1] < "7.5" ) {
         window.location.href =
        'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=Mzg2ODU3MDM5OQ==&scene=110#wechat_redirect'
    }else{
      this.showcode = true
    }

    },

    // 请求数据
    initData() {
      getluohanData({
        arhatId: this.oldArhatId ? this.oldArhatId : this.arhatId
      })
        .then(res => {
          this.infoData = res.data
          this.$sessionStorage.set('userinfo', res.data.userInfo)
          this.issubscribe = res.data.subscribe;
          //如果分享成功直接替换本尊
          if (res.data.isShare==1 && isExist == 1) {
            this.isreplace("1")
          }
          console.log(res.data)
        })
        .catch(() => {})
    },

  }
}
</script>
<style lang="scss" scoped>
.step3-container {
  /* 你的命名空间 */
  height: calc(100vh - 20px);
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  .codeModel {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1001;
    width: 100%;
    height: 100%;
    text-align: center;
    color: #c58925;
    font-size: 36px;
    background: rgba(0, 0, 0, 1);
    p {
      margin: 30px;
    }
    .img {
      p {
        font-weight: 800;
        font-size: 48px;
      }
      width: 60%;
      margin: 25% auto 0;
    }
  }
  .card {
    box-sizing: border-box;
    position: absolute;
    overflow-y: scroll;
    height: 100%;
    top: 30px;
    right: 30px;
    left: 30px;
    bottom: 20px;

    background: #fff;
    box-shadow: 1px 3px 10px 1px rgba(164, 164, 164, 0.22);
    .header {
      display: flex;
      display: -webkit-flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      text-align: center;
      height: 153px;
      box-sizing: border-box;
      padding: 25px 0px 25px;
      .left {
        float: left;
        width: 120px;
        height: 120px;
        margin-right: 10px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .right {
        padding: 10px;
        .top {
          text-align: left;
          font-size: 32px;
          font-weight: bold;
          margin: 5px 10px;
        }
        .bottom {
          img {
            width: 32px;
            height: 50px;
            vertical-align: middle;
          }
          .lhName {
            display: inline-block;
            font-size: 32px;
            height: 50px;
            font-weight: bold;
            margin-right: 5px;
            margin-left: 10px;
            vertical-align: middle;
          }
          .biaoqian {
            display: inline-block;
            text-align: center;
            font-size: 20px;
            color: #fff;
            padding: 4px;
            width: 200px;
            background: #4e5455;
            border-radius: 19px;
            vertical-align: middle;
          }
        }
      }
    }
    .main {
      position: relative;
      left: 0;
      right: 0;
      margin: 0 auto;
      margin-top: 40px;
      width: 499px;
      height: 560px;

      background: linear-gradient(90deg, #fbe09b 0%, #e7bf7b 100%);
      border-radius: 21px;
      .header {
        text-align: center;
        position: absolute;
        top: -6px;
        left: 0;
        right: 0;
        border-top: 56px solid #c58925;
        border-left: 25px solid transparent;
        border-right: 25px solid transparent;
        height: 0;
        margin: 0 auto;
        width: 280px;
        span {
          top: -50px;
          left: 0px;
          right: 0;
          margin: 0 auto;
          position: absolute;
          font-size: 28px;
          font-family: PingFang-SC-Bold, PingFang-SC;
          font-weight: bold;
          color: #ffffff;
        }
      }

      .img {
        position: relative;
        width: 380px;
        height: 440px;
        top: 60px;
        margin: 0 auto;
      }
      .minhandel {
        position: absolute;
        bottom: 20px;
        left: 0;
        right: 0;
        margin: 0 auto;
        width: 226px;
        height: 54px;
        background: rgba(0, 0, 0, 0.48);
        border-radius: 27px;
        text-align: center;
        vertical-align: middle;
        img {
          margin-top: 8px;
          height: 30px;
          width: 25px;
          vertical-align: middle;
          margin-right: 10px;
        }
        .div {
          font-size: 28px;
          color: #ffffff;
          margin-top: 8px;
          display: inline-block;
          vertical-align: middle;
        }
      }
      .text {
        position: absolute;
        width: 500px;
        margin: 0 auto;
        height: 120px;
        left: 0;
        right: 0;

        .title {
          text-align: left;

          font-size: 24px;
          font-family: PingFang-SC-Medium, PingFang-SC;
          font-weight: 500;
          color: #b88858;
        }

        .del {
          text-align: left;
          width: 325px;
          font-size: 28px;
          font-family: PingFang-SC-Medium, PingFang-SC;
          font-weight: 500;
          color: #4e5455;
          line-height: 40px;
        }
      }
    }
    .title {
      width: 80%;
      margin: 0 auto;
      font-size: 28px;
      font-weight: bold;
      color: #b88858;

      .luohandet {
        color: #666666;
        padding: 15px 15px;
        margin-bottom: 0px;
        font-size: 28px;
        ul {
          li {
            font-weight: 500;
            margin: 10px 0;
            div {
              display: inline-flex;
            }
            .left {
              width: 70%;
            }
            .right {
              width: 30%;

              color: #b88858;
            }
          }
        }
      }
      .tips{
        font-size: 24px;
        color: rgba(0, 0, 0, 0.35);
        line-height: 33px;
        span{
          font-size: 30px;
          color: #b88858;
        }
      }
    }
    .bottomBtn {
      height: 100px;
      bottom: 10px;
      width: 578px;
      left: 0;
      right: 0;
      margin: 10px auto;
      display: flex;
      .btn {
        display: inline-block;
        width: 260px;
        height: 80px;
        border-radius: 40px;
        font-size: 32px;
        line-height: 80px;

        font-weight: 500;
        color: #ffffff;
      }
      .okBtn {
      }
      .cancelBtn {
        background: #4e5455;
      }
    }
  }
  .card:before {
    content: '';
    display: block;
    position: absolute;
    left: -25px;
    top: 118px;
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
    top: 118px;
    background: #f8f8f8;
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
}
</style>
