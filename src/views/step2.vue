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
      <!-- <div class="banner">
        <div class="icon">
          <img src="../assets/images/rate.png" alt="" width="100%" />
        </div>
      </div> -->
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
import { getUserInfo, getauthorization, getPleaseLohan } from '@/api/user.js'
export default {
  name: '',
  components: {
    BgcMusic
  },

  data() {
    return {
      userinfo:{
        openid:""
      },
      showpleaseLohan: true,
      mydata: mydata,
      gif: '',
      imgs: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
    }
  },

  async created() {

    this.getUser()
  },

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
    }, 200)
  },

  methods: {
    chImg() {
      this.gif = require(`@/assets/images/cardGif/${this.imgs[this.i]}.png`)
      this.i++
    },
    showBtn() {
      this.showpleaseLohan = false
    },
    getUser() {
      var openid = ""
      var params = {}
      try {
         openid=this.$sessionStorage.get('userinfo').openid
         params.openid=openid
      } catch (error) {

      }
      getUserInfo(params).then(res => {
         if(res.state==200){
             this.$sessionStorage.set('userinfo', res.data)
             this.PleaseLohan()
         }

      })
    },
    // 授权
    shouquan() {
      var openid = ""
      var params = {}
      try {
         openid=this.$sessionStorage.get('userinfo').openid
         params.openid=openid
      } catch (error) {

      }
      getauthorization(params).then(res => {
         if(res.state==200){
             this.$sessionStorage.set('userinfo', res.data)
             this.PleaseLohan()
         }
      })
    },
    PleaseLohan() {
     var openid = ""
      var params = {
        arhatId:1
      }
      try {
         openid=this.$sessionStorage.get('userinfo').openid
         params.openid=openid
      } catch (error) {

      }
      getPleaseLohan(params)
        .then((res) => {
          if(res.state==200){
             this.$router.replace({
        path: '/step3',

      })
          }

        })
        .catch(() => {})


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
    width: 398px;
    left: 174px;
    top: 255px;
    height: 397px;
    background-image: url('~@/assets/images/rulai2.png');
    background-size: 100%;
    background-repeat: no-repeat;
  }
  .luohan {
    position: relative;
    left: 0;
    right: 0;
    top: 100px;
    margin: 0 auto;
    width: 700px;
    height: 700px;
    border: 1px solid #ccc;
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
      bottom: 57px;
      left: 190px;
    }
    .div3 {
      bottom: 174px;
      left: 100px;
    }
    .div4 {
      bottom: 261px;
      left: 20px;
    }
    .div5 {
      bottom: 338px;
      left: 0;
    }
    .div6 {
      bottom: 415px;
      left: 0;
    }
    .div7 {
      bottom: 492px;
      left: 0;
    }
    .div8 {
      bottom: 569px;
      left: 0;
    }
    .div9 {
      bottom: 360px;
      left: 350px;
    }
  }
  .banner {
    position: relative;
    z-index: 500;
    width: 700px;
    height: 820px;
    left: 0;
    right: 0;
    top: 71px;
    margin: 0 auto;
    border: 1px solid #ccc;
    .icon {
      position: absolute;
      bottom: 10px;
      margin: 0 auto;
      width: 90px;
      left: 0;
      right: 0;
      text-align: center;
    }
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
    top: 924px;
    left: 0;
    z-index: 1000;
    right: 0;

    .jump_btn {
      z-index: 300;
      position: absolute;
      width: 329px;
      height: 88px;
      left: 0;
      right: 0;
      margin: 0 auto;
      border-radius: 50px;
      .btn_text {
        font-size: 32px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 600;
        color: #ffffff;
        line-height: 88px;
      }
    }
  }
  .text {
    position: fixed;
    text-align: left;
    margin: 0 auto;
    top: 1062px;
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
