<!-- home -->
<template>
  <div class="step3-container">
    <div class="pageLoading" v-if="!infoData">
      <van-loading type="spinner" class="lod"/>
    </div>
    <div class="card" v-else>
      <div class="header">
        <div class="left">
          <img :src="infoData.userInfo.headUrl" alt="" />
        </div>
        <div class="right">
          <div class="top">{{infoData.userInfo.nickName}}</div>
          <div class="bottom">
            <img src="@/assets/images/fo.png" alt="" width="100%" />
            <div class="lhName">·{{infoData.arhat.arhatName}}</div>
            <div class="biaoqian">本尊罗汉</div>
          </div>
        </div>
      </div>
      <div class="line" style="width: 70%"></div>
      <div class="main">
        <div class="header">
          <span>{{infoData.arhat.arhatName}}</span>
        </div>

        <div class="img" @click="topage()">
          <img :src="infoData.arhat.arhatBackgroundPic" alt="" width="100%" />
        </div>
        <div class="minhandel">
          <img src="@/assets/images/minhandel.png" alt="" />
          <div class="div">点击罗汉</div>
        </div>
      </div>

      <div class="text">
        <div class="title">
          阿弥陀佛，施主已选择{{infoData.arhat.arhatName}}为2021年本尊罗汉，点击{{infoData.arhat.arhatName}}即可前往拜本尊罗汉，护佑您今年一年好运！
        </div>
      </div>
      <div class="bottomBtn" v-if="isExist==1">
        <div class="cancelBtn btn" @click="isreplace('0')">取消</div>
        <div class="okBtn btn" @click="isreplace('1')">确定</div>
      </div>
    </div>

    <BgcMusic></BgcMusic>
  </div>
</template>

<script>
import BgcMusic from '@/components/BgcMusic'
// 请求接口
import { getPleaseLohan,getluohanData } from '@/api/user.js'
import { mapGetters } from 'vuex'
export default {
  components: {
    BgcMusic
  },
  data() {
    return {
      infoData:"",
      isExist:'',//是否有本尊
      list: [],
      loading: false,
      finished: false,
      refreshing: false
    }
  },
  computed: {
    ...mapGetters(['userName'])
  },
  created() {
    
     this.oldArhatId=this.$route.query.oldArhatId;
     this.arhatId=this.$route.query.arhatId;

     this.isExist=this.$route.query.isExist;

    this.initData()
  },
  mounted() {
   
  },
  methods: {
    isreplace(type){
      //如果type =1 替换罗汉
     
      this.isExist=0;
      if(type==1){
       getPleaseLohan({
          arhatId:this.arhatId,
          replace:1,
        }).then(res => {
          if (res.state == 200) {  
            this.arhatId=this.oldArhatId;  
                                                                                                                                                                                                                                                                                      
             this.initData('1')
          }
        })}
    },
    
    topage() {
      this.$router.replace({
        path: '/my',
        query: { arhatId: this.arhatId }
      })
    },
    //x下拉刷新
    onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.list = []
          this.refreshing = false
        }

        for (let i = 0; i < 10; i++) {
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
    initData(type) {
      getluohanData({ 
        arhatId : type==1?this.oldArhatId:this.arhatId
      })
        .then(res => {
          this.infoData = res.data;
          console.log(res.data)
        })
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
.step3-container {
  /* 你的命名空间 */
  height: calc(100vh - 50px);
  box-sizing: border-box;
  position: relative;
  .card {
    position: absolute;
    top: 30px;
    right: 30px;
    left: 30px;
    bottom: 50px;
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
    .main {
      position: relative;
      left: 0;
      right: 0;
      margin: 0 auto;
      margin-top: 50px;
      width: 499px;
      height: 659px;

      background: linear-gradient(90deg, #fbe09b 0%, #e7bf7b 100%);
      border-radius: 21px;
      .header {
        text-align: center;
        position: absolute;
        top: -6px;
        left: 0;
        right: 0;
        border-top: 56px solid #c58925;
        border-left: 25px solid transparent;
        border-right: 25px solid transparent;
        height: 0;
        margin: 0 auto;
        width: 250px;
        span {
          top: -50px;
          left: 0px;
          right: 0;
          margin: 0 auto;
          position: absolute;
          font-size: 36px;
          font-family: PingFang-SC-Bold, PingFang-SC;
          font-weight: bold;
          color: #ffffff;
        }
      }

      .img {
        position: relative;
        width: 403px;
        height: 526px;
        top: 74px;
        margin: 0 auto;
      }
      .minhandel {
        position: absolute;
        bottom: 20px;
        left: 0;
        right: 0;
        margin: 0 auto;
        width: 226px;
        height: 54px;
        background: rgba(0, 0, 0, 0.48);
        border-radius: 27px;
        text-align: center;
        vertical-align: middle;
        img {
          margin-top: 8px;
          height: 30px;
          width: 25px;
          vertical-align: middle;
          margin-right: 10px;
        }
        .div {
          font-size: 28px;
          color: #ffffff;
          margin-top: 8px;
          display: inline-block;
          vertical-align: middle;
        }
      }
      .text {
        position: absolute;
        width: 500px;
        margin: 0 auto;
        height: 120px;
        left: 0;
        right: 0;

        .title {
          text-align: left;

          font-size: 28px;
          font-family: PingFang-SC-Medium, PingFang-SC;
          font-weight: 500;
          color: #b88858;
        }
        .del {
          text-align: left;
          width: 325px;
          font-size: 28px;
          font-family: PingFang-SC-Medium, PingFang-SC;
          font-weight: 500;
          color: #4e5455;
          line-height: 40px;
        }
      }
    }
    .title {
      width: 510px;
      margin: 35px auto 25px;
      font-size: 28px;
      font-weight: bold;
      color: #303f7b;
    }
    .bottomBtn {
      position: absolute;
      bottom: 10px;
      width: 578px;
      left: 0;
      right: 0;
      margin: 0 auto;
      display: flex;
      .btn {
        display: inline-block;
        width: 260px;
        height: 80px;
        border-radius: 40px;
        font-size: 32px;
        line-height: 80px;

        font-weight: 500;
        color: #ffffff;
      }
      .okBtn {
      }
      .cancelBtn {
        background: #4e5455;
      }
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
}
</style>
