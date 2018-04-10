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
    <q-page-container style="width:100%;height:900px">
      <q-card>
        <q-card-media>
          <img src="https://imgsa.baidu.com/news/q%3D100/sign=938ce6d3e550352ab76121086342fb1a/9c16fdfaaf51f3de1df0500098eef01f3a297910.jpg">
        </q-card-media>
      </q-card>
      <q-card>
        <q-card-media>
          <img src="https://imgsa.baidu.com/news/q%3D100/sign=938ce6d3e550352ab76121086342fb1a/9c16fdfaaf51f3de1df0500098eef01f3a297910.jpg">
        </q-card-media>
      </q-card>
      <q-card>
        <q-card-media>
          <img src="https://imgsa.baidu.com/news/q%3D100/sign=938ce6d3e550352ab76121086342fb1a/9c16fdfaaf51f3de1df0500098eef01f3a297910.jpg">
        </q-card-media>
      </q-card>
      视频啦
      <a href="http://imgcache.qq.com/open/qcloud/video/vcplayer/demo/tcplayer.html?autoplay=true">点击点击</a>
    </q-page-container>
  </q-layout>
</template>
<script>
import { fixStatusBar } from '../lib/api';

export default {

  mounted() {
    if (this.WindowLib.isApiCloud()) {
      this.fixStatusBar();
      // this.testVideo();
    }
  },
  methods: {
    fixStatusBar() {
      const header = document.getElementById('header');
      fixStatusBar(header);
    },
    testVideo() {
      if (this.WindowLib.isApiCloud()) {
        const videoPlayer = api.require('videoPlayer');
        videoPlayer.openPlay({
          rect:
            {              x: 0,
              y: 50,
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
  },
};
</script>

