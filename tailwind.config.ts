
import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        body: ['"Poppins"', 'sans-serif'],
        headline: ['"Playfair Display"', 'serif'],
        bengali: ['"Hind Siliguri"', 'sans-serif'],
        code: ['monospace'],
      },
      spacing: {
        '52': '13rem',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        'ken-burns-top': {
          '0%': {
            transform: 'scale(1) translateY(0)',
            'transform-origin': '50% 16%',
          },
          '100%': {
            transform: 'scale(1.15) translateY(-10px)',
            'transform-origin': 'top',
          },
        },
        'ken-burns-bottom': {
          '0%': {
            transform: 'scale(1) translateY(0)',
            'transform-origin': '50% 84%',
          },
          '100%': {
            transform: 'scale(1.15) translateY(10px)',
            'transform-origin': 'bottom',
          },
        },
        'ken-burns-left': {
          '0%': {
            transform: 'scale(1) translate(0, 0)',
            'transform-origin': '16% 50%',
          },
          '100%': {
            transform: 'scale(1.15) translate(-10px, 0px)',
            'transform-origin': 'left',
          },
        },
        'ken-burns-right': {
          '0%': {
            transform: 'scale(1) translate(0,0)',
            'transform-origin': '84% 50%',
          },
          '100%': {
            transform: 'scale(1.15) translate(10px, 0px)',
            'transform-origin': 'right',
          },
        },
         'pulse-slow': {
            '0%, 100%': { opacity: '0.5' },
            '50%': { opacity: '1' },
        },
        'attention-pulse': {
          '0%': {
            transform: 'scale(0.95)',
            boxShadow: '0 0 0 0 hsl(var(--secondary) / 0.7)',
          },
          '70%': {
            transform: 'scale(1)',
            boxShadow: '0 0 0 10px hsl(var(--secondary) / 0)',
          },
          '100%': {
            transform: 'scale(0.95)',
            boxShadow: '0 0 0 0 hsl(var(--secondary) / 0)',
          },
        },
        'color-cycle': {
          '0%, 100%': { 
            backgroundColor: 'hsl(var(--primary))',
            color: 'hsl(var(--primary-foreground))' 
          },
          '33%': { 
            backgroundColor: 'hsl(var(--secondary))',
            color: 'hsl(var(--secondary-foreground))'
          },
          '66%': { 
            backgroundColor: 'hsl(var(--accent))',
            color: 'hsl(var(--accent-foreground))' 
          },
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'ken-burns-top': 'ken-burns-top 12s ease-out both',
        'ken-burns-bottom': 'ken-burns-bottom 12s ease-out both',
        'ken-burns-left': 'ken-burns-left 12s ease-out both',
        'ken-burns-right': 'ken-burns-right 12s ease-out both',
        'pulse-slow': 'pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'attention-pulse': 'attention-pulse 2s infinite',
        'color-cycle': 'color-cycle 6s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

    