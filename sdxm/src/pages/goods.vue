<template>
    <div id="goodbox">
      <good-header id="good-header"></good-header>
      <good-connent id="good-connent"></good-connent>
      <good-footer id="good-footer"></good-footer>
      <!--<index-footer id="good-footer"></index-footer>-->
    </div>
</template>

<script>
  import GoodHeader from "../components/goods/goodHeader";
  import GoodConnent from "../components/goods/goodConnent";
  // import IndexFooter from "../components/index/indexFooter";
  import GoodFooter from "../components/goods/goodFooter";
  export default {
    name:"goods",
    components: {GoodFooter, GoodConnent, GoodHeader}
  }
</script>

<style scoped>
  /*@import "../assets/css/good.css";*/
  #goodbox{
    height: 100%;
    width: 100%;
  }
  #good-header{
    height: 10%;
  }
  #good-connent{
    height: 80%;
  }
  #good-footer{
    width: 100%;
    height: 10%;
    display: flex;

  }
</style>
