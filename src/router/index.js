import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import LayoutDefault from '@/components/LayoutDefault';
import TheNews from '@/pages/TheNews';
import TheVideo from '@/pages/TheVideo';

const queryString = require('query-string');

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/redirect/:path',
      name: 'LayoutDefault',
      component: LayoutDefault,
    },
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
      path: '/news',
      name: 'TheNews',
      component: TheNews,
    },
    {
      path: '/video',
      name: 'TheVideo',
      component: TheVideo,
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  console.log(to);
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
  next();
});

export default router;
