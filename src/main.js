// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Quasar, * as All from 'quasar';
import 'quasar-extras/roboto-font/roboto-font.css';
import 'quasar-extras/material-icons/material-icons.css';
import './css/app.styl';

Vue.config.productionTip = false;

Vue.use(Quasar, {
  components: All,
  directives: All,
});

alert(process.env.NODE_ENV);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
