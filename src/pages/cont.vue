<template>
  <div class="container">
    <Hea :opt="opt"></Hea>
    <!--<component :is="">

    </component>-->
    <AlContent></AlContent>
    <Search></Search>
    <Na></Na>
    <div class="one-list">
      <img src="../../static/imgs/p1.jpg">
    </div>
    <ul class="two-list">
        <li @click="gotoDet" data-id="9527"><img src="../../static/imgs/p2.jpg"></li>
        <li><img src="../../static/imgs/p3.jpg"></li>
    </ul>
    <div class="one-list">
      <img src="../../static/imgs/p4.jpg">
    </div>
    <ul class="two-list">
      <li><img src="../../static/imgs/p5.jpg"></li>
      <li><img src="../../static/imgs/p2.jpg"></li>
    </ul>
    <Hot :hot="hot"></Hot><!--:hot="data.cls" -->
    <Cls :cls="cls"></Cls><!--:cls="data.cls"-->
    <Recommend :rec="rec"></Recommend>
    <footer>
      <div class="appCopyright">
        客服电话：400-887-8855（08:00-24:00）<br>2012 SHUA All Rights Reserver. <br>舒华股份有限公司 版权所有
      </div>
    </footer>
    <Foot></Foot>
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
          that.data=Ldata;
          that.hot=Ldata.hot;
          that.cls=Ldata.cls;
          that.rec=Ldata.Recommend;
        }
      }
    };
  }
  import Hea from '@/components/Head';
  import AlContent from '@/components/Alcontent';
  import Search from '@/components/Search';
  import Na from '@/components/Nav';
  import Foot from '@/components/Foot';
  import Hot from '@/components/Hot';
  import Cls from '@/components/Cls';
  import Recommend from '@/components/Recommend';
  export default {
    name: 'cont',
    data () {
      return {
          data:null,
          hot:"",
          cls:"",
          rec:"",
          opt:{
            left:"icon-caidan",
            mid:"",
            right:"",
            si:true
          }
      }
    },
    beforeCreate:function () {
      Ljson(this);
    },
    mounted:function () {

    }
    ,
    components:{
      AlContent,
      Search,
      Na,
      Foot,
      Hot,
      Cls,
      Recommend,
      Hea
    },
    methods:{
        gotoDet:function (e) {
          var i=e.currentTarget.getAttribute("data-id");
          console.log(i);
          this.$router.push({name:"details",params:{details:i}})
        }
    }
  }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .one-list{

 }
  .container{padding-bottom:45px;}

  .appCopyright{text-align: center}
  img{width:100%}
  ul{display:flex;padding:0;justify-content: space-between}
  ul li{list-style:none;width:49%}
</style>
