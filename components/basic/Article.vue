<template>
  <div v-if="post" class="pt-8 blog-post">
    <article
      :class="[
        'mx-auto',
        'prose-sm',
        'prose',
        'sm:prose',
        'lg:prose-lg',
        'dark:prose-invert',
        'dark:sm:prose-invert',
      ]"
    >
      <div class="pb-4 text-lg border-b-2 border-gray-100 dark:border-gray-900">
        <h1 class="post-title" style="margin-bottom: 0">
          {{ post.title }}
        </h1>
        <p v-if="'date' in post" class="mt-2 datetime">
          {{ $dateFns.format(post.date) }}
        </p>
      </div>

      <div v-if="toc" id="toc" class="text-2xl">
        <strong>Table of contents</strong>
      </div>

      <ul v-if="toc">
        <li
          v-for="link of post.toc.filter((link) => link.depth === 2)"
          :key="link.id"
        >
          <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
        </li>
      </ul>
      <nuxt-content :document="post" />
      <WidgetComment v-if="comment" />
    </article>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
    comment: {
      type: Boolean,
      default: false,
    },
    toc: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
