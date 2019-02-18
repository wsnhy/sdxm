<template>
  <!-- 圣杯 -->
  <div class="connent">
    <!-- 第二部分图片展示 -->
    <div class="boximg">
      <img src="../../assets/images/f1.png" alt="">
    </div>
    <!-- 第三部分全球热卖 -->
    <div class="hot">
      <span></span><p>全球热卖</p><span class="hotspan"></span>

    </div>
    <!-- 第四部分商品 -->
    <div class="hot_goods">
      <ul class="goodsul">
        <!-- 3.1 -->
        <li v-for="i in data.arr">
          <a href="#" >
            <img :src="require(`../../assets/images/${i.img}.jpg`)" />
          <p class="name">{{i.p1}}</p>
          <p class="price">{{i.p2}}</p>
        </a>
        </li>
      </ul>
    </div>
  <!--第五部分导航栏-->
    <div>
      <div class="nav">
        <ul>
         <li v-for="c in data.country">
           <router-link to="to">{{c}}</router-link>
         </li>
        </ul>
      </div>
    </div>
    <!-- 第六部分美国 -->
    <div>

      <div class="america">
        <div class="hot">
          <span></span><p>美国</p><span class="hotspan"></span>
        </div>
      </div>
      <!-- 6.2 -->
      <div class="boximg">
        <img src="../../assets/images/f5.jpg" alt="">
      </div>
      <!-- 6.3 -->
      <div class="goods">
        <!-- 6-3 -->
        <ul class="gul">
          <!-- 1.1 -->
          <li>
            <a href="#">
              <ul class="gul_liul">
                <li><img src="../../assets/images/f6.jpg" alt=""></li>
                <li><p>小米（MI）Play 6G+128G AI双摄 5.84英寸小水滴全面屏娱乐手机 M1901F9E</p></li>
                <li><p>￥1599</p><a href="#" class="last">立即购买</a></li>
              </ul>
            </a>
          </li>
          <!-- 1.2 -->
          <li>
            <a href="#">
              <ul class="gul_liul">
                <li><img src="../../assets/images/f7.jpg" alt=""></li>
                <li><p>三星（SAMSUNG）A9 STAR 4G+64G移动联通电信双卡双待娱乐手机SM-G8850(极夜黑)</p></li>
                <li><p>￥1899</p><a href="#" class="last">立即购买</a></li>
              </ul>
            </a>
          </li>
          <!-- 1.3 -->
          <li>
            <a href="#">
              <ul class="gul_liul">
                <li><img src="../../assets/images/b4.jpg" alt=""></li>
                <li><p>Apple Watch S3 智能手表（38mm GPS+蜂窝网络版</p></li>
                <li><p>￥2599</p><a href="#" class="last">立即购买</a></li>
              </ul>
            </a>
          </li>
          <!-- 1.4 -->
          <li>
            <a href="#">
              <ul class="gul_liul">
                <li><img src="../../assets/images/b5.jpg" alt=""></li>
                <li><p>松下（Panasonic）4升 电饭煲 SR-CA151-N</p></li>
                <li><p>￥419</p><a href="#" class="last">立即购买</a></li>
              </ul>
            </a>
          </li>
          <!-- 1.5 -->
        </ul>
      </div>
      </div>
    <!-- 第七部分日本 -->
    <div>
      <div class="america">
        <div class="hot">
          <span></span><p>日本</p><span class="hotspan"></span>
        </div>
      </div>
      <!-- 6.2 -->
      <div class="boximg">
        <img src="../../assets/images/f8.jpg" alt="">
      </div>
      <!-- 6.3 -->
      <div class="goods">
        <!-- 6-3 -->
        <ul class="gul">
          <!-- 1.1 -->
          <li>
            <a href="#">
              <ul class="gul_liul">
                <li><img src="../../assets/images/f9.jpg" alt=""></li>
                <li><p>小米（MI）Play 6G+128G AI双摄 5.84英寸小水滴全面屏娱乐手机 M1901F9E</p></li>
                <li><p>￥1599</p><a href="#" class="last">立即购买</a></li>
              </ul>
            </a>
          </li>
          <!-- 1.2 -->
          <li>
            <a href="#">
              <ul class="gul_liul">
                <li><img src="../../assets/images/f10.jpg" alt=""></li>
                <li><p>三星（SAMSUNG）A9 STAR 4G+64G移动联通电信双卡双待娱乐手机SM-G8850(极夜黑)</p></li>
                <li><p>￥1899</p><a href="#" class="last">立即购买</a></li>
              </ul>
            </a>
          </li>
          <!-- 1.3 -->
          <li>
            <a href="#">
              <ul class="gul_liul">
                <li><img src="../../assets/images/f11.jpg" alt=""></li>
                <li><p>Apple Watch S3 智能手表（38mm GPS+蜂窝网络版</p></li>
                <li><p>￥2599</p><a href="#" class="last">立即购买</a></li>
              </ul>
            </a>
          </li>

          <!-- 1.4 -->

          <li>
            <a href="#">
              <ul class="gul_liul">
                <li><img src="../../assets/images/f12.jpg" alt=""></li>
                <li><p>松下（Panasonic）4升 电饭煲 SR-CA151-N</p></li>
                <li><p>￥419</p><a href="#" class="last">立即购买</a></li>
              </ul>
            </a>
          </li>

          <!-- 1.5 -->



        </ul>
      </div>
    </div>
    <!-- 第八部分德国 -->
    <div>
      <div class="america">
        <div class="hot">
          <span></span><p>日本</p><span class="hotspan"></span>
        </div>
      </div>
      <!-- 6.2 -->
      <div class="boximg">
        <img src="../../assets/images/f13.jpg" alt="">
      </div>
      <!-- 6.3 -->
      <div class="goods">
        <!-- 6-3 -->
        <ul class="gul">
          <!-- 1.1 -->
          <li>
            <a href="#">
              <ul class="gul_liul">
                <li><img src="../../assets/images/f14.jpg" alt=""></li>
                <li><p>小米（MI）Play 6G+128G AI双摄 5.84英寸小水滴全面屏娱乐手机 M1901F9E</p></li>
                <li><p>￥1599</p><a href="#" class="last">立即购买</a></li>
              </ul>
            </a>
          </li>
          <!-- 1.2 -->
          <li>
            <a href="#">
              <ul class="gul_liul">
                <li><img src="../../assets/images/f15.jpg" alt=""></li>
                <li><p>三星（SAMSUNG）A9 STAR 4G+64G移动联通电信双卡双待娱乐手机SM-G8850(极夜黑)</p></li>
                <li><p>￥1899</p><a href="#" class="last">立即购买</a></li>
              </ul>
            </a>
          </li>
          <!-- 1.3 -->
          <li>
            <a href="#">
              <ul class="gul_liul">
                <li><img src="../../assets/images/f16.jpg" alt=""></li>
                <li><p>Apple Watch S3 智能手表（38mm GPS+蜂窝网络版</p></li>
                <li><p>￥2599</p><a href="#" class="last">立即购买</a></li>
              </ul>
            </a>
          </li>

          <!-- 1.4 -->

          <li>
            <a href="#">
              <ul class="gul_liul">
                <li><img src="../../assets/images/f17.jpg" alt=""></li>
                <li><p>松下（Panasonic）4升 电饭煲 SR-CA151-N</p></li>
                <li><p>￥419</p><a href="#" class="last">立即购买</a></li>
              </ul>
            </a>
          </li>

          <!-- 1.5 -->



        </ul>
      </div>
    </div>
    <!-- 最后一部分 -->
    <ul class="gul-two">
      <li><a href="#">登录</a>
        <a href="#">注册</a>
        <a href="#">反馈</a>
        <a href="#">回到顶部</a>
      </li>
      <li><p style="text-align:center; color:#696969; font-size:12px;">Copyright© 深圳市顺电连锁股份有限公司粤13052236号-1 </p></li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "importsConnent",
      props:["data"]
    }
</script>

<style scoped>
  @import "../../assets/css/imports.css";
</style>
