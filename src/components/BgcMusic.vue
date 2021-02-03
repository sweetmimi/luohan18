<!-- zys -->
<template>
      <!-- 音乐 -->
      <div class="myMusic">
        <keep-alive>
          <audio
            id="bg-music"
            ref="music"
            controls
            autoplay="autoplay"
            hidden="true"
            :src="require('@/assets/music/bgMusic.mp3')"
            loop="loop"
          ></audio>

        </keep-alive>
        <keep-alive>
          <img
            :src="src"
            alt=""
            width="40px"
            height="40px"
            @click="open"
            class="img"
            :class="{ start: mymove, pause: !mymove }"
          />
        </keep-alive>
      </div>
</template>

<script>
export default {
  name: "BgcMusic",
  components: {},

  data() {
    return {
      show: true,
      count: "",
      checked: true, // 默认开始音乐播放
      src: require("../assets/images/music.png"), // 注意图片资源的加载方式
      mymove: true, // 控制音乐控制按钮样式
    };
  },

   created() {
    // 音乐自动播放监听

  },

  computed: {},
  mounted() {
    document.addEventListener("DOMContentLoaded", function () {
      function audioAutoPlay() {
       var audio = this.$refs.music;
        audio.play();
        document.addEventListener(
          "WeixinJSBridgeReady",
          function () {
            audio.play();
          },
          false
        );
      }
      audioAutoPlay();
    });


  },

  methods: {

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
  .myMusic {
    .img {
      position: fixed !important;
      right: 54px;
      top: 60px;
      width: 68px;
      height: 68px;
      z-index: 1000;
    }
    .start {
      transform-origin:50% 50%;

      animation: mymove 3s infinite linear; // 旋转动画部分
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
</style>
