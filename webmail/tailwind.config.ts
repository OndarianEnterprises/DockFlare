import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{ts,tsx,vue}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        'bg-dark':    '#081018',
        'panel-dark': '#0f1720',
        'ica':        '#3d8bff',
      },
      borderRadius: {
        xl: 'calc(var(--radius) + 4px)',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'collapsible-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-collapsible-content-height)' },
        },
        'collapsible-up': {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: '0' },
        },
        boot: {
          '0%':   { opacity: '0' },
          '6%':   { opacity: '1' },
          '12%':  { opacity: '0.35' },
          '18%':  { opacity: '1' },
          '20%':  { opacity: '0' },
          '40%':  { opacity: '0.05' },
          '60%':  { opacity: '0.25' },
          '80%':  { opacity: '0.65' },
          '100%': { opacity: '1' },
        },
        'idle-glow': {
          '0%, 100%': { boxShadow: '0 0 6px rgba(61,139,255,0.12), inset 0 0 3px rgba(61,139,255,0.04)' },
          '50%':      { boxShadow: '0 0 14px rgba(61,139,255,0.28), inset 0 0 7px rgba(61,139,255,0.09)' },
        },
        'draw-edge-x': {
          '0%':   { transform: 'scaleX(0)',    opacity: '0' },
          '20%':  { transform: 'scaleX(0.20)', opacity: '1' },
          '32%':  { transform: 'scaleX(0.32)', opacity: '0.02' },
          '52%':  { transform: 'scaleX(0.52)', opacity: '0.9' },
          '64%':  { transform: 'scaleX(0.64)', opacity: '0.08' },
          '80%':  { transform: 'scaleX(0.80)', opacity: '1' },
          '100%': { transform: 'scaleX(1)',    opacity: '0.7' },
        },
        'draw-edge-y': {
          '0%':   { transform: 'scaleY(0)',    opacity: '0' },
          '20%':  { transform: 'scaleY(0.20)', opacity: '1' },
          '32%':  { transform: 'scaleY(0.32)', opacity: '0.02' },
          '52%':  { transform: 'scaleY(0.52)', opacity: '0.9' },
          '64%':  { transform: 'scaleY(0.64)', opacity: '0.08' },
          '80%':  { transform: 'scaleY(0.80)', opacity: '1' },
          '100%': { transform: 'scaleY(1)',    opacity: '0.7' },
        },
        scan: {
          '0%':   { transform: 'translateY(-100%)', opacity: '0.5' },
          '80%':  { opacity: '0.3' },
          '100%': { transform: 'translateY(200%)',  opacity: '0' },
        },
      },
      animation: {
        'accordion-down':  'accordion-down 0.2s ease-out',
        'accordion-up':    'accordion-up 0.2s ease-out',
        'collapsible-down': 'collapsible-down 0.2s ease-in-out',
        'collapsible-up':  'collapsible-up 0.2s ease-in-out',
        'boot':       'boot 1.2s ease-out forwards',
        'boot-fast':  'boot 0.7s ease-out forwards',
        'idle-glow':  'idle-glow 3s ease-in-out infinite',
        'scan':       'scan 5s linear infinite',
        'draw-edge-x': 'draw-edge-x 0.3s ease-out forwards',
        'draw-edge-y': 'draw-edge-y 0.3s ease-out forwards',
      },
    },
  },
  plugins: [],
}
export default config