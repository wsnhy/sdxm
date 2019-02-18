<template>
  <!-- 第三部分商品展示 -->
  <div class="goods">
    <!-- 3.1.1-->
    <ul class="gul">
      <!-- 1.1 -->
      <li v-for="p in data.list">
        <a href="#">
          <ul class="gul_liul">
            <li><img :src="p.src" alt=""></li>
            <li><p>{{p.li}}}</p></li>
            <li><p>{{p.lip}}</p><a href="#" class="last">{{p.a}}}</a></li>
          </ul>
        </a>
      </li>
    </ul>
    <!--3.2-->
    <ul class="gul-two">
      <li v-for="li in data.listtwo">
        <router-link to="">{{li}}</router-link>
      </li>
      <li><p style="text-align:center; color:#696969; font-size:12px;">
        Copyright© 深圳市顺电连锁股份有限公司粤13052236号-1 </p></li>
    </ul>
  </div>

</template>

<script>
    export default {
        name: "tuijianCa",
      props:["data"]
    }
</script>

<style scoped>
  @import "../../assets/css/tuijian.css";
</style>
