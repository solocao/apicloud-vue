<template>
  <div class="container">
    <layout-header></layout-header>

    <div id="id_test_video" style="width:100%; height:auto;"></div>

  </div>
</template>
<script>
import LayoutHeader from '../components/LayoutHeader';
import TcPlayer from '../assets/js/TcPlayer-module-2.2.1';
// const TcPlayer = require('../assets/js/TcPlayer-module-2.2.1.js');

export default {
  components: {
    LayoutHeader,
  },
  mounted() {
    const player = new TcPlayer('id_test_video', {
      mp4: 'http://7o50kb.com2.z0.glb.qiniucdn.com/c1.1.mp4',
      autoplay: true, // iOS下safari浏览器，以及大部分移动端浏览器是不开放视频自动播放这个能力的
      coverpic: 'http://www.test.com/myimage.jpg',
      width: '480', // 视频的显示宽度，请尽量使用视频分辨率宽度
      height: '320', // 视频的显示高度，请尽量使用视频分辨率高度
    });
    // const player = new TcPlayer.TcPlayer.TcPlayer('video-container', {
    //   mp4: 'http://7o50kb.com2.z0.glb.qiniucdn.com/c1.1.mp4', // 请替换成实际可用的播放地址
    //   width: '400px', // 视频的显示宽度，请尽量使用视频分辨率宽度
    //   height: '300px', // 视频的显示高度，请尽量使用视频分辨率高度
    //   volume: '0.5' });
  },
};
</script>

<style lang='stylus' scoped>
.container {
  position: absolute;
  top: 0px;
  width: 100%;
  height: 200px;
  background: yellow;
}
</style>
