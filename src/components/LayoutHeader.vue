<template>
  <q-toolbar slot="header" id="header">
    <q-btn flat>
      <span>
        <q-icon name="menu" />
      </span>
    </q-btn>
    <q-toolbar-title>
      <span>
        哈哈哈ha
      </span>
    </q-toolbar-title>
    <span id="span">
      其他
    </span>
  </q-toolbar>
</template>
<script>
import { fixStatusBar } from '../lib/api';

export default {
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
  },
};
</script>
<style lang='stylus' scoped>
#header {
  position: absolute;
  top: 0px;
}
</style>

