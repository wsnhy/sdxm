<template>
  <div id="goodbox">
    <good-header id="good-header"></good-header>
    <goodstwo-connent id="good-connent"></goodstwo-connent>
    <good-footer id="good-footer"></good-footer>

  </div>
</template>

<script>
    import GoodHeader from "../components/goods/goodHeader";
    import GoodFooter from "../components/goods/goodFooter";
    import GoodstwoConnent from "../components/goods/goodstwoConnent";

    export default {
        name: "goods_two",
      components: {GoodstwoConnent, GoodFooter, GoodHeader},

    }
</script>

<style scoped>
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
