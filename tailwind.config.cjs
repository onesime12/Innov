/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/components/*/*.{vue,html,js,ts}',
    './src/pages/views/*.{vue,html,js}',
    './src/*.{vue,html,js}',
    './index.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
