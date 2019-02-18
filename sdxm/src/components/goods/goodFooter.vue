<template>
  <!-- 第三部分底部 -->
  <div class="footer">
    <ul class="footer_ul">
      <li>
        <router-link to="/">
          <ul class="ftul_ul">
            <li><img src="../../assets/images/92.png" alt=""></li>
            <li>首页</li>
          </ul>
        </router-link>
      </li>

      <li>
        <router-link to="/goods">
          <ul class="ftul_ul">
            <li><img src="../../assets/images/86.png" alt=""></li>
            <li>分类</li>
          </ul>
        </router-link>
      </li>

      <li>
        <router-link to="/tuijian">
          <ul class="ftul_ul">
            <li><img src="../../assets/images/87.png" alt=""></li>
            <li>好友推荐</li>
          </ul>
        </router-link>
      </li>

      <li>
        <router-link to="">
          <ul class="ftul_ul">
            <li><img src="../../assets/images/88.png" alt=""></li>
            <li>购物车</li>
          </ul>
        </router-link>
      </li>

      <li>
        <router-link to="/my">
          <ul class="ftul_ul">
            <li><img src="../../assets/images/91.png" alt=""></li>
            <li>我的</li>
          </ul>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "goodFooter"
    }
</script>

<style scoped>
  @import "../../assets/css/good.css";
</style>
