<template>
  <div class="acrylic-card"></div>
</template>

<script>
export default {}
</script>

<style lang="less">
.dark-mode {
  .acrylic-card {
    background-color: rgba(0, 0, 0, 0.2);
  }
}

.acrylic-card {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(40px);
}
</style>
