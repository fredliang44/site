<template>
  <div style="color: #ffffff">
    <div id="background" style="height: 100%" />
  </div>
</template>

<script>
/* eslint-disable */
import THREE from '@/libs/three/three'

export default {
  data() {
    return {}
  },
  computed: {},
  methods: {
    init() {
      var SCREEN_WIDTH = window.innerWidth
      var SCREEN_HEIGHT = window.innerHeight

      var SEPARATION = 90
      var AMOUNTX = 50
      var AMOUNTY = 50

      var container

      var particles, particle
      var count

      var camera
      var scene
      var renderer

      var mouseX = 0
      var mouseY = 0

      var windowHalfX = window.innerWidth / 2
      var windowHalfY = window.innerHeight / 2
      init()
      this.interval = setInterval(loop, 1000 / 60)

      function init() {
        container = document.createElement('div')

        document.getElementById('background').appendChild(container)

        camera = new THREE.Camera(75, SCREEN_WIDTH / SCREEN_HEIGHT, 200, 10000)
        camera.position.z = 800
        camera.position.y = 500
        camera.position.x = 600

        scene = new THREE.Scene()

        renderer = new THREE.CanvasRenderer()
        renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT - 100)

        particles = new Array()

        var i = 0
        var material = new THREE.ParticleCircleMaterial(0x777777, 1)

        for (var ix = 0; ix < AMOUNTX; ix++) {
          for (var iy = 0; iy < AMOUNTY; iy++) {
            particle = particles[i++] = new THREE.Particle(material)
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
        mouseY = event.clientY - windowHalfY
      }

      function loop() {
        camera.position.x += (mouseX - camera.position.x + 600) * 0.05
        var i = 0

        for (var ix = 0; ix < AMOUNTX; ix++) {
          for (var iy = 0; iy < AMOUNTY; iy++) {
            particle = particles[i++]
            particle.position.y =
              Math.sin((ix + count) * 0.3) * 50 +
              Math.sin((iy + count) * 0.5) * 50
            particle.scale.x = particle.scale.y =
              (Math.sin((ix + count) * 0.3) + 1) * 2 +
              (Math.sin((iy + count) * 0.5) + 1) * 2
          }
        }

        renderer.render(scene, camera)

        count += 0.1
      }
    },
  },
  mounted() {
    this.init()
  },
  beforeDestroy() {
    if (this.interval) clearInterval(this.interval)
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
