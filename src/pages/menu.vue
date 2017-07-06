<template>
  <div>
    <Hea :opt="opt"></Hea>
    <ul @click="change" class="list">
        <li v-for="item in lists"  :class="{cur:current==item.id}"  :data-id="item.id" @click="change">{{item.li}}</li>
     </ul>
    <fieldset>
      <legend>
        asdf
      </legend>
    </fieldset>
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
        },
        lists:[
          {id:"精选","li":"精选"},
          {id:"跑步机/智能","li":"跑步机/智能"},
          {id:"健身车/动感单车","li":"健身车/动感单车"},
          {id:"椭圆机/倒立机","li":"椭圆机/倒立机"},
          {id:"肌肉训练","li":"肌肉训练"},
          {id:"哑铃/俯卧版","li":"哑铃/俯卧版"},
          {id:"瑜伽运动","li":"瑜伽运动"},
          {id:"按摩养生","li":"按摩养生"},
          {id:"户外路径","li":"户外路径"}
        ],
        current:"精选"
      }
    },
    components:{
      Hea
    },
    methods: {
        change:function (e) {
            this.current=e.target.getAttribute("data-id");
            /*if(e.target.getAttribute("class")=="")
              e.target.setAttribute("class","cur")
            else
               e.target.setAttribute("class","")*/

        }
    }
  }
</script>
<style scoped>
  fieldset{border:0;border-top:1px solid;width:60%;float:right;padding:0;height:400px;padding-top:45px}
  legend{text-align:center;padding:0 20px;margin-top:45px;}
 ul{width:30%;display: flex;flex-direction:column;align-items: flex-start;background-color:#f2f2f2;height:100%;padding-top:45px;float:left;}
 li{list-style:none;width:100%;height:45px;line-height:45px;text-align:center;border-right:1px solid #e5e5e5;border-bottom:1px  solid #e5e5e5;background-color:#f2f2f2}
  .cur{border-right:#FFFFFF;background-color:#FFF;color:#d57274}
</style>
