<template>
  <div class="main">
      <Hea :opt="opt"></Hea>
      <ul class="lis">
          <li class="unline">默认</li>
          <li>新品</li>
          <li>销量</li>
          <li>价格</li>
      </ul>
      <ul class="listclr">
         <li v-for="item in lists.hot" :key="item.ID">
              <img :src="item.url">
              <span>{{item.name}}</span>
              <span class="introduce">{{item.jieshao}}</span>
              <span class="">￥{{item.price}}</span>
         </li>
      </ul>
  </div>
</template>
<script>
  function Ljson(that) {
    var xhr = new XMLHttpRequest();
    // 2. 建立连接
    xhr.open("get", "../../static/data/data.json",true);
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
          that.lists=Ldata.hot;
        }
      }
    };
  }
  import Hea from '@/components/Head';
  export default {
    data () {
      return {
          opt:{
              left:"icon-huitui",
              mid:"1100",
              right:"",
              si:false
          },
          lists:""
      }
    },
    components:{
      Hea
     },
    created:function () {
      console.log(this.$route.params.list);
      this.opt.mid=this.$route.params.list;
      Ljson(this)
    }
  }
</script>
<style scoped>
  .main{padding: 45px 0;}
   .unline{border-bottom:1px solid #c62026;color:#c62026;}
   li{list-style:none;padding:5px 0;text-align: center}
  .lis{display:flex;justify-content: space-around;align-items:center}
  .listclr li{width:48%;display: flex;flex-direction: column;align-items: flex-start}
  .listclr{display:flex;flex-wrap:wrap;justify-content: space-between;}
  .introduce{font-size:15px}
  img{width:100%}
</style>
