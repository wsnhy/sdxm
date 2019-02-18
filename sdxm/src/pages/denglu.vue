<template>
<div id="denglu">
  <denglu-header></denglu-header>
  <denglu-connent></denglu-connent>
</div>
</template>

<script>
  import DengluHeader from "../components/denglu/dengluHeader";
  import DengluConnent from "../components/denglu/dengluConnent";


  export default {
    name: "denglu",
    components: {DengluConnent, DengluHeader}
  }
</script>

<style scoped>

</style>
