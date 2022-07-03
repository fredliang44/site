// const createSitemapRoutes = async () => {
//   const routes = []
//   const { $content } = require('@nuxt/content')
//   if (posts === null || posts.length === 0)
//     posts = await $content('blog').fetch()
//   for (const post of posts) {
//     routes.push(`blog/${post.slug}`)
//   }
//   return routes
// }

const loadScripts = function () {
  const scripts = [
    // {
    //   innerHTML: `(function(h,o,t,j,a,r){
    //     h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    //     h._hjSettings={hjid:2173391,hjsv:6};
    //     a=o.getElementsByTagName('head')[0];
    //     r=o.createElement('script');r.async=1;
    //     r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    //     a.appendChild(r);
    // })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
    // },
    // {
    //   src: 'https://dev.visualwebsiteoptimizer.com/lib/555341.js',
    // },
  ]
  return scripts
}

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "Fred's Site",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: loadScripts(),
    __dangerouslyDisableSanitizers: ['script'],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    // 'normalize.css/normalize.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/anime',
    '@/plugins/gasp',
    '@/plugins/iconfont.client.js',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  // components: {
  //   dirs: ['~/components', '~/components/background', '~/components/basic'],
  // },
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [

    // '@nuxt/postcss8',

    // '@nuxtjs/tailwindcss',
    '@nuxtjs/tailwindcss',

    // https://github.com/nuxt/image
    '@nuxt/image',

    [
      '@nuxtjs/date-fns',
      {
        locales: ['es', 'zh-CN'],
        defaultLocale: 'en-US',
        format: 'yyyy-MM-dd',
      },
    ],

    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',

    // https://github.com/nuxt-community/analytics-module#readme
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-140497401-3',
      },
    ],
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    [
      '@nuxtjs/tailwindcss',
      {
        viewer: true,
      },
    ],

    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',

    // https://go.nuxtjs.dev/pwa
    [
      '@nuxtjs/pwa',
      {
        meta: {
          ogHost: 'https://lzb.im',
        },
        manifest: {
          name: "Fred's Site",
          short_name: "Fred's Site",
          lang: 'en',
          useWebmanifestExtension: false,
          background_color: 'black',
        },
        workbox: {
          offline: false,
          skipWaiting: false,
          cleanupOutdatedCaches: true,
          runtimeCaching: [
            {
              // Should be a regex string. Compiles into new RegExp('https://my-cdn.com/.*')
              urlPattern: '/_nuxt/.*',
              // Defaults to `NetworkFirst` if omitted
              handler: 'StaleWhileRevalidate',
              // Defaults to `GET` if omitted
              // method: 'GET'
            },
          ],
        },
      },
    ],

    // https://go.nuxtjs.dev/content
    '@nuxt/content',

    // https://github.com/nuxt-community/color-mode-module
    '@nuxtjs/color-mode',

    // https://github.com/nuxt-community/google-optimize-module#readme
    // 'nuxt-google-optimize',

    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyBCeS_fPO_Zk1i7p_2Xw9abQFAFAGymXFk',
          authDomain: 'project-lzb.firebaseapp.com',
          databaseURL: 'https://project-lzb.firebaseio.com',
          projectId: 'project-lzb',
          storageBucket: 'project-lzb.appspot.com',
          messagingSenderId: '1069087358410',
          appId: '1:1069087358410:web:9d5262fe2e308af43d6333',
          measurementId: 'G-4JVGVRE2ZP',
        },
        services: {
          analytics: {
            collectionEnabled: true, // default
          },
          performance: true,
        },
      },
    ],
    // // https://github.com/nuxt-community/gtm-module
    // '@nuxtjs/gtm',
    '@nuxtjs/sitemap',

    'nuxt-i18n',
  ],

  generate: {
    fallback: '404.html',
  },
  // gtm: {
  //   id: 'GTM-NFVB8GC',
  // },
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/content-config)
  content: {
    liveEdit: false,
    markdown: {
      remarkPlugins: ['remark-slug'],
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    // transpile: ['three'],
    // analyze: {
    //   analyzerMode: 'static',
    // },
  },

  colorMode: {
    preference: 'dark',
    classSuffix: '',
  },

  image: {
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536,
    },
    // Options
    ipx: {
      /**
       * Input directory for images
       **/
      dir: '~/assets',
      /**
       * Cache directory for optimized images
       **/
      cacheDir: '~~/node_modules/.cache/nuxt-image',
      /**
       * Enable/Disable cache cleaning cron job
       **/
      clearCache: false,
      /**
       * Modify default behavior of image optimizer
       **/
      sharp: {
        // Here is complete list of available options: https://github.com/lovell/sharp/blob/master/lib/constructor.js#L132
      },
    },
  },
  devServerHandlers: [],
  sitemap: {
    hostname: 'https://lzb.im',
    gzip: true,
    // routes: createSitemapRoutes,
  },

  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US', // Will be used as catchall locale by default
      },
      {
        code: 'zh',
        iso: 'zh-CN',
      },
    ],
    defaultLocale: 'en',
    detectBrowserLanguage: false,
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          home: 'Home',
          blog: 'Blog',
          gallery: 'Gallery',
          about: 'About',
          tools: 'Tools',
        },
        zh: {
          home: '主页',
          blog: '文章',
          gallery: '作品',
          about: '关于',
          tools: '工具',
        },
      },
    },
  },
}
