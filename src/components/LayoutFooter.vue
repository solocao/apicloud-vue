<template>
  <div>
    <q-tabs class="shadow-2" align="justify" v-model="tabIndex">
      <q-tab slot="title" name="tab-0" icon="mail" @click="switchTabIndex(0)" />
      <q-tab slot="title" name="tab-1" icon="alarm" @click="switchTabIndex(1)" />
      <q-tab slot="title" name="tab-2" icon="movie" @click="switchTabIndex(2)" />
    </q-tabs>

  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: String,
      default: '0',
    },
  },
  computed: {
    tabIndex() {
      return `tab-${this.index}`;
    },
  },
  methods: {
    switchTabIndex(index) {
      if (this.WindowLib.isApiCloud()) {
        api.setFrameGroupIndex({
          name: 'tabFrames',
          index,
        });
      }
    },
  },
  updated() {
  },
};
</script>

