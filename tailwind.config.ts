import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(210 20% 95%)',
        foreground: 'hsl(210 20% 20%)',
        primary: 'hsl(210 40% 60%)',
        accent: 'hsl(320 70% 70%)',
        border: 'hsl(210 20% 90%)',
        surface: 'hsl(210 20% 100%)',
        card: 'hsl(210 20% 100%)',
        'card-foreground': 'hsl(210 20% 20%)',
        muted: 'hsl(210 20% 95%)',
        'muted-foreground': 'hsl(210 20% 45%)',
      },
      borderRadius: {
        lg: '12px',
        md: '8px',
        sm: '4px',
      },
      spacing: {
        'xl': '24px',
        'lg': '16px',
        'md': '8px',
        'sm': '4px',
      },
      boxShadow: {
        card: '0 4px 12px hsla(210, 20%, 20%, 0.08)',
      },
      animation: {
        'fade-in': 'fadeIn 0.2s cubic-bezier(0.22,1,0.36,1)',
        'slide-up': 'slideUp 0.2s cubic-bezier(0.22,1,0.36,1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
