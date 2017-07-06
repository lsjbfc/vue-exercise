<template>
    <div class="search">
      <form>
        <input class="ser" placeholder="搜索商品"/>
        <input type="button" class="sub" value=""/>
      </form>
    </div>
</template>

<script>
  export default {
    name: 'search',
    data () {
      return {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .search{width:100%;height:50px;}
     form{width:100%;height:100%;border:2px solid #ccc;display:flex;justify-content:space-between;border-radius:10px;box-sizing: border-box;padding:0 5px}
    .ser{width:75%;outline:none;border:0;padding:0 15px}
    .sub{width:40px;border:0;border-left:1px solid #ccc;background-color:#FFF;}
</style>
