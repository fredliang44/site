<template>
  <div class="page">
    <Nav />
    <div class="blog container">
      <div class="blog-post">
        <article>
          <nuxt-content :document="article" />
        </article>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('blog', params.slug).fetch()

    return { article }
  },
}
</script>

<style lang="less" scoped>
.blog {
  padding-top: 60px;
}
</style>
