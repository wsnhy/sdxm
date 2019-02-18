<template>
  <!-- 圣杯布局 -->
  <div class="connent">
    <!-- 第二部分用户信息 -->
    <div class="userinfor">
      <!-- 2.1 -->
      <ul class="ulone">
        <li><img src="../../assets/images/b6.jpg" alt=""></li>
        <li>
          <ul class="user_ul">
            <li>用户名</li>
            <li>vip等级</li>
            <li>可用积分:<span>0分</span></li>
            <li><a href="#">账户管理、收货地址＞</a></li>
          </ul>
        </li>
      </ul>
      <!-- 2.2 -->
      <ul class="ultwo">
        <!-- 2.2.1 -->
        <li>
          <p>0</p>
          <p>我的收藏</p>
        </li>
        <!-- 2.2.2 -->
        <li>
          <p>0</p>
          <p>我的收藏</p>
        </li>
        <!-- 2.2.3 -->
        <li>
          <p>0</p>
          <p>我的收藏</p>
        </li>
        <!-- 2.2.4 -->
        <li>
          <p>0</p>
          <p>我的收藏</p>
        </li>

      </ul>
    </div>
    <!-- 第三部分我的订单 -->
    <div class="order">
      <!-- 3.1 -->
      <div class="order_top">
        <img src="../../assets/images/c1.jpg" alt="">
        <h2>我的订单</h2>
        <a href="#">查看全部订单＞</a>
      </div>
      <div style=" overflow:hidden"></div>
      <!-- 3.2 -->
      <div class="order_minder">
        <ul class="minder_ul">
          <li><a href="#"><img src="../../assets/images/c1.png" alt=""><span>代付款</span></a></li>
          <li><a href="#"><img src="../../assets/images/c2.png" alt=""><span>代付款</span></a></li>
          <li><a href="#"><img src="../../assets/images/c3.png" alt=""><span>代付款</span></a></li>
          <li><a href="#"><img src="../../assets/images/c4.png" alt=""><span>代付款</span></a></li>
          <li><a href="#"><img src="../../assets/images/c5.png" alt=""><span>代付款</span></a></li>
          <li><a href="#"><img src="../../assets/images/c6.png" alt=""><span>代付款</span></a></li>
          <li><a href="#"><img src="../../assets/images/c7.png" alt=""><span>代付款</span></a></li>
          <li><a href="#"><img src="../../assets/images/c8.png" alt=""><span>代付款</span></a></li>

        </ul>
      </div>
    </div>
    <!-- 第四部分猜你喜欢 -->
    <div class="like">
      <!-- 4.1 -->
      <div class="like_top">
        <img src="../../assets/images/m1.jpg" alt="">
        <h2>猜你喜欢的</h2>
      </div>
      <!-- 4.2 -->
      <div class="like_bottom">
        <ul class="botul">
          <!-- 4.2.1 -->
          <li>
            <a href="#">
              <img src="../../assets/images/d1.jpg" alt="">
              <p>【预订】Apple AirPods 耳机 MMEF2CH/A</p>
              <p>￥1368.00</p>
            </a>
          </li>
          <!-- 4.1.2 -->
          <li>
            <a href="#">
              <img src="../../assets/images/d1.jpg" alt="">
              <p>【预订】Apple AirPods 耳机 MMEF2CH/A</p>
              <p>￥1368.00</p>
            </a>
          </li>
          <!-- 4.1.3 -->
          <li>
            <a href="#">
              <img src="../../assets/images/d1.jpg" alt="">
              <p>【预订】Apple AirPods 耳机 MMEF2CH/A</p>
              <p>￥1368.00</p>
            </a>
          </li>
          <!-- 4.1.4 -->
          <li>
            <a href="#">
              <img src="../../assets/images/d1.jpg" alt="">
              <p>【预订】Apple AirPods 耳机 MMEF2CH/A</p>
              <p>￥1368.00</p>
            </a>
          </li>
          <!-- 4.1.5 -->
          <li>
            <a href="#">
              <img src="../../assets/images/d1.jpg" alt="">
              <p>【预订】Apple AirPods 耳机 MMEF2CH/A</p>
              <p>￥1368.00</p>
            </a>
          </li>
          <!-- 4.1.6 -->
          <li>
            <a href="#">
              <img src="../../assets/images/d1.jpg" alt="">
              <p>【预订】Apple AirPods 耳机 MMEF2CH/A</p>
              <p>￥1368.00</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "myConnent",
        mounted (){
           this.getData
        },
        methods:{
            getData (){
              console.log(1)
                fetch("http://localhost:3000/api/data").
                then((res)=>{

                  console.log(res)
              })
            }
        }
    }
</script>

<style scoped>
  @import "../../assets/css/my.css";
</style>
fetch( "http://localhost:3000/api/data")
.then((res)=>{
//stream -> json
res.json().then((data)=>{
if(data.ret && data.data){
this.index=data.data
console.log(data.data)
}
})
})
