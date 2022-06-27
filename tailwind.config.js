/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        SoftBlue : 'hsl(215, 51%, 70%)',
        Cyan: 'hsl(178, 100%, 50%)',
        VDarkBlueMain: 'hsl(217, 54%, 11%)',
        VDarkBlueCard: 'hsl(216, 50%, 16%)',
        VDarkBlueLine: 'hsl(215, 32%, 27%)',
        White: 'hsl(0, 0%, 100%)'
      },
      fontFamily: {
        Outfit: ['Outfit',"sans-serif"]
      }
    },
  },
  plugins: [],
}
