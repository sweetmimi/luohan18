<template>
  <div class="app-container">
    <div class="layout-content">
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view></router-view>
      </keep-alive>
      <router-view v-else></router-view>
    </div>
    <div class="layout-footer">
      <TabBar :data="tabbars" @change="handleChange" />
    </div>
  </div>
</template>

<script>
import TabBar from '@/components/TabBar'
export default {
  name: 'AppLayout',
  data() {
    return {
      tabbars: [
        {
          title: '拜佛',
          to: {
            name: 'Home'
          },
          icon:require("@/assets/images/tab/home.png"),
          icon1:require("@/assets/images/tab/home2.png"),
        },
        {
          title: '互动',
          to: {
            name: 'About'
          },
          icon:require("@/assets/images/tab/my.png"),
          icon1:require("@/assets/images/tab/my2.png"),
        }
      ]
    }
  },
  components: {
    TabBar
  },
  methods: {
    handleChange(v) {
      if(v==0){
          this.$router.replace({
              path: "/home",
              // query: { appid: "123456" },
            });

      }else{
         this.$router.replace({
              path: "/about",
              // query: { appid: "123456" },
            });
      }
      console.log('tab value:', v)
    }
  }
}
</script>
