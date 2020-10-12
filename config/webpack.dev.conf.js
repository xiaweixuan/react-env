const { merge } = require('webpack-merge');
const webpack = require('webpack')
const baseConfig = require('./webpack.base.conf.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('dev')
      }
    }),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('../dist/react.manifest.json')
    }),
  ],
  devServer: {
    inline: true,
    historyApiFallback: true,
    contentBase: './dist',
    port: 3000
  }
});