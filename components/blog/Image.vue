<template>
  <div
    :class="['not-prose', fullScreen ? [] : [], showImage ? '' : 'opacity-0']"
    :style="fullScreen ? 'height: ' + imageHeight + 'px' : ''"
  >
    <img
      :id="id"
      :class="[fullScreen ? ['blog-img', 'absolute', 'left-0', 'my-0'] : '']"
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
      :alt="alt"
    />
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
    })
  },
}
</script>

<style></style>
