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

      <div class="container" style="height: 300px">
        <div class="self-description">
          <h3 class="self-description-text">Currently @ByteDance</h3>
        </div>
      </div>
      <SkillScrollBar />
      <Background />
      <div class="place-holder" style="height: 200px"></div>

      <div class="new-wave">
        <div class="container">
          <div class="new-wave-content">
            <h2>Working inside the new wave of infrastructure revolution</h2>
            <h3>
              SaaS products supercharge the growth of companys in the new era
            </h3>
          </div>

          <!-- <div class="wave-cards">
            <AcrylicCard title="Demonstrably Scale" />
            <AcrylicCard title="FinTech" />
            <AcrylicCard />
            <AcrylicCard />
          </div> -->
        </div>

        <!-- <div class="filter"></div> -->
        <GradientBackground />
      </div>

      <LetApp />
    </div>

    <Footer />
  </div>
</template>

<script>
// import anime from 'animejs/lib/anime.es.js'
export default {
  data() {
    return {
      anime: this.$anime,
    }
  },
  mounted() {
    this.fadIn('.intro-line-1')
    this.fadIn('.intro-line-2')
    this.fadIn('.product-text')
    this.fadIn('.self-description-text')
    this.$anime
      .timeline({ loop: false, duration: 10 })
      .add({
        targets: '.intro-line-1 .letter',
        translateX: [100, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 800,
        delay: (el, i) => 200 + 30 * i,
      })
      .add({
        targets: '.intro-line-2 .letter',
        translateX: [100, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 500,
        delay: (el, i) => 30 * i,
      })
      .add({
        targets: '.product-text .letter',
        translateX: [100, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 500,
        delay: (el, i) => 30 * i,
      })
      .add({
        targets: '.self-description-text .letter',
        translateX: [10, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 800,
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
.dark-mode {
  h2,
  h3 {
    color: rgba(255, 255, 255, 0.7);
  }
  .new-wave {
    background-color: rgba(0, 0, 0, 0.3);
  }
}

.main {
  overflow: hidden;
  .content {
    min-height: 1000vh;

    .title {
      font-size: 48px;
      margin-top: 48px;
      padding-top: 48px;
      font-weight: normal;
      margin-bottom: 24px;

      .intro .letter {
        display: inline-block;
      }
      .product-text {
        .letter {
          display: inline;
        }
        background: repeating-linear-gradient(
          -45deg,
          red 0%,
          yellow 7.14%,
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
        background-clip: text;
        animation: slide 10s linear infinite forwards;
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

    .self-description {
      padding: 20px 0;

      h3 {
        font-size: 32px;
      }
      .letter {
        display: inline-block;
      }
    }

    .new-wave {
      position: relative;
      height: 100vh;

      .wave-cards {
        margin: 48px 0 0 0;
        width: 100%;
        height: 572px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        .acrylic-card {
          width: 48%;
          height: 42%;
        }
      }

      .container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        text-align: center;

        .new-wave-content {
          // padding: 60px 0 0 0;
          color: rgba(255, 255, 255, 0.8);
          h2 {
            font-size: 42px;
          }

          h3 {
            font-size: 24px;
          }
        }
      }

      .filter {
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0);
        position: absolute;
        top: 0;
        z-index: -9;
      }
      .grident {
        position: absolute;
        top: 0;
        z-index: -10;
      }
    }
  }
}
.container {
  margin: 0 auto;
  padding-left: 36px;
  padding-right: 36px;
  max-width: 1200px;
  width: 100%;
}

@media (max-width: 640px) {
  .main {
    .content {
      .title {
        .intro,
        .product-text {
          font-size: 30px;
        }
      }
      .self-description .self-description-text {
        font-size: 24px;
      }

      .scroll-bar p {
        font-size: 24px;
      }
    }
  }
}
</style>
