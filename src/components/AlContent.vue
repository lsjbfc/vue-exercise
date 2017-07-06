<template>
<div class="alContent">
    <!--<div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="../../static/imgs/s1.jpg"></div>
            <div class="swiper-slide"><img src="../../static/imgs/s2.jpg"></div>
            <div class="swiper-slide"><img src="../../static/imgs/l1.jpg"></div>
            <div class="swiper-slide"><img src="../../static/imgs/l2.jpg"></div>
            <div class="swiper-slide"><img src="../../static/imgs/l3.jpg"></div>
            <div class="swiper-slide"><img src="../../static/imgs/l4.jpg"></div>
            <div class="swiper-slide"><img src="../../static/imgs/l5.jpg"></div>
        </div>
        <div class="swiper-pagination"></div>
    </div>-->
  <swiper :options="swiperOption"  ref="mySwiper">
    <!--<swiper-slide v-for="item in items"></swiper-slide>-->
    <swiper-slide>
      <img src="../../static/imgs/s1.jpg">
    </swiper-slide>
    <swiper-slide>
      <img src="../../static/imgs/s2.jpg">
    </swiper-slide>
    <swiper-slide>
      <img src="../../static/imgs/l1.jpg">
    </swiper-slide>
    <swiper-slide>
      <img src="../../static/imgs/l2.jpg">
    </swiper-slide>
    <swiper-slide>
      <img src="../../static/imgs/l3.jpg">
    </swiper-slide>
    <swiper-slide>
      <img src="../../static/imgs/l4.jpg">
    </swiper-slide>
    <swiper-slide>
      <img src="../../static/imgs/l5.jpg">
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>
</template>
<script>
  export default {
    name: 'alContent',
    data () {
      return {
        swiperOption: {
          pagination : '.swiper-pagination',
          paginationClickable :true,
          autoplayDisableOnInteraction:false,
          loop:true,
          autoplay:2000,
          notNextTick: true,
          slidesPerView: 'auto',
          centeredSlides: true,
          spaceBetween:0
          /*,
          onSlideChangeEnd: swiper => {
            //这个位置放swiper的回调方法
            this.page = swiper.realIndex+1;
            this.index = swiper.realIndex;
          }*/
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .alContent{
    width:100%;height:200px;position:relative;padding-top:45px;
  }
  .swiper-container{width:100%;height:200px}
  .swiper-wrapper,.swiper-slide{width:100%;height:100%}
  .swiper-slide img{
    width:100%;
    height:100%;}
</style>
