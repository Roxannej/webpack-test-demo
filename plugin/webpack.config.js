const path = require('path')
const CopyrightWebpackPlugin = require('./index.js')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path:path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  plugins: [new CopyrightWebpackPlugin()]
}