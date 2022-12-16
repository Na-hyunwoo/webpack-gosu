const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js',
    subPage: './src/sub/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'css-loader',
        ]
      },{
        test: /\.(js|jsx)/,
        use: [
          'babel-loader'        
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ESLintPlugin()
  ],
  devServer: {
    hot: true,
    inline: true,
    host: '0.0.0.0',
    port: 8080
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'vendors'
    }
  }
};