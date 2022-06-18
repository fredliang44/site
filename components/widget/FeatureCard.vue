<template>
  <div class="feature">
    <div class="feature-title">{{ title }}</div>
    <div class="feature-description">{{ description }}</div>
    <div class="feature-background"></div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Title',
    },
    description: {
      type: String,
      default: 'Description',
    },
  },
}
</script>

<style lang="less">
.feature {
  position: relative;
  color: white;
  background: radial-gradient(
    281.61% 281.61% at 20.3% -12.58%,
    rgba(255, 255, 255, 0) 0%,
    #07f0ff 100%
  );
  max-width: 540px;
  min-width: 360px;
  min-height: 300px;
  border-radius: 10px;
  padding: 40px;
  //   box-shadow: 0px 2px 10px rgba(7, 240, 255, 0.4);
  filter: drop-shadow(0px 2px 10px rgba(0, 175, 187, 0.8));
  .feature-title {
    font-size: xx-large;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .feature-description {
    font-size: medium;
  }

  .feature-background {
    position: absolute;
    left: 40%;
    top: 40%;
  }
}
</style>
