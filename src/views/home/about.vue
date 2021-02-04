<!-- home -->
<template>
  <div class="about-container">
    <div class="pageLoading" v-if="!infoData">
      <van-loading type="spinner" class="lod" />
    </div>
    <div class="card" v-else>
      <div class="header">
        <div class="left">
          <img :src="infoData.userInfo.headUrl" alt="" />
        </div>
        <div class="right">
          <div class="top">{{ infoData.userInfo.nickName }}</div>
          <div class="bottom">
            <img src="@/assets/images/fo.png" alt="" width="100%" />
            <div class="lhName">·{{ infoData.arhat.arhatName }}</div>
            <div class="biaoqian">本尊罗汉</div>
          </div>
        </div>
      </div>
      <div class="line" style="width: 70%"></div>
      <div class="yellow_card">
        <div class="yaoqin">
          <img src="@/assets/images/handel.png" alt="" width="100%" />
          <span class="text">邀请更多好友来拜本尊罗汉 可以给施主增添好运哦！</span>
        </div>
      </div>
      <div class="title">拜本尊罗汉增添好运</div>
      <div class="dayLine">
        <div class="liner"></div>
        <div class="dv2">
          <i class="iconfont icon-star"></i>
          <span
            >已连续拜佛
            <span class="gold">{{ infoData.continuous }}天 </span>
          </span>
        </div>
      </div>
      <div class="sing">
        <div class="turnleft" @click="changeDate('left')">
          <img src="@/assets/images/left.png" alt="" width="100%" />
        </div>
        <ul v-if="infoData.checkinList.length > 0">
          <li v-for="(item, index) in newArr[newcutnum]" :key="index">
            <div>{{ item.day }}</div>
            <img v-if="item.chikin == 1" src="@/assets/images/fo.png" alt="" width="100%" />
            <img v-else class="gray" src="@/assets/images/fo.png" alt="" width="100%" />
          </li>
        </ul>
        <div class="turnright" @click="changeDate('right')">
          <img src="@/assets/images/right.png" alt="" width="100%" />
        </div>
      </div>
      <div class="line" style="width: 70%"></div>
      <div class="title">好友互动</div>
      <div class="cardlist" v-if="infoData.friendList.length > 0">
        <!-- <van-pull-refresh v-model="refreshing" @refresh="onRefresh"> -->
        <div
          class="list"
          v-for="(item, index) in infoData.friendList"
          :key="index"
          @click="byfriend(item.friendId, item.arhatId)"
        >
          <div class="left">
            <img :src="item.headUrl" alt="" width="100%" />
          </div>
          <div class="right">
            <div class="top">
              <div class="nickName">
                {{ item.nickName }}
              </div>
              <div class="myfriend">拜好友本尊罗汉</div>
            </div>
            <div class="bottom">
              <div class="luohan">
                {{ item.arhatName }}
                <div class="ben">本尊罗汉</div>
              </div>
              <div class="time">
                {{ item.lastLogin }}
              </div>
            </div>
          </div>
        </div>
        <div class="line"></div>
        <!-- </van-pull-refresh> -->
      </div>
      <div class="friends" v-else>
        <p style="text-align: center">暂无好友,快去邀请好友一起拜罗汉.</p>
      </div>
    </div>
  </div>
</template>

