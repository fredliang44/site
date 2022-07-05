<template>
  <div class="pt-4">
    <div class="container pt-16 blog">
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
        <article
          :class="[
            'prose-code:dark:background-gray-900',
            'mx-auto',
            'prose-sm',
            'prose',
            'prose-neutral',
            'sm:prose',
            'lg:prose-lg',

            // darkmode
            'dark:prose-invert',
          ]"
        >
          <div
            class="pb-4 text-lg border-b border-gray-100 dark:border-gray-800"
          >
            <h1 class="post-title" style="margin-bottom: 0">
              {{ post.title }}
            </h1>
            <p v-if="'date' in post" class="mt-2 datetime">
              {{ $dateFns.format(post.date) }}
            </p>
          </div>
          <nuxt-content class="-mt-6" :document="post" />
          <WidgetComment />
        </article>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params, i18n }) {
    const post = await $content('blog', params.slug + '.' + i18n.locale).fetch()

    return { post }
  },
  head() {
    return {
      title: this.post.title + " | Fred's Site",
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.post.title + " | Fred's Site",
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.post.description,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://lzb.im' + this.post.image,
        },
      ],
    }
  },
}
</script>

<style lang="less">
.dark {
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
  }
}
article {
  .post-title {
    margin: 0;
  }
  .datetime {
    margin: 0.2rem 0 0 0;
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
