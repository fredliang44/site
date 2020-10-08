<template>
  <div style="color: #ffffff">
    <div id="background" style="height: 100%" />
  </div>
</template>

<script>
import {
  Scene,
  NearestFilter,
  TextureLoader,
  WebGLRenderer,
  Sprite,
  SpriteMaterial,
  PerspectiveCamera,
} from 'three'

export default {
  data() {
    return {}
  },
  computed: {},
  mounted() {
    this.init()
  },
  beforeDestroy() {
    if (this.interval) clearInterval(this.interval)
  },
  methods: {
    init() {
      const SCREEN_WIDTH = window.innerWidth
      const SCREEN_HEIGHT = window.innerHeight

      const SEPARATION = 90
      const AMOUNTX = 50
      const AMOUNTY = 50

      let container

      let particles, particle
      let count

      let camera
      let scene
      let renderer

      let mouseX = 0
      // let mouseY = 0

      const windowHalfX = window.innerWidth / 2
      // const windowHalfY = window.innerHeight / 2
      init()
      this.interval = setInterval(loop, 1000 / 60)

      function init() {
        container = document.createElement('div')

        document.getElementById('background').appendChild(container)

        camera = new PerspectiveCamera(
          75,
          SCREEN_WIDTH / SCREEN_HEIGHT,
          200,
          10000
        )
        camera.position.z = 800
        camera.position.y = 400
        camera.position.x = 600
        camera.lookAt(0, 0, 0)
        scene = new Scene()

        renderer = new WebGLRenderer({ alpha: true })
        renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT - 100)

        particles = []

        let i = 0
        const map = new TextureLoader().load('/img/circle.svg')
        renderer.setPixelRatio(window.devicePixelRatio)
        map.minFilter = NearestFilter
        const maxAnisotropy = renderer.capabilities.getMaxAnisotropy()
        map.anisotropy = maxAnisotropy

        const material = new SpriteMaterial({
          color: 0x6f6f6f,
          map,
        })

        for (let ix = 0; ix < AMOUNTX; ix++) {
          for (let iy = 0; iy < AMOUNTY; iy++) {
            particle = particles[i++] = new Sprite(material)
            particle.position.x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2
            particle.position.z = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2
            scene.add(particle)
          }
        }

        count = 0

        container.appendChild(renderer.domElement)
        document.addEventListener('mousemove', onDocumentMouseMove, false)
      }
      function onDocumentMouseMove(event) {
        mouseX = -event.clientX - windowHalfX
        // mouseY = event.clientY - windowHalfY
      }

      function loop() {
        camera.position.x += (mouseX - camera.position.x + 600) * 0.05
        // camera.position.z += (mouseY - camera.position.Y + 600) * 0.05
        camera.lookAt(0, 0, 0)
        let i = 0

        for (let ix = 0; ix < AMOUNTX; ix++) {
          for (let iy = 0; iy < AMOUNTY; iy++) {
            particle = particles[i++]
            particle.position.y =
              Math.sin((ix + count) * 0.3) * 50 +
              Math.sin((iy + count) * 0.5) * 50
            particle.scale.x = particle.scale.y =
              (Math.sin((ix + count) * 0.3) + 1.2) * 3 +
              (Math.sin((iy + count) * 0.5) + 1.2) * 3
          }
        }

        renderer.render(scene, camera)

        count += 0.1
      }
    },
  },
}
</script>

<style>
#background {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -100;
}
</style>
