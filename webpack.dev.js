const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    port: 9000,
    publicPath: 'http://localhost:9000/dist',
    open: true,
    hotOnly: true,
    historyApiFallback: true,
},
});