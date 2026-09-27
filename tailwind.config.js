/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          0: '#0c0c0f',
          1: '#111114',
          2: '#18181c',
          3: '#1e1e23',
          4: '#26262d',
        },
        accent: {
          DEFAULT: '#5eead4',
          dim: '#2dd4bf',
          muted: 'rgba(94, 234, 212, 0.12)',
        },
        lavender: {
          DEFAULT: '#c4b5fd',
          muted: 'rgba(196, 181, 253, 0.1)',
        },
        prose: {
          primary: '#ededef',
          secondary: '#a1a1aa',
          tertiary: '#92929b',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'Consolas', 'monospace'],
      },
      borderColor: {
        subtle: 'rgba(255, 255, 255, 0.06)',
        default: 'rgba(255, 255, 255, 0.1)',
      },
      borderRadius: {
        DEFAULT: '10px',
      },
      letterSpacing: {
        tight: '-0.03em',
        tighter: '-0.04em',
      },
    },
  },
  plugins: [],
};
