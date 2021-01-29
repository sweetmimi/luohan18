<!-- zys -->
<template>
  <div class="main">
    <div class="header">
     
      <div class="logo">
        <div class="logopng">
          <img src="@/assets/mb_img/jump.png" alt="" @click="openJump">
          <img src="@/assets/img/uatas-logo.png" alt="" />
          <p>uatas</p>
        </div>
      </div>
      <div class="tkb">
        <span class="tkb_span">TKB90=100%</span>
      </div>
      <!-- <ul class="tab-tilte">
        <li
          v-for="(item, index) in tabs"
          @click="clicktab(item, index)"
          :class="{ active: cur == index }"
          :key="index"
        >
          {{ item.label }}
        </li>
        <li>
          <span class="tkb">
            <span class="tkb_span">TKB90=100%</span>
          </span>
        </li>
      </ul> -->
    </div>
  <div class="jump_box" v-show="showBox">
    <ul>
       <li
          v-for="(item, index) in mydata.tabs"
          @click="clicktab(item, index)"
          :class="{ active: cur == index }"
          :key="index"
        >
          {{ item.label }}
        </li>
    </ul>
  </div>
    <router-view class="incoming-date-data-container"></router-view>
    <div class="bottom">
      <div class="title">Hubungi kami</div>
      <div class="box">
        <div class="address">
          <img src="@/assets/mb_img/address.png" alt="" />
          <span class="title">
            Address
            </span> 
          <p>PT PLUS ULTRA ABADI</p>
          <p>
            Puri Indah Financial Tower Lt.08 Unit 0802,Jl Puri Lingkar Dalam
            Blok T No.08, Kel. Kembangan Selatan Kec.Kembangan, Jakarta Barat.
          </p>
        </div>
        <div class="lianxi">
          <span
            ><img src="@/assets/mb_img/phone.png" alt="" /> 021-22580622</span
          >
          <span
            ><img src="@/assets/mb_img/email.png" alt="" />
            cs.support@uatas.id</span
          >
          <span
            ><img src="@/assets/mb_img/WhatsApp.png" alt="" />
            082258200976</span
          >
        </div>
      </div>
      <div class="shenming">
     
        <div class="line"></div>
        <div class="text">
          <p>PERHATIAN</p>
          1. Layanan Pinjam Meminjam Berbasis Teknologi Informasi merupakan
          kesepakatan perdata antara Pemberi Pinjaman dengan Penerima Pinjaman,
          sehingga segala risiko yang timbul dari kesepakatan tersebut
          ditanggung sepenuhnya oleh masing-masing pihak.<br />
          2. Risiko kredit atau gagal bayar ditanggung sepenuhnya oleh Pemberi
          Pinjaman. Tidak ada lembaga atau otoritas negara yang bertanggung
          jawab atas risiko gagal bayar ini.<br />
          3. Penyelenggara dengan persetujuan dari masing-masing Pengguna
          (Pemberi Pinjaman dan/atau Penerima Pinjaman) mengakses, memperoleh,
          menyimpan, mengelola dan/atau menggunakan data pribadi Pengguna
          (""Pemanfaatan Data"") pada atau di dalam benda, perangkat elektronik
          (termasuk smartphone atau telepon seluler), perangkat keras (hardware)
          maupun lunak (software), dokumen elektronik, aplikasi atau sistem
          elektronik milik Pengguna atau yang dikuasai Pengguna, dengan
          memberitahukan tujuan, batasan dan mekanisme Pemanfaatan Data tersebut
          kepada Pengguna yang bersangkutan sebelum memperoleh persetujuan yang
          dimaksud.<span v-if="showMore" @click="clickMore">...<span  class="more">See More </span></span>
          <div class="showmore" v-else>
       4. Pemberi Pinjaman yang belum memiliki pengetahuan dan pengalaman
          pinjam meminjam, disarankan untuk tidak menggunakan layanan UATAS
          ini.<br />
          5. Penerima Pinjaman harus mempertimbangkan tingkat bunga pinjaman dan
          biaya lainnya sesuai dengan kemampuan dalam melunasi pinjaman.<br />
          6. Setiap kecurangan tercatat secara digital di dunia maya dan dapat
          diketahui masyarakat luas di media sosial.<br />
          7. Pengguna harus membaca dan memahami informasi ini sebelum membuat
          keputusan menjadi Pemberi Pinjaman atau Penerima Pinjaman.<br />
          8. Pemerintah yaitu dalam hal ini Otoritas Jasa Keuangan, tidak
          bertanggung jawab atas setiap pelanggaran atau ketidakpatuhan oleh
          Pengguna, baik Pemberi Pinjaman maupun Penerima Pinjaman (baik karena
          kesengajaan atau kelalaian Pengguna) terhadap ketentuan peraturan
          perundang-undangan maupun kesepakatan atau perikatan antara
          Penyelenggara (dalam hal ini adalah “UATAS”) dengan Pemberi Pinjaman
          dan/atau Penerima Pinjaman.<br />
          9. Setiap transaksi dan kegiatan pinjam meminjam atau pelaksanaan
          kesepakatan mengenai pinjam meminjam antara atau yang melibatkan
          UATAS, Pemberi Pinjaman dan/atau Penerima Pinjaman wajib dilakukan
          melalui escrow account dan virtual account sebagaimana yang diwajibkan
          berdasarkan Peraturan Otoritas Jasa Keuangan Nomor 77/POJK.01/2016
          tentang Layanan Pinjam Meminjam Uang Berbasis Teknologi Informasi dan
          pelanggaran atau ketidakpatuhan terhadap ketentuan tersebut merupakan
          bukti telah terjadinya pelanggaran hukum oleh UATAS sehingga UATAS
          wajib menanggung ganti rugi yang diderita oleh masing-masing Pengguna
          sebagai akibat langsung dari pelanggaran hukum tersebut diatas tanpa
          mengurangi hak Pengguna yang menderita kerugian menurut Kitab
          Undang-Undang Hukum Perdata"<br />
          </div>
   
        </div>
           <div class="title1">Copyright © 2020 Uatas. All rights reserved.</div>
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
      showBox:false,
      showMore:true,
      cur: 0,
     mydata:mydata
    };
  },

  async created() {
    this.$router.push("mb/home");
  },

  computed: {},

  mounted() {
     this.imgHeight = document.documentElement.clientHeight || document.body.clientHeight;
     console.log( this.imgHeight)
      window.addEventListener('scroll',this.handleScroll,false)
  },

  methods: {
    openJump(){
      this.showBox =  this.showBox==false?true:false
    },
    clicktab(item, index) {
      this.showBox = false;
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      this.$router.push({ path: item.link });
      console.log(item.link);
      this.cur = index;
    },
      handleScroll (e) {
        this.showBox = false;
        
 },
 clickMore(){
   this.showMore = false
 }
  },
};
</script>
<style lang='less' scoped>
.incoming-date-data-container {
  margin-top: 60px;
}
.main {
  .header {
    height: 60px;
    width: 100%;
    background-color: #fff;
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    z-index: 999;
   
    .logo {
     
      height: 50px;
      align-self: center;
      float: left;
      padding: 10px;
       box-sizing: border-box;
      .logopng {
        height: 50px;

        img {
          vertical-align: middle;

          width: 40px;
          border-radius: 50%;
          margin-right: 2px;
        }
        p {
          vertical-align: middle;
          display: inline-block;
          font-size: 16px;
          font-weight: 600;
          color: #333;
        }
      }
    }
    .tkb {
      opacity: 0.6;
      background: #f8bcbd;
      border-radius: 21px;
      padding: 2px 10px;

      height: 25px;
      margin-top: 18px;
      margin-right: 10px;
      float: right;
    
      .tkb_span {
        color: red;
        font-size: 12px;
      }
    }
  }
  .jump_box{
    width: 50%;
  
     position: fixed;
    right: 0;
    left: 0;
    top: 60px;
    z-index: 999;
    background-color: #fff;
    padding-bottom: 10px;
    li{
      text-align: left;
      padding: 6px 10px;
    }
     .active {
        color: #f66769;
      }
  }
  .bottom {
  
    padding: 30px 5px;

    background-color: #000;
    color: #fff;
    .title {
      font-size: 14px;
      font-weight: 600;
    }
    .box {
      font-size: 12px;
      text-align: left;
      margin: 20px 0;
      .address {
        .title{
          font-size: 12px;
          font-weight: 100;
        }
        p {
          font-size: 12px;
        }
      }
      .lianxi {
        margin-top: 20px;
        display: flex;
      
        span {
          font-size: 10px;
          flex: auto;
          width: 33%;
          text-align: center;
        }
      }
      img {
        width: 14px;
        margin-right: 0px;
          vertical-align: middle;
      }
    }
    .shenming {
      padding: 5px;
      .title1 {
        margin-top: 30px;
        font-size: 12px;
      }
      .line {
        width: 100%;
        border-top: 1px solid #fff;
        margin-bottom: 20px;
      }
      .text {
        p{
          font-size: 14px;
        }
        .showmore{
           text-align: left;
        font-size: 12px;
        line-height: 1.5;
        }
        text-align: left;
        font-size: 12px;
        line-height: 1.5;
      }
    }
  }
}
</style>
