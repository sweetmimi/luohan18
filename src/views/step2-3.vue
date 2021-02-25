<!-- zys -->
<template>
  <div class="contner">
    <div class="luohanPage">
      <v-touch v-on:swipeleft="onSwipeLeft" v-on:swiperight="onSwipeRight" style="width: 100%; height: 100%">
        <keep-alive>
          <audio id="mymusic" ref="music" controls hidden="true" :src="require('@/assets/music/muyu.mp3')"></audio>
        </keep-alive>
        <canvas class="myCanvas" id="myCanvas" width="375" height="420"> </canvas>
        <div class="gif">
          <img :src="gif" />
        </div>
        <div class="rulai"></div>

        <div class="check">
          <img src="@/assets/images/check.png" alt="" width="100%" />
        </div>
        <!-- <div class="icon">
          <img src="@/assets/images/rate.png" alt="" width="100%" />
        </div> -->
        <div class="bottom">
          <div class="jump_btn" v-show="showpleaseLohan" @click="emtuofo_click">
            <div class="btn_text btn">阿弥陀佛</div>
            <div class="text">
              <p v-if="changeRunInterval">阿弥陀佛,请施主点击“阿弥陀佛”按钮,选择一位罗汉为起始点</p>
              <p v-else>阿弥陀佛,施主,十八罗汉出场中</p>
            </div>
          </div>
          <div class="jump_btn" v-show="!showpleaseLohan" @click="qingbenzun_click">
            <div class="btn_text btn">请本尊罗汉</div>
            <div class="text">
              <p>
                阿弥陀佛，施主已选择{{
                  startLuohan
                }}为起始点，请男施主往左划，女施主往右划，划到自己虚岁对应的数字所指的罗汉，选择罗汉作为年本尊罗汉
              </p>
            </div>
          </div>
        </div>
      </v-touch>
    </div>
    <!-- <BgcMusic ref="child"></BgcMusic> -->
  </div>
</template>

