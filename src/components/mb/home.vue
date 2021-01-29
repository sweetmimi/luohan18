<!-- zys -->
<template>
  <div>
    <div class="bigImg">
      <div class="bigImg_font">
        <div class="downloan_uatas">
          <img src="@/assets/img/dowmload_uatas.png" alt="" width="100%" />
        </div>
        <div class="google_play">
          <img src="@/assets/img/google_play.png" alt="" width="100%" onclick="javascript:window.open('https://play.google.com/store/apps/details?id=com.uatas.android')" />
        </div>
        <div class="ojk_logo">
          <img class="ojk" src="@/assets/img/ojk2.png" alt="" />
          <img class="afpi" src="@/assets/img/afpi2.png" alt="" />
        </div>
      </div>
    </div>
    <div class="bigPhone">
      <div class="mb_titile">
        Cara Penggunaan Uatas
        <div class="mb_redLine"></div>
      </div>
      <div class="bigPhone_content">

          <div class="item" v-for="(item,index) in mydata.phonelists" :key="index">
            <div class="left">
               <img :src="item.icon" alt="" />
            </div>
           <div class="right">
              <span>{{item.text}}</span>
           </div>

          </div>

      </div>

      <div class="bigPhone_card">
          <div class="mb_titile">
    Statistik Penyaluran Pinjaman
        <div class="mb_redLine"></div>
      </div>
        <div class="item" v-for="(item, index) in mydata.cardItem" :key="index">
          <div class="left">
            <img :src="item.pic" alt="" width="100%" />
          </div>
          <div class="right">
            <span class="rp">{{ item.rp }}</span>
            <span class="number"> {{item.number}}</span>
            <p>{{item.p}}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="bigCard">
      <div class="mb_titile">
       Komentar Pengguna
        <div class="mb_redLine"></div>
      </div>
      <div class="myCard">
        <div class="card" v-for="(item, index) in mydata.KomentarItem" :key="index">
          <div class="top">
            <img :src="item.logo" alt="" />
            <span>{{ item.name }}</span>
            <div class="star">
              <img :src="item.star1" alt="" />
              <img :src="item.star1" alt="" />
              <img :src="item.star1" alt="" />
              <img :src="item.star1" alt="" />
              <img :src="item.star2" alt="" />
            </div>

          </div>
          <div class="bottom">

           {{ item.text }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mydata } from "@/common/js/data.js";
export default {
  name: "home",
  components: {},

  data() {
    return {
      i:0,
      mydata:mydata,
    };
  },

  async created() {

  },

  computed: {},

  mounted() {
     window.addEventListener('scroll', this.handleScroll, true);
  },

  methods: {
    handleScroll(){
            // 页面滚动距顶部距离
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop ||
                      document.body.scrollTop
            var scroll = scrollTop - this.i;
            this.i = scrollTop;
          //  console.log(this.i)
        },

  },
};
</script>
<style lang='less' scoped>
.bigImg {
  position: relative;
  width: 100%;
  height: 320px;
  background-image: url(../../assets/mb_img/banner.png);
  background-size: cover;
  background-repeat: no-repeat;
  .bigImg_font {
    width: 280px;
    text-align: left;
    position: absolute;
    margin: 40px 20px;
    box-sizing: border-box;
    .downloan_uatas {
      width: 200px;

      margin-bottom: 15px;
    }

    .google_play {
      width: 120px;
      cursor: pointer;
      margin-bottom: 15px;
    }
    .ojk_logo {
      cursor: pointer;
      .ojk{
        width: 60px;
        margin-right: 10px;
      }
      .afpi {
       width: 120px;
      }
    }
  }
}
.bigPhone {
  width: 100%;

  background-color: #fff;
  .bigPhone_content {
    margin: 0 auto;
    width: 95%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
     flex: 1;
   box-sizing: border-box;

    .item {

      width: 48%;
      height: 85px;
      border-radius: 10px;
      margin-bottom: 20px;
        padding-top: 18px;
      box-shadow: 5px 5px 20px 0 rgba(90, 90, 90, 0.116);
      align-self: center;
      .left {
        width: 50px;
        height: 100%;
      margin-right: 5px;
        float: left;
        img {
          width: 35px;

        }
      }
      .right{
         text-align: left;
        span{

          font-size: 12px;
        }

      }


    }
    .item:hover {
      box-shadow: 5px 5px 20px 0#ccc;
      transform: scale(1.02);
    }
  }
  .bigPhone_card {
    display: flex;
    justify-content:space-evenly;
    flex-direction: row;
    flex-wrap: wrap;
    flex: 1;

    .item {
      cursor: pointer;
      width: 90%;
      margin: 15px 0;
      height: 90px;

      border-radius: 10px;
      box-shadow: 5px 5px 20px 0 rgba(90, 90, 90, 0.116);
      .left {
        float: left;
        width: 100px;
        height: 100%;
        img {
          margin-top: 25px;
          width: 40px;

          vertical-align: middle;
        }
      }
      .right {
         margin-top: 25px;
         float: left;
        font-size: 14px;
        text-align: left;
        overflow: hidden;
        .rp {
          font-size: 12px;
          font-weight: 600;
        }
        .number {

          font-weight: 600;
          font-size: 16px;

          color: #333333;
          text-align: left;
        }
        p {
          margin-top: 5px;
          font-family: Helvetica;
          font-size: 12px;
          color: #999999;
          text-align: left;
        }
      }
    }
    .item:hover {
      box-shadow: 5px 5px 20px 0 #ccc;
      transform: scale(1.02);
    }
  }
}
.bigCard {
  width: 100%;

  background-color: #fff;
  .myCard {
    .card {
      cursor: pointer;
      margin: 0 auto;
      width: 90%;
      height: 145px;
      padding: 12px 15px;
      box-shadow: 5px 5px 20px 0 rgba(90, 90, 90, 0.116);
      margin-bottom: 30px;
      border-radius: 10px;
     .top{
       height: 45px;
       border-bottom: 1px dashed #ccc;
       img{
         width: 30px;
         float: left;

       }
       span{
          float: left;
          margin-top: 5px;
          margin-left: 10px;
          font-size: 14px;
          font-weight: 600;
       }
       .star{
          margin-top: 10px;
         float: right;
         img{
           margin-left: 2px;
            width: 10px;
         }

       }
     }
     .bottom{
       font-size: 12px;
       text-align: left;
       margin-top: 20px;
     }

    }
    .card:hover {
      border-radius: 10px;
      background-color: #fff;
      box-shadow: 4px 4px 15px #ccc;
      transform: scale(1.01);
      -webkit-transform: scale(1.01);
      /*兼容-webkit-引擎浏览器*/
      -moz-transform: scale(1.01);
    }
  }
}
</style>
