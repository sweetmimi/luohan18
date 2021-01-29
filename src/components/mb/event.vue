<!-- zys -->
<template>
  <div class="video">
    <div class="main">
      <div class="">
        <!-- <video id="Video" class="video-js vjs-big-play-centered">
          <source src="https://youtu.be/wVRd4Hyctp8" type="video/mp4" />
        </video> -->
        <iframe
          width="100%"
          height="220px"
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
          <!-- <span>Link video：</span
          ><a href="" @click="videoUrl('https://www.youtube.com/embed/dUqnLMZewJU')">https://www.youtube.com/embed/dUqnLMZewJU</a>
        -->
        </div>
      </div>
    </div>
    <div class="min_video">
      <div class="item">
        <iframe
         width="100%"
           height="100px"
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
          <!-- <span>Link video：</span
          ><a href="" @click="videoUrl('https://www.youtube.com/embed/oTD_6MLxrLY')">https://www.youtube.com/embed/oTD_6MLxrLY</a>
        -->
        </div>
      </div>

      <div class="item">
        <iframe
           width="100%"
           height="100px"
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
         
        </div>
      </div>
      <div class="item">
        <iframe
            width="100%"
          height="100px"
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
         
        </div>
      </div>

      <div class="item">
        <iframe
          width="100%"
          height="100px"
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
 .ytp-large-play-button{
    width: 20px;
    height: 20px;
  }
.video {
  background-color: #f4f4f4;

  width: 100%;
  margin: 0px auto;
  .main {
    background: #fff;
    margin-bottom: 30px;
    .text {
     
      padding: 10px ;
      text-align: left;
     
      color: #333;
p{
 font-size: 12px;
}
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
     padding: 10px;
    .item {
      width: 49%;
     background: #fff;
     border-radius: 5px;
     margin-bottom: 50px;
    }
    .text {
       padding: 10px ;
   
      text-align: left;
      font-size: 12px;
      color: #333;
      p{
        font-size: 12px;
      }
      a {
        color: #006ff8;
      }
    }
  }
}
</style>
