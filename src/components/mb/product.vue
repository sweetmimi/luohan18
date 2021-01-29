<!-- zys -->
<template>
  <div >
    <div class="header">
      <div class="mb_titile">
        <p>Simulasi Pinjaman</p>
        <div class="mb_redLine"></div>
      </div>
      <div class="bigCard">
        <div
          class="card shadow hover"
          v-for="item in mydata.productdata1"
          :key="item.id"
        >
         
          <div class="rp">
            <span>Rp {{ item.rp }}</span>
          </div>
          <div class="bulan">
            <div class="fl">{{ item.midl.name }}</div>
            <div class="fr color">{{ item.midl.money }}</div>
          </div>
          <div class="xuxian"></div>
          <div class="item" v-for="i in item.ul" :key="i.id">
            <ul>
              <li>
                <div class="fl fltxt">{{ i.name }}</div>
                <div class="fr frtxt">{{ i.key }}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="minCard">
        <div class="item" v-for="(item, index) in mydata.productdata2" :key="index">
          <div class="left">
            <img :src="item.pic" alt="" />
          </div>
          <div class="right">
            <p class="number"> {{ item.number }}</p>
            <p>{{ item.p }}</p>
          </div>
        </div>
      </div>
      <div class="middle">
        <div class="mb_titile">
          <p>Pinjaman Pribadi</p>
          <div class="mb_redLine"></div>
        </div>
        <div class="middle_item">
          <div class="card" v-for="(item, index) in mydata.productdata3" :key="index">
            <div class="card_header">{{ item.title }}</div>
            <div class="img">
              <img :src="item.pic" alt="" width="100%" />
            </div>
          </div>
        </div>
      </div>

      <div class="bottom">
        <div class="mb_titile">
          <p>Pinjaman Usaha</p>
          <div class="mb_redLine"></div>
        </div>
        <div class="middle_item">
          <div class="card" v-for="(item, index) in mydata.productdata4" :key="index">
            <div class="card_header">{{ item.title }}</div>
            <div class="img">
              <img :src="item.pic" alt="" width="100%" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mydata } from "@/common/js/data.js";
export default {
  name: "",
  components: {},

  data() {
    return {
       mydata:mydata
    };
  },

  async created() {},

  computed: {},

  mounted() {},

  methods: {},
};
</script>

<style lang='less' scoped>
.header {
  margin: 60px 20px 0px 20px;

  .bigCard {
   
    .card {
      font-size: 14px;
      width: 100%;
      height: 280px;
       background: #fff;
      padding: 20px;
       margin-bottom: 20px;
      .cardTitle {
        text-align: left;
      }

      .rp {
        margin: 10px auto;

        background-color: rgba(233, 92, 92, 0.1);
        border-radius: 40px;
        width: 100%;
        height: 40px;

        span {
          font-size: 18px;
          color: #f66769;
          line-height: 40px;
          font-weight: 600;
        }
      }

      .bulan {
        height: 30px;
        font-size: 14px;
        margin-bottom: 10px;
      }

      .item {
        font-size: 14px;
        margin: 20px 0;

        li {
          width: 100%;
          margin: 10px 0;
          height: 10px;

          .fltxt {
            color: #999;
          }
        }
      }
    }
  }

  .minCard {
    

    .item {
      cursor: pointer;
      width: 100%;
      margin: 20px 0;
      height: 120px;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 5px 5px 20px 0 rgba(90, 90, 90, 0.116);

      .left {
        float: left;
        width: 100px;
        height: 100%;
        

        img {
         
          width: 40px;
          margin: 40px 10px 0;
         
        }
      }

      .right {
        font-size: 14px;
        padding-top: 10px;
        width: calc(100% - 120px);
      float: left;
        .number {
          font-family: Helvetica-Bold;
          font-weight: 600;
          font-size: 16px;

          color: #333333;
          text-align: left;
        }

        p {
          margin-top: 8px;
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
.middle {
  .middle_item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    
    .card {
      margin-bottom: 20px;
      width: 30%;
      .card_header{
        font-size: 12px;
        height: 50px;
        text-align: left;
      }
     
    }
  }
}
.bottom {
  .middle_item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    .card {
      
      width: 45%;
      margin-bottom: 20px;
    .card_header{
        font-size: 12px;
        height: 40px;
        text-align: left;
      }
    }
  }
}
</style>
