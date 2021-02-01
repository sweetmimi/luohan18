<!-- home -->
<template>
  <div class="index-container">
    <div class="top_bg">
      <img src="@/assets/images/bgluohan/1.jpeg" alt="" />
    </div>
    <div class="lh18">
      <img src="@/assets/images/lh18.png" alt="" />
    </div>
    <div class="card">
      <div class="title">
        <div class="text">
          <img src="@/assets/images/bgluohan/1.jpeg" alt="" width="100%" />
          <span class="name"> LJ · 牛年本尊罗汉</span>
        </div>
      </div>
      <div class="line" style="width: 90%"></div>
      <div class="lhName">
        <img src="@/assets/images/fo.png" alt="" width="100%" />
        <span class="name">· 伏虎罗汉</span>
      </div>
      <p class="blueTitle">【伏虎罗汉】（宝头卢尊者） 伏虎尊者</p>
      <div class="detl">
        <p>
          一说是清朝由乾隆皇帝钦定的十八罗汉中的第十八位弥勒尊者。另一说法是四大声闻中的君屠钵叹。其所住的寺庙外，经常有猛虎因肚子饿长哮，伏虎尊者把自己的饭食分给这只老虎，时间一长，猛虎就被他降服了，故得名
        </p>
      </div>
      <div class="line" style="width: 90%"></div>
      <div class="yaoqin">
        <img src="@/assets/images/handel.png" alt="" width="100%" />
        <span class="text">邀请好友互拜对方的本尊罗汉，给自己和朋友都带来好运！</span>
      </div>
      <div class="btn yl_btn">
        <span class="btn_text">
            拜罗汉
        </span>
      </div>
       <div class="btn gren_btn" @click="share"  >
        <span class="btn_text">
            分享给好友
        </span>
      </div>

    </div>
    <!-- 音乐 -->
    <BgcMusic></BgcMusic>
    <div class="mask" v-show="showMask" @click="showMask=false">
        <div class="point">
          <img src="@/assets/images/share.png" alt="">
        </div>
        <div class="text">
          <img src="@/assets/images/share_rulai.png" alt="">
          <span>点击右上角分享到您的朋友或朋友圈 与您的朋友一起拜罗汉，分享好运</span>
        </div>
    </div>
  </div>
</template>

<script>
import BgcMusic from '@/components/BgcMusic'
export default {
  components: {
    BgcMusic
  },
  data() {
    return {
      showMask:false,
    }
  },

  computed: {},

  mounted() {},

  methods: {
     share() {
       this.showMask = true;
       console.log($wx)
      var _this = this
      _this.uuid = _this.$route.query.appid
      // var shareUrl = global.BASE_SHARE_URL + 'grade?uuid=' + _this.uuid
      this.$wxShare.updateWxShareConfig({
        title: '标题',
        desc: '简介',
        link: "123"
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.index-container {
  .mask{
    position: fixed;
    z-index: 1001;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    .point{
      right: 62px;
      top: 21px;
      width: 414px;
      height: 368px;
      position:absolute;
      img
       {
        width: 100%;
        height: 100%;
      }
    }
    .text{
       position:absolute;
       top: 405px;
       height: 112px;
       padding: 20px;
      img{
        width: 112px;
        height: 112px;
        float: left;
        vertical-align: middle;
        margin-left: 40px;
        margin-right: 27px;
      }
      span{
        vertical-align: middle;
        font-size: 32px;
        font-family: PingFang-SC-Bold, PingFang-SC;
        font-weight: bold;
        color: #FFFFFF;
        line-height: 1.6;
      }
    }
  }
  .top_bg {
    width: 750px;
    height: 456px;
   position: fixed;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .lh18{
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

    top: 364px;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: 100;
    width: 690px;
    height: 970px;
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
      letter-spacing:1px;
      padding: 10px;
      margin-bottom: 40px;
      font-size: 28px;
      font-family: PingFang-SC-Medium, PingFang-SC;
      font-weight: 500;
      color: #666666;
      line-height: 40px;
    }
    .yaoqin{
      margin: 35px;
      height: 84px;
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
        color: #B88858;
        line-height: 40px;
      }
    }
    .yl_btn{
      width:420px;
        height: 88px;
        border-radius: 44px;
       .btn_text {
      font-size: 32px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 600;
      line-height: 88px;
      color: #ffffff;
    }
    }
    .gren_btn{
       width:420px;
       background: #03C160;
        height: 88px;
        border-radius: 44px;
       .btn_text {
      font-size: 32px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 600;
      line-height: 88px;
      color: #ffffff;
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
