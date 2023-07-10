const path = require('path');

module.exports = function override(config) {
  // Add fallback configuration for the path module
  config.resolve.fallback = {
    ...config.resolve.fallback,
    path: require.resolve('path-browserify'),
  };

  return config;
};
