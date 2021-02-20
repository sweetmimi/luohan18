<!-- zys -->
<template>
  <div class="contner">
    <div class="luohanPage">
      <div class="gif">
        <img :src="gif" width="100%" />
      </div>
      <div class="rulai"></div>

      <div class="height jieruwang flexbox center">
        <div
          class="jrwLeft center"
          id="div1"
          ref="bigcircle"
          :style="{
            transform: `rotate(${turnRotate}deg)`,
            height: clientWidth + 'px'
          }"
        >
          <div
            v-for="(item, idx) in arhatList"
            :key="item + idx"
            :class="['city', 'city' + idx, city == item ? 'active' : '']"
            :style="computedCardPosStyle(idx - 1)"
          >
            <img :src="item.arhatPic" alt="" width="40" />
          </div>
        </div>
      </div>

      <div class="bottom">
        <div class="btn jump_btn" @click="PleaseLohan">
          <span class="btn_text">阿弥陀佛</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BgcMusic from '@/components/BgcMusic'

import { getPleaseLohan, getLohanListData } from '@/api/user.js'
import $ from 'jquery'
export default {
  name: 'mydata.lohanList',
  components: {
    BgcMusic
  },

  data() {
    return {
      arhatList: '',
 timer: null,
      a0: 0,
      a1: 0,
      circleTimer: null,
      clientWidth: 300,
      smallcircle: 100,
      msg: {},
      city: "require('../../src/assets/luohan/1.png'),",
      startX: 0,
      endX: 0,
      UDLMactionTimer: null,
      mouseIsDown: false,
      xGap: 0,
      lastSpeed: 0,
      direction: 1,
      containerScale: 1,
      // 配置
      timeGap: 20,
      turnRotateProportion: 300,
      reduceSpeed: 1.5,
      turntableR: 200,
      cardCount: 18,
      pause: "",
      wxwpause: "",
      zqpause: "",
      clickType: "",
      userinfo: {
        openid: ''
      },
      showpleaseLohan: true,

      gif: '',
      imgs: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
    }
  },

  async created() {
    this._getLohanListData()
    this.stard_s = this.stard
  },

  computed: {
    turnRotate() {
      return (this.xGap * this.turnRotateProportion) / (2 * Math.PI * this.turntableR)
    }
  },
  beforeDestroy() {
    let container_dom = this.$refs.bigcircle
    container_dom.removeEventListener('mousedown', this.handleMouseDown.bind(this))
    container_dom.removeEventListener('mouseup', this.handleMouseUp.bind(this))
    container_dom.removeEventListener('mouseleave', this.handleMouseUp.bind(this))
    container_dom.removeEventListener('mousemove', this.handleMouseMove.bind(this))
    container_dom.removeEventListener('touchstart', this.handleMouseDown.bind(this))
    container_dom.removeEventListener('touchend', this.handleMouseUp.bind(this))
    container_dom.removeEventListener('touchcancel', this.handleMouseUp.bind(this))
    container_dom.removeEventListener('touchmove', this.handleMouseMove.bind(this))
    window.removeEventListener('resize', this.responseContainerScale.bind(this))
  },
  mounted() {


    this.init()
    this.Turn(this.activeIndex)
    this.i = 1
    var that = this
    this.ter = setInterval(function () {
      if (that.i == 12) {
        that.i = 1
      }
      that.chImg()
    }, 300)
    this.inde = 1
  },
  beforeDestroy() {
    //清除定时器
    clearInterval(this.ter)
    clearInterval(this.rateTer)
    // console.log("beforeDestroy");
  },
  destroyed() {
    //清除定时器
    clearInterval(this.ter)
    clearInterval(this.rateTer)
    //console.log("destroyed");
  },
  methods: {
    //获取罗汉list
    _getLohanListData() {
      getLohanListData({}).then(res => {
        this.arhatList = res.data.arhatList
        this.start()
        // console.log(this.arhatList)
      })
    },
    chImg() {
      this.gif = require(`@/assets/images/cardGif/${this.imgs[this.i]}.png`)
      this.i++
    },
    showBtn() {
      clearInterval(this.rateTer)
      this.showpleaseLohan = false
    },

    // 亲本尊
    PleaseLohan() {
      this.$router.replace({
        path: '/step22',
        query: {}
      })
    },
    //轮播方法
    handleMouseDown(e) {
      clearInterval(this.UDLMactionTimer)
      this.mouseIsDown = true
      this.startX = e.clientX || e.touches[0].clientX
      this.endX = e.clientX || e.touches[0].clientX
    },
    handleMouseUp() {
      this.mouseIsDown = false
      clearInterval(this.timer)
      this.timer = null
      this.startX = 0
      this.endX = 0
      if (this.lastSpeed) this.UDLMaction()
    },
    handleMouseMove(e) {
      this.endX = e.clientX || e.touches[0].clientX
      if (!this.mouseIsDown) return
      if (!this.timer) {
        this.timer = setInterval(() => {
          let moveGap = this.endX - this.startX
          this.lastSpeed = moveGap / this.timeGap
          this.xGap += moveGap
          this.direction = moveGap > 0 ? 1 : -1
          this.startX = this.endX
        }, this.timeGap)
      }
    },
    computedCardPosStyle() {
      return {
        transform: `rotate(${-this.turnRotate}deg)`
      }
    },
    UDLMaction() {
      let a = -this.reduceSpeed * this.direction
      this.UDLMactionTimer = setInterval(() => {
        this.lastSpeed = (this.lastSpeed + a) * this.direction >= 0 ? this.lastSpeed + a : 0
        this.xGap += this.lastSpeed * this.timeGap
        if (!this.lastSpeed) {
          this.moreDynamic()
          return clearInterval(this.UDLMactionTimer)
        }
      }, this.timeGap)
    },
    moreDynamic() {
      let time = 10
      let timer = setInterval(() => {
        this.xGap += this.direction * 3
        if (--time <= 0) clearInterval(timer)
      }, 20)
    },
    responseContainerScale() {
      if (window.innerWidth < 650) {
        this.containerScale = window.innerWidth / 650
        this.turnRotateProportion = 800
      }
    },
    posimgs1(obj) {
      var da = obj.da,
        a0 = obj.a0
      //   var classname = obj.classname,
      var circlename = obj.circlename
      var w = obj.w
      var centerx = obj.centerx,
        centery = obj.centery || w,
        r = w - 12
      for (var i = 0; i < $('.' + circlename).length; i++) {
        $('.' + circlename)[i].style.left = centerx + r * Math.cos(((da * i + a0) / 180) * Math.PI) + 'px'
        $('.' + circlename)[i].style.top = centery + r * Math.sin(((da * i + a0) / 180) * Math.PI) + 'px'
      }
    },
    start() {
      var that = this
      const timer = window.setInterval(function () {
        var w = $('.jrwLeft').width() / 2
        var obj = {
          classname: 'jrwLeft',
          circlename: 'city',
          da: 20, //图片间隔角度
          a0: that.a0, //已旋转角度,
          w: w - 12,
          centerx: w - 16,
          centery: w - 12
        }
        that.posimgs1(obj)
        that.a0++
      }, 50)
      that.circleTimer = timer
      that.$once('hook:beforeDestroy', () => {
        clearInterval(this.circleTimer)
      })
    },
    stop() {
      window.clearInterval(this.circleTimer)
    },
    //end
    //初始化小圆点，根据计算使其分布到对应位置
    init() {
      let box = document.querySelectorAll('.img-box')
      let avd = this.PI / box.length //每一个 img-box 对应的角度
      let ahd = (avd * Math.PI) / 180 //每一个 img-box 对应的弧度
      let radius = this.circle_w / 2 //圆的半径
      for (let i = 0; i < box.length; i++) {
        box[i].style.left = Math.sin(ahd * i) * radius + 'px'
        box[i].style.top = Math.cos(ahd * i) * radius + 'px'
      }
    },
    //点击相对应小圆点，圆盘进行相对应角度的转动
    Turn(index, arhatId) {
      clearInterval(this.rateTer)
      this.arhatId = arhatId
      let _this = this
      let bx = document.querySelectorAll('.box')
      _this.stard = index * (_this.PI / _this.boxNum) + _this.stard_s
      for (let i = 0; i < bx.length; i++) {
        if (i == index) {
          bx[i].classList.add('box-active')
        } else {
          bx[i].classList.remove('box-active')
        }
      }
    },
    automatic(index) {
      this.arhatId = 8
      let _this = this
      let bx = document.querySelectorAll('.box')
      _this.stard = index * (_this.PI / _this.boxNum) + _this.stard_s
      for (let i = 0; i < bx.length; i++) {
        if (i == index) {
          bx[i].classList.add('box-active')
        } else {
          bx[i].classList.remove('box-active')
        }
      }
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
  //ccs
  .overall {
    position: relative;
    left: 0;
    right: 0;
    top: 60px;
    margin: 0 auto;
    width: 700px;
    height: 700px;
    // border: 1px dashed #f4f4f4;
    border-radius: 350px;

    .circle-box {
      position: absolute; //注释--------------------------此处显示全圆
      // overflow: hidden;//注释----------------------此处显示全圆
      right: 0; //注释---------------------此处显示全圆
      left: 0;
      margin: 0 auto;
      .circle {
        transform: scale(0.9);
        width: 100%;
        height: 100%;
        border-radius: 50%;
        box-sizing: border-box;
        // border: 1px solid #4d4c4c;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        // margin-left: 50%; //注释----------------此处显示全圆
        .origin {
          position: relative;
          transition: 0.5s; //控制圆盘的的旋转速率
          .img-box {
            user-select: none;
            position: absolute;
            top: 0;
            left: 0;
            transition: none !important;
            pointer-events: none;
            .box {
              pointer-events: all !important;
              width: 100%;
              height: 100%;
              transition: 0.3s;
              display: flex;
              justify-content: center;
              align-items: center;
              position: absolute;
              left: 0;
              top: 0;
              // border-radius: 50%;
              transform: scale(0.5);
              cursor: pointer;
              color: white;
              font-size: 40px;
              // background: black;
              overflow: hidden;
              &:hover {
                transform: scale(0.3);
              }
              &:hover .content {
                opacity: 1;
              }
              .content {
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                opacity: 0;
              }
            }
            .box-active {
              transition-delay: 0.3s;
              transform: scale(1) !important;
              .content {
                opacity: 1;
              }
            }
          }
        }
      }
    }
  } //end

  //start//
  .jieruwang {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .jrwLeft {
    position: relative;
    width: 750px;
    height: 750px;
    border-radius: 50%;
    min-width: 400px;
    min-height: 400px;
    // background-color: #070e3a;
    z-index: 2;
    cursor: pointer;
  }
  .city {
    position: absolute;
    color: #559ae7;
    font-size: 12px;
    z-index: 0;
  }
  .city:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  .block {
    /* width: 82%;
  height: 82%;
  border-radius: 50%; */
    /* background-color: #070a24; */
    /* text-align: center; */
  }
  .middle {
    width: 90%;
    height: 90%;
    border-radius: 50%;
    position: relative;
    background-color: #070e3a;
  }
  .middle > p {
    position: absolute;
    top: 2%;
    left: 36%;
    font-size: 14px;
    color: #559ae7;
  }

  .leftTitle {
    position: relative;
  }
  .leftTitle::after {
    position: absolute;
    content: 'O/B/M域';
    width: 100%;
    text-align: center;
    height: 12%;
    left: 40%;
    top: 1%;
    font-size: 14px;
    line-height: 2;
    color: #559ae7;
  }
  @-webkit-keyframes rotate {
    0% {
      -webkit-transform: rotate(0deg);
    }
    50% {
      -webkit-transform: rotate(180deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes rotate1 {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-360deg);
    }
  }
  @-webkit-keyframes rotate1 {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(-360deg);
    }
  }
  @keyframes myfirst {
    0% {
      left: 0%;
    }
    25% {
      left: 25%;
    }
    50% {
      left: 50%;
    }
    75% {
      left: 75%;
    }
    100% {
      left: 100%;
    }
  }
  .pause {
    -webkit-animation-play-state: paused !important;
    animation-play-state: paused !important;
  }
  .pause p,
  img {
    -webkit-animation-play-state: paused !important;
    animation-play-state: paused !important;
    cursor: pointer;
  }

  .pause::after {
    -webkit-animation-play-state: paused !important;
    animation-play-state: paused !important;
  }
  .active {
    font-weight: bold;
    text-decoration: underline;
    color: #ec725b !important;
  }
  .small {
    font-size: 10px;
  }
  //end//
  .rulai {
    position: fixed;
    z-index: 200;
    width: 300px;
    left: 0px;
    right: 0;
    margin: 0 auto;
    top: 255px;
    height: 397px;
    background-image: url('~@/assets/images/rulai2.png');
    background-size: 100%;
    background-repeat: no-repeat;
  }
  .rotate {
    animation: myRotate 18s linear infinite;
  }
  @keyframes myRotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .check {
    position: absolute;
    width: 120px;
    height: 120px;
    top: 850px;
    margin: 0 auto;
    width: 90px;
    left: 0;
    right: 0;
  }
  .icon {
    position: absolute;
    top: 920px;
    margin: 0 auto;
    width: 90px;
    left: 0;
    right: 0;
  }
  .gif {
    width: 100%;
    height: 40px;
  }
  .bottom {
    position: fixed;
    margin: 20px auto;
    width: 80%;
    height: 80px;
    bottom: 150px;
    left: 0;
    z-index: 99;
    right: 0;

    .jump_btn {
      z-index: 300;
      position: fixed;
      width: 329px;
      height: 80px;
      left: 0;
      right: 0;
      margin: 0 auto;
      border-radius: 50px;
      .btn_text {
        font-size: 32px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 600;
        color: #ffffff;
        line-height: 80px;
      }
    }
  }
  .text {
    position: absolute;
    text-align: left;
    margin: 0 auto;
    bottom: 80px;
    left: 0;
    z-index: 200;
    right: 0;
    width: 611px;
    height: 168px;
    background: rgba(187, 187, 187, 0.25);
    border-radius: 15px;
    p {
      margin: 15px;
      font-size: 32px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #ffffff;
      line-height: 1.3;
    }
  }
}
</style>
