<template>
  <!-- 第一部分头部 -->
  <header>
    <router-link to="goods_two" class="header_one">＜</router-link>
    <div class="top">
      <router-link to="">商品</router-link>
      <router-link to="">详情</router-link>
      <router-link to="">评论</router-link>
    </div>
  </header>
</template>

<script>
    export default {
        name: "goodsthreeHeader"

    }
</script>

<style scoped>
  @import "../../assets/css/goodsthree.css";
</style>
