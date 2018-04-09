import Vue from 'vue';
import Router from 'vue-router';
import WindowLib from '../lib/window';
import HelloWorld from '@/components/HelloWorld';
import LayoutDefault from '@/components/LayoutDefault';
import TheNews from '@/pages/TheNews';
import TheVideo from '@/pages/TheVideo';
import TheUser from '@/pages/TheUser';

const queryString = require('query-string');

Vue.use(Router);

const router = new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'LayoutDefault',
      component: LayoutDefault,
      children: [{
        path: 'hello',
        name: 'hello',
        component: HelloWorld,
      }],
      redirect: () => '/hello',
    },
    {
      path: '/redirect/:path',
      name: 'LayoutDefault',
    },
    {
      path: '/news',
      name: 'TheNews',
      component: TheNews,
    },
    {
      path: '/video',
      name: 'TheVideo',
      component: TheVideo,
    },
    {
      path: '/user',
      name: 'TheUser',
      component: TheUser,
    },

  ],
});

router.beforeEach(async (to, from, next) => {
  if (WindowLib.isApiCloud() && api.pageParam.path !== undefined) {
    if (to.fullPath.indexOf('redirect') === -1) {
      next({
        path: `/${api.pageParam.path}`,
        query: { redirect: true },
      });
    }
  }

  // if (to.params.path !== undefined) {
  //   // alert(to.params.path);
  //   next('/news');
  // }

  // console.log(JSON.stringify(location));
  // console.log(JSON.stringify(to));
  // const parsed = queryString.parse(location.search);
  // if (parsed.redirect !== undefined) {
  //   // const { host, pathname } = location;
  //   // window.location = (`${host}${pathname}#/hello`);
  //   // console.log('看看location');
  //   // console.log(location);
  //   // console.log(parsed.redirect);
  //   // console.log('看看to');
  //   // console.log(to);
  //   // alert(parsed.redirect);
  //   // next(false);

  //   next({ path: '/' });
  //   alert('h');
  // }
  next(true);
});

export default router;
