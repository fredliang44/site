<template>
  <div class="page">
    <Nav />
    <div class="blog container">
      <div class="toc">
        <ul>
          <li
            v-for="link of article.toc"
            :key="link.id"
            :class="{ toc2: link.depth === 2, toc3: link.depth === 3 }"
          >
            <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="blog-post">
        <article>
          <h1>{{ article.title }}</h1>
          <nuxt-content
            class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto"
            :document="article"
          />
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
  h1 {
    font-size: 32px;
    font-weight: bold;
  }
}

img {
  width: 100%;
}

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
