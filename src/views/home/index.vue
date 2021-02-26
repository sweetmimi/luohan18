<!-- home -->
<template>
  <div class="index-container">
    <div class="pageLoading" v-if="!infoData">
      <van-loading type="spinner" class="lod" />
    </div>
    <div class="main" v-else>
      <div class="card">
        <div class="header">
          <div class="headerleft">
            <img :src="infoData.arhat.arhatPic" alt="" width="100%">
          </div>
          <div class="headerright">
              <div class="text">
            <img :src="infoData.userInfo.headUrl" alt="" width="100%" />
            <span class="name"> {{ infoData.userInfo.nickName }}</span>

          </div>
           <div class="line" style="width: 100%"></div>
            <div class="lhName">
          <img src="@/assets/images/fo.png" alt="" width="100%" />
          <span class="name">· {{ infoData.arhat.arhatName }}</span>
          <div class="biaoqian">{{nowYear}}年本尊罗汉</div>
        </div>
          </div>

        </div>



        <div class="detl">
          <p>
            {{ infoData.arhat.describe }}
          </p>
        </div>
        <div class="line" style="width: 90%"></div>
        <div class="luohandet">
          <ul>
            <li>
              <div class="left">本尊罗汉寓意: </div>
              <div class="right">{{ infoData.arhat.implication }}</div>
            </li>
              <li>
              <div class="left">您今年特别关注的是: </div>
              <div class="right">{{ infoData.arhat.special }}</div>
            </li>
              <li>
              <div class="left">您的罗汉寄语是: </div>
              <div class="right">{{ infoData.arhat.message }}</div>
            </li>
          </ul>
          <div class="line" style="width: 90%"></div>
        </div>
        <div class="yaoqin" @click="showMask = true">
          <div class="left">
             <img src="@/assets/images/handel.png" alt="" width="100%" />
          </div>
        <div class="right">
            <span class="text" v-if="!friendId"> 点击右上角分享按钮，邀请好友互拜对方的本尊罗汉，为彼此增添好运！点击底部“好友互动”按钮可查看自己及好友的拜访记录~</span>
          <span class="text" v-else> 点击右上角分享按钮，邀请好友互拜对方的本尊罗汉，为彼此增添好运！点击底部“好友互动”按钮可查看自己及好友的拜访记录~</span>
        </div>

        </div>
        <!-- <div class="btn yl_btn" @click="byArhat">
          <span class="btn_text"> 拜罗汉 </span>
        </div>
        <div class="btn gren_btn" @click="share">
          <span class="btn_text"> 分享给好友 </span>
        </div> -->
      </div>
      <!-- 音乐 -->
      <!-- <BgcMusic></BgcMusic> -->
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
      <div class="masklh" v-show="Masklh" @click="closeMasklh">
        <div class="main">
          <div class="header">
            <span> {{ infoData.arhat.arhatName }}</span>
          </div>
          <div class="img">
            <img :src="infoData.arhat.arhatBackgroundPic" alt="" width="100%" />
          </div>

          <div class="text">
            <div class="title">拜本尊罗汉积累福泽</div>
            <div class="del">{{ infoData.arhat.arhatName }}将庇佑您及家人一年健康好运</div>
          </div>
        </div>
      </div>
      <div class="attentionmodel" v-show="attentionmodel">
        <p class="title">关注公众号,积累福泽!</p>
        <div class="btn cancel" @click="attentionmodel = false">取消</div>
        <div class="btn ok" @click="goattention">去关注</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getluohanData, getbyArhat } from '@/api/user.js'
