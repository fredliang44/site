<template>
  <div>
    <div class="container blog">
      <div class="post-list">
        <div v-for="post of posts" :key="post.slug" class="post-item">
          <NuxtLink
            :to="
              localeRoute({ name: 'blog-slug', params: { slug: post.slug } })
            "
          >
            <div class="overflow-hidden post-preview">
              <div class="post-preview-img -z-10">
                <nuxt-image
                  class="post-preview-img-cover"
                  fit="cover"
                  :src="post.image"
                  :alt="post.title"
                  quality="80"
                />

                <div class="post-preview-tags">
                  <div
                    v-for="tag of post.tags"
                    :key="tag.index"
                    class="post-preview-tag"
                  >
                    <p>{{ tag }}</p>
                  </div>
                </div>
                <!-- <nuxt-image src="/nuxt-icon.png" /> -->
                <!-- <nuxt-image src="/icon.png" /> -->
              </div>

              <div class="post-preview-detail">
                <h2 class="title">{{ post.title }}</h2>
                <p class="created-at">
                  {{ $dateFns.format(post.date) }}
                </p>
                <p>{{ post.description }}</p>
              </div>

              <!-- <img class="place-holder" :src="post.img" :alt="post.title" /> -->
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
    <WidgetSpotify />
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params, i18n }) {
    if (process.env.NODE_ENV === 'production') {
      const posts = await $content('blog/' + i18n.locale, params.slug)
        .where({ draft: { $eq: false } })
        .only([
          'title',
          'description',
          'image',
          'slug',
          'tags',
          'author',
          'hidden',
          'date',
          'createdAt',
        ])
        .sortBy('date', 'desc')
        .fetch()
      return { posts }
    } else {
      const posts = await $content('blog/' + i18n.locale, params.slug)
        .only([
          'title',
          'description',
          'image',
          'slug',
          'tags',
          'author',
          'hidden',
          'date',
          'createdAt',
        ])
        .sortBy('date', 'desc')
        .fetch()
      return { posts }
    }
  },
  methods: {
    async getImgInfo(img) {
      const info = await this.$axios.get(img + '?x-oss-process=image/info').data
      return info
    },
  },
}
</script>

<style lang="less">
img {
  width: 100%;
}

.dark {
  .blog .post-list .post-item .post-preview {
    border: 1px rgba(255, 255, 255, 0.1) solid;
    .post-preview-tags {
      .post-preview-tag {
        p {
          color: rgba(255, 255, 255, 0.8);
        }
      }
    }
    .post-preview-detail {
      .title {
        color: white;
      }

      p {
        color: rgba(255, 255, 255, 0.9);
      }
    }
  }
}

.blog {
  padding-top: 20px;
  a {
    text-decoration: none;
  }
  .post-list {
    display: flex;
    flex-wrap: wrap;
    // align-content: space-between;
    justify-content: space-between;
    width: 100%;

    .post-item {
      display: inline-block;
      margin: 20px 0;
      // overflow: hidden;
      width: 48%;
      // min-width: 400px;
      .post-preview {
        border-radius: 20px;
        border: 1px rgba(0, 0, 0, 0.15) solid;
        transition: box-shadow 0.2s, transform 0.7s;
        .post-preview-img {
          border-top-left-radius: 20px;
          border-top-right-radius: 20px;
          // z-index: -10;
          overflow: hidden;
          position: relative;
          width: 100%;
          height: 100%;
          background-repeat: no-repeat;
          background-size: cover;
          padding-top: 72%;
          .post-preview-img-cover {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
          }

          .post-preview-tags {
            .post-preview-tag {
              color: rgba(255, 255, 255, 0.9);
              display: inline-block;
              margin-right: 10px;
              font-weight: bold;
              font-size: 16px;
              border-radius: 100px;
              padding: 8px 14px;
              background-color: rgba(78, 78, 78, 0.3);
              box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
              backdrop-filter: blur(15px);
            }

            margin: 10px;
            margin-bottom: 15px;
            position: absolute;
            bottom: 0;
          }
        }

        .post-preview-detail {
          color: black;
          .title {
            font-size: 26px;
            font-weight: bold;
          }

          .created-at {
            margin-top: 6px;
            color: gray;
          }

          p {
            margin: 10px 0;
            font-size: 16px;
            // max-width: 70%;
          }

          padding: 20px;
        }

        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 3px 40px rgba(255, 255, 255, 0.25);
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

@media (max-width: 640px) {
  .post-list {
    .post-item {
      min-width: 100%;
    }
  }
}
</style>
