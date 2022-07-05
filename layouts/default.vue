<template>
  <div class="app">
    <Body class="dark:text-white/[.85]">
      <Nuxt />
    </Body>
  </div>
</template>
<script>
export default {
  mounted() {
    const optmizeScript = document.createElement('script')
    optmizeScript.setAttribute(
      'src',
      'https://www.googleoptimize.com/optimize.js?id=OPT-57XL8N9'
    )
    document.head.appendChild(optmizeScript)
  },
  head: {
    bodyAttrs: {
      class: 'dark:bg-black bg-white transition',
    },
    script: [
      // {
      //   innerHTML: `if (localStorage.getItem('nuxt-color-mode')) document.documentElement.setAttribute("data-theme", localStorage.theme);`,
      //   type: 'text/javascript',
      //   charset: 'utf-8',
      // },
    ],
  },
}
</script>
<style lang="less">
.app {
  font-family: Product Sans, 'SF Pro SC', 'HanHei SC', 'SF Pro Text',
    'Myriad Set Pro', 'SF Pro Icons', 'PingFang SC', 'Helvetica Neue',
    'Helvetica', 'Arial', sans-serif;
}

.dark .dark\:bg-black {
  background-color: rgb(0 0 0);
}

.container {
  margin: 0 auto;
  padding-left: 36px;
  padding-right: 36px;
  max-width: 1200px;
  width: 100%;
}

.dark {
  // h1,
  // h2,
  // h3,
  // h4,
  // h5,
  // a,
  // p,
  // tr,
  // td,
  // ul,
  // li {
  //   color: white;
  // }

  // body {
  //   background-color: black;
  // }
}

html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

h1 {
  font-size: 72px;
}

// a {
//   color: grey;
// }

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
  margin: 0;
}

@font-face {
  font-family: 'Product Sans';
  src: url('https://storage.fredliang.cn/fonts/product-sans/ProductSans-Bold.woff2');
  src: url('https://storage.fredliang.cn/fonts/product-sans/ProductSans-Bold.eot?#iefix')
      format('embedded-opentype'),
    url('https://storage.fredliang.cn/fonts/product-sans/ProductSans-Bold.woff2')
      format('woff2'),
    url('https://storage.fredliang.cn/fonts/product-sans/ProductSans-Bold.woff')
      format('woff'),
    url('https://storage.fredliang.cn/fonts/product-sans/ProductSans-Bold.ttf')
      format('truetype'),
    url('https://storage.fredliang.cn/fonts/product-sans/ProductSans-Bold.svg#ProductSans-Bold')
      format('svg');
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Product Sans';
  src: url('https://storage.fredliang.cn/fonts/product-sans/ProductSans-Regular.woff2');
  src: local('Product Sans')
      url('https://storage.fredliang.cn/fonts/product-sans/ProductSans-Regular.eot?#iefix')
      format('embedded-opentype'),
    url('https://storage.fredliang.cn/fonts/product-sans/ProductSans-Regular.woff2')
      format('woff2'),
    url('https://storage.fredliang.cn/fonts/product-sans/ProductSans-Regular.woff')
      format('woff'),
    url('https://storage.fredliang.cn/fonts/product-sans/ProductSans-Regular.ttf')
      format('truetype'),
    url('https://storage.fredliang.cn/fonts/product-sans/ProductSans-Regular.svg#ProductSans-Regular')
      format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Inter';
  font-weight: 100 900;
  font-display: swap;
  font-style: normal;
  font-named-instance: 'Regular';
  src: url('https://storage.fredliang.cn/fonts/inter/Inter.var.woff2')
    format('woff2');
}
</style>
