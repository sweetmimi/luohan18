<!-- zys -->
<template>
  <div class="comp">
    <div class="top">
      <div class="text_box">
        <div class="title">
          <div class="fl title_l">{{mydata.company[0]}}</div>
          <div class="fr title_r">
            <img src="@/assets/img/compy_icon.png" alt="" width="100%" />
          </div>
        </div>
        <div class="text">
          <p> {{mydata.company[1]}}</p>
           <p> {{mydata.company[2]}}</p>
            <p> {{mydata.company[3]}}</p>
             <p> {{mydata.company[4]}}</p>
        </div>
      </div>
    </div>
    <div class="card">
      <p class="title">{{mydata.director.title}}</p>
      <div class="item" v-for="i in mydata.director.data" :key="i.id">
            <div class="fl img_box">
          <div class="img">
             <img :src="i.pic" alt="">
          </div>
         
        </div>
        <div class="fr txt">
          <div class="title">
           {{i.title}}
          </div>
           <div class="redline"></div>
            <div class="text">{{i.text}}</div>
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
.comp {
  .top {
    position: relative;
    width: 100%;
    height: 600px;
    margin-top: 90px;
    background-image: url('../../assets/img/compy_bg.png');
    background-size: cover;
    background-repeat: no-repeat;
    .text_box {
      text-align: left;
      padding: 2%;
    
      position: absolute;
      top: 80px;
      right: 10%;
      width: 60%;
    
      background: #fff;
      .title {
        height: 50px;
        margin-bottom: 20px;
        .title_l {
          font-family: Baloo2-Bold;
          font-size: 36px;
          color: #333333;
        }
        .title_r {
          width: 5%;
          height: 5%;
        }
      }
      .text{
        font-size: 14px;
        line-height: 30px;
      }
    }
  }
  .card{
    margin: 120px auto;
    width: 60%;
    .title{
      font-size: 18px;
      margin-bottom: 40px;
      font-weight: 600;
    }
    .item{
      text-align: left;
      background: #fff;
      height: 300px;
    
      .img_box{
        width: 100px;
         vertical-align: text-bottom;
      }
      .txt{
       width: calc(100% - 200px);
       .title{

         font-size: 18px;
         font-weight: 600;
         margin-bottom: 5px;
       }
       .redline{
        height: 10px;
        width: 50px;
        border-radius: 5px;
         margin-bottom: 20px;
          background: #F66769;
       }
       .text{
         line-height: 30px;
       }
      }
    }
  }
}
</style>