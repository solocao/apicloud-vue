<template>
  <q-layout ref="layout" view="lHh Lpr lFf">
    <q-layout-header>
      <layout-header></layout-header>
    </q-layout-header>
    <q-layout-drawer side="left" v-model="showLeft" class="full-height">
      hah
    </q-layout-drawer>
    <q-page-container>
      shouye
    </q-page-container>
  </q-layout>
</template>
<script>
import LayoutHeader from './LayoutHeader';

export default {
  components: {
    LayoutHeader,
  },
};
</script>

