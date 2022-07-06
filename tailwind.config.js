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
const em = (px, base) => `${round(px / base)}em`
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
            ':not(pre) > code': {
              color: 'var(--tw-prose-code)',
              padding: '0.125rem 0.25rem',
              border: 'solid 1px',
              borderColor: 'var(--tw-prose-code-border)',
              backgroundColor: 'var(--tw-prose-code-bg)',
              borderRadius: rem(8),
              transition:
                'background-color 0.2s ease-in-out, border-color 0.2s ease-in-out',
            },
            code: {
              fontWeight: '400',
            },
            '--tw-prose-code-border': colors.gray[200],
            '--tw-prose-code-bg': colors.gray[100],
            'pre[class*=language-] > code[class*=language-]': {
              backgroundColor: 'transparent',
              borderWidth: 0,
              borderRadius: 0,
              padding: 0,
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
            'tbody td, tfoot td': {
              paddingTop: em(8, 12),
              paddingRight: em(12, 12),
              paddingBottom: em(8, 12),
              paddingLeft: em(12, 12),
            },
            'tbody td:first-child, tfoot td:first-child': {
              paddingLeft: '0',
            },
            'tbody td:last-child, tfoot td:last-child': {
              paddingRight: '0',
            },
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
