// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vue from 'vue'
import router from './router'
import VueTimepicker from 'vue2-timepicker'
import Datepicker from 'vuejs-datepicker';
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(VueTimepicker);
Vue.use(Datepicker);
Vue.use(VueAxios, axios);

/* eslint-disable no-new */
/*new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})*/

// Initialize Vue
new Vue({
  router,
  template: '<router-view></router-view>'
}).$mount('#app')
