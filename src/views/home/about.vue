<!-- home -->
<template>
  <div class="about-container">
    <div class="card">
      <div class="header">
        <div class="left">
          <img src="@/assets/images/bgluohan/1.jpeg" alt="" />
        </div>
        <div class="right">
          <div class="top">LJ</div>
          <div class="bottom">
            <img src="@/assets/images/fo.png" alt="" width="100%" />
            <span class="lhName">·伏虎罗汉</span>
            <span class="biaoqian">本尊罗汉</span>
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
            <span class="gold">3 </span>
            天</span
          >
        </div>
      </div>
      <div class="sing">

         <ul>
           <li>
             <div>13</div>

               <img src="@/assets/images/fo.png" alt="" width="100%">


           </li>
            <li>

           </li>
            <li>

           </li>
            <li>

           </li>
            <li>

           </li>
            <li>


           </li>
            <li>

           </li>
         </ul>

      </div>
       <div class="line" style="width: 70%"></div>
       <div class="title">好友互动</div>
       <div class="friends">
         <van-pull-refresh v-model="refreshing" @refresh="onRefresh" >
            <van-list

              v-model="loading"
              :finished="finished"
              finished-text="没有更多了"
              @load="onLoad"
            >

              <van-cell v-for="item in list" :key="item" :title="item" />
            </van-list>
          </van-pull-refresh>
       </div>
    </div>
  </div>
</template>

<script>
// 请求接口
import { getUserInfo } from '@/api/user.js'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
    }
  },
  computed: {
    ...mapGetters(['userName'])
  },
  mounted() {
    this.initData()
  },
  methods: {
    //x下拉刷新
     onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }

        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        this.loading = false;

        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
    // 请求数据案例
    initData() {
      // 请求接口数据，仅作为展示，需要配置src->config下环境文件
      const params = { user: 'sunnie' }
      getUserInfo(params)
        .then(() => {})
        .catch(() => {})
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
      padding: 21px 90px 45px;
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
            margin: 0 5px;
            width: 32px;
            height: 50px;
            vertical-align:middle
          }
          .lhName {
            font-size: 36px;
            font-weight: bold;
            margin-right: 10px;
             margin-left: 10px;
             vertical-align:middle
          }
          .biaoqian {
            font-size: 24px;
            color: #fff;
            padding: 5px 20px;
            width: 130px;
            background: #4e5455;
            border-radius: 19px;
            vertical-align:middle
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
        font-size: 28px;
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
    .sing{
      position: relative;
      margin:52px 41px 70px ;
      width: 590px;
      height: 88px;
      list-style: none;
      ul{
        overflow: hidden;
        height: 88px;
        margin: 0 60px;
        li{
          margin: 0 1.5px ;
          display: inline;
          float:left;
          width: 62px;
          height: 87px;
          background: #FFF8E8;
          border-radius: 13px;
          border: 1px solid #B88858;
          img{
            width: 25px;
            height: 37px;
            margin-left: 18px;
          }
          div{

font-size: 19px;
margin: 5px;
font-weight: 500;
color: #B88858;
line-height: 27px;
             text-align: center;
          }
        }
      }

    }
    .sing:before {
     content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 22px;
    background-image: url('~@/assets/images/left.png');
    background-size: 100%;
    background-repeat: no-repeat;
    border-radius: 50%;
    width: 45px;
    height: 45px;
  }
   .sing:after {
     content: '';
    display: block;
    position: absolute;
    right: 0;
    top: 22px;
    background-image: url('~@/assets/images/right.png');
    background-size: 100%;
    background-repeat: no-repeat;
    border-radius: 50%;
    width: 45px;
    height: 45px;
  }
  .friends{
      height: 400px;
      overflow-y:scroll;
       overflow-x:hidden;
        width: 510px;
margin: 0 auto;
  }
 .friends::-webkit-scrollbar {
        display: none;/*隐藏滚动条*/
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
