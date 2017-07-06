<template>
  <div class="guess">
      <p>猜您喜欢</p>
      <ul>
          <li v-for="item in like.hot" :key="item.ID" class="prod_list">
              <img :src="item.url" />
              <span>{{item.name}}</span>
              <span class="intr">{{item.jieshao}}</span>
              <span class="price">{{item.price}}</span>
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
          that.like=Ldata.hot;
          console.log(that.like)
        }
      }
    };
  }
  export default {
    props:{
        guess:[String,Object],
        default:function () {
            return "正在加载"
        }
    },
    data () {
      return {
          like:""
      }
    },
    components:{

    },
    created:function () {
        Ljson(this);
    }
  }
</script>
<style scoped>
  ul{display: flex;flex-wrap: wrap;width:100%;justify-content: space-between;}
  .prod_list{display:flex;flex-direction: column;width:48%;background:#FFF;margin-bottom:15px}
  .prod_list img{width:100%}
  span{color:#000}
  .intr{font-size:16px;color:#888}
  .price{color:#555}
</style>
