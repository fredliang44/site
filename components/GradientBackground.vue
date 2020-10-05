<template>
  <div class="grident">
    <canvas id="gradient-canvas"> </canvas>
  </div>
</template>

<script>
import Gradient from '@/libs/gradient'

export default {
  mounted() {
    const gradient = new Gradient()
    gradient.initGradient('#gradient-canvas')
  },
}
</script>

<style scoped>
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
#gradient-canvas {
  width: 100%;
  height: 100%;
  --gradient-color-1: #ef008f;
  --gradient-color-2: #6ec3f4;
  --gradient-color-3: #7038ff;
  --gradient-color-4: #ffba27;
}
</style>
