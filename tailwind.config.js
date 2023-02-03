/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '5.5xl': '3.5rem',
      },

      gridTemplateColumns: {
        'autoCol': '1fr auto',
      },

      colors: {
        'body': '#f0f3f8',
        'button': '#372b62',
        'firstButtonColor': '#c6bdde',
        'titleColor': '#34324f',
        'paragraphColor': '#525252',
      },
    },
  },
  plugins: [],
}
