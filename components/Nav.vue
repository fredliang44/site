<template>
  <div class="nav bg-white/5">
    <div class="container dark:text-white" style="">
      <ul>
        <li class="px-2 py-1 transition rounded-md hover:bg-white/10">
          <nuxt-link :to="localePath('/')">{{ $t('home') }}</nuxt-link>
        </li>
        <li class="px-2 py-1 transition rounded-md hover:bg-white/10">
          <nuxt-link :to="localePath('/blog')">{{ $t('blog') }}</nuxt-link>
        </li>
        <li class="px-2 py-1 transition rounded-md hover:bg-white/10">
          <nuxt-link :to="localePath('/gallery')">{{
            $t('gallery')
          }}</nuxt-link>
        </li>
        <li class="px-2 py-1 transition rounded-md hover:bg-white/10">
          <nuxt-link :to="localePath('/about')">{{ $t('about') }}</nuxt-link>
        </li>
      </ul>

      <div
        class="p-1 transition rounded-md mode-switcher switcher hover:bg-white/10"
        @click="switchMode"
      >
        <svg class="icon" aria-hidden="true">
          <use v-if="$colorMode.value === 'light'" xlink:href="#icon-sun"></use>
          <use v-if="$colorMode.value === 'dark'" xlink:href="#icon-moon"></use>
        </svg>
      </div>
      <nuxt-link
        class="p-1 transition rounded-md lang-switcher switcher hover:bg-white/10"
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

<style lang="less">
.dark {
  .nav {
    // background-color: rgba(27, 27, 27, 0.5) !important;
    border-bottom: solid 1px rgba(162, 162, 162, 0.1);
    ul > li > a {
      color: white;
    }

    .switcher {
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
  // background-color: rgba(255, 255, 255, 0.5);
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
    cursor: pointer;

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
      // margin-right: 16px;
      a {
        // text-decoration: none;
        // color: black;
      }
    }
  }
}
</style>
