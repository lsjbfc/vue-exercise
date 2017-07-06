<template>
   <div>
        {{Goods}}
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

</style>
