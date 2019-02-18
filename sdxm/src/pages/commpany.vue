<template>
    <div id="commpanybox">
      <commpany-header id="commpany-header"></commpany-header>
      <commpany-connent id="commpany-connent"></commpany-connent>
    </div>
</template>

<script>
    import CommpanyHeader from "../components/commpany/commpanyHeader";
    import CommpanyConnent from "../components/commpany/commpanyConnent";
    export default {
        name: "commpany",
      components: {CommpanyConnent, CommpanyHeader}
    }
</script>

<style scoped>


</style>
