module.exports = {
  mode: 'jit',
  purge: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
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
    require("@tailwindcss/forms"),
    require("@vechaiui/core"),
  ],
}
