<template>
  <div class="nav bg-white/50 dark:bg-black/50">
    <div class="container flex h-full flex-nowrap" style="">
      <ul
        class="flex items-center h-full -ml-2 overflow-x-auto whitespace-nowrap nav-list"
      >
        <li
          v-for="navItem in navList"
          :key="navItem.index"
          :class="[
            'flex',
            'items-center',
            'h-full',
            'mr-1',
            'text-center',
            $route.path === navItem.path
              ? 'shadow-[inset_0px_-2px_0px] dark:shadow-white/70 shadow-black/60'
              : '',
          ]"
        >
          <nuxt-link
            :class="[
              'px-2',
              'py-0.5',
              'transition',
              'duration-300',
              'rounded-md',
              'dark:hover:bg-gray-400/30',
              'hover:bg-gray-500/10',
              'dark:active:bg-white/50',
              'active:bg-black/20',
            ]"
            :to="localePath(navItem.path)"
            >{{ $t(navItem.translateKey) }}</nuxt-link
          >
        </li>
      </ul>

      <div
        class="flex items-center justify-end ml-auto mode-switcher switcher"
        @click="switchMode"
      >
        <div
          class="p-1 transition duration-300 rounded-md dark:hover:bg-gray-400/20 hover:bg-gray-500/10"
        >
          <svg class="icon dark:text-white/[.85]" aria-hidden="true">
            <use
              v-if="$colorMode.value === 'light'"
              xlink:href="#icon-sun"
            ></use>
            <use
              v-if="$colorMode.value === 'dark'"
              xlink:href="#icon-moon"
            ></use>
          </svg>
        </div>
      </div>
      <nuxt-link
        class="flex items-center justify-end lang-switcher switcher"
        :to="locale == 'en' ? switchLocalePath('zh') : switchLocalePath('en')"
      >
        <div
          class="p-1 transition duration-300 rounded-md dark:hover:bg-gray-400/20 hover:bg-gray-500/10"
        >
          <svg class="icon dark:text-white/[.85]" aria-hidden="true">
            <use xlink:href="#icon-in"></use>
          </svg>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        {
          path: '/',
          translateKey: 'home',
        },
        {
          path: '/blog',
          translateKey: 'blog',
        },
        {
          path: '/gallery',
          translateKey: 'gallery',
        },
        {
          path: '/tools',
          translateKey: 'tools',
        },
        {
          path: '/about',
          translateKey: 'about',
        },
      ],
    }
  },
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
    border-bottom: solid 1px rgba(162, 162, 162, 0.2);

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
  .nav-list::-webkit-scrollbar {
    display: none;
  }
  .lang-switcher {
    &:hover .icon {
      color: #008cff;
    }
  }

  .switcher {
    float: right;
    cursor: pointer;

    .icon {
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
    li {
      list-style: none;
      font-size: 16px;
    }
  }
}
</style>
