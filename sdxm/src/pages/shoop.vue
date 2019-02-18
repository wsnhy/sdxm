<template>
  <div>
    <div id="shopbox">
      <!--第一部分头部-->
      <header >
        <ul>
          <li v-for="n in sites">
            <router-link to="/">{{n}}</router-link>
          </li>
        </ul>
      </header>
        <!--第二部分图片-->
      <div class="connent">
          <div class="boximg">
            <img src="../assets/images/b1.jpg" alt="">
          </div>
          <!--第三部分店家地址-->
          <div class="addreads">
        <ul class="addbox">
          <li class="aboxli" v-for="p in list">
            <dl class="aboxli_ul">
              <dt><router-link to=""><img :src="p.src" alt="" class="dtimg"/></router-link></dt>
              <dd class="addbox">
                <ul>
                  <li v-for="l in p.li">{{l}}</li>
                </ul>
              </dd>
              <!--<li>-->
                <!--<ul >-->
                  <!--<li></li>-->
                <!--</ul>-->
              <!--</li>-->
            </dl>
          </li>
        </ul>
      </div>
          </div>
      </div>
  </div>
</template>

<script>
    export default {
        name: "shoop",
        data(){
              return{
                sites:["＜","顺电门店","西安"],
                list:[
                  {
                    src: require("../assets/images/01.jpg"),
                    li:[ "深圳华强店（福田区）","09:30-22:00", "0755-83286351","广东深圳市福田区"]
                  },
                  {
                    src:require("../assets/images/02.jpg"),
                    li:[ "深圳华强店（福田区）","09:30-22:00", "0755-83286351","广东深圳市福田区"]
                  },
                  {
                    src:require("../assets/images/03.jpg"),
                    li:[ "深圳华强店（福田区）","09:30-22:00", "0755-83286351","广东深圳市福田区"]
                  },
                  {
                    src:require("../assets/images/04.jpg"),
                    li:[ "深圳华强店（福田区）","09:30-22:00", "0755-83286351","广东深圳市福田区"]
                  },
                  {
                    src:require("../assets/images/05.jpg"),
                    li:[ "深圳华强店（福田区）","09:30-22:00", "0755-83286351","广东深圳市福田区"]
                  }, {
                    src: require("../assets/images/01.jpg"),
                    li:[ "深圳华强店（福田区）","09:30-22:00", "0755-83286351","广东深圳市福田区"]
                  },
                  {
                    src:require("../assets/images/02.jpg"),
                    li:[ "深圳华强店（福田区）","09:30-22:00", "0755-83286351","广东深圳市福田区"]
                  },
                  {
                    src:require("../assets/images/03.jpg"),
                    li:[ "深圳华强店（福田区）","09:30-22:00", "0755-83286351","广东深圳市福田区"]
                  },
                  {
                    src:require("../assets/images/04.jpg"),
                    li:[ "深圳华强店（福田区）","09:30-22:00", "0755-83286351","广东深圳市福田区"]
                  }


                  ]
          }
      }
    }


</script>
<style scoped>
  @import "../assets/css/shopp.css";

  #shopbox{
    display: flex;
    flex-direction: column;
  }
</style>
