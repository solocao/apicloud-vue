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
    alert('哈哈');
    const header = document.getElementById('header');
    fixStatusBar(header);
  },
};
</script>

