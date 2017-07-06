<template>
  <div>
    <Hea :opt="opt"></Hea>
    <ul @click="change">
        <li></li>
        <li class="cur">精选</li>
        <li>跑步机/智能</li>
        <li>健身车/动感单车</li>
        <li>椭圆机/倒立机</li>
        <li>肌肉训练</li>
        <li>哑铃/俯卧版</li>
        <li>瑜伽运动</li>
        <li>按摩养生</li>
        <li>户外路径</li>
     </ul>
  </div>
</template>
<script>
  import Hea from '@/components/Head';
  export default {
    name: 'menu',
    created:function () {

    },
    data () {
      return {
        opt:{
          left:"icon-huitui",
          mid:"",
          right:"",
          si:true
        }
      }
    },
    components:{
      Hea
    },
    methods: {
        change:function (e) {
            if(e.target.getAttribute("class")=="")
              e.target.setAttribute("class","cur")
            else
               e.target.setAttribute("class","")

        }
    }
  }
</script>
<style scoped>
 ul{width:30%;display: flex;flex-direction:column;align-items: flex-start;background-color:#f2f2f2;height:100%;}
 li{list-style:none;width:100%;height:45px;line-height:45px;text-align:center;border-right:1px solid #e5e5e5;border-bottom:1px  solid #e5e5e5;background-color:#f2f2f2}
  .cur{border-right:#FFFFFF;background-color:#FFF;color:#d57274}
</style>
