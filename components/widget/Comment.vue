<template>
  <div>
    <client-only>
      <h2><strong>Comments:</strong></h2>
      <div class="pb-10">
        <vue-cusdis
          id="cudis"
          :attrs="{
            host: 'https://cusdis.com',
            appId: '0371d476-0f1f-4b6f-954d-91bc5eaab83a',
            pageId: $route.path,
            pageTitle: title,
            pageUrl: currentUrl,
            theme: $colorMode.preference,
          }"
          :lang="locale == 'en' ? 'en' : 'zh-cn'"
          style="border: #0d0d0d"
        ></vue-cusdis>
      </div>
    </client-only>
  </div>
</template>

<script>
// For Vue 2
import VueCusdis from 'vue-cusdis/dist/vue2.es'
export default {
  components: {
    VueCusdis,
  },
  data() {
    return {
      title: '',
      currentUrl: '',
    }
  },
  computed: {
    locale() {
      return this.$i18n.locale
    },
  },
  mounted() {
    this.currentUrl = location.toString()
    this.title = this.$route.meta.title

    // document.querySelector('#cudis').addEventListener('load', function () {
    //   const iframe = document.getElementsByTagName('iframe')[0]
    //   const css = document.createElement('style')
    //   css.type = 'text/css'
    //   const styles =
    //     'body {' + '  background-color: lime;' + '  color: pink;' + '}'
    //   css.appendChild(document.createTextNode(styles))
    //   iframe.contentDocument.head.appendChild(css)
    // })
  },
  head() {
    const sefl = this
    if (process.browser) {
      this.title = document.title
    }
    return {
      changed({ title }) {
        sefl.title = title
      },
    }
  },
}
</script>

<style></style>
