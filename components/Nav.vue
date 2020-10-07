<template>
  <div class="nav">
    <div class="container">
      <ul>
        <li>
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">Blog</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about">About</nuxt-link>
        </li>
      </ul>
      <div class="mode-switcher" @click="switchMode">
        <svg class="icon" aria-hidden="true">
          <use v-if="$colorMode.value === 'light'" xlink:href="#icon-sun"></use>
          <use v-if="$colorMode.value === 'dark'" xlink:href="#icon-moon"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {},
  methods: {
    switchMode() {
      if (this.$colorMode.value === 'dark') {
        this.$colorMode.preference = 'light'
      } else {
        this.$colorMode.preference = 'dark'
      }
    },
  },
}
</script>

<style lang="less" scoped>
.icon {
  width: 18px;
  height: 18px;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.dark-mode {
  .nav {
    background-color: rgba(27, 27, 27, 0.5) !important;
    border-bottom: solid 1px rgba(162, 162, 162, 0.2);
    ul > li > a {
      color: white;
    }

    .icon {
      color: white;
    }
  }
}

.mode-switcher {
  display: inline-block;
}

.nav {
  position: fixed;
  display: flex;
  align-items: center;
  text-align: left;
  height: 48px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
  z-index: 1;

  ul {
    padding: 0;
    margin: 0;
    display: inline-block;
    li {
      list-style: none;
      font-size: 16px;
      display: inline;
      margin-right: 16px;
      a {
        text-decoration: none;
        color: black;
      }
    }
  }
}
</style>
