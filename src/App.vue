<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>

export default {
  name: 'App',
  mounted() {
    // const eHeader = $api.byId('app');
    // console.log('看看啥');
    // console.log(eHeader);
    // this.openFrameGroup();
    const header = document.getElementById('header');
    console.log('看看header');
    console.log(header);
    console.log(header.style);
  },
  methods: {
    openFrameGroup() {
      if (this.WindowLib.isApiCloud()) {
        const header = document.getElementById('header');
        console.log(header.style);
        console.log(JSON.stringify(header.style));
        api.openFrameGroup({
          name: 'mainListFrameGroup',
          scrollEnabled: true,
          rect: {
            x: 0,
            y: 80,
            w: 'auto',
            h: 'auto',
          },
          index: 0,
          preload: 2,
          frames: [{
            name: 'main_game_list_frame',
            url: './index.html',
            pageParam: { path: 'news' },
          }, {
            name: 'main_food_list_frame',
            url: './index.html',
            pageParam: { path: 'video' },
          }],
        }, (ret, err) => {

        });
      }
    },
  },
};
</script>

<style>
#app {
  height: 100%;
  width: 100%;
  background: white;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
