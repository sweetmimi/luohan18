<!-- zys -->
<template>
  <div class="video">
    <div class="main">
      <div class="">
        <!-- <video id="Video" class="video-js vjs-big-play-centered">
          <source src="https://youtu.be/wVRd4Hyctp8" type="video/mp4" />
        </video> -->
        <iframe
          :width="screenWidth*0.7"
          :height="screenWidth*0.395"
          src="https://www.youtube.com/embed/dUqnLMZewJU"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <div class="text">
          <p>Samarinda</p>
          <p>Lokasi : Bigmall Samarinda</p>
          <p>Fintech Exhibition</p>
          <p>2-4 September 2019</p>
          <span>Link video：</span
          ><a href="" @click="videoUrl('https://www.youtube.com/embed/dUqnLMZewJU')">https://www.youtube.com/embed/dUqnLMZewJU</a>
        </div>
      </div>
    </div>
    <div class="min_video">
      <div class="item">
        <iframe
          :width="screenWidth*0.34"
          :height="screenWidth*0.19"
          src="https://www.youtube.com/embed/oTD_6MLxrLY"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div class="text">
          <p>Mataram</p>
          <p>Lokasi : Universitas Mataram</p>
          <p>Fintech Stabilitas Keuangan</p>
          <p>4-5 Oktober 2019</p>
          <span>Link video：</span
          ><a href="" @click="videoUrl('https://www.youtube.com/embed/oTD_6MLxrLY')">https://www.youtube.com/embed/oTD_6MLxrLY</a>
        </div>
      </div>

      <div class="item">
        <iframe
           :width="screenWidth*0.34"
          :height="screenWidth*0.19"
          src="https://www.youtube.com/embed/s4VVtyg1Tx8"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div class="text">
          <p>Medan</p>
          <p>Lokasi : STMIK-STIE Mikroskil</p>
          <p>Milenial Melek Fintech</p>
          <p>4-5 Oktober 2019</p>
          <span>Link video：</span
          ><a href="" @click="videoUrl('https://www.youtube.com/embed/s4VVtyg1Tx8')">https://www.youtube.com/embed/s4VVtyg1Tx8</a>
        </div>
      </div>
      <div class="item">
        <iframe
           :width="screenWidth*0.34"
          :height="screenWidth*0.19"
          src="https://www.youtube.com/embed/gIGuVyBnuak"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div class="text">
          <p>Surabaya</p>
          <p>Lokasi : Pakuwon Trade Center</p>
          <p>Fintech Exhibition</p>
          <p>29 November - 1 Desember 2019</p>
          <span>Link video：</span
          ><a href=""  @click="videoUrl('https://www.youtube.com/embed/gIGuVyBnuak')">https://www.youtube.com/embed/gIGuVyBnuak</a>
        </div>
      </div>

      <div class="item">
        <iframe
          :width="screenWidth*0.34"
          :height="screenWidth*0.19"
          src="https://www.youtube.com/embed/7vGnoK3VfsU"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div class="text">
          <p>Kupang</p>
          <p>Lokasi : ASTON Kupang</p>
          <p>FinEast</p>
          <p>27-28 February 2020</p>
          <span>Link video：</span
          ><a href=""  @click="videoUrl('https://www.youtube.com/embed/7vGnoK3VfsU')">https://www.youtube.com/embed/7vGnoK3VfsU</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},

  data() {
    return {
      screenWidth: document.body.clientWidth, // 屏幕尺寸
    };
  },

  async created() {},

  computed: {},

  mounted() {
     const that = this
      window.onresize = () => {
        return (() => {
          window.screenWidth = document.body.clientWidth
          that.screenWidth = window.screenWidth
        })()
      }
  },

  methods: {
    videoUrl(url){
      window.open(url)
    }
  },
};
</script>
<style lang='less' scoped>
.video {
  background-color: #fff;
  padding-top: 50px;
  width: 70%;
  margin: 0px auto;
  .main {
    .text {
      margin: 20px 0;
      text-align: left;
      font-size: 12px;
      color: #333;

      a {
        color: #006ff8;
      }
    }

    .video1 {
      width: 100%;
    }
  }

  .min_video {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    flex: 1;

    .item {
      width: 49%;
     margin-bottom: 50px;
    }
    .text {
      margin: 20px 0;
      text-align: left;
      font-size: 12px;
      color: #333;

      a {
        color: #006ff8;
      }
    }
  }
}
</style>
