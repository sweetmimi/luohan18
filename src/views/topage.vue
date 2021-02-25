<!-- zys -->
<template>
  <div></div>
</template>

<script>
import { getUserInfo, getuserShare } from '@/api/user.js'
export default {
  name: 'ToPage',
  components: {},

  data() {
    return {}
  },

  async created() {
    // this.getUser()
  },

  computed: {},

  mounted() {},

  methods: {
    getuserShareapi() {
      const params = { openid: 'orMjE6PC_xe0ACAom8SuOrl7s7bQ' }
      getuserShare(params).then()
    },
    getUser() {
      getUserInfo({})
        .then(res => {
          this.getuserShareapi()
        })
        .catch(error => {
          this.shouquan()
        })
    },
    shouquan() {
      let url = encodeURIComponent(location.href)
      window.location.href = `http://luohan.wuhanhsj.com/vote/api/v1/android/authorization?from=${url}`
    },
    toPage() {
      var step = 1
      switch (step) {
        case 1:
          this.$router.push({ path: 'step1' })
          break
        case 2:
          this.$router.push({ path: 'step2' })
          break
      }
    }
  }
}
</script>
<style lang='scss' scoped>
</style>
