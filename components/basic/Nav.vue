<template>
  <div class="nav">
    <div class="container" style="">
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
.dark-mode {
  .nav {
    background-color: rgba(27, 27, 27, 0.5) !important;
    border-bottom: solid 1px rgba(162, 162, 162, 0.2);
    ul > li > a {
      color: white;
    }

    .mode-switcher {
      &:hover {
        background-color: rgba(255, 255, 255, 0.2);
        .icon {
          color: rgba(255, 255, 0, 0.81);
        }
      }
      .icon {
        color: white;
      }
    }
  }
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
  .mode-switcher {
    float: right;
    border-radius: 3px;
    transition: 0.3s;
    cursor: pointer;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
      .icon {
        color: #ff9a00;
      }
    }
    .icon {
      color: black;
      margin: 4px;
      width: 18px;
      height: 18px;
      vertical-align: -0.15em;
      fill: currentColor;
      overflow: hidden;
      transition: 0.3s;
    }
  }
  ul {
    padding: 0;
    margin: 4px 0;
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
