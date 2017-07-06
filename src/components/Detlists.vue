<template>
  <div>
    <ul class="base">
      <li v-for="(item,index) in deta.Commdet":key="index">
        <span class="cs"> {{index}}</span>
        <span>:{{item}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data () {
      return {

      }
    },
    components:{

    }
  }
</script>
<style scoped>
  .base{color:#888;font-size: 12px;background-color: #FFF}
</style>
