<!-- zys -->
<template>
  <div class="comp">
    <div class="top">
      <div class="text_box">
        <div class="title">
          <div class="fl title_l">  <img src="@/assets/mb_img/compy_icon.png" alt=""  /> Profil Perusahaan</div>
         
        </div>
        <div class="text">
          <p> PT. Plus Ultra Abadi adalah perusahaan jasa keuangan pinjam meminjam uang berbasis teknologi yang mudah, aman, nyaman dan terpercaya. Platform ini dinamai Uatas.</p>
          <p>Uatas merupakan platform peer-to-peer (P2P) lending yang menjembatani antara pemberi pinjaman dan peminjam, baik pinjaman personal maupun pinjaman usaha kepada seluruh konsumen di Indonesia. Uatas mendukung pengembangan wirausahawan perempuan dengan menawarkan solusi kepada perempuan di Indonesia.</p>
          <p>Uatas memiliki visi menjadi perusahaan teknologi finansial yang memiliki reputasi dengan memberikan layanan terbaik kepada pelanggan, bersahabat dan terpercaya, dengan membantu lebih banyak wanita untuk mengejar mimpi, mengembangkan kemampuan dan berkontribusi kepada keluarga.</p>
          <p>Teknologi layanan Uatas dibangun dengan teknologi mutakhir dengan implementasi Artificial Intelligence, Machine Learning, dan Big Data Analytics. Kami juga bekerjasama dengan para stake holder di dunia industri keuangan maupun teknologi dalam rangka meningkatkan kualitas layanan kami, sehingga kami dapat terus berkembang dan melayani masyarakat.</p>
         
        </div>
      </div>
    </div>
    <div class="card">
      <div class="mb_titile">Latar Belakang Dewan Direksi dan Komisaris</div>
      <div class="mb_redLine"></div>
      <div class="item" v-for="i in mydata.director.data" :key="i.id">
      <div class="left"> <img :src="i.pic" alt=""></div>
      <div class="right">
        <span>{{i.text}}</span>
     
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

  async created() {
    console.log(mydata)
  },

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
    height: 700px;
    margin-top: 60px;
    padding: 50px  20px 10px;
    background-image: url('../../assets/mb_img/compy_bg.png');
    background-size: cover;
    background-repeat: no-repeat;
    .text_box {
      text-align: left;
     margin: 10px;
     color: #fff;
      position: absolute;
      top: 30px;
    
      .title {
        height: 40px;
        width: 100%;
        font-size: 16px;
        margin-bottom: 20px;
        img{
          width: 40px;
          vertical-align: middle;
          margin-right: 15px;
        }
        
      }
      .text{
        p{
           font-size: 12px;
            line-height: 2;
        }
       
       
      }
    }
  }
  .card{
    padding: 20px 20px;
    width: 100%;
    
     color: #666;
    .title{
      font-size: 14px;
      margin-bottom: 40px;
      font-weight: 600;
    }
    .item{
      text-align: left;
     
     font-size: 12px;
     display: flex;
     margin-bottom: 20px;
     .left{
       
       width: 80px;
       height: 100%;
        
       img{
         width: 60px;
       
       }
     }
    .right{
      margin-left: 15px;
        span{
          font-size: 12px;
        }
    }
     
     
    }
  }
}
</style>