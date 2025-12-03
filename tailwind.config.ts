import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Fairy-Tale Palette - Warm Sunrise
        'sunrise': {
          lightest: '#FFF4E0',
          light: '#FFE8B8',
          DEFAULT: '#FFD88C',
          accent: '#FFC452',
        },

        // Meadow Green
        'meadow': {
          lightest: '#E8F5E9',
          light: '#C8E6C9',
          DEFAULT: '#81C784',
          dark: '#66BB6A',
        },

        // Sky Blue
        'sky': {
          lightest: '#E3F2FD',
          light: '#BBDEFB',
          DEFAULT: '#64B5F6',
          dark: '#42A5F5',
        },

        // Coral Glow
        'coral': {
          lightest: '#FFF3E0',
          light: '#FFCCBC',
          DEFAULT: '#FF8A65',
          dark: '#FF7043',
        },

        // Soft Lavender
        'fairy': {
          lightest: '#F3E5F5',
          light: '#E1BEE7',
          DEFAULT: '#BA68C8',
          dark: '#AB47BC',
        },

        // Warm Neutrals
        'cream': '#FAF8F6',
        'latte': '#F5F1ED',
        'cocoa': {
          light: '#8B7355',
          DEFAULT: '#5D4E37',
          dark: '#3E3425',
        },

        // Pure
        'pure': '#FFFFFF',
      },
      fontFamily: {
        display: ['Fredoka', 'Quicksand', 'Comfortaa', 'sans-serif'],
        body: ['Outfit', 'Nunito', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'blob': '60% 40% 30% 70% / 60% 30% 70% 40%',
        'cloud': '30% 70% 70% 30% / 30% 30% 70% 70%',
        'magic': '45% 55% 62% 38% / 42% 58% 42% 58%',
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },
      boxShadow: {
        'glow-sunrise': '0 0 20px rgba(255, 216, 140, 0.3), 0 0 40px rgba(255, 216, 140, 0.1)',
        'glow-meadow': '0 0 20px rgba(129, 199, 132, 0.3), 0 0 40px rgba(129, 199, 132, 0.1)',
        'glow-sky': '0 0 20px rgba(100, 181, 246, 0.3), 0 0 40px rgba(100, 181, 246, 0.1)',
        'glow-coral': '0 0 20px rgba(255, 138, 101, 0.3), 0 0 40px rgba(255, 138, 101, 0.1)',
        'fairy': '0 8px 32px rgba(93, 78, 55, 0.08), 0 2px 8px rgba(93, 78, 55, 0.04)',
        'fairy-lg': '0 16px 48px rgba(93, 78, 55, 0.12), 0 4px 12px rgba(93, 78, 55, 0.06)',
        'fairy-xl': '0 24px 64px rgba(93, 78, 55, 0.16), 0 8px 16px rgba(93, 78, 55, 0.08)',
        'inner-glow': 'inset 0 2px 8px rgba(255, 255, 255, 0.3)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'blob': 'blob-morph 8s ease-in-out infinite',
        'gentle-bounce': 'gentle-bounce 2s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'sparkle': 'sparkle 2s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'drift': 'drift 20s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'blob-morph': {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '25%': { borderRadius: '30% 70% 70% 30% / 30% 70% 70% 30%' },
          '50%': { borderRadius: '50% 50% 30% 70% / 50% 50% 70% 30%' },
          '75%': { borderRadius: '70% 30% 50% 50% / 30% 70% 30% 70%' },
        },
        'gentle-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1) rotate(0deg)' },
          '50%': { opacity: '0.4', transform: 'scale(0.8) rotate(180deg)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.5', filter: 'brightness(1)' },
          '50%': { opacity: '1', filter: 'brightness(1.2)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '25%': { transform: 'translate(20px, -20px) rotate(90deg)' },
          '50%': { transform: 'translate(-10px, -40px) rotate(180deg)' },
          '75%': { transform: 'translate(-30px, -10px) rotate(270deg)' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
};
export default config;
