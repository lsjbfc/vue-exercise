<template>
   <div class="navs">
        <a href="#">
          <i class=""><img src="../../static/imgs/navs-1.jpg"></i>
          <span>
            跑步机
          </span>
        </a>
        <a href="#">
          <i class=""><img src="../../static/imgs/navs-2.jpg"></i>
          <span>
            跑步机
          </span>
        </a>
       <a href="#">
         <i class=""><img src="../../static/imgs/navs-3.png"></i>
         <span>
              跑步机
            </span>
       </a>
     <a href="#">
       <i class=""><img src="../../static/imgs/navs-4.png"></i>
       <span>
              跑步机
            </span>
     </a>
     <a href="#">
       <i class=""><img src="../../static/imgs/navs-5.png"></i>
       <span>
              跑步机
            </span>
     </a>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .navs{width:100%;height:90px;display:flex;justify-content:space-around;}
  .navs a{display:flex;flex-direction:column;align-items:center}
  img{
    width:100%;
    height:100%;}
  .navs a i{display:block;width:60px;height:60px}
</style>
