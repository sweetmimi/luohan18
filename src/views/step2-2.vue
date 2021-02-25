<!-- zys -->
<template>
  <div class="contner">
    <div class="lhContner">
      <div class="swiper">
        <!-- 轮播图 -->
        <swiper
          ref="mySwiper"
          :options="swiperOptions"
          @swiper="onSwiper"
          @touchStart="touchStart"
          @touchEnd="touchEnd"
          @slidePrevTransitionStart="slidePrevStart"
          @slidePrevTransitionEnd="slidePrevEnd"
          @slideNextTransitionStart="slideNextStart"
          @slideNextTransitionEnd="slideNextEnd"
          @click="gg"
          @slideChange="onSlideChange"
          @slideChangeTransitionStart="SlideChangeStart"
          @slideChangeTransitionEnd="SlideChangeEnd"
        >
          <swiper-slide :id="item.id" v-for="item in arhatList" :key="item.id"
            ><img :src="item.arhatPic" alt="" width="100%"
          /></swiper-slide>
        </swiper>
        <!-- <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div> -->
        <div class="check">
          <img src="@/assets/images/check.png" alt="" width="100%" />
        </div>
        <div class="age" v-show="!showpleaseLohan">
          <span v-if="age > 0">
            {{ age }}
          </span>
          <span v-else>
            {{ -age }}
          </span>
        </div>
      </div>
      <div class="bottom">
        <div class="jump_btn" v-show="showpleaseLohan" @click="emtuofo_click">
          <div class="btn_text btn">阿弥陀佛</div>
          <div class="text">
            <p>请施主随意滑动屏幕后,点击 "阿弥陀佛" 将当前罗汉作为数罗汉的起始点</p>
          </div>
        </div>
        <div class="jump_btn" v-show="!showpleaseLohan" @click="qingbenzun_click">
          <div class="btn_text btn">请本尊罗汉</div>
          <div class="text">
            <p>请施主按照"男左女右的方式划动,数到自己年龄的虚岁数字,点击"请本尊罗汉"</p>
          </div>
        </div>
      </div>
      <BgcMusic></BgcMusic>
    </div>
  </div>
</template>

<script>
import BgcMusic from '@/components/BgcMusic'
import { getPleaseLohan, getLohanListData } from '@/api/user.js'
import 'swiper/swiper-bundle.min.css'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import SwiperCore, { Autoplay, Navigation } from 'swiper'
SwiperCore.use([Navigation, Autoplay])
export default {
  name: '',
  components: {
    Swiper,
    SwiperSlide,
    BgcMusic
  },

  data() {
    return {
      age: 0,
      activeIndex: 0,
      showpleaseLohan: true,
      arhatList: [],
      swiperOptions: {
        slidesPerGroup: 1,
        slidesPerView: 3.8,
        grabCursor: true,
        spaceBetween: 10,
        centeredSlides: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },

  async created() {
    this._getLohanListData()
  },

  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },

  mounted() {
    console.log('Current Swiper instance object', this.swiper)
    this.swiper.slideTo(3, 1000, false)
  },

  methods: {
    //获取罗汉list
    _getLohanListData() {
      getLohanListData({}).then(res => {
        this.arhatList = res.data.arhatList

        // console.log(this.arhatList)
      })
    },
    //点击阿弥陀佛
    emtuofo_click() {
      this.showpleaseLohan = false
      console.log(this.swiper)
      this.swiper.autoplay.stop()
      this.age = 0
    },
    //请本尊按钮
    qingbenzun_click(e) {
      var artid = 0
      var active = 'swiper-slide-active'
      this.swiper.slides.forEach((item, index) => {
        if (item.className.includes(active)) {
          artid = item.id
          console.log(artid)
        }
      })

      this.PleaseLohan(artid)
    },
    // 请本尊
    PleaseLohan(id) {
      this.arhatId = id
      getPleaseLohan({
        arhatId: id
      }).then(res => {
        if (res.state == 200) {
          this.$sessionStorage.set('oldArhatTip', res.data.tip)
          this.$router.push({
            path: '/step3',
            query: { arhatId: this.arhatId, isExist: res.data.isExist, oldArhatId: res.data.oldArhatId }
          })
        }
      })
    },
    onSwiper(swiper) {
      // console.log(swiper)
    },
    touchStart(swiper, event) {
      this.beforeActiveIndex = swiper.activeIndex
      // console.log('滑动前',swiper.activeIndex)
      //   console.log(event)
      //  console.log(swiper.activeIndex)
    },
    touchEnd(swiper, event) {
      //  console.log(swiper.activeIndex)
      // console.log('end',event)
    },
    slidePrevStart() {},
    //左滑
    slidePrevEnd() {
      // this.age--
      // console.log(this.activeIndex)
      // console.log('left')
      // console.log(this.swiper)
    },
    slideNextStart(swiper) {
      // console.log(this.swiper.activeIndex)
    },
    //右滑
    slideNextEnd(swiper) {
      // this.age++
      // console.log(this.swiper)
      // console.log(this.swiper.activeIndex)
      // console.log('right')
    },
    onSlideChange(swiper) {
      this.afterActiveIndex = swiper.activeIndex

      var step = Number(this.beforeActiveIndex - this.afterActiveIndex)

      console.log('step', step)
      if (step > 8) {
        console.log('8')
        this.age -= 1
      } else if (step < -8) {
        this.age += 1
      } else {
        console.log('8')
        this.age += step
      }
      // console.log(swiper.activeIndex)
      // this.activeIndex = swiper.activeIndex
    },
    SlideChangeStart(swiper) {},
    SlideChangeEnd(swiper) {
      //  console.log('滑动后',swiper.activeIndex)
    },
    gg() {
      console.log('click')
    }
  }
}
</script>
<style lang='scss' scoped>
.lhContner {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url('../assets/images/goad.png');
  background-size: cover;
  background-repeat: no-repeat;
  .swiper {
    height: 400px;
    width: 100%;
    // margin-top: 30%;
    position: absolute;
    top: 30%;
    .swiper-container {
      overflow: visible;
    }
    .swiper-slide-active {
      transform: scale(1.5);
    }
    .check {
      position: absolute;
      width: 70px;
      height: 44px;
      left: 0;
      right: 0;
      margin: 80px auto 30px;
    }
    .age {
      text-align: center;
      position: absolute;
      width: 198px;
      height: 102px;
      background: rgba(0, 0, 0, 0.65);
      border-radius: 15px;
      border: 1px solid #979797;
      left: 0;
      right: 0;
      margin: 150px auto 30px;
      span {
        font-size: 50px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #ffffff;
        line-height: 102px;
      }
    }
  }
  .bottom {
    position: absolute;
    margin: 20px auto;
    width: 80%;
    height: 270px;
    bottom: 10px;
    left: 0;
    z-index: 99;
    right: 0;

    .jump_btn {
      position: absolute;
      z-index: 300;
      width: 100%;
      height: 100%;
      left: 0;
      right: 0;
      margin: 0 auto;
      border-radius: 50px;
      .btn_text {
        border-radius: 40px;
        width: 300px;
        font-size: 32px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 600;
        color: #ffffff;
        line-height: 80px;
      }
    }
    .text {
      position: absolute;
      text-align: center;
      margin: 0 auto;
      top: 130px;
      line-height: 2;
      left: 0;
      z-index: 200;
      right: 0;
      width: 100%;

      background: rgba(187, 187, 187, 0.25);
      border-radius: 15px;
      p {
        margin: 15px;
        font-size: 28px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #ffffff;
        line-height: 1.3;
      }
    }
  }
}
</style>
