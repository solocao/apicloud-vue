<template>
  <div class="video-player" v-if="reseted">
    <video class="video-js" ref="video"></video>
  </div>
</template>
<script>
// lib
import _videojs from 'video.js';
import 'video.js/dist/video-js.css';

const videojs = window.videojs || _videojs;

// pollfill
if (typeof Object.assign !== 'function') {
  Object.defineProperty(Object, 'assign', {
    value(target, varArgs) {
      if (target == null) {
        throw new TypeError('Cannot convert undefined or null to object');
      }
      const to = Object(target);
      for (let index = 1; index < arguments.length; index++) {
        const nextSource = arguments[index];
        if (nextSource != null) {
          for (const nextKey in nextSource) {
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    },
    writable: true,
    configurable: true,
  });
}


// 默认事件
const DEFAULT_EVENTS = [
  'loadeddata',
  'canplay',
  'canplaythrough',
  'play',
  'pause',
  'waiting',
  'playing',
  'ended',
  'error',
];


export default {
  props: {
    start: {
      type: Number,
      default: 0,
    },
    crossOrigin: {
      type: String,
      default: '',
    },
    playsinline: {
      type: Boolean,
      default: false,
    },
    customEventName: {
      type: String,
      default: 'statechanged',
    },
    options: {
      type: Object,
      required: true,
    },
    events: {
      type: Array,
      default: () => [],
    },
    globalOptions: {
      type: Object,
      default: () => ({
        // autoplay: false,
        controls: true,
        // preload: 'auto',
        // fluid: false,
        // muted: false,
        controlBar: {
          remainingTimeDisplay: false,
          playToggle: {},
          progressControl: {},
          fullscreenToggle: {},
          volumeMenuButton: {
            inline: false,
            vertical: true,
          },
        },
        techOrder: ['html5'],
        plugins: {},
      }),
    },
    globalEvents: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      player: null,
      reseted: true,
    };
  },
  mounted() {
    if (!this.player) {
      this.initialize();
    }
  },
  methods: {
    initialize() {
      // videojs options
      const videoOptions = Object.assign({}, this.globalOptions, this.options);
      // ios fullscreen
      if (this.playsinline) {
        this.$refs.video.setAttribute('playsinline', this.playsinline);
        this.$refs.video.setAttribute('webkit-playsinline', this.playsinline);
        this.$refs.video.setAttribute('x5-playsinline', this.playsinline);
        this.$refs.video.setAttribute('x5-video-player-type', 'h5');
        this.$refs.video.setAttribute('x5-video-player-fullscreen', false);
      }

      // emit event
      const emitPlayerState = (event, value) => {
        if (event) {
          this.$emit(event, this.player);
        }
        if (value) {
          this.$emit(this.customEventName, { [event]: value });
        }
      };

      const self = this;

      this.player = videojs(this.$refs.video, videoOptions, function () {
        // 所有事件
        const events = DEFAULT_EVENTS.concat(self.events).concat(self.globalEvents);
        // watch events
        const onEdEvents = {};
        for (let i = 0; i < events.length; i += 1) {
          if (typeof events[i] === 'string' && onEdEvents[events[i]] === undefined) {
            ((event) => {
              onEdEvents[event] = null;
              this.on(event, () => {
                emitPlayerState(event, true);
              });
            })(events[i]);
          }
        }
        // watch timeupdate
        this.on('timeupdate', function () {
          emitPlayerState('timeupdate', this.currentTime());
        });

        // player readied
        self.$emit('ready', this);
        console.log(videoOptions);
      });
    },
  },
};
</script>
<style lang='stylus' scoped>
.video-js {
  width: 100%;
}
</style>
