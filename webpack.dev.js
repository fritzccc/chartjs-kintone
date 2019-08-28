const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const dir = 'dev'

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: path.join(__dirname, `/${dir}`),
    filename: '[name].dev.js',
  },
  devtool: 'inline-source-map',
  optimization: {
    minimizer: [new UglifyJsPlugin({
      sourceMap: true
    })],
  },
})