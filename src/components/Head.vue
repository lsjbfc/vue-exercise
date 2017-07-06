<template>
  <div class="header">
        <!--<span >
          <i :class="cback?'icon iconfont icon-huitui':'icon iconfont icon-caidan'" @click="back"></i>
        </span>
        <img src="../../static/imgs/shlogo.png" />
        <span></span>-->
        <span>
            <i class="icon iconfont" :class="opt.left" @click="back"></i>
        </span>
        <img src="../../static/imgs/shlogo.png" v-if="si" />
        <span v-if="!si" class="mid">{{opt.mid}}</span>
        <span>
            <i class="icon iconfont" :class="opt.right"></i>
        </span>
  </div>
</template>

<script>

  export default {
    name: 'header',
    props:{
        opt:[String,Boolean,Object],
        default:function () {
          return {
            left:"icon-huitui",
            mid:"",
            right:"",
            si:true
          }
        }
    },
    data () {
      return {
            si:this.opt.si

      }
    },
    created:function () {

    }
    ,
    methods:{
        back(){
            if(this.opt.left==="icon-caidan"){
                this.$router.push('./menu');

            }else{
                this.$router.go(-1);
            }
        }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header{
    width:100%;height:45px;background-color:rgba(38,145,166,.8);display:flex;justify-content: space-between;align-items:center;font-size:20px;color:#ffffff;position:fixed;top:0;z-index:10;
  }
  span{display: flex;width:45px;height:100%;flex-direction:column;align-items:center;justify-content: center}
  div{padding:0 10px}
  .mid{font-size:16px;flex:1}
  i img{
    width:20px;
    height:20px;
  }
</style>
