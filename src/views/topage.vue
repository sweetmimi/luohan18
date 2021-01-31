<!-- zys -->
<template>
  <div>
    
  </div>
</template>

<script>
export default {
  name:'ToPage' ,
  components: {},

  data () {
    return {
    };
  },

 async created(){
    this.toPage()
 },

  computed: {},

  mounted () {},

  methods: {
    toPage(){
      var step = 1;
      switch(step){
        case 1:
          this.$router.replace({ path: 'step1', query: { appid: "123456" } })
        break; 
        case 2:
          this.$router.replace({ path: 'step2', query: { appid: "56789" } })
        break;  
      }
    }
  }
}

</script>
<style lang='scss' scoped>

</style>