import BgcMusic from '@/components/BgcMusic'
export default {
  components: {
    BgcMusic
  },
  data() {
    return {
      friendId: '',
      arhatId: '',
      infoData: '',
      showMask: false,
      Masklh: false,
      attentionmodel: false
    }
  },
  async created() {

  },
  computed: {
    nowYear(){
      var date = new Date();
      return date .getFullYear();
    }
  },

  mounted() {
    this.initData()

  },

  methods: {
    initData() {
      setTimeout(() => {
          let userinfo = this.$sessionStorage.get('userinfo')
          getluohanData({
            friendId:  userinfo.id || this.$route.query.friendId ,
            arhatId: userinfo.yidamArhatId ||this.$route.query.arhatId
          })
            .then(res => {
              this.infoData = res.data
              console.log(res.data)
              this.byArhat()
            })
            .catch(() => {})
      }, 400);

    },
    byArhat() {
      let userinfo = this.$sessionStorage.get('userinfo')
      // 如果新用户 关注公众号
      getbyArhat({
        friendId: this.$route.query.friendId || userinfo.id,
        arhatId: this.$route.query.arhatId || userinfo.yidamArhatId
      }).then(res => {
        if (res.state == 200) {
          //没有罗汉关注
          this.issubscribe = res.data.subscribe
           if (this.issubscribe != 1) {
            this.goattention()
          }
          // this.Masklh = true
        }
      })
    },
    closeMasklh() {
      this.Masklh = false
      if (this.issubscribe != 1) {
        // this.attentionmodel = true
         this.attentionmodel = false
        window.location.href =
        'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=Mzg2ODU3MDM5OQ==&scene=110#wechat_redirect'
      }
    },

    //关注
    goattention() {
      this.attentionmodel = false
      this.$toast("关注公众号,积累福泽!")
      setTimeout(function(){
          window.location.href =
        'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=Mzg2ODU3MDM5OQ==&scene=110#wechat_redirect'

       }, 1000);

    },
    share() {
      this.showMask = true
    }
  }
}
</script>
<style lang="scss" scoped>
.index-container {
  .attentionmodel {
    width: 100%;
    height: 300px;
    position: fixed;
    bottom: 0;
    z-index: 1001;
    background: rgba(0, 0, 0, 0.8);
    .title {
      color: #efc75d;
      font-size: 36px;
      width: 100%;
      position: absolute;
      top: 20px;
      text-align: center;
    }
    .btn {
      color: #ffffff;
      width: 30%;
      height: 80px;
      border-radius: 40px;
      font-size: 24px;
      text-align: center;
      line-height: 80px;
    }
    .cancel {
      background: #4e5455;
      position: absolute;
      top: 60px;
      left: 10%;
    }
    .ok {
      background: linear-gradient(90deg, #efc75d 0%, #c58925 100%);
      position: absolute;
      top: 60px;
      right: 10%;
    }
  }
  .mask {
    position: fixed;
    z-index: 1001;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    .point {
      right: 62px;
      top: 21px;
      width: 380px;
      height: 340px;
      position: absolute;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .text {
      position: absolute;
      top: 400px;
      height: 112px;
      padding: 20px;
      img {
        width: 100px;
        height: 100px;
        float: left;
        vertical-align: middle;
        margin-left: 40px;
        margin-right: 27px;
      }
      span {
        vertical-align: middle;
        font-size: 30px;
        font-family: PingFang-SC-Bold, PingFang-SC;
        font-weight: bold;
        color: #ffffff;
        line-height: 1.6;
      }
    }
  }
  .masklh {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1001;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    .main {
      position: fixed;
      z-index: 1002;
      left: 125px;
      top: 270px;
      width: 499px;
      height: 100%;

      background: linear-gradient(90deg, #fbe09b 0%, #e7bf7b 100%);
      border-radius: 21px;
      .header {
        text-align: center;

        position: absolute;
        top: -6px;
        left: 0;
        right: 0;
        border-top: 56px solid #efc75d;
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
          font-size: 32px;
          font-family: PingFang-SC-Bold, PingFang-SC;
          font-weight: bold;
          color: #ffffff;
        }
      }
      .img {
        width: 380px;
        // height: 480px;
        margin: 50px auto 0px;
      }
      .text {
        width: 325px;
        margin: 10px auto;
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
          margin-bottom: 10px;
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
    width: 100%;
    height: 800px;
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
     overflow: hidden;
    position: absolute;
    padding:20px ;
    top: 30px;
    right: 30px;
    left: 30px;
    bottom: 120px;
    background: #fff;
     box-shadow: 1px 3px 10px 1px rgba(164, 164, 164, 0.22);
    .header {
      margin-bottom: 30px;

      height: 300px;
      width: 100%;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      .headerleft{
        width: 240px;
        height: 100%;
      }
      .headerright{
        text-align: left;
        overflow: hidden;
        width: 455px;
        height: 100%;
     .text {
       margin: 40px 10px;
        .name {
          vertical-align: left;
          font-size: 32px;
          font-family: PingFang-SC-Bold, PingFang-SC;
          font-weight: 600;
          color: #4e5455;
          line-height: 1.2;
        }
         img {
        width: 80px;
        height: 80px;
        vertical-align: middle;
        margin-right: 20px;
      }
      }
          .lhName {
      margin: 20px 0;
      text-align: left;
      img {
        width: 32px;
        height: 47px;
        vertical-align: middle;
        margin-right: 20px;
      }
      .name {
        vertical-align: middle;
        font-size: 32px;
        font-family: PingFang-SC-Bold, PingFang-SC;
        font-weight: 600;
        color: #4e5455;
        line-height: 1.2;
      }
      .biaoqian{
        margin-top: 20px;
            text-align: center;
            font-size: 20px;
            color: #fff;
            padding: 4px ;
            width: 200px;
            background: #4e5455;
            border-radius: 19px;
            vertical-align: middle;
      }
    }

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
      padding: 20px 15px;
      margin-bottom: 20px;
      font-size: 28px;
      font-family: PingFang-SC-Medium, PingFang-SC;
      font-weight: 500;
      color: #666666;
      line-height: 1.2;
    }
    .luohandet{
      color: #666666;
       padding: 20px 15px;
        margin-bottom: 20px;
      font-size: 28px;
      ul{
        li{

font-weight: 500;
          margin: 10px 0;
          div{
            display: inline-flex;

          }
          .left{
        width: 300px;

      }
      .right{
         width: 300px;
           color: #b88858;
      }
        }
      }

    }
    .yaoqin {
      margin: 20px 50px;
      .left{
        height: 200px;
        width: 40px;
         float: left;
         img {

        width: 28px;
        height: 49px;
        vertical-align: middle;
        margin-top: 20px;
        margin-right: 20px;
      }
      }
      .right{
        .text {

        vertical-align: middle;
        font-size: 28px;
        font-family: PingFang-SC-Bold, PingFang-SC;
        color: #b88858;
        line-height: 40px;
      }
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
    top: 130px;
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
    top: 130px;
    background: #f8f8f8;
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
}
</style>
