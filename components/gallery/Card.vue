<template>
  <div
    :class="[
      lock ? '' : 'hover:shadow-2xl',
      lock ? '' : 'hover:shadow-gray-100',
      lock ? '' : 'hover:dark:shadow-gray-800',
      lock ? '' : 'hover:-translate-y-0.5',
      'transition-all',
      'duration-300',
      'ease-in-out',
      'overflow-hidden',
      'w-[34rem]',
      'border',
      lock ? 'dark:border-white/[.12]' : 'dark:border-white/[.22]',
      'border-black[.10]',
      'rounded-3xl',
      lock ? 'dark:bg-white/[0.06]' : 'dark:bg-white/[0.08]',
      'dark:text-white',
      'min-h-28',
    ]"
  >
    <a
      :href="link"
      :class="lock ? 'pointer-events-none' : ''"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div class="flex flex-col p-4">
        <div class="flex mb-2">
          <nuxt-image
            v-if="img && !supportDarkMode"
            class="inline-block w-12 h-12 m-0 mr-3 shadow-[0_0_15px_-2px] shadow-slate-200 dark:shadow-none rounded-2xl dark:bg-gray-800 bg-white"
            :src="img + '.png'"
            fit="inside"
            :alt="name"
            quality="80"
          />
          <nuxt-image
            v-if="(img && supportDarkMode) || lock"
            class="inline-block w-12 h-12 m-0 mr-3 rounded-2xl dark:bg-gray-800 bg-slate-100"
            :src="
              lock
                ? '/img/products/lock.' + $colorMode.value + '.png'
                : img + '.' + $colorMode.value + '.png'
            "
            fit="inside"
            :alt="name"
            quality="80"
          />
          <p class="inline mr-2 text-3xl font-bold leading-normal">
            {{ name }}
          </p>
          <div
            v-if="lock"
            :class="[
              'p-1.5',
              'my-auto',
              'bg-gray-100',
              'dark:bg-gray-800',
              'rounded-full',
            ]"
          >
            <svg
              id="img"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="text-gray-400 lock-path"
                d="M17 10V8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8V10M12 14.5V16.5M8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C17.7202 10 16.8802 10 15.2 10H8.8C7.11984 10 6.27976 10 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
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
      required: false,
      default: null,
    },
    link: {
      type: String,
      default: './',
    },
    role: {
      type: String,
      default: '',
    },
    lock: {
      type: Boolean,
      default: false,
    },
    supportDarkMode: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {},
}
</script>

<style></style>
