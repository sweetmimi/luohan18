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
      <div class="titile">
        <p>Cara Penggunaan Uatas</p>
        <div class="redLine"></div>
      </div>
      <div class="bigPhone_content">
        <div class="left">
          <div class="item">
            <img src="@/assets/img/1.png" alt="" />
            <div>1.Pengajuan</div>
          </div>
          <div class="item">
            <img src="@/assets/img/3.png" alt="" />
            <div>3. Pinjaman disetujui</div>
          </div>
        </div>
        <div class="middle"></div>
        <div class="right">
          <div class="item">
            <img src="@/assets/img/2.png" alt="" />
            <div>2.Isi informasi pribadi</div>
          </div>
          <div class="item">
            <img src="@/assets/img/4.png" alt="" />
            <div>4.Pembayaran tepat waktu</div>
          </div>
        </div>
      </div>
       <div class="titile">
        <p>Statistik Penyaluran Pinjaman</p>
        <div class="redLine"></div>
      </div>
      <div class="bigPhone_card">
       
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
      <div class="titile">
        <p>Komentar Pengguna</p>
        <div class="redLine"></div>
      </div>
      <div class="myCard">
        <div class="card" v-for="(item, index) in mydata.KomentarItem" :key="index">
          <div class="left">
            <img :src="item.logo" alt="" />
           
          </div>
          <div class="right">
            <div class="name">{{ item.name }}</div>
            <div class="star">
              <img :src="item.star1" alt="" />
              <img :src="item.star1" alt="" />
              <img :src="item.star1" alt="" />
              <img :src="item.star1" alt="" />
              <img :src="item.star2" alt="" />
            </div>
            <div class="text">{{ item.text }}</div>
            <div></div>
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
  margin-top: 90px;
  width: 100%;
  height: calc(80vh );
  background-image: url(../../assets/img/banner.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  .bigImg_font {
    width: 500px;
    text-align: left;
    position: absolute;
    margin: 100px 120px;
    box-sizing: border-box;
    .downloan_uatas {
      width: 400px;

      margin-bottom: 60px;
    }

    .google_play {
      width: 200px;
      cursor: pointer;
      margin-bottom: 60px;
    }
    .ojk_logo {
      cursor: pointer;
      .ojk{
        width: 120px;
        margin-right: 10px;
      }
      .afpi {
       width: 220px;
      }
    }
  }
}
.bigPhone {
  width: 100%;

  background-color: #fff;
  .bigPhone_content {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    .left {
      text-align: right;
      float: left;
    }
    .middle {
      background: url(../../assets/img/phone.png) no-repeat;
      background-size: 100%;

      width: 300px;
      height: 650px;
      margin: 0 100px;
    }
    .item {
      cursor: pointer;
      width: 320px;
      height: 130px;
      line-height: 30px;
      overflow: hidden;
      text-align: left;
      border-radius: 20px;
      margin-bottom: 120px;
      box-shadow: 5px 5px 20px 0 rgba(90, 90, 90, 0.116);
      .left {
        width: 100px;
        display: inline-block;
        img {
          width: 60px;
          margin: 0px 15px;
        }
      }
      .right {
        width: 210px;
        font-size: 14px;

        display: inline-block;
        .rp {
          font-size: 12px;
        }
        .number {
          font-family: Helvetica-Bold;
          font-size: 24px;
          margin-top: 20px;
          color: #333333;
          text-align: left;
        }
        p {
          margin-top: 20px;
          font-family: Helvetica;
          font-size: 14px;
          color: #999999;
          text-align: left;
        }
      }
      div {
        display: inline-block;
        font-size: 14px;
      }
      img {
        width: 60px;
        display: inline-block;

        margin: 30px 20px;
        vertical-align: middle;
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
    margin: 0 5%;
    .item {
      cursor: pointer;
      width: 25%;
      margin: 30px;
      height: 140px;
      padding: 40px 5px;
      border-radius: 20px;
      box-shadow: 5px 5px 20px 0 rgba(90, 90, 90, 0.116);
      .left {
        float: left;
        width: 100px;
        img {
          width: 50px;
          margin: 0px 10px;
          vertical-align: middle;
        }
      }
      .right {  
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
          font-size: 20px;

          color: #333333;
          text-align: left;
        }
        p {
          margin-top: 10px;
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
      width: 800px;
      min-height: 170px;
      box-shadow: 5px 5px 20px 0 rgba(90, 90, 90, 0.116);
      margin-bottom: 30px;
      border-radius: 10px;
      .left {
       
        margin: 50px 40px;
        float: left;
        img {
          display: inline-block;
          width: 50px;
          border-radius: 50%;
          vertical-align: top;
        }
        .p {
          display: inline-block;

          margin-left: 30px;
          font-size: 14px;
          color: #999;
          p {
            text-align: left;
            margin: 0 20px 15px 0px;
          }
        }
      }
      .right {
        text-align: left;
        float: left;
        width: 600px;
        margin:  30px 20px;
        .name {
          font-weight: 600;
          font-size: 14px;
          margin-bottom: 15px;
          font-family: Helvetica-Bold;
        }
        .star {
          margin-bottom: 10px;
          img {
            width: 15px;
          }
        }
        .text {
          font-family: Helvetica;
          font-size: 14px;
          color: #333333;
          line-height: 30px;
          overflow: hidden;
        }
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