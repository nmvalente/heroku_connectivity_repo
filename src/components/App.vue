<template>
  <div id="app">
    <!-- <img src="../assets/logo.jpg">-->
<Navbar></Navbar>
    <Footer></Footer>
  </div>
</template>



<script>
  import Navbar from "./Navbar";
  import Footer from "./Footer";

  export default {
    name: 'App',
    components: {Footer}
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
