<!-- zys -->
<template>
  <div class="contner">
    <div class="homePage">
      <div class="gif">
        <img :src="gif" />
      </div>
      <div class="rulai"></div>
      <!-- 音乐 -->
      <BgcMusic></BgcMusic>
      <!-- 按钮 -->
      <div class="btn home_btn" @click="getCode">
        <span class="btn_text" v-if="show"> 请施主静心拜佛再进入罗汉堂</span>
        <span class="btn_text" v-else>静心拜佛 ({{ count }}s后进入罗汉堂)</span>
      </div>
    </div>
  </div>
</template>

<script>
import BgcMusic from '@/components/BgcMusic'
export default {
  name: 'home',
  components: {
    BgcMusic
  },

  data() {
    return {
      i: 0,
      show: true,
      count: '',
      timer: null,
      checked: true, // 默认开始音乐播放
      src: require('../assets/images/music.png'), // 注意图片资源的加载方式
      mymove: true, // 控制音乐控制按钮样式
       gif: '',
      imgs: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
    }
  },

  created() {},

  computed: {},

  mounted() {
    this.getCode()
    this.i = 1
    var that = this
    this.ter = setInterval(function () {
      if (that.i == 12) {
        that.i = 1
      }
      that.chImg()
    }, 300)
    window.addEventListener('scroll', this.handleScroll, true)
  },
  beforeDestroy() {
    //清除定时器
    clearInterval(this.ter);
    // console.log("beforeDestroy");
  },
  destroyed() {
    //清除定时器
    clearInterval(this.ter);
    //console.log("destroyed");
  },
  methods: {

    chImg() {
      this.gif = require(`@/assets/images/homeGif/${this.imgs[this.i]}.png`)
      this.i++
    },
    handleScroll() {
      // 页面滚动距顶部距离
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      var scroll = scrollTop - this.i
      this.i = scrollTop
      //  console.log(this.i)
    },
    //点击按钮倒计时
    getCode() {
      const TIME_COUNT = 5
      if (!this.timer) {
        this.count = TIME_COUNT
        this.show = false
        this.timer = setInterval(() => {
          if (this.count > 1 && this.count <= TIME_COUNT) {
            this.count--
          } else {
            clearInterval(this.timer)
            this.timer = null
            this.$router.replace({
              path: 'step2',
              // query: { appid: '123456' }
            })
          }
        }, 1000)
      }
    },

  }
}
</script>
<style lang='scss' scoped>
.homePage {
  z-index: 100;
  position: relative;
  width: 750px;
  height: 100%;
  background-image: url('../assets/images/rulai_bgc.png');
  background-size: cover;
  background-repeat: no-repeat;
  .gif {
     position: absolute;
     left: -80px;
    width: 106%;
    height: 1200px;
    img{
      width:106%;
      height: 100%;
    }
  }
  .rulai {
    z-index: 200;
    position: absolute;
    left: 0;
    right: 0;
    top: 300px;
    bottom: 0;
    margin: auto;
    width: 100%;
    height: 70%;
    margin: 0 auto;
    background-image: url('~@/assets/images/rulai.png');
    background-size: 100% ;
    background-repeat: no-repeat;
  }
  .home_btn {
    z-index: 300;
    bottom: 20px;
    position: absolute;
    width: 70%;
    height: 80px;
    left: 15%;
    border-radius: 50px;
    .btn_text {
      font-size: 30px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 600;
      color: #ffffff;
      line-height: 80px;
    }
  }
}
</style>
