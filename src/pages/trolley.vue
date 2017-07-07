<template>
    <div class="main">
        <Hea :opt="opt"></Hea>
        <div class="lis">
            <div class="domestic-goods" >
                <div class="close">X</div>
                <div class="det">
                    <input type="checkbox"/>
                    <img src="../../static/imgs/hot1.jpg" />
                    <div >
                        <span>SH-836</span>
                        <span>舒华家用健身车静音卧式动感单车</span>
                        <b>属性：白色</b>
                    </div>
                </div>
                <div class="clr">
                    <span>￥4998</span>
                    <p>
                        <span>-</span>
                        <input value="1" />
                        <span>+</span>
                    </p>
                </div>
            </div>
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
  .main{width:100%;height:300px;background-color:#f2f2f2}
  .lis{width:100%;background:url("../../static/imgs/gouwuche.png") no-repeat center 30%;height:100%;padding:45px 0 0 0}
.domestic-goods{position:relative;background-color: #FFF;overflow: hidden}
.close{position:fixed;right:0}
.det{display: flex;justify-content: space-around;height:70px;align-items: center}
  img{width:70px;height:100%}
  .det span{white-space: nowrap;text-overflow: ellipsis;display: block;overflow: hidden}
  .clr{display: flex;width:60%;float:right;background-color:#FFF}
  .cls p{width:60%}
  .det div{width:60%}
  p{border:1px solid #ccc;border-radius:5px;height:30px;box-sizing: border-box}
 p,input{margin:0;padding:0;}
 p span{display: inline-block;width:30px;height:28px;text-align: center;line-height:27px;color:#ccc}
 p span:nth-of-type(1){border-right:1px solid}
 p span:nth-of-type(2){border-left:1px solid}
p input{width:42px;text-align:center;outline:none;border:0;box-sizing: border-box}
</style>
