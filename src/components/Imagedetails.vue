<template>
   <div>
        <img  v-for="item in Goods.imde" :src="item"  />
   </div>
</template>
<script>
  export default {
    props:{
      Goods:[String,Object,Array],
      default:function () {
        return []
      }
    },
    data () {
      return {

      }
    },
    components:{

    }
  }
</script>
<style scoped>
 img{width:100%}
</style>
