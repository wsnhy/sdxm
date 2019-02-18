<template>
  <div class="connent">
    <!--第二部分轮播图-->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="s in json.indext"><img :src="s" alt=""></div>
      </div>
    </div>
     <!--第三部分导航栏目 -->
    <div class="nav">
      <ul class="nav_ul">
        <li v-for="a in json.index">
          <router-link :to="a.class"><img :src="a.img"><span >{{a.span}}</span></router-link>
        </li>

      </ul>
    </div>
    <!-- 第四部分新闻 -->
    <div class="new">
      <div class="new_top">
        <img src="../../assets/images/72.jpg" alt="">
        <p>{{p4}}</p>
      </div>
      <img src="../../assets/images/10.jpg" alt="" class="top_two">
      <!-- 4.3 -->
      <div class="new_bottom">
        <!-- 4.3.1 -->
        <a href="#" nb_left>
          <div class="nb_left">
            <ul class="nb_left_ul">
              <li>戴森、暖风器</li>
              <li>陶瓷加热</li>
              <li>净化空气</li>
            </ul>
            <img src="../../assets/images/7.png" alt="">
          </div>
        </a>
        <!-- 4.3.2 -->
        <a href="#" >
          <div class="nb_left">
            <ul class="nb_left_ul">
              <li>松下、电牙刷</li>
              <li>5种模式</li>
              <li id="lisix">6种刷头</li>
            </ul>
            <img src="../../assets/images/8.png" alt="">
          </div>
        </a>
      </div>

    </div>
    <!-- 第五部分特价商品 -->
    <div class="goods">
      <h2>{{h5}}</h2>
      <ul class="goodlist_ul">
        <!-- 5.1 -->
        <a href="#" v-for="d in json.indexf">
          <li  class="lll">
            <!-- 5.1.1 -->
            <ul class="li_ul">
              <li><img :src="d.imd"></li>
              <li>{{d.name}}</li>
              <li>{{d.na}}</li>
              <li>{{d.nb}}</li>
              <li>{{d.nc}}</li>
            </ul>
          </li>
        </a>
      </ul>
    </div>
    <!-- 第六部分品质家电 -->
    <div class="applince">
      <h2>{{h6}}</h2>
      <div class="applince_top">
        <ul class="applince_top_ul">
          <!-- 6.1 -->
          <li class="apul">
            <a href="#">
              <!-- 6.1.1 -->
              <ul class="atli_ul">
                <li>奢华</li>
                <li>家</li>
                <li>品质生活</li>
              </ul>
              <!-- 6.1.2 -->
              <img src="../../assets/images/75.png" alt="">
            </a>
          </li>
          <!-- 6.2 -->
          <li class="apul">
            <a href="#">
              <!-- 6.1.1 -->
              <ul class="atli_ul">
                <li>NEW</li>
                <li>家</li>
                <li>品质生活</li>
              </ul>
              <!-- 6.1.2 -->
              <img src="../../assets/images/76.png" alt="">
            </a>
          </li>
          <!-- 6.3 -->
          <li class="apul">
            <a href="#">
              <!-- 6.1.1 -->
              <ul class="atli_ul">
                <li>奢华</li>
                <li>家</li>
                <li>品质生活</li>
              </ul>
              <!-- 6.1.2 -->
              <img src="../../assets/images/77.png" alt="">
            </a>
          </li>
          <!-- 6.4 -->
          <li class="apul">
            <a href="#">
              <!-- 6.1.1 -->
              <ul class="atli_ul">
                <li>奢华</li>
                <li>家</li>
                <li>品质生活</li>
              </ul>
              <!-- 6.1.2 -->
              <img src="../../assets/images/78.png" alt="">
            </a>
          </li>
        </ul>
        <!-- 6.5轮播图 -->
        <div class="aplb">
          <img src="../../assets/images/79.jpg" alt="">
        </div>
      </div>
    </div>
    <!-- 第七部分潮流数码 -->
    <div class="applince">
      <h2>{{h7}}</h2>
      <div class="applince_top">
        <ul class="applince_top_ul">
          <!-- 6.1 -->
          <li class="apul"  v-for="g in json.seven">
            <a href="#">
              <!-- 6.1.1 -->
              <ul class="atli_ul">
                <li>{{g.lia}}</li>
                <li>{{g.lib}}</li>
                <li>{{g.lic}}</li>
              </ul>
              <!-- 6.1.2 -->
              <img :src="g.simg" alt="">
            </a>
          </li>
        </ul>
        <!-- 6.5轮播图 -->
        <div class="aplb">
          <img src="../../assets/images/84.jpg" alt="">
        </div>
      </div>
    </div>
    <!-- 第八部分为你推荐 -->
    <div class="tuijian">

      <ul class="tj_ul">
        <!-- 8.1 -->
        <li class="tj_box" v-for="f in json.tuijian">
          <a href="">
            <ul class="tjul_liul">
              <li><img :src="f.ti" alt=""></li>
              <li>{{f.lia}}</li>
              <li>{{f.lib}}</li>
              <li>{{f.lic}}</li>
            </ul>
          </a>
        </li>

      </ul>
    </div>
    </div>

</template>

<script>
  import Swiper from 'swiper';
  import ImportsConnentjson from"../../data/inportsConnent"
    export default {
      name: "indexConnent",
      mounted(){
        new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      paginationClickable: true,
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
      type:true,
      delay: 2000,
      stopOnLastSlide: false,
      disableOnInteraction: true,
      },
      autoplayDisableOnInteraction: false
      })
      },
       data(){
        return{
          json:ImportsConnentjson

        }
      }
      }
</script>

<style scoped>
  @import "../../assets/js/node_modules/swiper/dist/css/swiper.min.css";
</style>
