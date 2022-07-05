/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const colors = require('tailwindcss/colors')
const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const rem = (px) => `${round(px / 16)}rem`
module.exports = {
  // darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            'blockquote p:first-of-type::before': {
              content: 'none',
            },
            'blockquote p:last-of-type::after': {
              content: 'none',
            },
            code: {
              color: 'var(--tw-prose-code)',
              fontWeight: '400',
              padding: '0.125rem 0.25rem',
              border: 'solid 1px',
              borderColor: 'var(--tw-prose-code-border)',
              backgroundColor: 'var(--tw-prose-code-bg)',
              // borderColor: colors.gray[200],
              // backgroundColor: colors.gray[100],
              borderRadius: rem(8),
              transition:
                'background-color 0.2s ease-in-out, border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
            },
            '--tw-prose-code-border': colors.gray[200],
            '--tw-prose-code-bg': colors.gray[100],

            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
            // color: theme('colors.gray.800'),
            // ...
          },
        },
        invert: {
          css: {
            '--tw-prose-code-border': colors.gray[700],
            '--tw-prose-code-bg': colors.gray[800],
          },
        },
      }),
    },
    maxWidth: {
      '1/2': '50%',
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
