<template>
  <div class="blog-list">
    <Nav />
    <div class="blog">
      <div class="container" style=""><p>TBD</p></div>
      <nuxt-content :document="article[0]" />
      {{ article[0] }}
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('blog').fetch()
    return {
      article,
    }
  },
  mounted() {},
}
</script>

<style lang="less">
.blog {
  padding-top: 60px;
}
</style>
