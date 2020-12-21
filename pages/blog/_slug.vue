<template>
  <div class="page">
    <Nav />
    <div class="blog container">
      <div class="blog-post">
        <article>
          <h1>{{ article.title }}</h1>
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

<style lang="less">
.blog {
  padding-top: 60px;
}

.container {
  margin: 0 auto;
  padding-left: 36px;
  padding-right: 36px;
  max-width: 1200px;
  width: 100%;
}
</style>
