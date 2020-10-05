<template>
  <div class="nav">
    <div class="container">
      <ul>
        <li>
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">Blog</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about">About</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.nav {
  position: fixed;
  display: flex;
  align-items: center;
  text-align: left;
  height: 48px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
  z-index: 1;

  ul {
    padding: 0;
    margin: 0;

    li {
      list-style: none;
      font-size: 16px;
      display: inline;
      margin-right: 16px;
      a {
        text-decoration: none;
        color: #424242;
      }
    }
  }
}
</style>
