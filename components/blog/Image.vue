<template>
  <div
    :class="[
      'not-prose',
      'ease-out',
      'transition-opacity',
      'duration-700',
      'w-screen',
      'overflow-hidden',
      'translate-x-[-36px]',
      'md:transform-none',
      'md:w-full',
      //       width: 100vw;
      // transform: translateX(-36px);
      fullScreen ? [] : [],
      showImage ? 'opacity-100' : 'opacity-0',
    ]"
    :style="fullScreen ? 'height: ' + imageHeight + 'px' : ''"
  >
    <div
      :class="[
        fullScreen
          ? [
              'md:absolute',
              'md:left-0',
              'md:right-0',
              'md:w-full',
              'overflow-scroll',

              'my-0',
            ]
          : '',
      ]"
    >
      <component
        :is="src.split('.').pop() == 'svg' ? 'object' : 'img'"
        :id="id"
        :data="
          src.split('.').pop() == 'svg'
            ? !supportDarkMode
              ? src
              : [
                  src
                    .split('.')
                    .slice(0, src.split('.').length - 1)
                    .join('.'),
                  $colorMode.value,
                  src.split('.').pop(),
                ].join('.')
            : null
        "
        :type="src.split('.').pop() == 'svg' ? 'image/svg+xml' : null"
        :class="['blog-image', 'md:max-w-[1280px]', 'mx-auto']"
        :src="
          !supportDarkMode
            ? src
            : [
                src
                  .split('.')
                  .slice(0, src.split('.').length - 1)
                  .join('.'),
                $colorMode.value,
                src.split('.').pop(),
              ].join('.')
        "
        :alt="alt ? alt : null"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    supportDarkMode: {
      type: Boolean,
      default: false,
    },
    alt: {
      type: String,
      default: '',
    },
    fullScreen: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      id: null,
      imageHeight: 0,
      showImage: false,
    }
  },
  mounted() {
    this.id = this._uid
    const bindthis = this
    if (!this.fullScreen) {
      this.showImage = true
    }
    this.$nextTick(() => {
      const img = document.getElementById(this._uid)

      const resizeObserver = new ResizeObserver(function () {
        bindthis.imageHeight = img.clientHeight
        bindthis.showImage = true
      })

      resizeObserver.observe(img)

      img.addEventListener('load', function () {
        const svgDoc = img.contentDocument
        const style = document.createElement('style')
        style.textContent = `
@font-face {
  font-family: 'Inter';
  font-weight: 100 900;
  font-display: swap;
  font-style: normal;
  font-named-instance: 'Regular';
  src: local('Inter'), url('https://storage.fredliang.cn/fonts/inter/Inter.var.woff2') format('woff2');
}

@font-face {
  font-family: 'Product Sans';
  src: local('Product Sans'), url('https://storage.fredliang.cn/fonts/product-sans/ProductSans-Bold.woff2');
  src: url('https://storage.fredliang.cn/fonts/product-sans/ProductSans-Bold.eot?#iefix')
      format('embedded-opentype'),
    url('https://storage.fredliang.cn/fonts/product-sans/ProductSans-Bold.woff2') format('woff2'),
    url('https://storage.fredliang.cn/fonts/product-sans/ProductSans-Bold.woff') format('woff'),
    url('https://storage.fredliang.cn/fonts/product-sans/ProductSans-Bold.ttf') format('truetype'),
    url('https://storage.fredliang.cn/fonts/product-sans/ProductSans-Bold.svg#ProductSans-Bold') format('svg');
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Monaco';
  font-style: normal;
  font-weight: normal;
  src: local('Monaco'), url('https://storage.fredliang.cn/fonts/monaco/Monaco.woff') format('woff');
}` // add whatever you need here
        svgDoc.childNodes[0].prepend(style)
      })
    })
  },
}
</script>

<style>
.blog-image {
  /* -webkit-backface-visibility: initial !important;
  -webkit-transform-origin: 50% 50%; */
}
</style>
