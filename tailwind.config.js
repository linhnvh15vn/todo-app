/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          md: 0,
        },
        screens: {
          md: '540px',
        },
      },
      backgroundImage: {
        'desktop-dark': "url('/images/bg-desktop-dark.jpg')",
        'desktop-light': "url('/images/bg-desktop-light.jpg')",
        'mobile-dark': "url('/images/bg-mobile-dark.jpg')",
        'mobile-light': "url('/images/bg-mobile-light.jpg')",
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: 'hsl(var(--card))',
        border: 'hsl(var(--border))',
        muted: {
          foreground: 'hsl(var(--muted-foreground))',
        },
      },
    },
  },
  plugins: [],
};
