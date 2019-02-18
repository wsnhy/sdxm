<template>
  <!-- 第二部分内容 -->
  <div class="box">
    <!-- 左侧 -->
    <div class="box_left">
      <ul class="left_ul">

        <router-link to="/goods"><li>热门推荐</li> </router-link>
        <router-link to="" class="lll"> <li>大家电</li></router-link>
        <router-link to="/goods"> <li>手机通讯</li></router-link>
        <router-link to="/goods"> <li>智能/娱乐</li></router-link>
        <router-link to="/goods"> <li>数码/航拍</li></router-link>
        <router-link to="/goods"> <li>电脑</li></router-link>
        <router-link to="/goods"> <li>办公设备</li></router-link>
        <router-link to="/goods"> <li>厨房小家电</li></router-link>
        <router-link to="/goods"><li>生活电器</li></router-link>
        <router-link to="/goods"><li>个户/健康</li></router-link>
      </ul>
    </div>
    <!-- 右侧 -->
    <div class="box_right">
      <img src="../../assets/images/109.jpg" alt="" class="firstimg">
      <h2>热门分类</h2>
      <ul class="right_ul">
        <a href="#"  >
          <li ><img src="../../assets/images/73.jpg" alt="">
            <span>洗衣机</span>
          </li>
        </a>
        <a href="#">
          <li><img src="../../assets/images/101.jpg" alt="">
            <span>电视机</span>
          </li>
        </a>
        <a href="#">
          <li><img src="../../assets/images/102.jpg" alt="">
            <span>剃须刀</span>
          </li>
        </a>
        <a href="#">
          <li><img src="../../assets/images/103.jpg" alt="">
            <span>空气净化器</span>
          </li>
        </a>
        <a href="#">
          <li><img src="../../assets/images/104.jpg" alt="">
            <span>手机</span>
          </li>
        </a>
        <a href="#">
          <li><img src="../../assets/images/105.jpg" alt="">
            <span>热水器</span>
          </li>
        </a>
        <a href="#">
          <li><img src="../../assets/images/106.jpg" alt="">
            <span>空调</span>
          </li>
        </a>
        <a href="#">
          <li><img src="../../assets/images/107.jpg" alt="">
            <span>耳机</span>
          </li>
        </a>
        <a href="#">
          <li><img src="../../assets/images/108.jpg" alt="">
            <span>冰箱</span>
          </li>
        </a>
      </ul>
      <!-- 厨卫大电 -->
      <h2>厨卫大电</h2>
      <ul class="right_ul">
        <a href="#"  >
          <li ><img src="../../assets/images/73.jpg" alt="">
            <span>洗衣机</span>
          </li>
        </a>
        <a href="#">
          <li><img src="../../assets/images/101.jpg" alt="">
            <span>电视机</span>
          </li>
        </a>
        <a href="#">
          <li><img src="../../assets/images/102.jpg" alt="">
            <span>剃须刀</span>
          </li>
        </a>
        <a href="#">
          <li><img src="../../assets/images/103.jpg" alt="">
            <span>空气净化器</span>
          </li>
        </a>
        <a href="#">
          <li><img src="../../assets/images/104.jpg" alt="">
            <span>手机</span>
          </li>
        </a>
        <a href="#">
          <li><img src="../../assets/images/105.jpg" alt="">
            <span>热水器</span>
          </li>
        </a>
        <a href="#">
          <li><img src="../../assets/images/106.jpg" alt="">
            <span>空调</span>
          </li>
        </a>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "goodstwoConnent"
    }
</script>

<style scoped>
  @import "../../assets/css/goodstwo.css";

</style>
