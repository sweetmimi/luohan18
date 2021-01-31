<!-- zys -->
<template>
  <div class="contner">
    <div class="homePage">
      <div class="rulai"></div>
      <!-- 音乐 -->
    <BgcMusic></BgcMusic>
    
      <!-- 按钮 -->
      <div class="btn home_btn" @click="getCode">
        <span class="btn_text" v-if="show"> 静心拜佛</span>
        <span class="btn_text" v-else>静心拜佛 ({{ count }}s后进入罗汉堂)</span>
      </div>
    </div>
  </div>
</template>

<script>
import BgcMusic from  '@/components/BgcMusic';
import { mydata } from "../assets/js/data.js";
export default {
  name: "home",
  components: {
    BgcMusic
  },

  data() {
    return {
      i: 0,
      mydata: mydata,
      show: true,
      count: "",
      timer: null,
      checked: true, // 默认开始音乐播放
      src: require("../assets/images/music.png"), // 注意图片资源的加载方式
      mymove: true, // 控制音乐控制按钮样式
    };
  },

   created() {
   
  },

  computed: {},

  mounted() {
    console.log(wx)
    window.addEventListener("scroll", this.handleScroll, true);
    
  },

  methods: {
    handleScroll() {
      // 页面滚动距顶部距离
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      var scroll = scrollTop - this.i;
      this.i = scrollTop;
      //  console.log(this.i)
    },
    //点击按钮倒计时
    getCode() {
      const TIME_COUNT = 5;
      if (!this.timer) {
        this.count = TIME_COUNT;
        this.show = false;
        this.timer = setInterval(() => {
          if (this.count > 1 && this.count <= TIME_COUNT) {
            this.count--;
          } else {
            this.show = true;
            clearInterval(this.timer);
            this.timer = null;
            this.$router.replace({
              path: "step2",
              query: { appid: "123456" },
            });
          }
        }, 1000);
      }
    },
    //播放音乐
    open() {
      console.log("open");
        var audio = this.$refs.music;
      // var audio = document.getElementById("bg-music");
      console.log(audio);
      this.checked = !this.checked;
      if (this.checked) {
        this.src = require("../assets/images/music.png");
        audio.play();
        this.mymove = true;
      } else {
        this.src = require("../assets/images/music.png");
        audio.pause();
        this.mymove = false;
      }
    },
  },
};
</script>
<style lang='scss' scoped>
.homePage {
    z-index: 100;
  position: fixed ;
  width: 100%;
  height:  100%;
  background-image: url('../assets/images/rulai_bgc.png');
  background-size: cover;
  background-repeat: no-repeat;
  .rulai {
    z-index: 200;
    position: absolute;
    left: 0;
    right: 0;
    top: 30%;
    bottom: 0;
    margin: auto;
    width: 100%;
    height: 70%;
    margin: 0 auto;
    background-image: url('~@/assets/images/rulai.png');
    background-size: 100%;
    background-repeat: no-repeat;
  }
  .home_btn {
     z-index: 300;
    bottom: 16%;
    position: absolute;
    width: 76%;
    height: 50px;
    left: 12%;
    border-radius: 50px;
    .btn_text {
      font-size: 18px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 600;
      color: #ffffff;
      line-height: 50px;
    }
  }
  .myMusic {
    .img {
      position: fixed !important;
      right: 30px;
      top: 40px;
      width: 40px;
      height: 40px;
      z-index: 1000;
    }
    .start {
      animation: mymove 1.5s infinite linear; // 旋转动画部分
    }
    .pause {
      z-index: 1000;
    }
    // css 桢动画
    @keyframes mymove {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
}
</style>
