<template>
  <div id="index">
    <!-- Navbar -->
    <Navbar></Navbar>

    <!-- Page's content -->
    <div id="wrapper" style="min-height: 100%">
      <div id="main" style="overflow: auto; padding-bottom: 60px">
        <h2 class="text-center">Intelligent Health Monitoring Platform</h2>
      </div>
    </div>

    <!-- Footer -->
    <Footer></Footer>
  </div>
</template>


<script>
  import Navbar from './Navbar'
  import Footer from './Footer'

  export default {
    name: 'index',
    components: {
      Navbar, Footer
    }
  }
</script>

<style scoped>
  h2 { color: white; }
  #index {
    width: 100%;
    height: 100%;
    padding-top: 80px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
</style>
