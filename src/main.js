// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import VueTimepicker from 'vue2-timepicker'
import Datepicker from 'vuejs-datepicker';

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(VueTimepicker);
Vue.use(Datepicker);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
