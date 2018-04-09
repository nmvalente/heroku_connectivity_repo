<template>
  <div id="not-found">
    <!-- Navbar -->
    <Navbar></Navbar>

    <!-- Page's content -->
    <div id="wrapper" style="min-height: 100%">
      <div id="main" style="overflow: auto; padding-bottom: 60px">
        <div class="container">
          <div class="row">
            <div class="col-lg-offset-3 col-md-offset-2 col-lg-6 col-md-8 col-sm-12">
              <div class="jumbotron text-center">
                <h1>404 <small>error</small></h1>
                <h3>Page not found <span class="glyphicon glyphicon-search"></span></h3>
                <p>We're sorry but the page you're looking for does not exist.</p>
                <p>You could return to the <router-link to="/">Home</router-link></p>
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
  name: 'not-found',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style scoped>
h1, p { margin: 0; }

h3 { margin-top: 0; }

p { font-size: 18px; }

.jumbotron {
  background-color: #F8F7F7;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.16), 0 1px 1px rgba(0, 0, 0, 0.23);
}

#not-found {
  width: 100%;
  height: 100%;
  padding-top: 80px;
}
</style>
