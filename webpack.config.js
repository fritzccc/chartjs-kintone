const path = require('path');
const os = require('os');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
  mode: 'production',
  entry: './src/main.js',
  output: {
    path: path.join(os.homedir(), 'Dropbox/kintone/jbcc_business'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"]
        }
      }
    }]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  // plugins: [
  //   new HtmlWebpackPlugin({ template: './public/index.html' })
  // ],
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
  watchOptions: {
    poll: 1000,
    aggregateTimeout: 500,
    ignored: /node_modules/
  }
};