<template>
  <div>
     <p>{{hot.title}}</p>

         <swiper :options="swiperhot"  ref="myhot" >
           <ul>
             <swiper-slide v-for="item in hot.hot" is="li" :data-pid="item.ID" :key="item.ID">
                   <img :src="item.url">
                   <span>{{item.name}}</span>
             </swiper-slide>
           </ul>
    </swiper>
  </div>
</template>
<script>

  export default {
      props:{
          hot:[String,Object],
          default:function () {
              return "oo"
          }
      },
      data(){
          return{
            swiperhot:{
                autoplayDisableOnInteraction:false,
                notNextTick: true,
                pagination: '.swiper-pagination',
                slidesPerView: 'auto',
                centeredSlides: true,
                paginationClickable:true,
                spaceBetween:40,
                onSlideChangeEnd: swiper => {
                  this.page = swiper.realIndex+1;
                  this.index = swiper.realIndex;
                }
              },
            swiperSlides:[1,2,3,4,5]
          }
      },
      created:function(){
      }
  };
/*
 {

 created:function (){
 //      // 1. 创建核心对象
 //      const that=this;
 //      var xhr = new XMLHttpRequest();
 //      // 2. 建立连接
 //      xhr.open("get", "../../static/data/data.json",true);
 //      // 3. 发送请求
 //      xhr.send();
 //      // 4. 处理响应
 //      xhr.onreadystatechange = function(){
 //        // 当就绪状态码为4时，表示请求完成，响应就绪
 //        if (xhr.readyState === 4) {
 //          // HTTP状态码为 200时，表示正常成功请求到数据
 //          if (xhr.status === 200) {
 //            // 获取响应文本
 //            var data = xhr.responseText;
 //            let msg=JSON.parse(data).hot;
 //            that.title=msg.title;
 //            msg.hot.forEach(function(cur){
 //              that.data.push(cur)
 //
 //            });
 //          }
 //        }
 //      };
 }
 }


 */
</script>
<style scoped>
  p{text-indent:10px}
  ul{display:flex;width:100%;height:120px;}
  ul li{list-style:none;display:flex;flex-direction:column;align-items:center;}
  img{width:100px;height:100px}
</style>
