<template>
  <div class="index">
    <Navbar></Navbar>

    <!-- Page's content -->
    <div id="wrapper" style="min-height: 100%">
      <div id="main" style="overflow: auto; padding-bottom: 60px">
        <div class="container">
          <div class="row">

            <div class="col-sm-12">
              <div class="panel panel-default">
                <div class="panel-body">
                  <h1>ROW 1</h1>
                </div>
              </div>
            </div>

            <div class="col-sm-12">
              <div class="panel panel-default">
                <div class="panel-body">
                  <div class="pull-right">
                    ROW 2.1
                  </div>
                  <div style="height: 225px">
                    ROW 2.2
                  </div>
                  <h1 class="text-center">c</h1>
                </div>
              </div>
            </div>

            <div class="col-sm-12 col-md-6 col-lg-6">
              <div class="panel panel-default">
                <h1 class="data">ROW 3</h1>
                <div class="panel-footer clearfix">
                  <h5 class="pull-right" style="margin: 0; margin-right: 20px">ROW 3.1</h5>
                </div>
              </div>
            </div>

          </div>
        </div>
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

  img.img {
    display: block;
    margin: 50px auto 0 auto;
  }

  #index {
    width: 100%;
    height: 100%;
    padding-top: 80px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("https://image.ibb.co/m2J8vR/home.jpg");
  }
</style>
