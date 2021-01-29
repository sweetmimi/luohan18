<!-- zys -->
<template>
  <div class="main">
    <div class="header">
      <div class="logo">
        <div class="logopng">
          <img src="@/assets/img/uatas-logo.png" alt="" />
          <p>uatas</p>
        </div>
      </div>
      <ul class="tab-tilte">
        <li
          v-for="(item, index) in mydata.tabs"
          @click="clicktab(item, index)"
          :class="{ active: cur == index }"
          :key="index"
        >
          {{ item.label }}
        </li>
        <li>
         
        </li>
           <span class="tkb">
            <span class="tkb_span">TKB90=100%</span>
          </span>
      </ul>
    
    </div>
    <router-view class="incoming-date-data-container"></router-view>
    <div class="bottom">
      <div class="title">Hubungi kami</div>
      <div class="box">
        <div class="logo">
          <div class="uatas">
            <p>uatas</p>
            <img src="@/assets/img/uatas-logo.png" alt="" />
          </div>
          <div class="otherlogo">
            <div class="ojk">
              <span>Terdaftar dan diawasi oleh:</span>
              <img
                src="@/assets/img/ojk2.png"
                alt="Berizin dan diawasi oleh:"
              />
            </div>

            <div class="afpi">
              <span>Anggota dari:</span>
              <img
                style="margintop: 10px"
                src="@/assets/img/afpi2.png"
                alt="Anggota dari:"
              />
            </div>
          </div>
        </div>

        <div class="info">
          PT PLUS ULTRA ABADI <br />Puri Indah Financial Tower Lt.08 Unit 0802,
          Jl Puri Lingkar Dalam Blok T No.08, Kel. Kembangan Selatan
          Kec.Kembangan, Jakarta Barat.
          <br />
          Whatsapp : 082258200976<br />
          Phone : 021-22580622<br />
          Email : cs.support@uatas.id
        </div>
      </div>
      <div class="shenming">
        <div class="title1">Copyright © 2020 Uatas. All rights reserved.</div>
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
          dimaksud.<br />
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
      cur: 0,
     mydata:mydata,
    };
  },

  async created() {
    this.$router.push("pc/home");
  },

  computed: {},

  mounted() {},

  methods: {
    clicktab(item, index) {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      this.$router.push({ path: item.link });
      console.log(item.link);
      this.cur = index;
    },
  },
};
</script>
<style lang='less' scoped>
.incoming-date-data-container {
  margin-top: 90px;
}
.main {
  .header {
    height: 90px;
    width: 100%;
    background-color: #fff;
    position: fixed;
    display: flex;
    clear: both;
    top: 0;
    z-index: 999;
    box-shadow: 0px 15px 10px -15px #ccc;
    .logo {
      margin-left: 120px;
      height: 50px;
      align-self: center;

      .logopng {
        height: 50px;
        float: left;
        img {
          vertical-align: middle;

          width: 50px;
          height: 50px;
          border-radius: 50%;
          margin-right: 10px;
        }
        p {
          vertical-align: middle;
          display: inline-block;
          font-size: 20px;
          font-weight: 600;
          color: #333;
        }
      }
    }
    .tab-tilte {
      position: absolute;
      vertical-align: middle;
      display: inline-block;
      left: 50%;
      margin-left: -250px;
      align-self: center;
      li {
        float: left;
        margin: 0 10px;
        padding: 5px 20px;
        text-align: center;
        cursor: pointer;
      }
      .active {
        background-color: #f66769;
        border-radius: 20px;
        font-weight: 500;
        color: #fff;
      }
      .tkb {
        opacity: 0.6;
        background: #f8bcbd;
        border-radius: 21px;
        padding: 2px 10px;
    
        font-family: Helvetica;

        float: right;
        vertical-align: middle;
        .tkb_span {
          color: red;
          font-size: 14px;
        }
      }
    }
  }
  .bottom {
    margin-top: 50px;
    padding: 30px 120px;

    background-color: #000;
    color: #fff;
    .title {
      font-size: 16px;
      font-weight: 600;
    }
    .box {
      display: flex;
      text-align: left;
      margin: 30px 0 40px 0;
      justify-content: space-between;

      .logo {
        font-size: 14px;
        width: 50%;
        .uatas {
          width: 400px;
          text-align: left;

          height: 100px;
          margin-bottom: 20px;
          img {
            width: 60px;
          }
          p {
            text-align: left;
            margin-bottom: 10px;
            font-size: 25px;
          }
        }
        .otherlogo {
          cursor: pointer;
          min-width: 420px;
          .ojk {
            width: 200px;
            float: left;
            margin-right: 20px;
            vertical-align: middle;
            img {
              margin-top: 10px;
            }
          }
          .afpi {
            float: left;
            vertical-align: middle;
            width: 220px;
            img {
              margin-top: 20px;
            }
          }
        }
      }
      .info {
        line-height: 2;
        width: 30%;
        float: right;
      }
    }
    .shenming {
      .title1 {
        margin-bottom: 20px;
      }
      .line {
        width: 100%;
        border-top: 1px solid #fff;
        margin-bottom: 20px;
      }
      .text {
        font-family: Arial, Helvetica, sans-serif;
        text-align: left;
        font-size: 13px;
        line-height: 2;
        p{
           font-size: 14px;
        }
      }
    }
  }
}
</style>
