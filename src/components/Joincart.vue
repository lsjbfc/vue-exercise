<template>
    <div class="cart">
        <div class="first">
          <i class="iconfont icon-gouwuche"></i><span>{{sl}}</span>
        </div>
        <div><i class="iconfont " :class="soucang" @click="souc"></i></div>
        <div><span @click="buy">加入购物车</span></div>
    </div>
</template>
<script>
  export default {
    name: 'hello',
    data () {
      return {
          soucang:"icon-shoucangweixuanxuanda",
          sl:0
      }
    },
    methods:{
        buy(){
            this.sl++;
        },
        souc(){
            if(this.soucang==="icon-shoucangweixuanxuanda")
                this.soucang="icon-shoucangyixuanxiao-copy"
            else
                this.soucang="icon-shoucangweixuanxuanda";
        }
    }
  }
</script>
<style scoped>
.cart{display:flex;justify-content: space-between;width:100%;height:45px;color:#c62026;border:1px solid #ccc;box-sizing:border-box;
  position:fixed;bottom:0;background-color:rgba(255,255,255,0.8);
}
.first{border-right:1px solid #CCC;box-sizing:border-box;position: relative}
.first i{font-size:20px}
.cart div{width:33%;height:43px;line-height:43px;text-align:center}
.cart span{display: inline-block;text-align:center;width:100%;height:43px;line-height:43px;border:1px solid;box-sizing: border-box}
.first span{border-radius:50%;color:#FFF;position:absolute;width:20px;height:20px;font-size:6px;text-align:center;line-height:18px;background-color:#c62026;bottom:23px;left:60px}
</style>
