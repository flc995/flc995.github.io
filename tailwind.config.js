module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#053eff',
      },
    }
  },
  plugins: [
    require('flowbite/plugin')
],
}