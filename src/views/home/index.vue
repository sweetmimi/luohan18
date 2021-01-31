<!-- home -->
<template>
  <div class="index-container">
    <div class="top_bg">
      <img src="@/assets/images/bgluohan/1.jpeg" alt="" />
    </div>
    <div class="lh18">
      <img src="@/assets/images/lh18.png" alt="" />
    </div>
    <div class="card" v-drag>
      <div class="title">
        <div class="text">
          <img src="@/assets/images/bgluohan/1.jpeg" alt="" width="100%" />
          <span class="name"> LJ . 牛年本尊罗汉</span>
        </div>
      </div>
      <div class="line" style="width: 90%"></div>
      <div class="lhName">
        <img src="@/assets/images/bgluohan/1.jpeg" alt="" width="100%" />
        <span class="name">. 伏虎罗汉</span>
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
      right: 20px;
      top: 20px;
      width: 150px;
      height: 150px;
      position:absolute;
      img
       {
        width: 100%;
        height: 100%;
      }
    }
    .text{
       position:absolute;
       top: 160px;
       height: 60px;
       padding: 20px;
      img{
        width: 50px;
        height: 50px;
        float: left;
        vertical-align: middle;
        margin-right: 10px;
      }
      span{
        vertical-align: middle;
        font-size: 16px;
        font-family: PingFang-SC-Bold, PingFang-SC;
        font-weight: bold;
        color: #FFFFFF;
        line-height: 1.6;
      }
    }
  }
  .top_bg {
    width: 100%;
    height: 220px;
   position: fixed;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .lh18{
    width: 30px;
    height: 40px;
    position: fixed;
    left: 50px;
    top: 30px;
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
    
    top: 150px;
    left: 4%;
    z-index: 100;
    width: 92%;
    height: 68%;
    background: #ffffff;
    box-shadow: 1px 3px 10px 1px rgba(164, 164, 164, 0.22);
    .title {
      height: 70px;
      width: 80%;
      margin-left: 10%;

      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      .text {
        .name {
          vertical-align: middle;
          font-size: 16px;
          font-family: PingFang-SC-Bold, PingFang-SC;
          font-weight: 600;
          color: #4e5455;
          line-height: 1.2;
        }
      }
      img {
        width: 40px;
        height: 40px;
        vertical-align: middle;
        margin-right: 10px;
      }
    }
    .lhName {
      margin: 10px auto;
      text-align: center;
      img {
        width: 20px;
        height: 20px;
        vertical-align: middle;
        margin-right: 10px;
      }
      .name {
        vertical-align: middle;
        font-size: 16px;
        font-family: PingFang-SC-Bold, PingFang-SC;
        font-weight: 600;
        color: #4e5455;
        line-height: 1.2;
      }
    }
    .blueTitle {
      text-align: left;
      font-size: 14px;
      font-family: PingFang-SC-Bold, PingFang-SC;
      font-weight: 600;
      color: #303f7b;
      line-height: 1.4;
    }
    .detl {
      letter-spacing:1px;
      padding: 5px 10px;
      margin-bottom: 10px;
      font-size: 14px;
      font-family: PingFang-SC-Medium, PingFang-SC;
      font-weight: 500;
      color: #666666;
      line-height: 1.6;
    }
    .yaoqin{
      margin: 10px 20px;
      height: 40px;
       img {
        float: left;
        width: 15px;
        height: 30px;
        vertical-align: middle;
        margin-right: 10px;
      }
      .text {
        vertical-align: middle;
        font-size: 14px;
        font-family: PingFang-SC-Bold, PingFang-SC;
        color: #B88858;
        line-height: 1.6;
      }
    }
    .yl_btn{
      width:60%;
        height: 35px;
        line-height: 40px;
        border-radius: 40px;
       .btn_text {
      font-size: 14px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 600;
      color: #ffffff;
    }
    }
    .gren_btn{
       width:60%;
       background: #03C160;
        height: 35px;
        line-height: 35px;
        border-radius: 35px;
       .btn_text {
      font-size: 14px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 600;
      color: #ffffff;
    }
    }
  }

  .card:before {
    content: '';
    display: block;
    position: absolute;
    left: -14px;
    top: 70px;
    background: #f8f8f8;
    border-radius: 50%;
    width: 28px;
    height: 28px;
  }
  .card:after {
    content: '';
    display: block;
    position: absolute;
    right: -14px;
    top: 70px;
    background: #f8f8f8;
    border-radius: 50%;
    width: 28px;
    height: 28px;
  }
}
</style>
