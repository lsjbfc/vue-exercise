<template>
    <div class="cart">
        <div class="first"><i></i></div>
        <div><i></i></div>
        <div><span>加入购物车</span></div>
    </div>
</template>
<script>
  export default {
    name: 'hello',
    data () {
      return {

      }
    }
  }
</script>
<style scoped>
.cart{display:flex;justify-content: space-between;width:100%;height:45px;color:#c62026;border:1px solid #ccc;box-sizing:border-box;
  position:fixed;bottom:0;
}
.first{border-right:1px solid #CCC;box-sizing:border-box}
.cart div{width:33%;height:100%}
.cart span{display: inline-block;text-align:center;width:100%;height:43px;line-height:43px;border:1px solid;box-sizing: border-box}
</style>
