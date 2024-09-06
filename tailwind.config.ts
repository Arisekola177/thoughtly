import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "240px",
        sm: "320px",
        sml: "480px",
        md: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "dotted-pattern": "radial-gradient(circle, #d1d5db 1px, transparent 1px)", 
      },
      backgroundSize: {
        "dotted-pattern": "20px 20px", 
      },
      animation: {
        grow1: 'grow1 1s ease-out forwards',
        grow2: 'grow2 1s ease-out forwards',
        fadeIn: 'fadeIn 1s ease-in forwards',
        fadeInOut1: 'fadeInOut1 4s ease-in-out infinite',
        fadeInOut2: 'fadeInOut2 4s ease-in-out infinite',
        slideInRight: 'slideInRight 1s ease-out forwards infinite',
        slideLeft: 'slideLeft 50s linear infinite',
        slideRight: 'slideRight 50s linear infinite',
        bounceUpDown: 'bounceUpDown 5s ease-in-out infinite',
        animationDot:'dot-animation 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bounceUpDown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '30%': { transform: 'translateY(-40px)' },
        },
        dotanimation: {
         '0%, 100%':{ backgroundColor: '#3b82f6' },
          '25%': { backgroundColor: '#60a5fa'},
          '50%': {backgroundColor: '#93c5fd'},
          '75%': { backgroundColor: '#bfdbfe'}
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(100%)' }, 
          '100%': { opacity: '1', transform: 'translateX(0)' }, 
        },
         moveUp: {
          '0%': { transform:'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
         ' 100%': { transform: 'translateY(0)' }
        },
        moveDown: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(20px)' },
          '100%': { transform: 'translateY(0)' }
        },
      
        grow1: {
          '0%': { width: '0%' },
          '100%': { width: '82%' },
        },
        grow2: {
          '0%': { width: '0%' },
          '100%': { width: '34%' },
        },
        fadeInOut1: {
          '0%': { opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        fadeInOut2: {
          '0%': { opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      
      },
    
    },
  },
  plugins: [],
};
export default config;
