<template>
  <div class="acrylic-card">
    <h3>{{ title }}</h3>
    <p>{{ content }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Title',
    },
    content: {
      type: String,
      default: 'content',
    },
  },
}
</script>

<style lang="less">
.dark {
  .acrylic-card {
    // background-color: rgba(255, 255, 255, 0.1);
    border: rgba(255, 255, 255, 0.4) solid 2px;
    h3 {
      //   color: rgba(255, 255, 255, 0.8);
      color: rgba(255, 255, 255, 0.7);
    }

    p {
      //   color: rgba(255, 255, 255, 0.6);
      color: rgba(255, 255, 255, 0.5);
    }
  }
}

.acrylic-card {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  //   background-color: rgba(0, 0, 0, 0.1);
  border: rgba(0, 0, 0, 0.4) solid 3px;
  backdrop-filter: blur(40px);
  padding: 20px;

  h3 {
    color: rgba(0, 0, 0, 0.7);
    font-size: 30px;
    font-weight: bold;
  }

  p {
    color: rgba(0, 0, 0, 0.5);
    font-size: 20px;
  }
}
</style>
