<template>
  <div
    :class="[
      lock
        ? ''
        : [
            'hover:shadow-2xl',
            'hover:shadow-gray-100',
            'hover:dark:shadow-gray-800',
            'hover:-translate-y-0.5',
          ],
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
      'transition',
      lock ? '' : 'hover:dark:bg-white/[0.10]',
      'min-h-28',
    ]"
  >
    <a
      :href="link"
      :class="[lock ? ['pointer-events-none', 'h-full'] : 'h-full']"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div class="flex flex-col h-full p-4">
        <Title
          :name="name"
          :img="img"
          :stage="stage"
          :lock="lock"
          :support-dark-mode="supportDarkMode"
          :custom-img="customImg"
        />
        <div class="">
          <div class="break-normal text-slate-400">{{ description }}</div>
        </div>
        <div v-show="tags || extend || link" class="mt-auto">
          <div class="flex items-center mt-2">
            <div
              v-for="(tag, tagIndex) in tags"
              :key="tagIndex"
              :class="[
                'px-3',
                'py-0.5',
                'rounded-full',
                'transition',
                'ease-in-out',
                'duration-200',
                tag.includes('role')
                  ? [
                      'text-gray-700',
                      'bg-gray-200/70',
                      'hover:bg-gray-300',
                      'dark:text-gray-400',
                      'dark:bg-gray-600/30',
                      'dark:hover:bg-gray-600/40',
                    ]
                  : '',
              ]"
            >
              <p>{{ tag }}</p>
            </div>
            <div class="flex ml-auto">
              <div
                v-if="extend && 'docs' in extend"
                :class="[
                  'p-2',
                  'duration-300',
                  'text-gray-500',
                  'dark:text-gray-400',
                  'bg-black/[0.04]',
                  'dark:bg-white/[.05]',
                  'hover:bg-black/[.1]',
                  'active:bg-black/[.2]',
                  'hover:dark:bg-white/[.15]',
                  'active:dark:bg-white/25',
                  'rounded-lg',
                ]"
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  :href="extend.docs"
                >
                  <div>
                    <Icon icon="file" size="16" />
                  </div>
                </a>
              </div>
              <div
                v-if="link"
                :class="[
                  'ml-2',
                  'p-2',
                  'duration-300',
                  'text-gray-500',
                  'dark:text-gray-400',
                  'bg-black/[0.04]',
                  'dark:bg-white/[.05]',
                  'hover:bg-black/[.1]',
                  'hover:dark:bg-white/[.15]',
                  'active:bg-black/[.2]',
                  'active:dark:bg-white/25',
                  'rounded-lg',
                ]"
              >
                <a target="_blank" rel="noopener noreferrer" :href="link">
                  <div>
                    <Icon icon="link-external" size="16" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
import Icon from '../icon/index.vue'
import Title from './card/Title.vue'
export default {
  components: { Icon, Title },
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
      default: '',
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
    stage: {
      type: String,
      default: '',
    },
    tags: {
      type: Array,
      default: null,
    },
    customImg: {
      type: Boolean,
      default: false,
    },
    extend: {
      type: Object,
      default: null,
    },
  },
  mounted() {},
}
</script>

<style></style>
