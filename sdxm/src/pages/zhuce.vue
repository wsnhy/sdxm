<template>
    <div>
      <zhuce-header></zhuce-header>
      <zhuce-connent></zhuce-connent>
    </div>
</template>
<script>
  import ZhuceHeader from "../components/zhuce/zhuceHeader";
  import ZhuceConnent from "../components/zhuce/zhuceConnent";
    export default {
        name: "zhuce",
        components: {ZhuceConnent, ZhuceHeader},

    }
</script>

<style scoped>
  @import "../assets/css/zhuce.css";
</style>
