module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss')({ config: './tailwind.full.config.js' }),
        require('autoprefixer'),
      ],
    },
  },
}
