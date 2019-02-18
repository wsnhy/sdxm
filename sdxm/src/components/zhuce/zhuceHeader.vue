<template>
  <!-- 第一部分头部 -->
  <div class="header">
    <ul>
      <li><router-link to="/">＜</router-link></li>
      <li><router-link to="#">注册</router-link></li>
      <li><router-link to="/denglu">登录</router-link></li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "zhuceHeader"
    }
</script>

<style scoped>
  @import "../../assets/css/zhuce.css";
</style>
