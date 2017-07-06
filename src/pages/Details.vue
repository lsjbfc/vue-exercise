<template>
  <div class="main">
      <Hea :opt="opt"></Hea>
      <div class="det">
          <img :src="deta.url" />
        <p>
          <span>{{deta.name}}</span>
          <span>{{deta.jieshao}}</span>
        </p>
        <p><span class="price">￥{{deta.price}}</span>市场价：<span class="scp">{{deta.scprice}}</span></p>
      </div>
      <p>
         <b>属性</b>{{deta.att}}
      </p>
      <div>
        <ul class="info" @click="change">
          <li class="cur">商品详情</li>
          <li>图片详情</li>
          <li>保养售后</li>
        </ul>
      </div>
    <!--<component :is="商品详情"></component>-->
      <!--<component></component>-->
    <component :is="show" :Goods="deta"></component>
    <Join></Join>
  </div>
</template>
<script>
  function Ljson(that) {
    var xhr = new XMLHttpRequest();
    // 2. 建立连接
    xhr.open("get", "../../static/data/det.json",true);
    // 3. 发送请求
    xhr.send();
    // 4. 处理响应
    xhr.onreadystatechange = function(){
      // 当就绪状态码为4时，表示请求完成，响应就绪
      if (xhr.readyState === 4) {
        // HTTP状态码为 200时，表示正常成功请求到数据
        if (xhr.status === 200) {
          // 获取响应文本
          var data = xhr.responseText;
          let Ldata=JSON.parse(data);
          that.deta=Ldata.det;
          console.log(Ldata.det);
          console.log(that.deta)
        }
      }
    };
  }
  import Hea from '@/components/Head';
  import Goods from '@/components/Goods';
  import Join from '@/components/Joincart';
  import Imde from '@/components/Imagedetails';
  export default {
    data () {
      return {
        opt:{
          left:"icon-huitui",
          mid:"商品详情",
          right:"icon-icon-home",
          si:false
        },
        deta:"",
        Gods:Goods,
        Imde:Imde,
        show:Goods
      }
    },
    created:function () {
      Ljson(this);
      console.log(this.deta+"a")
    },
    components:{
        Hea,
        Goods,
        Join,
        Imde
    },
    methods:{
        change:function (e){
            const i="图片详情";
            const g="商品详情";
//            const Gods/**/="商品详情";
            if (e.target.nodeName!=="UL") {
                if(e.target.innerText===g){
                    this.show="Goods"
                }
                else if(e.target.innerText===i){
                    this.show="Imde"
                }

            }
        }
    }
  }
</script>
<style scoped>
 .main{padding:45px 0 ;background-color:#f0f0f0;max-height:100%}
  li{list-style:none}
  .det{width:100%;background-color:#FFF}
  .det p span{padding-right:10px}
  .det img{ width:100% }
  .price{color:#c62026}
  .scp{text-decoration: line-through}
  p{text-indent:20px;margin:0;padding:0;background-color:#FFF;margin-top:8px;padding:10px 0;}
  .info{display:flex;justify-content: space-around;background-color:#FFF;margin-top:8px;align-items: center;height:40px;border-bottom:1px solid #e5e5e5;width:100%;}
  .info li{text-align:center;}
  .cur{border-bottom:1px solid #c62026;color:#c62026}

  .cs{display:inline-block;height:18px;line-height:18px;width:85px;text-align: justify;text-align-last:justify;word-spacing: -1em;color:#2d2d2d}
</style>
