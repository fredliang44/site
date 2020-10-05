<template>
  <div class="main">
    <div class="header">
      <Nav />
    </div>
    <div class="content">
      <div class="container">
        <div class="title">
          <h1 class="intro intro-line-1">Hi, I'm Fred Liang</h1>
          <h1 class="intro intro-line-2" style="display: inline">I Build</h1>
          <h1 class="product-text" style="display: inline">Product</h1>
        </div>
      </div>

      <div class="place-holder" style="height: 300px"></div>
      <SkillScrollBar />
      <Background />
      <div class="place-holder" style="height: 200px"></div>
      <GradientBackground />
    </div>

    <Footer />
  </div>
</template>

<script>
// import anime from 'animejs/lib/anime.es.js'
export default {
  mounted() {
    this.fadIn('.intro-line-1')
    this.fadIn('.intro-line-2')
    this.fadIn('.product-text')
    this.$anime
      .timeline({ loop: false, duration: 0 })
      .add({
        targets: '.intro-line-1 .letter',
        translateX: [100, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 800,
        delay: (el, i) => 500 + 30 * i,
      })
      .add({
        targets: '.intro-line-2 .letter',
        translateX: [100, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 1200,
        delay: (el, i) => 500 + 30 * i,
      })
      .add({
        targets: '.product-text .letter',
        translateX: [100, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 100,
        delay: (el, i) => 30 * i,
      })

    this.$gsap.to('.skills', {
      // this will animate ALL boxes
      x: -600,
      scrollTrigger: {
        trigger: '.skills', // this will use the first box as the trigger
        scrub: true,
        start: 'top 684px',
        end: 'bottom top',
      },
    })

    this.$gsap.to('.tools', {
      // this will animate ALL boxes
      x: -100,
      scrollTrigger: {
        trigger: '.tools', // this will use the first box as the trigger
        scrub: true,
        start: 'top 738px',
        end: 'bottom top',
      },
    })
  },
  methods: {
    fadIn(selector) {
      const textWrapper1 = document.querySelector(selector)
      textWrapper1.innerHTML = textWrapper1.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      )
    },
  },
}
</script>

<style lang="less">
.main {
  overflow: hidden;
  .content {
    min-height: 1000vh;

    .title {
      font-size: 48px;
      margin-top: 48px;
      padding-top: 48px;
      font-weight: normal;

      .intro .letter {
        display: inline-block;
      }
      .product-text {
        background: repeating-linear-gradient(
          -45deg,
          red 0%,
          // yellow 7.14%,
          // rgb(0, 255, 0) 14.28%,
          rgb(0, 255, 255) 11.4%,
          // cyan 28.56%,
          blue 35.7%,
          magenta 42.84%,
          red 50%
        );
        background-size: 300vw 300vw;
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        animation: slide 10s linear infinite forwards;
      }
      @keyframes slide {
        0% {
          background-position-x: 0%;
        }
        100% {
          background-position-x: 600vw;
        }
      }
    }
  }
}
.container {
  margin: 0;
  padding: 0 36px;
  max-width: 1200px;
}
</style>
