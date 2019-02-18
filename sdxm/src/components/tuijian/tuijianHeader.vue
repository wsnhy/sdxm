<template>
  <!-- 第一部分头部 -->
  <div class="header">
    <router-link to="/">{{route}}</router-link>
    <h2 >{{h2}}}</h2>
  </div>
</template>

<script>
    export default {
        name: "tuijianHeader",
      data(){
          return{
            route:"<",
            h2:"好友推荐",

          }
      }
    }
</script>

<style scoped>
@import "../../assets/css/tuijian.css";
</style>
