<template>
  <div class="page">
    <Nav />
    <div class="blog container">
      <ul>
        <li v-for="post of posts" :key="post.slug">
          <NuxtLink :to="{ name: 'blog-slug', params: { slug: post.slug } }">
            <img :src="post.img" />
            <div>
              <h2>{{ post.title }}</h2>
              <p>{{ post.description }}</p>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const posts = await $content('blog', params.slug)
      .where({ draft: { $eq: false } })
      .only(['title', 'description', 'img', 'slug', 'author', 'hidden'])
      .fetch()
    return { posts }
  },
}
</script>

<style lang="less" scoped>
.blog {
  padding-top: 60px;

  ul {
    padding: 0;
  }
}
</style>
