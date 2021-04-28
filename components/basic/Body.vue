<template>
  <div class="page">
    <div class="page-content">
      <div class="header">
        <Nav />
      </div>

      <div class="page-slot">
        <slot></slot>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style>
.page-content {
  min-height: 82vh;
}
.page {
  min-height: 100vh;
}

.page-slot {
  margin-top: 48px;
}
</style>
