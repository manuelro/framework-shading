const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'development',
  entry: {
    'index': './index.js',
  },
  output: {
    publicPath: '/dist/',
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }, {
        test: /\.js$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'babel-loader'
      }, {
        test: /\.vue$/,
        use: 'vue-loader'
      },
    ],
  },
  node: {
    fs: 'empty'
  },
  resolve: {
    modules: [path.resolve(__dirname, 'node_modules')],
  },
  plugins: [
    new CleanWebpackPlugin.CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: 'source-map',
  externals: [],
  devServer: {
    historyApiFallback: true,
    open: true,
    hot: true,
  }
}
