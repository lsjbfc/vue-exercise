<template>
  <div class="container">
      <router-view></router-view>
  </div>
</template>
<script>
  /*Router,
   watch: {
   $route(to, from,next) {
   console.log(to,from);
   //             next();
   }
   },*/


export default {
  name: 'app',
  components:{

  },
  data:function () {
     return {
          showback:true
     }
  }
}
</script>
<style>
.container{
  position:relative;
  width:100%;
  height:100%;
}
</style>
