// https://www.cnblogs.com/ygunoil/p/14340269.html
// https://www.webpackjs.com/contribute/writing-a-loader/

const path = require('path');

module.exports = {
  mode: 'development',
  entry: './banner-loader.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js',
  },
  module: {
    rules: [{
      test:/\.js/,
      use:[path.resolve(__dirname, './babel-loader.js')]
    }]
  }
};
