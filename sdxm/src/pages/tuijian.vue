<template>
    <div id="tuijianbox">
        <tuijian-header></tuijian-header>
        <tuijian-connent></tuijian-connent>
        <tuijian-footer></tuijian-footer>
    </div>
</template>

<script>
    import TuijianHeader from "../components/tuijian/tuijianHeader";
    import TuijianConnent from "../components/tuijian/tuijianConnent";
    import TuijianFooter from "../components/tuijian/tuijianFooter";
    export default {
        name: "tuijian",
      components: {TuijianFooter, TuijianConnent, TuijianHeader}
    }
</script>

<style scoped>

  html,body{
    height:100%;
  }
  #tuijianbox{
    display: flex;
    height:100%;
    flex-direction: column;
    justify-content: space-between;
  }
</style>
