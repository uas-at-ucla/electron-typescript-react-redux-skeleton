const baseConfig = require('./tailwind.config.js')

// VechaiUI messes up Tailwind CSS IntelliSense, so it needs to be added in a different config file.
// This might not be necessary once react-scripts becomes compatible with PostCSS 8.

module.exports = {
  ...baseConfig,
  plugins: [
    ...baseConfig.plugins,
    require('@vechaiui/core'),
  ],
}
