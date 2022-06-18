<template>
  <div class="letapp">
    <div class="container">
      <h2>let.sh</h2>
      <h3 class="letapp-description">All in one service hosting platform</h3>
      <FeatureCard
        title="Expose local service"
        description="let.sh can expose your local service on public internet with a single command `lets dev`"
      ></FeatureCard>
    </div>
  </div>
</template>

<script>
import FeatureCard from '../widget/FeatureCard.vue'
export default {
  components: { FeatureCard },
  mounted() {
    const textWrapper = document.querySelector('.letapp-description')
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    )
    const observer = new IntersectionObserver(this.showDescription)
    observer.observe(document.querySelector('.letapp'))
  },
  methods: {
    showDescription() {
      this.$anime.timeline({ loop: false }).add({
        targets: '.letapp-description .letter',
        translateY: [-50, 0],
        easing: 'easeOutExpo',
        duration: 1400,
        delay: (el, i) => 100 + 6 * i,
      })
    },
  },
}
</script>

<style lang="less">
.letapp {
  padding: 32px 0;

  h2 {
    font-size: 36px;
    margin-bottom: 12px;
  }
  h3 {
    font-size: 24px;
    overflow: hidden;
  }
}
.letapp-description {
  margin-bottom: 36px;
}

span.letter {
  display: inline-block;
}
</style>
