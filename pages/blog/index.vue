<template>
  <div class="page">
    <Nav />
    <div class="blog container">
      <div class="post-list">
        <div v-for="post of posts" :key="post.slug" class="post-item">
          <NuxtLink :to="{ name: 'blog-slug', params: { slug: post.slug } }">
            <div
              class="post-preview"
              :style="'background-image: url(' + post.img + ')'"
            >
              <h2 class="title">{{ post.title }}</h2>
              <p>{{ post.description }}</p>
              <!-- <img class="place-holder" :src="post.img" :alt="post.title" /> -->
            </div>
          </NuxtLink>
        </div>
      </div>
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

<style lang="less">
img {
  width: 100%;
}

.blog {
  padding-top: 60px;
  a {
    text-decoration: none;
  }
  .post-list {
    display: flex;
    .post-item {
      padding: 10px;
      max-width: 50%;
      .post-preview {
        .title {
          font-size: 60px;
          font-weight: bold;
          mix-blend-mode: difference;
        }
        p {
          margin-top: 20px;
          font-size: 20px;
          mix-blend-mode: difference;
          max-width: 70%;
        }

        padding: 30px;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        margin: 0 auto;
        &::after {
          content: '';
          display: block;
          padding-bottom: 56%;
        }
      }
    }
  }
}

.container {
  margin: 0 auto;
  padding-left: 36px;
  padding-right: 36px;
  max-width: 1200px;
  width: 100%;
}
</style>
