/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        'sombra-imagenes': '0px 2px 2px 0px rgba(0, 0, 0, 0.411)',
        'sombra-bg-sm': '0px 2px 2px 2px rgba(81,87,208,0.6)',
        'sombra-bg': '4px 4px 4px 0px rgba(81,87,208,0.6)',
        'sombra-bg-footer': '4px 4px 4px 4px rgba(0, 0, 0, 0.711)',
        'sombra-btn-proyects': '1px 1px 2px rgba(0,0,0,0.65)',
        'custom': '0 2px 5px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [ require('@tailwindcss/forms'),],
}
