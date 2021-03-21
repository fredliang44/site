<template>
  <div class="app">
    <Nuxt />
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
}
</script>
<style lang="less">
.app {
  font-family: Product Sans, Arial, Helvetica, sans-serif;
}

.dark-mode {
  h1,
  h2,
  h3,
  h4,
  h5,
  a,
  p,
  tr,
  td,
  ul,
  li {
    color: white;
  }

  body {
    background-color: black;
  }
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

a {
  color: grey;
}

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
  src: url('~assets/font/ProductSans-Bold.woff2');
  src: url('~assets/font/ProductSans-Bold.eot?#iefix')
      format('embedded-opentype'),
    url('~assets/font/ProductSans-Bold.woff2') format('woff2'),
    url('~assets/font/ProductSans-Bold.woff') format('woff'),
    url('~assets/font/ProductSans-Bold.ttf') format('truetype'),
    url('~assets/font/ProductSans-Bold.svg#ProductSans-Bold') format('svg');
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Product Sans';
  src: url('~assets/font/ProductSans-Regular.woff2');
  src: local('Product Sans') url('~assets/font/ProductSans-Regular.eot?#iefix')
      format('embedded-opentype'),
    url('~assets/font/ProductSans-Regular.woff2') format('woff2'),
    url('~assets/font/ProductSans-Regular.woff') format('woff'),
    url('~assets/font/ProductSans-Regular.ttf') format('truetype'),
    url('~assets/font/ProductSans-Regular.svg#ProductSans-Regular')
      format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
</style>
