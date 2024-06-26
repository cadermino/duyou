/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'underconstruction': "url('https://s3.us-west-2.amazonaws.com/www.duyou.com.mx/assets/underconstruction.jpg')",
      },
      colors: {
        'red-duyou-primary': '#ED3734',
        'red-duyou-secondary': '#E01826',
        'blue-dark-duyou': '#0C1E27',
        'gray-dark-duyou': '#DDDDDD',
        'gray-darker-duyou': '#D5D5D5',
        'gray-dark-secondary-duyou': '#101521',
      },
      fontFamily: {
        'avenir': 'Avenir, Helvetica, Arial, sans-serif',
        'avenir-book': 'Avenir Book, Helvetica, Arial, sans-serif',
        'avenir-black': 'Avenir Black, Helvetica, Arial, sans-serif',
        'avenir-light': 'Avenir Light, Helvetica, Arial, sans-serif',
        'avenir-heavy': 'Avenir Heavy, Helvetica, Arial, sans-serif',
      },
    },
  },
  plugins: [],
}
