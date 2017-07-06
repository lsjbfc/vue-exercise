<template>
  <div>
    <ul class="base">
      <li v-for="(item,index) in Goods.Commdet":key="index">
        <span class="cs"> {{index}}</span>
        <span>:{{item}}</span>
      </li>
    </ul>
    <Guess></Guess>
  </div>
</template>
<script>
  import Guess from '@/components/Guesslike'
  export default {
    props:{
      Goods:[String,Boolean,Object],
      default:function () {
        return "00"
      }
    },
    data () {
      return {

      }
    },
    components:{
        Guess
    }
  }
</script>
<style scoped>
  .base{color:#888;font-size: 12px;background-color: #FFF}
</style>
