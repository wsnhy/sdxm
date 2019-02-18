<template>
  <!-- 第一部分头部 -->
  <div class="heaer">
    <ul>
      <li><router-link to="/zhuce">＜</router-link></li>
      <li><router-link to="#">登录</router-link></li>
      <li><router-link to="/zhuce">注册</router-link></li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "dengluHeader",
        // methods:{
        //   goback(){
        //     this.$router.back(-1)
        //   }
        // }

    }
</script>

<style scoped>
  @import "../../assets/css/denglu.css";
</style>
