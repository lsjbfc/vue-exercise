<template>
  <footer>
     <div>
         <i class="icon iconfont icon-iconsouye" @click="sy"></i>
     </div>
    <div>
       <i class="icon iconfont icon-gouwuche"  @click="gwc"></i>
    </div>
    <div>
       <i class="icon iconfont icon-geren" @click="login"></i>
    </div>
  </footer>
</template>

<script>

  export default {
    name: 'footer',
    data () {
      return {

      }
    },
    methods:{
        sy(){
            this.$router.push("/")
        },
        gwc(){
            this.$router.push("./trol")
        },
        login(){
            this.$router.push("./login")
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
  div i {font-size:20px}
</style>
