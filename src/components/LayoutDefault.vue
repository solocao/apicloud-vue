<template>
  <q-layout ref="layout" view="lHh Lpr lFf">
    <q-page-container>
      <router-view/>
    </q-page-container>
    <q-layout-footer>
      <layout-footer :index="index"></layout-footer>
    </q-layout-footer>
  </q-layout>
</template>
<script>
import LayoutFooter from './LayoutFooter';

export default {
  components: {
    LayoutFooter,
  },
  data() {
    return {
      index: 1,
    };
  },
  mounted() {
    if (this.WindowLib.isApiCloud()) {
      this.openFrameGroup();
    }
    // this.openNews();
  },
  methods: {
    openFrameGroup() {
      const self = this;
      api.openFrameGroup({
        name: 'tabFrames',
        scrollEnabled: true,
        rect: {
          x: 0,
          y: 0,
          w: 'auto',
          h: api.frameHeight - 48,
        },
        index: 0,
        preload: 2,
        frames: [{
          name: 'news',
          url: './index.html',
          pageParam: { path: 'news' },
        }, {
          name: 'video',
          url: './index.html',
          pageParam: { path: 'video' },
        },
        {
          name: 'user',
          url: './index.html',
          pageParam: { path: 'user' },
        }],
      }, (ret, err) => {
        const index = ret.index;
        self.index = index;
      });
    },


  },
};
</script>

