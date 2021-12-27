const webpack = require('webpack')
const path = require('path')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base')

const prot = Number(process.env.PORT) || 3030

const devConfig = {
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      // #https://webpack.docschina.org/plugins/define-plugin/
      'process.IS_DEV': JSON.stringify(true)
    })
  ],
  devServer: {
    host: '0.0.0.0',
    port: prot,
    hot: 'only',
    proxy: {}
  },
  devtool: 'source-map'
}

module.exports = merge(baseConfig, devConfig)
