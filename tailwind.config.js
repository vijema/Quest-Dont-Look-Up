/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xxs': '320px',
      'xs': '440px',
      'sm': '640px',   
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',      
    },
    fontSize: {
      xs: '0.7rem', // 10px
      sm: '0.9rem', // 12px
      base: '1rem', // 14px
      md: '1.1rem', // 18px
      lg: '1.25rem', // 20px
      'xl': '1.5rem', // 24px
      '2xl': '2rem', // 32px
      '3xl': '2.5rem', // 40px
      '4xl': '3rem', // 48px
      '5xl': '3.25rem', // 56px
      '6xl': '3.5rem', // 60px
    },
  },
  plugins: [],
}