<script>
import BgcMusic from '@/components/BgcMusic'
import { getPleaseLohan, getLohanListData } from '@/api/user.js'
export default {
  name: 'lohanList',
  components: {
    BgcMusic
  },

  data() {
    return {
      startLuohan: '', //起始罗汉
      showage: false, //默认不展示年龄
      autoRotateLuohanInterval: null,
      changeRunInterval: false,
      ableclick: 0, //0可点击阿弥陀佛 1否
      artid: 1, //罗汉id
      roundter: null,
      luohan_status: 0, // 0 表示开始， 1 表示已选取罗汉起始点， 2 表示已获取本尊罗汉。
      luohans: [], //画布中的罗汉信息
      luohan_scales: [1.2, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.4, 0.4], //罗汉缩放比例。
      luohan_angles: [270, 300, 330, 350, 10, 30, 50, 65, 80, 90, 100, 115, 130, 150, 170, 190, 210, 240], //罗汉转动角度。
      ellipse_x_rad: 250,
      ellipse_y_rad: 155, //200;
      mycv: null, //罗汉画布
      count: 0,
      showCnt: 0,
      cntadd: 0,
      center_x: 196, //罗汉圆心x坐标
      center_y: 190, //罗汉圆心y坐标
      cyc_rad: 155, //罗汉圆半径
      touched: false,
      luohan_width: 36,
      luohan_height: 46,
      luohan_touch_start_x: 0,
      luohan_touch_start_y: 0,
      luohan_touch_end_x: 0,
      luohan_touch_end_y: 0,
      user_age: 1, //用户年龄
      userinfo: {
        openid: ''
      },
      showpleaseLohan: true,
      arhatList: [],
      gif: '',
      imgs: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
    }
  },

  created() {},

  computed: {},

  mounted() {
    this._getLohanListData()
    this.stard_s = this.stard
    // this.$refs.child.open();
    // this.$nextTick(() => {
    //   window.addEventListener('load', this.load.bind(this))
    // })

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
    clearInterval(this.ter)
    clearInterval(this.roundter)
    // console.log("beforeDestroy");
  },
  destroyed() {
    //清除定时器
    clearInterval(this.ter)
    clearInterval(this.roundter)
    //console.log("destroyed");
  },
  methods: {
    //滑动音效兼容
    palymusic() {
      var oAudio = document.getElementById('mymusic')
      if (window.WeixinJSBridge) {
        WeixinJSBridge.invoke(
          'getNetworkType',
          {},
          function (e) {
            oAudio.play()
          },
          false
        )
      } else {
        document.addEventListener(
          'WeixinJSBridgeReady',
          function () {
            WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
              oAudio.play()
            })
          },
          false
        )
      }
      oAudio.play()
    },
    //获取罗汉list
    _getLohanListData() {
      getLohanListData({}).then(res => {
        this.arhatList = res.data.arhatList
        this.load()
        // console.log(this.arhatList)
      })
    },
    onSwipeLeft() {
      if (this.ableclick == 1) {
        this.palymusic()
        this.runLuohan(-1, 1)
      } else {
        // this.$toast("请点击'阿弥陀佛',选择起始罗汉")
      }

      // this.$toast('向左滑动')
    },
    onSwipeRight() {
      if (this.ableclick == 1) {
        this.palymusic()
        this.runLuohan(1, 1)
      } else {
        // this.$toast("请点击'阿弥陀佛',选择起始罗汉")
      }

      // this.$toast('向右滑动')
    },
    //画罗汉开始出现位置
    drawLuohan(beauty) {
      // console.log("src" ,beauty)
      this.mycv = document.getElementById('myCanvas')
      // console.log(this.mycv)
      var myctx = this.mycv.getContext('2d')
      myctx.strokeStyle = 'rgba(255,0,0,0.3)'
      // myctx.drawImage(beauty, 0, 0, this.luohan_width, this.luohan_height)
      var luohan = {
        arhatName: beauty.arhatName,
        artid: beauty.artid,
        img: beauty,
        index: this.luohans.length,
        showIndex: 0,
        angle: 270,
        px: this.center_x,
        py: this.center_y + this.ellipse_y_rad,
        width: 0,
        height: 0,
        visible: false,
        isStart: false,
        age: 0
      }
      this.luohans.push(luohan)
      // console.log('luohans', this.luohans)
      // setTimeout(function(beauty){
      //     var mycv = document.getElementById("myCanvas");
      //     var myctx = mycv.getContext("2d");
      //     myctx.clearRect(0,0, mycv.width,mycv.height);
      //     myctx.drawImage(beauty, 100, 100, 50, 50);
      // }, 3000);
    },
    //备用，当前图片缩放比例用三角函数控制
    getScaleByAngle(ang) {
      len_scale = luohan_scales.length
      if (ang < 100 && ang > 0) {
        ang += 360
      }
      scale_postion = (ang - 270) / 20
      scale_postion %= len_scale
      return luohan_scales[scale_postion]
    },
    //抽取本尊罗汉时，转动罗汉，
    //dir 转动方向，-1 顺时，1 逆时 。
    //step, 旋转总步数，默认给 1
    runLuohan(dir, steps) {
      var _this = this
      if (0 == _this.luohans.length) return
      for (var i = 1; i <= steps; i++) {
        setTimeout(
          function (dir) {
            var myctx = _this.mycv.getContext('2d')
            myctx.beginPath() //把笔抬起来
            myctx.clearRect(0, 0, _this.mycv.width, _this.mycv.height) //擦除一个矩形区域 矩形的左上角坐标和矩形的宽高
            _this.luohans.forEach(function (val, index, lhs) {
              val.angle += 20 * dir
              if (val.angle < 0) {
                val.angle += 360
              }
              val.angle %= 360
              //缩放比例
              var imgScale = Math.abs(0.3 + Math.sin(((2 * Math.PI) / 360) * (val.angle + 180)))

              if (imgScale < 0.5) {
                imgScale = 0.5
              }
              if (val.angle > 260 && val.angle < 280) {
                imgScale += 0.8
              }
              val.width = _this.luohan_width * imgScale
              val.height = _this.luohan_height * imgScale
              val.px = _this.center_x + Math.cos(((2 * Math.PI) / 360) * val.angle) * _this.cyc_rad - val.width / 2
              val.py = _this.center_y - Math.sin(((2 * Math.PI) / 360) * val.angle) * _this.cyc_rad - val.height / 2
              //圆心的坐标为（a,b)。则圆上每个点的X坐标=a + Math.cos(2*Math.PI / 360) * r ；Y坐标=b + Math.sin(2*Math.PI / 360) * r ；
              myctx.drawImage(val.img, val.px, val.py, val.width, val.height)
              //画岁数
              if (val.angle > 260 && val.angle < 280) {
                var pri_use_age = _this.user_age
                _this.user_age += dir
                if (0 == _this.user_age) {
                  _this.user_age = -2
                  if (pri_use_age < 0) {
                    _this.user_age = 2
                  }
                }
                _this.show_user_age = Math.abs(_this.user_age) % 120
                myctx.font = 'normal 28px Verdana'
                myctx.fillStyle = '#fff'
                var age_line_width = _this.show_user_age.toString().length * 12 //假定每个数字占用12个显示长度。 可是当调整。
                //myctx.fillText(show_user_age, center_x - val.width/2+10 , center_y  + cyc_rad- val.height/2 -  10);
                myctx.fillText(_this.show_user_age, val.px + (val.width / 2 - age_line_width / 2), val.py - 10)
              }

              // if (270 == val.angle && _this.showage) {
              //   var pri_use_age = _this.user_age
              //   _this.user_age += dir
              //   if (0 == _this.user_age) {
              //     _this.user_age = -2
              //     if (pri_use_age < 0) {
              //       _this.user_age = 2
              //     }
              //   }
              //  _this.show_user_age = Math.abs(_this.user_age) % 120
              //   myctx.font = 'normal 28px Verdana'
              //    myctx.fillStyle = '#fff'
              //   myctx.fillText(
              //     _this.show_user_age,
              // _this.center_x - val.width / 2+20 ,
              // _this.center_y + _this.cyc_rad - val.height / 2
              //     )
              // }
            })
            myctx.fill() //下笔作画

            //播放背景音乐
          },
          100 * i,
          dir
        )
      }
    },
    //阿弥陀佛按钮
    emtuofo_click(e) {
      this.showage = true
      this.user_age = 1
      this.show_user_age = 1

      if (this.changeRunInterval) {
        clearInterval(this.autoRotateLuohanInterval)

        this.showpleaseLohan = false
        this.luohan_status = 1
        this.ableclick = 1
        console.log(this.artid)
        let _this = this
        this.luohans.forEach(function (val, index, lhs) {
          if (val.angle > 260 && val.angle < 280) {
            val.isStart = true
            val.age = 1
            _this.startLuohan = val.arhatName
            _this.$toast.success(`施主已选择${val.arhatName}为起始点`)
          }
        })
      } else {
        // this.$toast('请等待罗汉出场')
      }
    },
    //请本尊按钮
    qingbenzun_click(e) {
      clearInterval(this.autoRotateLuohanInterval)
      this.luohan_status = 2
      var artid = 1
      if (this.show_user_age <= 18) {
        artid = this.show_user_age
      } else {
        artid = this.show_user_age % 18
      }
      this.PleaseLohan(artid)
    },
    load() {
      let _this = this
      _this.arhatList.forEach((item, index) => {
        var beauty = new Image()
        beauty.src = item.arhatPic //"./static/img/1.b382b24a.png";//"http://images.cnblogs.com/cnblogs_com/html5test/359114/r_test.jpg";
        beauty.artid = item.id //罗汉
        beauty.arhatName = item.arhatName //罗汉名称
        if (beauty.complete) {
          _this.drawLuohan(beauty)
        } else {
          beauty.onload = function () {
            _this.drawLuohan(beauty)
          }
          beauty.onerror = function () {
            _this.$toast('罗汉加载失败，请重试')
            //写点log，记录
          }
        }
      })

      //自动旋转罗汉
      _this.autoRotateLuohanInterval = setInterval(_this.autoRotateLuohan, 1000)
    }, //load
    //罗汉自转
    autoRotateLuohan() {
      var _this = this
      if (_this.luohans.length == 0) return
      if (1 == _this.luohan_status) return //&& touched
      var myctx = _this.mycv.getContext('2d')

      myctx.beginPath() //把笔抬起来
      myctx.clearRect(0, 0, _this.mycv.width, _this.mycv.height) //擦除一个矩形区域 矩形的左上角坐标和矩形的宽高
      // mycv.fillStyle="black";
      // //canCon.fill的意思在这张宣纸上拿起一只画实心图形的笔，
      // //style="black"的意思就是蘸上一个黑色墨
      // //连起来看的话就是拿起一只画实心图形的笔并粘上有黑色的墨水
      // mycv.arc(233,y++,66,0,Math.PI*2);
      // //在宣纸上构思画一个圆（圆心的X位置，Y位置，圆的半径，从什么位置开始画圆，画到哪里结束）；
      _this.showCnt = 0
      _this.luohans.forEach(function (val, index, lhs) {
        _this.artid = val.artid
        if (1 == _this.showCnt) {
          return
        }

        if (!val.visible) {
          //缩放比例
          var imgScale = Math.abs(0.3 + Math.sin(((2 * Math.PI) / 360) * (val.angle + 180)))
          if (imgScale < 0.5) {
            imgScale = 0.5
          }
          val.width = _this.luohan_width * imgScale
          val.height = _this.luohan_height * imgScale
          // val.width += 4
          // val.height += 6
          _this.cntadd++
          _this.showCnt++
          val.visible = true
          myctx.drawImage(val.img, val.px - val.width / 2, val.py - val.height / 2, val.width, val.height)
          return
        }
        val.showIndex++
        val.showIndex %= _this.luohan_angles.length
        //val.angle = luohan_angles[val.showIndex];
        //确认最后一个罗汉出场，并改变旋转周期后，改变每次旋转的角度，每次加0.01度。增加 画面连续性。
        if (!_this.changeRunInterval) {
          val.angle += 20
        } else {
          val.angle += 0.01
        }
        //val.angle+=20;
        val.angle %= 360
        //缩放比例
        var imgScale = Math.abs(0.3 + Math.sin(((2 * Math.PI) / 360) * (val.angle + 180)))
        if (imgScale < 0.5) {
          imgScale = 0.5
        }
        if (val.angle > 260 && val.angle < 280) {
          imgScale += 0.8
        }

        val.width = _this.luohan_width * imgScale
        val.height = _this.luohan_height * imgScale
        val.px = _this.center_x + Math.cos(((2 * Math.PI) / 360) * val.angle) * _this.cyc_rad - val.width / 2
        val.py = _this.center_y - Math.sin(((2 * Math.PI) / 360) * val.angle) * _this.cyc_rad - val.height / 2

        //圆心的坐标为（a,b)。则圆上每个点的X坐标=a + Math.cos(2*Math.PI / 360) * r ；Y坐标=b + Math.sin(2*Math.PI / 360) * r ；
        myctx.drawImage(val.img, val.px, val.py, val.width, val.height)
      })
      //确认最后一个罗汉出场后，改变旋转周期
      if (_this.cntadd == 18 && _this.autoRotateLuohanInterval != null && !_this.changeRunInterval) {
        clearInterval(_this.autoRotateLuohanInterval)
        setInterval(_this.autoRotateLuohan, 10)
        _this.changeRunInterval = true
      }
    },
    chImg() {
      this.gif = require(`@/assets/images/cardGif/${this.imgs[this.i]}.png`)
      this.i++
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
  width: 100%;
  height: 100%;
  background-image: url('~@/assets/images/black_bgc.png');
  background-size: cover;
  background-repeat: no-repeat;
  //ccs
  .rulai {
    position: absolute;
    z-index: 200;
    width: 350px;
    left: 0px;
    right: 0;
    margin: 0 auto;
    top: 225px;
    height: 400px;
    background-image: url('~@/assets/images/rulai2.png');
    background-size: 100%;
    background-repeat: no-repeat;
  }
  .myCanvas {
    position: fixed;
    z-index: 399;
  }

  .luohan {
    position: absolute;
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
  }
  .agebox {
    text-align: center;

    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    bottom: 40px;
    width: 102px;
    height: 102px;
    background: rgba(0, 0, 0, 0.65);
    border-radius: 15px;
    border: 1px solid #979797;

    div {
      margin-top: 20px;
      line-height: 56px;
      font-size: 48px;
      color: #ffffff;
    }
  }
  .check {
    position: absolute;
    height: 60px;
    top: 820px;
    margin: 0 auto;
    width: 90px;
    left: 0;
    right: 0;
  }
  .icon {
    position: absolute;
    top: 850px;
    margin: 0 auto;
    width: 90px;
    left: 0;
    right: 0;
  }
  .gif {
    left: -10px;
    top: 30px;
    width: 100%;
    height: 700px;
    position: absolute;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .bottom {
    position: absolute;
    margin: 20px auto;
    width: 80%;
    height: 280px;
    bottom: 30px;
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
      line-height: 1.2;
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
