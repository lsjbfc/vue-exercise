<template>
  <main>
    <Hea :opt="opt"></Hea>
    <form>
      <p>
         <span>账号</span><input placeholder="手机号"/>
      </p>
      <p class="oth">
        <span>登录密码</span><input type="password" placeholder="请输入密码"/>
      </p>
      <span class="lo">登录</span>
      <div class="re">
         <i>忘记密码</i>
         <span></span>
         <i>注册</i>
      </div>
    </form>
    <Foot></Foot>
  </main>

</template>
<script>
  import Foot from '@/components/Foot';
  import Hea from '@/components/Head';

  export default {
    data () {
      return {
        opt:{
          left:"",
          mid:"",
          right:"",
          si:true
        }
      }
    },
    components:{
        Foot,
        Hea
    },
    created:function () {
         var a=sessionStorage.getItem("a");
         console.log(a)
    }
  }
</script>
<style scoped>
  main{width:100%;height:100%}
  input{outline:0;border:0;margin:0;padding:0;height:20px;padding-left:20px}
form{
  width:100%;
  height:100%;
  padding:50px 0 0 0;color:#555;display: flex;align-items: center;flex-direction: column;
}
i{font-style:normal}
p{width:100%;margin:0;padding:0;border-top:1px solid #d8d8d8;padding:10px 0;display:flex;justify-content: space-between;align-items: center}
  p span{display:inline-block;width:80px;text-align:center}
  p input{flex:1}
  .oth{border-bottom:1px solid #d8d8d8}
  .lo{width:80%;height:45px;line-height:45px;background-color:#c62026;color:#FFF;font-size:20px;text-align: center;margin-top:45px}
  .re{display:flex;justify-content: space-between;width:95%;margin-top:10px;text-decoration:underline}
  div i{padding:0 10px}
</style>
