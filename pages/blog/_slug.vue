<template>
  <div class="pt-4">
    <div class="flex max-w-[100%] pt-16 blog">
      <aside class="order-1 hidden w-0 grow sm:inline-block"></aside>
      <aside class="order-3 hidden w-0 grow sm:inline-block">
        <div
          id="toc"
          class="fixed z-10 hidden py-4 ml-8 transition-opacity duration-300 ease-in-out rounded-lg xl:inline-block backdrop-blur-lg"
        >
          <div class="pl-4 border-l border-gray-200 dark:border-gray-800">
            <p class="pb-2 text-xl font-bold text-gray-600 dark:text-gray-400">
              CATEGORY
            </p>
            <ul class="">
              <li
                v-for="link of post.toc"
                :key="link.id"
                :class="[
                  'w-56',
                  'overflow-hidden',
                  'whitespace-nowrap',
                  'text-ellipsis',
                  link.depth === 2 ? ['toc2', 'pl-0'] : '',
                  link.depth === 3 ? ['toc3', 'pl-3'] : '',
                ]"
              >
                <a :href="'#' + link.id" class="">{{ link.text }}</a>
              </li>
            </ul>
          </div>
        </div>
      </aside>
      <div class="order-2 blog-post grow-0 max-w-[100%] px-[36px] lg:px-0">
        <article
          :class="[
            'prose-code:dark:background-gray-900',
            'mx-auto',
            'prose-sm',
            'prose',
            'prose-neutral',
            'sm:prose',
            'lg:prose-lg',

            // handle header offset
            'prose-h2:first-of-type:pt-16',
            'prose-h2:pt-12',
            'prose-h2:!-mt-10',
            'prose-h3:pt-12',
            'prose-h3:!-mt-10',
            'prose-h4:pt-12',
            'prose-h4:!-mt-10',
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
  created() {
    if (process.client) {
      // eslint-disable-next-line nuxt/no-globals-in-created
      window.addEventListener('scroll', this.handleScroll)
    }
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },

  methods: {
    handleScroll(event) {
      const imgs = document.getElementsByClassName('blog-image')
      const tocRect = document.getElementById('toc').getBoundingClientRect()
      // .getBoundingClientRect()
      // if x axis is reached
      if (imgs.length > 0) {
        let hitted = false
        Array.prototype.forEach.call(imgs, (img) => {
          const imgRect = img.getBoundingClientRect()
          if (imgRect.right > tocRect.left) {
            // if image top is above toc botton
            if (imgRect.top < tocRect.bottom && imgRect.bottom > tocRect.top) {
              hitted = true
            }
          }
        })

        if (hitted) {
          document.getElementById('toc').style.opacity = '0'
          // console.log(document.getElementById('toc').style.opacity)
        } else if (document.getElementById('toc').style.opacity === '0') {
          document.getElementById('toc').style.opacity = '1'
        }
      }

      // Any code to be executed when the window is scrolled
    },
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

:where(thead):not(:where([class~='not-prose'] *)),
:where(th):not(:where([class~='not-prose'] *)) {
  padding-right: 0.75em;
  padding-bottom: 0.75em;
  padding-left: 0.75em;
}

:where(td):not(:where([class~='not-prose'] *)),
:where(tdbody):not(:where([class~='not-prose'] *)) {
  vertical-align: baseline;
  padding-top: 0.75em;
  padding-right: 0.75em;
  padding-bottom: 0.75em;
  padding-left: 0.75em;
}
:where(th:last-child):not(:where([class~='not-prose'] *)),
:where(td:last-child):not(:where([class~='not-prose'] *)) {
  padding-right: 0;
}
:where(th:first-child):not(:where([class~='not-prose'] *)),
:where(td:first-child):not(:where([class~='not-prose'] *)) {
  padding-left: 0;
}
:where(tr):not(:where([class~='not-prose'] *)),
:where(tdbody):not(:where([class~='not-prose'] *)) {
  border-bottom-width: 1px;
  border-bottom-color: var(--tw-prose-td-borders);
}

.icon.icon-link {
  @apply absolute  opacity-0 h-4 -ml-6 w-10 bg-no-repeat;
  background-image: url('/img/link.svg');
  margin-top: 6px;
  width: 18px;
  height: 18px;
}

h2:hover .icon.icon-link,
h3:hover .icon.icon-link,
h4:hover .icon.icon-link,
h5:hover .icon.icon-link {
  @apply opacity-100;
}
</style>
