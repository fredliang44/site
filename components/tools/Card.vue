<template>
  <div
    :class="[
      'hover:dark:bg-white/[0.10]',
      'hover:shadow-2xl',
      'hover:shadow-gray-100',
      'hover:dark:shadow-gray-800',
      'hover:-translate-y-0.5',
      'transition-all',
      'duration-300',
      'ease-in-out',
      'overflow-hidden',
      'w-80',
      'border',
      'dark:border-white/[.22]',
      'border-black[.10]',
      'rounded-3xl',
      'dark:bg-white/[0.08]',
      'min-h-28',
    ]"
  >
    <a :href="link" target="_blank" rel="noopener noreferrer">
      <div class="flex flex-col p-4">
        <div class="flex items-center w-full mb-2">
          <nuxt-image
            v-if="img && !supportDarkMode"
            class="inline-block w-12 h-12 m-0 mr-3 rounded-2xl dark:bg-gray-800 bg-slate-100"
            :src="img + '.png'"
            fit="inside"
            preload
            format="webp"
            style="-webkit-mask-image: -webkit-radial-gradient(white, black)"
            :alt="name"
            quality="80"
          />
          <nuxt-image
            v-if="img && supportDarkMode"
            class="inline-block w-10 h-10 m-0 mr-3 rounded-2xl dark:bg-gray-800 bg-slate-100"
            :src="img + '.' + $colorMode.value + '.png'"
            fit="inside"
            preload
            style="-webkit-mask-image: -webkit-radial-gradient(white, black)"
            format="webp"
            :alt="name"
            quality="80"
          />
          <p class="inline text-2xl font-bold leading-normal">
            {{ name }}
          </p>
        </div>

        <div class="">
          <div class="break-normal text-slate-400">{{ description }}</div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      default: './',
    },
    supportDarkMode: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {},
}
</script>
