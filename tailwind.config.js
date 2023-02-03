/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
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
