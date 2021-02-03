<!-- zys -->
<template>
  <div class="contner">
    <div class="luohanPage">
      <div class="gif">
        <img :src="gif" width="100%" />
      </div>
      <div class="rulai"></div>
      <div class="luohan rotate">
        <ul>
          <li v-for="(item, index) in mydata.lohanList" :key="index" :class="`div${index + 1}`">
            <img :src="item.icon" alt="" />
          </li>
        </ul>
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
        <div class="btn jump_btn" v-else @click="shouquan">
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
import BgcMusic from '@/components/BgcMusic'
import { mydata } from '../assets/js/data.js'
import { getUserInfo, getPleaseLohan } from '@/api/user.js'
export default {
  name: '',
  components: {
    BgcMusic
  },

  data() {
    return {
      arhatId:Math.floor(Math.random()*10+1),
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
  },

  computed: {},

  mounted() {
    this.i = 1
    var that = this
    this.ter = setInterval(function () {
      if (that.i == 12) {
        that.i = 1
      }
      that.chImg()
    }, 300)
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
      this.gif = require(`@/assets/images/cardGif/${this.imgs[this.i]}.png`)
      this.i++
    },
    showBtn() {
      this.showpleaseLohan = false
    },

    // 授权
    shouquan() {
      if (this.$sessionStorage.get('userinfo')) {
        getPleaseLohan({
          arhatId:this.arhatId,
        }).then(res => {
          if (res.state == 200) {
            if(res.data.oldArhatId){
              this.$storage.set('oldArhatId', res.data.oldArhatId)  
            }
            this.$router.replace({
              path: '/step3',
              query: { arhatId: this.arhatId ,isExist:res.data.isExist,oldArhatId:res.data.oldArhatId }
            })
          }
        })
      } else {
        document.location.replace('http://luohan.wuhanhsj.com/vote/api/v1/android/authorization')
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
  .rulai {
    position: fixed;
    z-index: 200;
    width: 450px;
    left: 0px;
    right:0;
    margin: 0 auto;
    top: 255px;
    height: 397px;
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
    position: absolute;
    margin: 20px auto;
    width: 80%;
    height: 80px;
   top: 1000px;
    left: 0;
    z-index: 1000;
    right: 0;

    .jump_btn {
      z-index: 300;
      position: absolute;
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
    bottom: 40px;
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
