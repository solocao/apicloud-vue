<template>
  <div class="full-width full-height">
    <q-card inline class="full-width">
      <q-card-main>
        <video-player class="video-player-box" ref="videoPlayer" :options="playerOptions" :playsinline="true" customEventName="customstatechangedeventname">
        </video-player>
      </q-card-main>
    </q-card>
  </div>
</template>

<script>
import VideoPlayer from './VideoPlayer';

export default {
  name: 'HelloWorld',
  components: {
    VideoPlayer,
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      playerOptions: {
        // videojs options
        muted: true,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [{
          type: 'video/mp4',
          src: 'http://vjs.zencdn.net/v/oceans.mp4',
        }],
        poster: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1522978643&di=e62b32102f10088b31e7214ab99d18e7&src=http://img15.3lian.com/2015/f1/38/d/41.jpg',
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.video-player-box {
  width: 100%;
  min-height: 120px;
}

.video-player-box > div {
  width: 100px !important;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
