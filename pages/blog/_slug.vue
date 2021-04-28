<template>
  <Body>
    <div class="blog container">
      <div class="toc">
        <!-- <ul>
          <li
            v-for="link of post.toc"
            :key="link.id"
            :class="{ toc2: link.depth === 2, toc3: link.depth === 3 }"
          >
            <a :href="'#' + link.id">{{ link.text }}</a>
          </li>
        </ul> -->
      </div>
      <div class="blog-post">
        <article class="prose prose-sm sm:prose lg:prose-lg mx-auto">
          <h1 class="post-title">{{ post.title }}</h1>
          <p class="datetime">{{ $dateFns.format(post.date) }}</p>
          <nuxt-content :document="post" />
        </article>
      </div>
    </div>
  </Body>
</template>
<script>
export default {
  async asyncData({ $content, params, i18n }) {
    const post = await $content('blog/' + i18n.locale, params.slug).fetch()

    return { post }
  },
}
</script>

<style lang="less">
.dark-mode {
  p,
  tr,
  td,
  ul,
  li,
  strong {
    color: rgba(255, 255, 255, 0.75);
  }

  blockquote {
    border-left-color: rgba(255, 255, 255, 0.25);
  }

  .blog-post {
    h1,
    h2,
    h3,
    h4,
    h5 {
      color: rgba(255, 255, 255, 0.9);
    }
  }
}

.blog {
  h1 {
    font-size: 32px;
    font-weight: bold;
  }

  .blog-post {
    a {
      text-decoration: underline;
    }

    blockquote {
      color: #4a5568;
    }
  }
}
article {
  margin-top: 40px;

  .post-title {
    margin: 0;
  }
  .datetime {
    margin: 0;
    opacity: 0.6;
  }
}

img {
  width: 100%;
}

.blog {
  padding-top: 20px;
}

.container {
  margin: 0 auto;
  padding-left: 36px;
  padding-right: 36px;
  max-width: 1200px;
  width: 100%;
}
</style>