<script>
// 请求接口
import { gethome } from '@/api/user.js'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      infoData: '',
      list: [],
      newcutnum: 0,
      newArr: [],
      loading: false,
      finished: false,
      refreshing: false
    }
  },
  computed: {
    ...mapGetters(['userName'])
  },
  mounted() {
    this.initData()
  },
  methods: {
    changeDate(type) {
      var step = 3
      if (type == 'left') {
        if (this.newcutnum > step) {
          return
        } else {
          this.newcutnum++
        }
      } else {
        if (this.newcutnum < 1) {
          return
        } else {
          this.newcutnum--
        }
      }
    },
    //x下拉刷新
    onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          let arrLength = this.infoData.friendList
          console.log(arrLength)
          // this.infoData.friendList = []
          this.refreshing = false
        }

        for (let i = 0; i < 3; i++) {
          this.list.push(this.list.length + 1)
        }
        this.loading = false

        if (this.list.length >= 40) {
          this.finished = true
        }
      }, 1000)
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true
      this.onLoad()
    },
    // 请求数据案例
    initData() {
      gethome({})
        .then(res => {
          if (res.state == 200) {
            this.infoData = res.data
            this.cutArry(res.data.checkinList)
          }
        })
        .catch(() => {})
    },
    cutArry(data) {
       this.newArr =[]
      let arry = data.reverse()
      let arrLength = arry.length // 数组长度
      let num = 7 // 每页显示 7 条
      let index = 0

      for (let i = 0; i < arrLength; i++) {
        if (i % num === 0 && i !== 0) {
          // 可以被 7 整除
          this.newArr.push(arry.slice(index,i).reverse())
          index = i
        }
        if (i + 1 === arrLength) {
          this.newArr.push(arry.slice(index,i+1 ).reverse())
        }
      }
      console.log(index + 1)
      this.cutnum = index + 1
      console.log(this.newArr)
    },
    //拜好友罗汉
    byfriend(friendId, arhatId) {
      this.$router.push({
        path: '/my',
        query: { friendId: friendId, arhatId: arhatId }
      })
    },

    // Action 通过 store.dispatch 方法触发
    doDispatch() {
      this.$store.dispatch('setUserName', '12313')
    }
  }
}
</script>
<style lang="scss">
.about-container {
  /* 你的命名空间 */
  height: calc(100vh - 50px);
  box-sizing: border-box;
  position: relative;
  .card {
    position: absolute;
    top: 30px;
    right: 30px;
    left: 30px;
    bottom: 80px;
    background: #fff;

    box-shadow: 1px 3px 10px 1px rgba(164, 164, 164, 0.22);
    .header {
      display: flex;
      display: -webkit-flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      text-align: center;
      height: 183px;

      box-sizing: border-box;
      padding: 21px 0px 45px;
      .left {
        float: left;
        width: 120px;
        height: 120px;
        margin-right: 10px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .right {
        padding: 10px;
        .top {
          text-align: left;
          font-size: 36px;
          font-weight: bold;
          margin: 5px 8px;
        }
        .bottom {
          img {
            width: 32px;
            height: 50px;
            vertical-align: middle;
          }
          .lhName {
            display: inline-block;
            font-size: 36px;
            height: 50px;
            font-weight: bold;
            margin-right: 5px;
            margin-left: 10px;
            vertical-align: middle;
          }
          .biaoqian {
            display: inline-block;
            font-size: 24px;
            color: #fff;
            padding: 2px 10px;
            width: 130px;
            background: #4e5455;
            border-radius: 19px;
            vertical-align: middle;
          }
        }
      }
    }
    .yellow_card {
      width: 510px;
      height: 197px;
      display: flex;
      margin: 0 auto;
      border-radius: 10px;
      background-image: url('~@/assets/images/cardbg.png');
      background-size: cover;
      margin-top: 20px;
      position: relative;
      .yaoqin {
        position: absolute;
        bottom: 10px;
        margin: 0px 20px;
        box-sizing: border-box;
        padding: 15px 45px;
        img {
          float: left;
          width: 28px;
          height: 49px;
          vertical-align: middle;
          margin-right: 10px;
          margin-top: 15px;
        }
        .text {
          vertical-align: middle;
          font-size: 28px;
          color: #fff;
          line-height: 1.5;
        }
      }
    }
    .title {
      width: 510px;
      height: 50px;
      margin: 35px auto 25px;
      font-size: 28px;
      font-weight: bold;
      color: #303f7b;
    }
    .dayLine {
      width: 60%;
      height: 22px;
      position: relative;
      margin: 0 auto;
      .liner {
        width: 100%;
        height: 1px;
        background-color: #ccc;
        position: relative;
        top: 50%;
      }
      .dv2 {
        font-size: 24px;
        text-align: center;
        width: 205px;
        height: 40px;
        line-height: 20px;

        font-weight: 500;
        margin: 0 auto;
        color: #666666;
        background-color: #fff;
        position: relative;
        z-index: 3;
      }
    }
    .sing {
      position: relative;
      margin: 52px 41px 70px;
      width: 590px;
      height: 88px;
      list-style: none;
      .turnright {
        position: absolute;
        width: 40px;
        height: 40px;
        right: 0;
        top: 30px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .turnleft {
        position: absolute;
        width: 40px;
        height: 40px;
        left: 0;
        top: 0;
        top: 30px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      ul {
        overflow: hidden;
        height: 88px;
        margin: 0 60px;
        li {
          margin: 0 1px;
          display: inline;
          float: left;
          width: 62px;
          height: 87px;
          background: #fff8e8;
          border-radius: 13px;
          border: 1px solid #b88858;
          img {
            width: 25px;
            height: 37px;
            margin-left: 18px;
          }
          .gray {
            -webkit-filter: grayscale(100%);
            -moz-filter: grayscale(100%);
            -ms-filter: grayscale(100%);
            -o-filter: grayscale(100%);
            filter: grayscale(100%);
            filter: gray;
            opacity: 0.7; //通过改变透明度来调节灰色的程度
          }
          div {
            font-size: 19px;
            margin: 5px;
            font-weight: 500;
            color: #b88858;
            line-height: 27px;
            text-align: center;
          }
        }
      }
    }

    .cardlist {
      bottom: 20px;
      position: relative;
      height: 400px;
      overflow-y: scroll;
      overflow-x: hidden;
      width: 550px;
      margin: 0 auto;
      .list {
        margin: 20px 0;
        box-sizing: border-box;

        // position: absolute;
        width: 100%;
        height: 103px;
        .left {
          position: absolute;
          float: left;
          width: 100px;
          height: 100%;
          border-radius: 52px;
          margin-right: 20px;
          img {
            width: 100px;
            height: 100px;
            border-radius: 52px;
          }
        }
        .right {
          box-sizing: border-box;
          float: left;
          margin-left: 120px;
          width: 400px;
          height: 100%;
          .top {
            width: 100%;
            height: 50px;
            line-height: 50px;
            padding: 0 10px;
            .nickName {
              float: left;
              width: 56px;
              height: 20px;
              font-size: 28px;
              font-family: PingFang-SC-Medium, PingFang-SC;
              font-weight: 500;
              color: #4e5455;
              line-height: 40px;
            }
            .myfriend {
              text-align: center;
              float: right;
              width: 202px;
              height: 37px;
              background: linear-gradient(90deg, #fbe09b 0%, #e7bf7b 100%);
              border-radius: 19px;

              color: #4e5455;
              font-size: 24px;

              line-height: 33px;
            }
          }
          .bottom {
            width: 100%;
            height: 50px;
            line-height: 50px;
            padding: 0 10px;
            .luohan {
              font-size: 28px;
              float: left;

              font-weight: 500;
              color: #4e5455;
              line-height: 40px;
              .ben {
                margin: 0 5px;
                float: right;
                width: 96px;
                font-size: 24px;
                font-family: PingFang-SC-Medium, PingFang-SC;
                font-weight: 500;
                color: #b88858;
                line-height: 43px;
              }
            }
            .time {
              float: right;
            }
          }
        }
      }
      .line {
        position: absolute;
      }
    }
    .cardlist::-webkit-scrollbar {
      display: none; /*隐藏滚动条*/
    }
  }
  .card:before {
    content: '';
    display: block;
    position: absolute;
    left: -25px;
    top: 118px;
    background: #f8f8f8;
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
  .card:after {
    content: '';
    display: block;
    position: absolute;
    right: -25px;
    top: 118px;
    background: #f8f8f8;
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }

  .warpper {
    .list {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #666;
      font-size: 14px;
      .demo-home__title {
        margin: 0 0 6px;
        font-size: 32px;
        .demo-home__title img,
        .demo-home__title span {
          display: inline-block;
          vertical-align: middle;
        }
      }
      .item {
        font-size: 14px;
        line-height: 34px;
        color: $theme-color;
        a {
          text-decoration: underline;
        }
        .van-button {
          /* vant-ui 元素*/
          background: #ff5500;
        }
      }

      .logo {
        width: 120px;
        height: 120px;
        background: url($cdn + '/weapp/logo.png') center / contain no-repeat;
      }
      .wechat {
        width: 200px;
        height: 200px;
        img {
          width: 100%;
          height: auto;
        }
      }
    }
  }
}
</style>
