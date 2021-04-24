<template>
  <div class="page">
    <div class="page-content">
      <div class="header">
        <Nav />
      </div>

      <slot></slot>
    </div>
    <Footer />
  </div>
</template>

<style>
.header {
}

.page-content {
  min-height: 82vh;
}
.page {
  min-height: 100vh;
}
</style>
