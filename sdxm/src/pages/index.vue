<template>
   <div id="appp">
      <index-header></index-header>
      <index-connent ></index-connent>
      <index-footer></index-footer>
   </div>
</template>

<script>

    import indexHeader from "../components/index/indexHeader";
    import indexConnent from "../components/index/indexConnent";
    import IndexFooter from "../components/index/indexFooter";

    export default {
        name: "index",
      components: {IndexFooter, indexHeader,indexConnent}
    }
</script>

<style >
  @import "../assets/css/index.css";

  html,body{
    height:100%;
  }
  #appp{
    display: flex;
    height:100%;
    flex-direction: column;
    justify-content: space-between;
  }
</style>
