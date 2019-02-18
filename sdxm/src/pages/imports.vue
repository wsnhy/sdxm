<template>
    <div id="importsbox">
      <imports-header></imports-header>
      <imports-connent :data="json"></imports-connent>

    </div>
</template>

<script>
    import ImportsHeader from "../components/imports/importsHeader";
    import ImportsConnent from "../components/imports/importsConnent";
    import ImportsConnentjson from"../data/inportsConnent"
    export default {
        name: "imports",
      components: {ImportsConnent, ImportsHeader},
      data(){
          return{
            json:ImportsConnentjson
          }
      }
    }
</script>

<style scoped>
  html,body{
    height:100%;
  }
  #importsbox{
    display: flex;
    height:100%;
    flex-direction: column;

  }

</style>
