/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // v2 fonts, self-hosted via @font-face in src/index.css. Satoshi = display
        // headings, Inter = body/UI, Satisfy = the handwritten accent word. Each
        // family name matches its @font-face, so rendering no longer depends on a
        // locally-installed font.
        display: ["Satoshi", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        script: ["Satisfy", "Georgia", "cursive"],
      },
      colors: {
        // v2 palette. Values are PROVISIONAL — sampled by eye from the Figma
        // screenshot, not the real tokens. Edit the hexes here to correct them
        // everywhere at once. Green is the one confirmed value (#1DAF61).
        brand: {
          green: '#1DAF61',        // primary accent — buttons, script words, status dot
          'green-deep': '#143024', // footer background (dark pine green) — provisional
          pink: '#AD319C',         // primary pink accent — footer "work", Resume text
          'pink-light': '#FFE2FB', // light pink — Resume icon badge / soft fills
          amber: '#F5A623',        // meta "lightning" icon — provisional
        },
        ink: {
          DEFAULT: '#1A1A1A',      // headings / near-black — provisional
          muted: '#6B6B6B',        // body copy — provisional
          faint: '#9AA0A6',        // labels, meta, captions — provisional
        },
        grid: '#CCCCCC',           // hand-drawn hero grid lines (confirmed rgb 204,204,204)
      },
      boxShadow: {
        // macOS-window frame elevation for case-study screenshots
        window: '0 20px 50px -12px rgba(0, 0, 0, 0.18)',
        // v1 neumorphism — kept only until the pages still using it are migrated
        neu: '-8px -6px 15px #fff, 6px 8px 15px rgba(0, 0, 0, 0.15)',
        'neu-i': 'inset -8px -6px 15px #fff, inset 6px 8px 15px rgba(0, 0, 0, 0.15)',
      },
      backgroundColor: {
        primary: 'rgb(241, 241, 241)',
        'primary-dark': '#1e1e1e'
      }
    },
  },
  plugins: [],
}
