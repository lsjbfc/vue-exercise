<template>
  <div>
    <p class="title">{{rec.title}}</p>
    <ul>
      <li v-for="item in rec.Recommend" :data-id="item.ID">
        <img :src="item.url" />
        <p>{{item.name}}</p>
        <p>{{item.introduce}}</p>
        <p>￥{{item.price}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'recommend',
    props:{
      rec:[String,Object],
      default:function () {
        return "oo"
      }
    },
    data () {
      return {
        data:[],
        title:""
      }
    },
    created:function (){

    }

  }
</script>
<style scoped>
  p{margin:0;padding:0;white-space: nowrap;text-overflow:ellipsis;word-break:break-all;overflow:hidden;width:100%}
  .title{text-indent:10px;color:#555;background-color:#CCC;height:30px;line-height:30px}
  ul{display:flex;width:100%;flex-wrap:wrap;justify-content:space-between;font-size:10px}
  ul li{list-style:none;display:flex;flex-direction:column;align-items:center;width:48%}
  img{width:100%;}
</style>
