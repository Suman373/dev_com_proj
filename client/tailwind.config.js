/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './src/**/*.{js,jsx,ts,tsx}',
  '/index.html'
  ],
  theme: {
      extend: {
          backgroundColor: {
            'custom-dark': '#181A1B',
            'custom-hover': '#272a2b',
            'custom-green': '#5BD45C'
          },
          fontFamily: {
            devcom: ['Neue Machina', 'georgia'],
            devcom_bold: ['Neue Machina--bold']
          }
      },
  },
  plugins: [],
}


