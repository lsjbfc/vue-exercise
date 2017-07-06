<template>
  <div>
    <p>{{cls.title}}</p>
    <ul>
      <li v-for="item in cls.cls" :data-id="item.ID" :data-cls="item.name" @click="gotolist">
        <img :src="item.url" />
        <span>{{item.name}}</span>
      </li>
    </ul>
  </div>
</template>
<script>

  export default {
    name: 'cls',
    props:{
      cls:[String,Object],
      default:function () {
        return "oo"
      }
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
    created:function (){

    },
    methods:{
        gotolist:function (e) {
            var i=e.currentTarget.getAttribute("data-cls");
            console.log(i);
            this.$router.push({name:"list",params:{list:i}})
        }
    }
  }
</script>
<style scoped>
  p{text-indent:10px}
  ul{display:flex;width:100%;flex-wrap:wrap;justify-content:flex-start;font-size:10px}
  ul li{list-style:none;display:flex;flex-direction:column;align-items:center;width:82px;}
  img{width:60px;height:60px}
</style>
