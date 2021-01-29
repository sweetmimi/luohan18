<!-- zys -->
<template>
  <div>
    <div class="header">
      <div class="titile">
        <p>Simulasi Pinjaman</p>
        <div class="redLine"></div>
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
            <span class="number"> {{ item.number }}</span>
            <p>{{ item.p }}</p>
          </div>
        </div>
      </div>
      <div class="middle">
        <div class="titile">
          <p>Pinjaman Pribadi</p>
          <div class="redLine"></div>
        </div>
        <div class="middle_item">
          <div class="card" v-for="(item, index) in mydata.productdata3" :key="index">
            <p>{{ item.title }}</p>
            <div class="img">
              <img :src="item.pic" alt="" width="100%" />
            </div>
          </div>
        </div>
      </div>

      <div class="bottom">
        <div class="titile">
          <p>Pinjaman Usaha</p>
          <div class="redLine"></div>
        </div>
        <div class="middle_item">
          <div class="card" v-for="(item, index) in mydata.productdata4" :key="index">
            <p>{{ item.title }}</p>
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
  margin: 150px 15% 50px;

  .bigCard {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 80px;

    .card {
      font-size: 14px;
      width: 40%;
      height: 330px;
      padding: 20px 35px;

      .cardTitle {
        text-align: left;
      }

      .rp {
        margin: 20px auto;

        background-color: rgba(233, 92, 92, 0.1);
        border-radius: 40px;
        width: 100%;
        height: 50px;

        span {
          font-size: 25px;
          color: #f66769;
          line-height: 50px;
          font-weight: 600;
        }
      }

      .bulan {
        height: 40px;
        font-size: 14px;
        margin-bottom: 10px;
      }

      .item {
        font-size: 14px;
        margin: 30px 0;

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
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    justify-content: space-between;
    flex: 1;

    .item {
      cursor: pointer;
      width: 30%;
      margin: 30px 0;
      height: 140px;

      border-radius: 20px;
      box-shadow: 5px 5px 20px 0 rgba(90, 90, 90, 0.116);

      .left {
        float: left;
        width: 100px;
        height: 100%;
        margin-top: 40px;

        img {
          width: 60px;
          margin: 0px 15px;
          vertical-align: middle;
        }
      }

      .right {
        margin: 25px;
        font-size: 14px;
        text-align: left;

        .number {
          font-family: Helvetica-Bold;
          font-weight: 600;
          font-size: 20px;

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
    margin: 0 5%;
    .card {
      height: 300px;
      width: 25%;
      p {
        text-align: left;
        font-size: 14px;
        margin-bottom: 20px;
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
      height: 400px;
      width: 22%;
      p {
        text-align: left;
        font-size: 14px;
        margin-bottom: 20px;
      }
    }
  }
}
</style>
