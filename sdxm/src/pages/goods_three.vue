<template>
      <div id="threesbox">
        <goodsthree-header id="a"></goodsthree-header>
        <goodsthree-connent id="b"></goodsthree-connent>
        <goodsthree-footer id="c"></goodsthree-footer>
      </div>
</template>

<script>
    import GoodsthreeHeader from "../components/goodsThree/goodsthreeHeader";
    import GoodsthreeConnent from "../components/goodsThree/goodsthreeConnent";
    import GoodsthreeFooter from "../components/goodsThree/goodsthreeFooter";
    export default {
        name: "goods_three",
      components: {GoodsthreeFooter,  GoodsthreeConnent, GoodsthreeHeader}
    }
</script>

<style scoped>
  #threesbox{
    height: 100%;

  }
  #a{
    height: 10%;
  }
  #b{
    height: 80%;
  }
  #c{
    height: 10%;
  }
</style>
