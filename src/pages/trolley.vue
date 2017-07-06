<template>
    <div class="main">
        <Hea :opt="opt"></Hea>
        <div class="lis">
            {{opt.mid}}
        </div>
        <Foot></Foot>
    </div>
</template>
<script>
  import Hea from '@/components/Head';
  import Foot from '@/components/Foot';
  export default {
    name: 'tro',
    data () {
      return {
        opt:{
          left:"",
          mid:"",
          right:"",
          si:true
        }
      }
    },
    components:{
      Hea,
      Foot
    },
    created:function () {
        sessionStorage.setItem("a","a");
      var a=sessionStorage.getItem("a");
      console.log(a)
    }
  }
</script>
<style scoped>
  .main{width:100%;height:300px;background-color:##f2f2f2}
  .lis{width:100%;background:url("../../static/imgs/gouwuche.png") no-repeat center 30%;height:100%}
</style>
