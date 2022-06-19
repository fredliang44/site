<template>
  <Body>
    <div class="container">
      <h1 v-if="error.statusCode === 404">Page not found</h1>
      <h1 v-else>An error occurred</h1>
      <NuxtLink to="/">Home page</NuxtLink>
    </div>
  </Body>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['error'],
  layout: 'error', // you can set a custom layout for the error page
}
</script>

<style>
.container {
  margin: 0 auto;
  padding-left: 2rem;
  padding-right: 2rem;
  max-width: 1200px;
  width: 100%;
}
</style>
