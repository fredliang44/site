<template>
  <div class="blog-post">
    <article
      class="pt-10 mx-auto prose-sm prose prose-neutral sm:prose lg:prose-lg dark:prose-invert prose-blockquote:text-gray-600"
    >
      <h1 class="post-title">{{ post.title }}</h1>
      <p class="datetime">Last updated: {{ $dateFns.format(post.date) }}</p>
      <div id="toc" class="text-2xl">
        <strong>Tanle of contents</strong>
      </div>

      <ul>
        <li
          v-for="link of post.toc.filter((link) => link.depth === 2)"
          :key="link.id"
        >
          <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
        </li>
      </ul>
      <nuxt-content :document="post" />
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const post = await $content('privacy').fetch()
    return {
      post,
    }
  },
}
</script>
