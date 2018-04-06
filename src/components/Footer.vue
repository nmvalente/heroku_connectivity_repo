<template>
  <footer class="navbar navbar-default">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <ul v-if="!about" class="my-nav text-center">
            <!--<li><router-link to="/about#about" style="color: black">About</router-link></li>
            <li><router-link to="/about#help" style="color: black">Help</router-link></li>
            <li><router-link to="/about#contacts" style="color: black">Contacts</router-link></li>
            <li><router-link to="/about#the-team" style="color: black">The Team</router-link></li>
            <li><router-link to="/about#terms-of-use" style="color: black">Terms of Use</router-link></li>-->
          </ul>
          <ul v-else class="my-nav text-center">
            <!--<li><router-link to="/about#about" v-scroll-to="'#about'" style="color: black"><span ref="about">About</span></router-link></li>
            <li><router-link to="/about#help" v-scroll-to="'#help'" style="color: black"><span ref="help">Help</span></router-link></li>
            <li><router-link to="/about#contacts" v-scroll-to="'#contacts'" style="color: black"><span ref="contacts">Contacts</span></router-link></li>
            <li><router-link to="/about#the-team" v-scroll-to="'#the-team'" style="color: black"><span ref="theTeam">The Team</span></router-link></li>
            <li><router-link to="/about#terms-of-use" v-scroll-to="'#terms-of-use'" style="color: black"><span ref="termsOfUse">Terms of Use</span></router-link></li>-->
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'Footer',
    data () {
      return {
        about: false
      }
    },
    created () {
      // Check URL
      if (this.$route.path === '/about') {
        this.about = true
      }
    },
    mounted () {
      // Check hash
      if (this.about) {
        if (this.$route.hash === '#about') {
          this.$refs.about.click()
        } else if (this.$route.hash === '#help') {
          this.$refs.help.click()
        } else if (this.$route.hash === '#contacts') {
          this.$refs.contacts.click()
        } else if (this.$route.hash === '#the-team') {
          this.$refs.theTeam.click()
        } else if (this.$route.hash === '#terms-of-use') {
          this.$refs.termsOfUse.click()
        }
      }
    }
  }
</script>

<style scoped>
  footer.navbar.navbar-default {
    clear: both;
    border-radius: 0;
    margin-bottom: 0;
    margin-top: -60px;
    position: relative;
    background-color: #C2C2C3;
  }

  .my-nav {
    margin: 0;
    padding: 0;
    width: 100%;
    list-style-type: none;
  }

  .my-nav>li { display: inline-block; }

  .my-nav>li>a {
    display: block;
    line-height: 21px;
    padding: 10px 15px;
    padding-top: 19.5px;
  }
</style>
