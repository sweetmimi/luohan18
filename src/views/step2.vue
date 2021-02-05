<!-- zys -->
<template>
  <div class="contner">
    <div class="luohanPage">
      <div class="gif">
        <img :src="gif" width="100%" />
      </div>
      <div class="rulai"></div>
        <div class="overall">
    <div class="circle-box" @mousedown.prevent @mouseup.prevent @mousemove.prevent>
      <div class="circle" :style="`width:${circle_w}px;height:${circle_h}px`">
        <div

          class="origin"
          :style="`width:${box_w}px;height:${box_h}px;transform: rotate(${stard}deg);`"
        >
          <div
            :style="`width:${box_w}px;height:${box_h}px;transform: rotate(${-stard}deg);`"
            class="img-box"
            v-for="(i,index) in mydata.lohanList"
            :key="index"
            @click="Turn(index,i.text)"
          >
            <div class="box" >
              <img :src="i.icon" alt="" width="100%">
              <!-- <div class="content">{{index+1}}</div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
      <div class="check">
        <img src="@/assets/images/check.png" alt="" width="100%">
      </div>
      <div class="icon">
          <img src="@/assets/images/rate.png" alt="" width="100%" />
        </div>
      <div class="bottom">
        <div class="btn jump_btn" v-if="showpleaseLohan" @click="showBtn">
          <span class="btn_text">阿弥陀佛</span>
        </div>
        <div class="btn jump_btn" v-else @click="PleaseLohan">
          <span class="btn_text">请本尊罗汉</span>
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
import $ from 'jquery'
import BgcMusic from '@/components/BgcMusic'
import { mydata } from '../assets/js/data.js'
import {  getPleaseLohan } from '@/api/user.js'
export default {
  name: 'mydata.lohanList',
  components: {
    BgcMusic
  },

  data() {
    return {
       circle_w: 375, //圆盘的宽
      circle_h: 375, //圆盘的高
      box_w: 80, //圆盘上覆盖的小圆点宽
      box_h: 80, //圆盘上覆盖的小圆点高
      PI:360, //分布角度，默认为360deg
      stard: 0, //起始角度
      stard_s: null, //用来默认储存第一个初始值
      boxNum: 18, //圆盘上覆盖的小圆点个数
      activeIndex: 1, //默认下标
      arhatId:"",
      userinfo: {
        openid: ''
      },
      showpleaseLohan: true,
      mydata: mydata,
      gif: '',
      imgs: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
    }
  },

  async created() {
    this.stard_s = this.stard;
  },

  computed: {},

  mounted() {
     this.$nextTick(() => {
      this.start()
      let container_dom = this.$refs.bigcircle;
      container_dom.addEventListener('mousedown', this.handleMouseDown.bind(this));
      container_dom.addEventListener('mouseup', this.handleMouseUp.bind(this));
      container_dom.addEventListener('mouseleave', this.handleMouseUp.bind(this));
      container_dom.addEventListener('mousemove', this.handleMouseMove.bind(this));
      container_dom.addEventListener('touchstart', this.handleMouseDown.bind(this));
      container_dom.addEventListener('touchend', this.handleMouseUp.bind(this));
      container_dom.addEventListener('touchcancel', this.handleMouseUp.bind(this));
      container_dom.addEventListener('touchmove', this.handleMouseMove.bind(this));
      window.addEventListener('resize', this.responseContainerScale.bind(this));
      window.addEventListener('load', this.responseContainerScale.bind(this));
    })
     this.init();
    this.Turn(this.activeIndex);
    this.i = 1
    var that = this
    this.ter = setInterval(function () {
      if (that.i == 12) {
        that.i = 1
      }
      that.chImg()
    }, 300)
     this.inde =1
    this.rateTer = setInterval(function () {
       that.inde++
       if(that.inde==18){
         that.inde==1
       }
      that.automatic(that.inde)
    }, 5000)
  },
  beforeDestroy() {
    //清除定时器
    clearInterval(this.ter);
    clearInterval(this.rateTer);
    // console.log("beforeDestroy");
  },
  destroyed() {
    //清除定时器
    clearInterval(this.ter);
    clearInterval(this.rateTer);
    //console.log("destroyed");
  },
  methods: {
        handleMouseDown (e) {
      clearInterval(this.UDLMactionTimer);
      this.mouseIsDown = true;
      this.startX = e.clientX || e.touches[0].clientX;
      this.endX = e.clientX || e.touches[0].clientX;
    },
    handleMouseUp () {
      this.mouseIsDown = false;
      clearInterval(this.timer);
      this.timer = null;
      this.startX = 0;
      this.endX = 0;
      if (this.lastSpeed) this.UDLMaction();
    },
    handleMouseMove (e) {
      this.endX = e.clientX || e.touches[0].clientX;
      if (!this.mouseIsDown) return;
      if (!this.timer) {
        this.timer = setInterval(() => {
          let moveGap = this.endX - this.startX;
          this.lastSpeed = moveGap / this.timeGap;
          this.xGap += moveGap;
          this.direction = moveGap > 0 ? 1 : -1;
          this.startX = this.endX;
        }, this.timeGap);
      }
    },
    chImg() {
      this.gif = require(`@/assets/images/cardGif/${this.imgs[this.i]}.png`)
      this.i++
    },
    showBtn() {
      clearInterval(this.rateTer);
      this.showpleaseLohan = false
    },

    // 亲本尊
    PleaseLohan() {
        getPleaseLohan({
          arhatId:this.arhatId,
        }).then(res => {
          if (res.state == 200) {
            this.$router.replace({
              path: '/step3',
              query: { arhatId: this.arhatId ,isExist:res.data.isExist,oldArhatId:res.data.oldArhatId }
            })
          }
        })

    },
        //初始化小圆点，根据计算使其分布到对应位置
    init() {
      let box = document.querySelectorAll(".img-box");
      let avd = this.PI / box.length; //每一个 img-box 对应的角度
      let ahd = (avd * Math.PI) / 180; //每一个 img-box 对应的弧度
      let radius = this.circle_w / 2; //圆的半径
      for (let i = 0; i < box.length; i++) {
        box[i].style.left = Math.sin(ahd * i) * radius + "px";
        box[i].style.top = Math.cos(ahd * i) * radius + "px";
      }
    },
    //点击相对应小圆点，圆盘进行相对应角度的转动
    Turn(index,arhatId) {
       clearInterval(this.rateTer);
      this.arhatId=arhatId;
      let _this = this;
      let bx = document.querySelectorAll(".box");
      _this.stard = index * (_this.PI / _this.boxNum) + _this.stard_s;
      for (let i = 0; i < bx.length; i++) {
        if (i == index) {
          bx[i].classList.add("box-active");
        } else {
          bx[i].classList.remove("box-active");
        }
      }
    },
    automatic(index){
      this.arhatId=8;
      let _this = this;
      let bx = document.querySelectorAll(".box");
      _this.stard = index * (_this.PI / _this.boxNum) + _this.stard_s;
      for (let i = 0; i < bx.length; i++) {
        if (i == index) {
          bx[i].classList.add("box-active");
        } else {
          bx[i].classList.remove("box-active");
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
  position: absolute;//注释--------------------------此处显示全圆
  // overflow: hidden;//注释----------------------此处显示全圆
   right: 0;//注释---------------------此处显示全圆
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
          transform: scale(0.3);
          cursor: pointer;
          color: white;
          font-size: 40px;
          // background: black;
          // overflow: hidden;
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
    }  //end
  .rulai {
    position: fixed;
    z-index: 200;
    width: 450px;
    left: 0px;
    right:0;
    margin: 0 auto;
    top: 255px;
    height: 600px;
    background-image: url('~@/assets/images/rulai2.png');
    background-size: 100%;
    background-repeat: no-repeat;
  }
  .rotate{
    animation: myRotate 18s linear infinite;
  }
  @keyframes myRotate {
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
}
  .luohan {
    position: relative;
    left: 0;
    right: 0;
    top: 60px;
    margin: 0 auto;
    width: 700px;
    height: 700px;
    // border: 1px dashed #f4f4f4;
    border-radius: 350px;
    li {
      width: 60px;
      position: absolute;
      transform: translateX(-20px);
      img {
        width: 100%;
      }
    }
    .div1 {
      bottom: 0;
      left: 50%;
    }
    .div2 {
      bottom: 20px;
      left: 230px;
    }
    .div3 {
      bottom: 95px;
      left: 140px;
    }
    .div4 {
      bottom: 160px;
      left: 60px;
    }
    .div5 {
      bottom: 300px;
      left: 20px;
    }
    .div6 {
      bottom: 435px;
      left: 40px;
    }
    .div7 {
      bottom: 522px;
      left: 100px;
    }
    .div8 {
      bottom: 580px;
      left: 190px;
    }
    .div9 {
      top: 00px;
      left: 280px;
    }
     .div10 {
      top: 0px;
      right: 260px;
    }
    .div11 {
      top: 30px;
      right: 160px;
    }
    .div12 {
      top: 80px;
      right: 60px;
    }
    .div13 {
      top: 170px;
      right: 20px;
    }
    .div14 {
      top: 280px;
      right: -20px;
    }
    .div15 {
      top: 385px;
      right: 0px;
    }
    .div16 {
      top: 482px;
      right: 30px;
    }
    .div17 {
      top: 580px;
      right: 100px;
    }
    .div18 {
      bottom: 20px;
      right: 180px;
    }
  }
  .check{
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
   bottom: 250px;
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
