<template>
   <div class="navs">
     <div v-for="item in navlist">
       <i class=""><img :src="item.url"></i>
        <span>{{item.span}}</span>
     </div>
   </div>
</template>
<script>
  export default {
    name: 'hello',
    data () {
      return {
         navlist:[{"url":"../../static/imgs/navs-1.jpg","span":"跑步机"},
                  {"url":"../../static/imgs/navs-2.jpg","span":"健康知识"},
                  {"url":"../../static/imgs/navs-3.png","span":"企业团购"},
                  {"url":"../../static/imgs/navs-4.png","span":"优惠券"},
                  {"url":"../../static/imgs/navs-4.png","span":"我的订单"}
         ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .navs{width:100%;height:90px;display:flex;justify-content:space-around;}
  .navs div{display:flex;flex-direction:column;align-items:center}
  img{
    width:100%;
    height:100%;}
  .navs div i{display:block;width:60px;height:60px}
</style>
