<template>
  <!-- 圣杯布局  -->
  <div class="connent">
    <!-- 第二部分图片展示 -->
    <div class="boximg">
      <img :src="img">
    </div>
    <!-- 第三部分商品展示 -->
    <tuijian-ca v-bind:data="data"></tuijian-ca>
  </div>

</template>

<script>
    import TuijianCa from "./tuijianCa";
    export default {
        name: "tuijianConnent",
        components: {TuijianCa},
      data(){
          return{

            img:require("../../assets/images/b1.jpg"),
            data:{  list:[
                // 1.1
                {
                  src:require("../../assets/images/b2.jpg"),
                  li:"小米（MI）Play 6G+128G AI双摄 5.84英寸小水滴全面屏娱乐手机 M1901F9E",
                  lip:"￥1599",
                  a:"立即购买"
                },
                // 1.2
                {
                  src:require("../../assets/images/b3.jpg"),
                  li:"小米（MI）Play 6G+128G AI双摄 5.84英寸小水滴全面屏娱乐手机 M1901F9E",
                  lip:"￥1599",
                  a:"立即购买"
                },
                // 1.3
                {
                  src:require("../../assets/images/b4.jpg"),
                  li:"Apple Watch S3 智能手表（38mm GPS+蜂窝网络版",
                  lip:"￥2599",
                  a:"立即购买"
                },
                // 1.4
                {
                  src:require("../../assets/images/b6.jpg"),
                  li:"戴森(Dyson)  除菌加湿器AM10 (铁蓝色)",
                  lip:"￥3990",
                  a:"立即购买"
                },
                // 1.5
                {
                  src:require("../../assets/images/b7.jpg"),
                  li:"产地马来西亚  进口戴森（Dyson）吹风机宽齿梳套装 HD01 (紫红色",
                  lip:"￥2990",
                  a:"立即购买"
                },

                // 1.6
                {
                  src:require("../../assets/images/b6.jpg"),
                  li:"戴森(Dyson)  除菌加湿器AM10 (铁蓝色)",
                  lip:"￥3990",
                  a:"立即购买"
                },
                {
                  src:require("../../assets/images/b2.jpg"),
                  li:"小米（MI）Play 6G+128G AI双摄 5.84英寸小水滴全面屏娱乐手机 M1901F9E",
                  lip:"￥1599",
                  a:"立即购买"
                },
                // 1.2
                {
                  src:require("../../assets/images/b3.jpg"),
                  li:"小米（MI）Play 6G+128G AI双摄 5.84英寸小水滴全面屏娱乐手机 M1901F9E",
                  lip:"￥1599",
                  a:"立即购买"
                },
                // 1.3
                {
                  src:require("../../assets/images/b4.jpg"),
                  li:"Apple Watch S3 智能手表（38mm GPS+蜂窝网络版",
                  lip:"￥2599",
                  a:"立即购买"
                },
                // 1.4
                {
                  src:require("../../assets/images/b6.jpg"),
                  li:"戴森(Dyson)  除菌加湿器AM10 (铁蓝色)",
                  lip:"￥3990",
                  a:"立即购买"
                },
                // 1.5
                {
                  src:require("../../assets/images/b7.jpg"),
                  li:"产地马来西亚  进口戴森（Dyson）吹风机宽齿梳套装 HD01 (紫红色",
                  lip:"￥2990",
                  a:"立即购买"
                },

                // 1.6
                {
                  src:require("../../assets/images/b6.jpg"),
                  li:"戴森(Dyson)  除菌加湿器AM10 (铁蓝色)",
                  lip:"￥3990",
                  a:"立即购买"
                },

                {
                  src:require("../../assets/images/b2.jpg"),
                  li:"小米（MI）Play 6G+128G AI双摄 5.84英寸小水滴全面屏娱乐手机 M1901F9E",
                  lip:"￥1599",
                  a:"立即购买"
                },
                // 1.2
                {
                  src:require("../../assets/images/b3.jpg"),
                  li:"小米（MI）Play 6G+128G AI双摄 5.84英寸小水滴全面屏娱乐手机 M1901F9E",
                  lip:"￥1599",
                  a:"立即购买"
                },
                // 1.3
                {
                  src:require("../../assets/images/b4.jpg"),
                  li:"Apple Watch S3 智能手表（38mm GPS+蜂窝网络版",
                  lip:"￥2599",
                  a:"立即购买"
                },
                // 1.4
                {
                  src:require("../../assets/images/b6.jpg"),
                  li:"戴森(Dyson)  除菌加湿器AM10 (铁蓝色)",
                  lip:"￥3990",
                  a:"立即购买"
                },
                // 1.5
                {
                  src:require("../../assets/images/b7.jpg"),
                  li:"产地马来西亚  进口戴森（Dyson）吹风机宽齿梳套装 HD01 (紫红色",
                  lip:"￥2990",
                  a:"立即购买"
                },

                // 1.6
                {
                  src:require("../../assets/images/b6.jpg"),
                  li:"戴森(Dyson)  除菌加湿器AM10 (铁蓝色)",
                  lip:"￥3990",
                  a:"立即购买"
                },


              ],
              listtwo:["登录","注册","反馈","返回顶部"]},

          }
      }
    }
</script>

<style scoped>
  @import "../../assets/css/tuijian.css";
</style>
