<!-- zys -->
<template>
  <div class="contner">
    <div class="luohanPage">
      <div class="gif">
        <img :src="gif" width="100%" />
      </div>
      <div class="rulai"></div>
      <!-- <div class="luohan">
        <ul>
          <li v-for="(item, index) in mydata.lohanList" :key="index">
            <img :src="item.icon" alt="" />
          </li>
        </ul>
      </div> -->
      <div class="banner">
        <div class="container" node-type="container" style="position: relative; width: 320px; height: 215px">
          <div style="position: absolute; top: 0; left: 0">ert</div>
        </div>
      </div>
      <div class="bottom">
        <div class="icon">
          <img src="../assets/images/rate.png" alt="" width="100%" />
        </div>
        <div class="btn jump_btn" @click="jump">
          <span class="btn_text">阿弥陀佛</span>
        </div>
      </div>
      <div class="text">
        <p>阿弥陀佛，请施主左右滑动十八罗汉图，选择罗汉菩并点击“阿弥陀佛”作为数罗汉的起始点</p>
      </div>
    </div>
    <BgcMusic></BgcMusic>
  </div>
</template>

<script>
import BgcMusic from '@/components/BgcMusic'
import { mydata } from '../assets/js/data.js'
export default {
  name: '',
  components: {
    BgcMusic
  },

  data() {
    return {
      mydata: mydata,
      gif: '',
      imgs: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
    }
  },

  async created() {},

  computed: {},

  mounted() {
    this.size = this.imgs.length
    this.i = 1
    var that = this
    this.tim = setInterval(function () {
      if (that.i == 12) {
        that.i = 1
      }
      that.chImg()
    }, 100)
  },

  methods: {
    chImg() {
      this.gif = require(`@/assets/images/cardGif/${this.imgs[this.i]}.png`)
      this.i++
    },
    jump(){
       this.$router.replace({
              path: "/my",
              query: { appid: "123456" },
            });
    },
    activated() {
      var _this = this
      _this.uuid = _this.$route.query.uuid
      var shareUrl = global.BASE_SHARE_URL + 'grade?uuid=' + _this.uuid
      this.$wxShare.updateWxShareConfig({
        title: '标题',
        desc: '简介',
        link: shareUrl
      })
    }
  }
}
</script>
<style lang='scss' scoped>
.luohanPage {
  margin: 0 auto;
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 100%;
  background-image: url('~@/assets/images/black_bgc.png');
  background-size: cover;
  background-repeat: no-repeat;
  .rulai {
    position: fixed;
    z-index: 200;
    width: 70%;
    left: 15%;
    top: 130px;
    height: 400px;
    background-image: url('~@/assets/images/rulai2.png');
    background-size: 100%;
    background-repeat: no-repeat;
  }
  .gif {
    position: fixed;
    z-index: 150;
    width: 100%;
    // top: 50px;
    height: 40px;
    // left: 10%;
    //  top: 0;
    // transform: translateX(-125px);
  }
  .bottom {
    position: fixed;
    margin: 0 auto;
    width: 80%;
    bottom: 120px;
    left: 0;
    z-index: 200;
    right: 0;

    .icon {
      margin: 0 auto;
      width: 50px;
      text-align: center;
    }
    .jump_btn {
      width: 60%;
      height: 50px;
      border-radius: 50px;
      .btn_text {
        font-size: 18px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 600;
        color: #ffffff;
        line-height: 50px;
      }
    }
  }
  .text {
    position: fixed;
    text-align: left;
    margin: 0 auto;
    width: 80%;
    height: 100px;
    bottom: 20px;
    left: 0;
    z-index: 200;
    right: 0;
    background: rgba(187, 187, 187, 0.25);
    border-radius: 15px;
    p {
      margin: 15px;
      font-size: 18px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #ffffff;
      line-height: 1.3;
    }
  }
}
</style>