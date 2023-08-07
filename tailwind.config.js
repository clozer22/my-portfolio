/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        rdm: '360px',
        xsm: '414px', // New breakpoint value
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      boxShadow: {
        '3xl': '40px 40px 40px 40px rgba(0, 0, 0, 0.3)',
      },
      
    },
  },
  plugins: [],
}

