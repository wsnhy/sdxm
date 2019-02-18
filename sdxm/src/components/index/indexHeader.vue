<template>
  <!-- 第一部分头部 -->
  <div class="header">
    <!-- 1.1 -->
    <div class="header_top">
      <!-- 1.1.1 -->
      <a href="#" >
        <div class="topImg"></div>
      </a>
      <!-- 1.1.2 -->
      <div class="top_right">
        <router-link to="/zhuce">注册</router-link>
        <router-link to="/denglu">登录</router-link>
      </div>
    </div>
    <!-- 1.2搜索框 -->
    <div class="bottom">
      <a href="#">
        <input type="text" value="搜索商品类型/型号/品牌"/>
        <img src="../../assets/images/61.jpg" alt="">
      </a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "indexHeader"
    }

</script>

<style scoped>

</style>
