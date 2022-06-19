<template>
  <div v-if="track" class="float-card dark:bg-gray-800/[0.6]">
    <img
      class="float-card-logo"
      src="~assets/img/SpotifyLogo.png"
      alt="spotify logo"
    />
    <div class="text-slate-600 dark:text-gray-400 float-card-track-info">
      <div class="float-card-track-info-title">Recently Played</div>
      <div class="float-card-track-info-name">
        {{ track.playing_album_name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      track: null,
    }
  },
  mounted() {
    this.getRecentTrack()
  },
  methods: {
    getRecentTrack() {
      const host = 'site-api.lzb.im'
      this.$axios
        .get('https://' + host + '/spotify/recent')
        .then((response) => (this.track = response.data.data))
    },
  },
}
</script>

<style lang="less">
.float-card {
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  width: 12rem;
  height: 4rem;
  // background-color: rgba(43, 43, 43, 0.5);
  border-radius: 1rem;
  backdrop-filter: blur(10px);
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
  text-align: left;
  &-logo {
    display: inline-block;

    width: 2rem;
    height: 2rem;
    margin: 1rem 0 1rem 1rem;
  }

  &-track-info {
    display: inline-block;
    font-size: 1rem;
    width: 8rem;
    white-space: nowrap;
    margin: auto 0;
    position: relative;
    vertical-align: middle;
    overflow: hidden;
    // color: rgba(255, 255, 255, 0.75);
    &-title {
      font-weight: bold;
    }
    &-name {
      //   padding-left: 20px;
      //   overflow: hidden;
      width: 8rem;
      display: inline-block; //增加这句即可
      white-space: nowrap;
      animation: 9s wordsLoop linear infinite normal;
    }
    @keyframes wordsLoop {
      0% {
        transform: translateX(0px);
        -webkit-transform: translateX(0px);
      }

      20% {
        transform: translateX(0%);
        -webkit-transform: translateX(0%);
      }
      100% {
        transform: translateX(-140%);
        -webkit-transform: translateX(-140%);
      }
    }

    // @-webkit-keyframes wordsLoop {
    //   0% {
    //     transform: translateX(0px);
    //     -webkit-transform: translateX(0px);
    //   }

    //   20% {
    //     transform: translateX(0px);
    //     -webkit-transform: translateX(0px);
    //   }
    //   100% {
    //     transform: translateX(-120%);
    //     -webkit-transform: translateX(-120%);
    //   }
    // }
  }
}
</style>
