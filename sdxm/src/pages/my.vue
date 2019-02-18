<template>
    <div id="mybox">
      <my-header ></my-header>
      <my-connent ></my-connent>
      <my-footer ></my-footer>
    </div>
</template>

<script>
    import MyHeader from "../components/my/myHeader";
    import MyConnent from "../components/my/myConnent";
    import MyFooter from "../components/my/myFooter";
    export default {
        name: "my",
      components: {MyFooter, MyConnent, MyHeader}
    }
</script>

<style scoped>
  #mybox{
    display: flex;
    height:100%;
    flex-direction: column;
    justify-content: space-between;
  }

</style>
