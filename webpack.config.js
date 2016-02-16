const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/app.jsx'),
  output: {
    path: path.resolve(__dirname),
    filename: 'app.js',
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: 'node_modules',
      loader: 'babel',
      query: {
        presets: ['react', 'es2015'],
        plugins: ['add-module-exports'],
      },
    }],
  },
};
