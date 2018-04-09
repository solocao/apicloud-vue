<template>
  <q-layout ref="layout" view="lHh Lpr lFf">
    <q-layout-header>
      <layout-header></layout-header>
    </q-layout-header>
    <q-layout-drawer side="left" class="full-height">
    </q-layout-drawer>
    <q-page-container>
      <router-view/>
    </q-page-container>
    <q-layout-footer>
      <layout-footer></layout-footer>
    </q-layout-footer>
  </q-layout>
</template>
<script>
import LayoutHeader from './LayoutHeader';
import LayoutFooter from './LayoutFooter';

export default {
  components: {
    LayoutHeader,
    LayoutFooter,
  },
  mounted() {

    // this.openNews();
  },
  methods: {
    openNews() {
      if (this.WindowLib.isApiCloud()) {
        api.openFrame({
          name: 'mainLiveFrame',
          url: 'index.html#/redirect/sdsd',
          rect: {
            x: (api.frameWidth - 89) / 2,
            y: api.frameHeight - 89,
            w: 300,
            h: 300,
          },
          bounces: false,
          bgColor: 'rgba(0,0,0,0)',
          vScrollBarEnabled: false,
          hScrollBarEnabled: false,
        });
      }
    },

  },
};
</script>

