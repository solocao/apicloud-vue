<template>
  <div class="full-width full-height">
    <q-card inline class="full-width">
      <q-card-main>
      </q-card-main>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
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
  methods: {
    testVideo() {
      if (this.WindowLib.isApiCloud()) {
        const videoPlayer = api.require('videoPlayer');
        videoPlayer.openPlay({
          rect:
            { x: 0,
              y: 0,
              w: 320,
              h: 250,
            },
          texts: {
            head: {
              title: '顶部文字',
            },
          },
          styles: {
            head: {
              bg: 'rgba(0.5,0.5,0.5,0.7)',
              height: 44,
              y: 20,
              titleSize: 20,
              titleColor: '#fff',
              backSize: 44,
              backImg: 'fs://img/back.png',
              customButtons: [],
            },
            foot: {
              bg: 'rgba(0.5,0.5,0.5,0.7)',
              height: 44,
              playSize: 44,
              playImg: 'fs://img/paly.png',
              pauseImg: 'fs://img/pause.png',
              timeSize: 14,
              timeColor: '#fff',
              sliderImg: 'fs://img/slder.png',
              progressColor: '#696969',
              progressSelected: '#76EE00',
              verticalImg: '',
              horizontalImg: '',
            },
          },
          path: 'http://7o50kb.com2.z0.glb.qiniucdn.com/c1.1.mp4', // （可选项）字符串类型；文档的路径，支持网络和本地（fs://）路径；默认：未传值时不播放
          // 在 android 平台上不支持 widget://
          autoPlay: true, // （可选项）布尔类型；打开时是否自动播放；默认：true（自动播放）
        }, (ret, err) => {
          if (ret) {
            alert(JSON.stringify(ret));
          } else {
            alert(JSON.stringify(err));
          }
        });

        videoPlayer.addEventListener({
          name: 'leftUp',
        }, (ret, err) => {
          if (ret) {
            alert(JSON.stringify(ret));
          } else {
            alert(JSON.stringify(err));
          }
        });

        videoPlayer.addEventListener({
          name: 'leftUp',
        }, (ret, err) => {
          if (ret) {
            alert(JSON.stringify(ret));
          } else {
            alert(JSON.stringify(err));
          }
        });
      }
    },

    testVideo2() {
      const moviePlayer = api.require('moviePlayer');
      moviePlayer.open({
        rect: {
          x: 0,
          y: 0,
          w: api.frameWidth,
          h: 300,
        },
        styles: {
          head: {
            bg: 'rgba(161,161,161,0.5)',
            height: 44,
            y: 20,
            title: {
              size: 20,
              color: '#fff',
              width: 40,
              leftMargin: 10,
            },
            backSize: 30,
            backImg: 'widget://image/back.png',
            customButtons: [{
              w: 30,
              h: 30,
              rightMagin: 10,
              img: 'widget://image/image/collect.png',
              imgSelected: 'fs://image/collectSelected.png',
            }] },
          foot: {
            bg: 'rgba(0,0,0,0.5)',
            height: 44,
            palyBtn: {
              size: 20,
              playImg: 'widget://image/play.png',
              pauseImg: 'widget://image/pause.png',
              marginLeft: 5,
            },
            currentTimeLabel: {
              textSize: 14,
              textColor: '#FFF',
              textWidth: 43,
              marginLeft: 5,
            },
            seekBar: {
              sliderImg: 'widget://image/circle.png',
              sliderW: 20,
              sliderH: 20,
              progressColor: '#696969',
              progressSelected: '#76EE00',
              marginLeft: 10,
              marginRight: 10,
            },
            totalTimeLabel: {
              textSize: 14,
              textColor: '#FFF',
              textWidth: 43,
              marginRight: 5,
            },
            fullscreenBtn: {
              size: 20,
              verticalImg: 'widget://image/vertical.png',
              horizontalImg: 'widget://image/horizontal.png',
            },
          } },
        path: 'http://7o50kb.com2.z0.glb.qiniucdn.com/c1.1.mp4',
        autoPlay: true,
      }, (ret, err) => {
        if (ret) {
          alert(JSON.stringify(ret));
        } else {
          alert(JSON.stringify(err));
        }
      });

      moviePlayer.addEventListener((ret) => {
        if (ret && ret.eventType === 'leftFling') {
          alert('leftFling');
        }
      });
    },

  },
  mounted() {
    console.log(this.$router);
    console.log(this.$router.path);
    // this.testVideo2();
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
