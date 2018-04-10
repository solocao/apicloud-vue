// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import WindowLib from './lib/window';
import Quasar, * as All from 'quasar';
import 'quasar-extras/roboto-font/roboto-font.css';
import 'quasar-extras/material-icons/material-icons.css';
import './css/app.styl';
import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon';

Vue.config.productionTip = false;


Vue.prototype.WindowLib = WindowLib;

Vue.use(Quasar, {
  components: All,
  directives: All,
});
// globally (in your main .js file)
Vue.component('icon', Icon);

WindowLib.ready(() => {
  // WindowLib.isApiCloud()
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',
  });
});

