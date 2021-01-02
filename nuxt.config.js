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
    {
      innerHTML: `!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics.SNIPPET_VERSION="4.13.1";
  analytics.load("c9wPpLe9F1zBULWCQpdeLY2sCG8yiAVq");
  analytics.page();
  }}();`,
      // type: 'text/javascript',
      // charset: 'utf-8',
    },
    {
      innerHTML: ` (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:2173391,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
    },
  ]
  if (process.env.NODE_ENV === 'production') {
    scripts.push(
      { src: '/__/firebase/8.2.1/firebase-app.js', body: true },
      { src: '/__/firebase/8.2.1/firebase-performance.js', body: true },
      { src: '/__/firebase/8.2.1/firebase-analytics.js', body: true },
      { src: '/__/firebase/init.js', body: true },
      {
        innerHTML: `var perf = firebase.performance();`,
        body: true,
      }
    )
    return scripts
  }
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
  css: ['normalize.css/normalize.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/anime',
    '@/plugins/gasp',
    '@/plugins/iconfont.client.js',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // '@nuxtjs/tailwindcss',
    '@nuxtjs/tailwindcss',

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
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',

    // https://github.com/nuxt-community/color-mode-module
    '@nuxtjs/color-mode',

    // https://github.com/nuxt/image
    '@nuxt/image',

    // https://github.com/nuxt-community/google-optimize-module#readme
    // 'nuxt-google-optimize',

    // // https://github.com/nuxt-community/gtm-module
    // '@nuxtjs/gtm',
    '@nuxtjs/sitemap',
  ],

  // gtm: {
  //   id: 'GTM-NFVB8GC',
  // },
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/content-config)
  content: {
    // liveEdit: false,
    // markdown: {
    //   remarkPlugins: ['remark-slug'],
    // },
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
  },

  image: {
    sizes: [320, 420, 768, 1024, 1200],
    // // Options
    // ipx: {
    //   /**
    //    * Input directory for images
    //    **/
    //   dir: '~/assets',
    //   /**
    //    * Cache directory for optimized images
    //    **/
    //   cacheDir: '~~/node_modules/.cache/nuxt-image',
    //   /**
    //    * Enable/Disable cache cleaning cron job
    //    **/
    //   clearCache: false,
    //   /**
    //    * Modify default behavior of image optimizer
    //    **/
    //   sharp: {
    //     // Here is complete list of available options: https://github.com/lovell/sharp/blob/master/lib/constructor.js#L132
    //   },
    // },
  },

  sitemap: {
    hostname: 'https://lzb.im',
    gzip: true,
    // routes: createSitemapRoutes,
  },
}
