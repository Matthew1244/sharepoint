/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  theme: {
    extend: {
      width: {
        527: '527px',
        335: '335px',
      },
      height: {
        480: '632px'
      },
      colors: {
        'office': '#D9E3D9',
        'drive-bg': '#f5f5f5f',
        'drive': '#038387'
      }
    },  },
  plugins: [],
}
