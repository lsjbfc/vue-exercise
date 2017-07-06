<template>
  <footer>

     <div>
       <router-link to="/"><i class="icon iconfont icon-icon-home"></i></router-link>
     </div>
    <div>
      <router-link to="./trol"><i class="icon iconfont icon-gouwuche"></i></router-link>
    </div>
    <div>
      <router-link to="./login"><i class="icon iconfont icon-geren"></i></router-link>
    </div>
  </footer>
</template>

<script>

  export default {
    name: 'footer',
    data () {
      return {

      }
    }
  }
</script>

<style scoped>
  footer{
    position:fixed;bottom:0;z-index:10;
    width:100%;height:45px;background-color:rgba(38,145,166,.8);
    display:flex;justify-content:space-around;align-items:center;
    color:#FFF;font-size:20px;
  }
</style>
