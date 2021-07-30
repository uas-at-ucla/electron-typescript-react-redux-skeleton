module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
    './node_modules/@vechaiui/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // false, 'media', or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@vechaiui/core'),
  ],
}
