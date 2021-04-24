<template>
  <div class="nav">
    <div class="container" style="">
      <ul>
        <li>
          <nuxt-link :to="localePath('/')">{{ $t('home') }}</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('/blog')">{{ $t('blog') }}</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('/about')">{{ $t('about') }}</nuxt-link>
        </li>
      </ul>

      <div class="mode-switcher switcher" @click="switchMode">
        <svg class="icon" aria-hidden="true">
          <use v-if="$colorMode.value === 'light'" xlink:href="#icon-sun"></use>
          <use v-if="$colorMode.value === 'dark'" xlink:href="#icon-moon"></use>
        </svg>
      </div>
      <nuxt-link
        class="lang-switcher switcher"
        :to="locale == 'en' ? switchLocalePath('zh') : switchLocalePath('en')"
      >
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-in"></use>
        </svg>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    locale() {
      return this.$i18n.locale
    },
  },
  methods: {
    switchMode() {
      if (this.$colorMode.value === 'dark') {
        this.$colorMode.preference = 'light'
      } else {
        this.$colorMode.preference = 'dark'
      }
    },
    switchLang() {},
  },
}
</script>

<style lang="less" scoped>
.dark-mode {
  .nav {
    background-color: rgba(27, 27, 27, 0.5) !important;
    border-bottom: solid 1px rgba(162, 162, 162, 0.1);
    ul > li > a {
      color: white;
    }

    .switcher {
      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }
      .icon {
        color: white;
      }
    }
    .lang-switcher {
      &:hover .icon {
        color: #008cff;
      }
    }

    .mode-switcher {
      &:hover.icon {
        color: rgba(255, 255, 0, 0.81);
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
  top: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
  border-bottom: solid 1px rgba(0, 0, 0, 0.06);
  z-index: 1;

  .lang-switcher {
    &:hover .icon {
      color: #008cff;
    }
  }

  .switcher {
    float: right;
    border-radius: 3px;
    transition: 0.3s;
    cursor: pointer;
    margin-left: 6px;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
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
  .mode-switcher {
    &:hover .icon {
      color: #ff9a00;
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
