<template>
  <q-layout ref="layout" view="hHh Lpr lFf" style="background:transparent">
    <q-layout-header v-model="header" :reveal="true">
      <q-toolbar id="header">
        <q-btn flat round dense icon="menu" @click="left = !left" aria-label="Toggle menu on left side" />
        <q-toolbar-title>
          Header
        </q-toolbar-title>
        <q-btn flat dense v-if="!$q.platform.within.iframe" class="q-mr-sm" label="Go to Showcase" />
        <q-btn flat round dense icon="menu" aria-label="Toggle menu on right side" />
      </q-toolbar>
    </q-layout-header>
    <q-page-container style="width:100%;">
      <q-pull-to-refresh :handler="refresher">
        <q-page padding class="bg-white">
          <p class="caption">
            Pull down to refresh on the content below. On desktop it works by dragging the content down.
          </p>

          <p v-for="(item, index) in items" :key="items.length - index" class="caption">
            <q-chip square color="secondary" class="shadow-1">
              {{ items.length - index }}
            </q-chip>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </q-page>
      </q-pull-to-refresh>

    </q-page-container>
  </q-layout>
</template>
<script>
import { fixStatusBar } from '../lib/api';

export default {
  data() {
    return {
      items: [{}, {}, {}, {}, {}, {}],
    };
  },
  mounted() {
    if (this.WindowLib.isApiCloud()) {
      this.fixStatusBar();
    }
  },
  methods: {
    fixStatusBar() {
      const header = document.getElementById('header');
      fixStatusBar(header);
    },
    refresher(done) {
      setTimeout(() => {
        done();
        this.items.push({});
      }, 1000);
    },
  },
};
</script>

