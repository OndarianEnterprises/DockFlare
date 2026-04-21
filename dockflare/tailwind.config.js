/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/templates/**/*.html",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'bg-dark':    '#081018',
        'panel-dark': '#0f1720',
        'ica':        '#3d8bff',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui"),
  ],
  safelist: [
    'h-3', 'w-3', 'inline-block', 'mr-1', 'text-info',
    'bottom-4', 'right-4', 'w-80', 'z-50',
    'translate-y-4', 'translate-y-0',
    'opacity-0', 'opacity-100',
    'pointer-events-none', 'pointer-events-auto',
    'space-y-1', 'shrink-0',
  ],
  daisyui: {
    themes: [
      {
        tron: {
          "color-scheme": "dark",
          "primary":           "#3d8bff",
          "primary-content":   "#081018",
          "secondary":         "#162030",
          "secondary-content": "#94a3b8",
          "accent":            "#3d8bff",
          "accent-content":    "#081018",
          "neutral":           "#162030",
          "neutral-content":   "#94a3b8",
          "base-100":          "#081018",
          "base-200":          "#0a1520",
          "base-300":          "#0f1720",
          "base-content":      "#e2e8f0",
          "info":              "#3d8bff",
          "info-content":      "#081018",
          "success":           "#3dff8b",
          "success-content":   "#081018",
          "warning":           "#ff8b3d",
          "warning-content":   "#081018",
          "error":             "#ff4444",
          "error-content":     "#081018",
          "--rounded-box":   "0.125rem",
          "--rounded-btn":   "0.125rem",
          "--rounded-badge": "0.125rem",
          "--tab-radius":    "0.125rem",
        },
      },
      "light", "dark", "cupcake", "bumblebee", "emerald", "corporate",
      "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden",
      "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black",
      "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade",
      "night", "coffee", "winter",
    ],
    darkTheme: "tron",
  },
}
