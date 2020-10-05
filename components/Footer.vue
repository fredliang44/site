<template>
  <div id="footer">
    <div class="shadow"></div>
  </div>
</template>

<script>
export default {
  mounted() {},
}
</script>

<style lang="less">
.shadow {
  width: 100%;
  height: 100%;
  background-image: radial-gradient(
      circle at 56% 116%,
      hsla(199.10000000000002, 100%, 50%, 0.2) 9%,
      hsla(31.69999999999999, 52.7%, 33.1%, 0) 65%
    ),
    radial-gradient(
      circle at 68% 151%,
      hsla(216, 100%, 50%, 0.2) 8%,
      hsla(0, 0%, 0%, 0) 60%
    ),
    radial-gradient(
      circle at 44% 200%,
      hsla(223.70000000000005, 100%, 38.2%, 1) 23%,
      hsla(0, 0%, 100%, 0) 65%
    );
}
#footer {
  z-index: -100;
  width: 100%;
  height: 50vh;
  background-color: gray;
  overflow: hidden;
  color: inherit;

  background: rgb(19, 19, 19);
}
</style>
