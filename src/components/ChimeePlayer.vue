<template>
  <div id="wrapper">
  </div>
</template>
<script>
import Chimee from 'chimee';

export default {
  data() {
    return {

    };
  },
  mounted() {
    alert('hhah');
    const chimee = new Chimee('#wrapper');
    chimee.on('play', () => console.log('play!!'));
    chimee.load('http://yunxianchang.live.ujne7.com/vod-system-bj/TLaf2cc9d469939803949187b46da16c45.flv');
    chimee.play(); // play!!
  },
};
</script>

