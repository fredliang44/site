<template>
  <div class="container blog-post">
    <Article :post="post" :toc="true"></Article>
  </div>
</template>

<script>
import Article from '~/components/basic/Article.vue'
export default {
  components: { Article },
  async asyncData({ $content }) {
    const post = await $content('privacy').fetch()
    return {
      post,
    }
  },
}
</script>
