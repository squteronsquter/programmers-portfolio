const HtmlWebpackPlugin = require('html-webpack-plugin');
// const path = require('path');

module.exports = {
  mode: 'production',
  //   entry: 'index.js',
  //   output: {
  //     path: path.resolve(__dirname, './dist'),
  //     filename: 'index_bundle.js'
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};
