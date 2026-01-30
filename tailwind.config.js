import { config } from './lib/server/config'
import { FONTS_SANS, FONTS_SERIF } from './consts'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: ['./pages/**/*.js', './components/**/*.js', './layouts/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        day: {
          DEFAULT: config.lightBackground || '#ffffff'
        },
        night: {
          DEFAULT: config.darkBackground || '#111827'
        },
        brand: {
          dark: '#050510',
          primary: '#3B82F6', // Electric Blue
          secondary: '#8B5CF6', // Violet
          accent: '#06b6d4' // Cyan
        }
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', ...FONTS_SANS],
        mono: ['var(--font-geist-mono)', ...FONTS_SANS], // Using sans fallback for mono if needed, or specific mono stack
        serif: FONTS_SERIF,
        noEmoji: [
          '"IBM Plex Sans"',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif'
        ]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
