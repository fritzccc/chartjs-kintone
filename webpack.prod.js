const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const dir = 'prod'

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.join(__dirname, `/${dir}`),
    filename: '[name].prod.js',
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
})