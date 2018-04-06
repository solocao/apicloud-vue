import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import LayoutDefault from '@/components/LayoutDefault';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LayoutDefault',
      component: LayoutDefault,
    },
  ],
});
