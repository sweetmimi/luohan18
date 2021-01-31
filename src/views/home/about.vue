<!-- home -->
<template>
  <div class="about-container">
    <div class="card">
        <div class="header">
          <div class="left">
             <img src="@/assets/images/bgluohan/1.jpeg" alt="">
          </div>
           <div class="right">
             <div class="top">LJ</div>
             <div class="bottom">
               <img src="@/assets/images/bgluohan/1.jpeg" alt="" width="100%">
                 <span class="lhName">·伏虎罗汉</span>
                <span class="biaoqian">本尊罗汉</span>
             </div>
           </div>
        </div>
        <div class="line" style="width:80%"></div>
        <div class="yellow_card">
            <div class="yaoqin">
            <img src="@/assets/images/handel.png" alt="" width="100%" />
            <span class="text">邀请更多好友来拜本尊罗汉 可以给施主增添好运哦！</span>
          </div>
        </div>
        <div class="title">
          拜本尊罗汉增添好运
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
      wechat: `${this.$cdn}/wx/640.gif`
    }
  },
  computed: {
    ...mapGetters(['userName'])
  },
  mounted() {
    this.initData()
  },
  methods: {
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
  height: calc(100vh - 50px) ;
  box-sizing: border-box;
  position: relative;
  .card{
    position: absolute;
    top:15px;
    right: 15px;
    left: 15px;
    bottom: 15px;
    background: #FFF;
    .header{
     display: flex;
    display: -webkit-flex;
      align-items:center;
    justify-content:center;
      margin: 0 auto;
      text-align: center;
      height: 10vh;
      padding:15px 10px 10px;
      margin-bottom: 15px;
     .left{
       float: left;
       width: 70px;
       height: 70px;
       img{
         width:100%;
         height: 100%;
       }
     }
     .right{
       .top {
         text-align: left;
         font-size: 14px;
         font-weight: bold;
         margin: 8px 15px;
       }
       .bottom{
         img{
            margin: 0px 5px 0 15px;
           width:15px;
           height: 20px;
         }
         .lhName{
           font-size: 18px;
             font-weight: bold;
             margin-right: 10px;
         }
         .biaoqian{
          
           font-size: 12px;
           color: #fff;
           padding: 4px 6px;
width: 40px;
height: 20px;           
background: #4E5455;
border-radius: 19px;
         }
       }

     }
    }
    .yellow_card{
      width:80%;
      height: 100px;
      display: flex;
      margin: 0 auto;
      border-radius: 10px;
      background: #FBE09B;
      margin-top: 20px;
      position: relative;
    .yaoqin{
       background: #000;
      position:absolute;
      bottom: 0;
      margin: 0px 20px;
      height: 80px;
      box-sizing: border-box;
      border-radius:  10px 10px 0 0;
      padding: 15px 10px;
       img {
        float: left;
        width: 15px;
        height: 30px;
        vertical-align: middle;
        margin-right: 10px;
        margin-top: 5px;
      }
      .text {
        vertical-align: middle;
        font-size: 14px;
        font-family: PingFang-SC-Bold, PingFang-SC;
        color: #fff;
        line-height: 1.2;
      }
    }
    }
    .title{
      font-size: 14px;
      margin:20px 10%;
      font-weight: bold;
      color: #303F7B;
    }
  }
    .card:before {
    content: '';
    display: block;
    position: absolute;
    left: -15px;
    top: 80px;
    background: #f8f8f8;
    border-radius: 50%;
    width: 30px;
    height: 30px;
  }
  .card:after {
    content: '';
    display: block;
    position: absolute;
    right: -15px;
    top: 80px;
    background: #f8f8f8;
    border-radius: 50%;
    width: 30px;
    height:30px;
  }
  
  .warpper {
    padding: 50px 12px 12px 12px;
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
        background: url($cdn+'/weapp/logo.png') center / contain no-repeat;
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
