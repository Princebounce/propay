// tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '410px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px'
      },
      colors: {
        customTeal: "#00A3FF", 
        customBlue: "#4280ED",
        customGray: "#CAD5F3"
      },
    },
  },
  plugins: [],
};
