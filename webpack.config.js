const path = require('path')
const nodemonPlugin = require('nodemon-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/lambdas/api/graphiql.js',
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js'
  },
  plugins: [
    new nodemonPlugin(),
  ],
  target: 'node',
  devtool: 'source-map',
  resolve: {
    extensions: [
      '.mjs',
      '.js',
      '.json',
      '.graphql',
    ],
    alias: {
      "lib": path.resolve(__dirname, 'src/lib'),
    }
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader'},
      { test: /\.graphql$/, exclude: /node_modules/, use: 'graphql-tag/loader'},
    ],
  },
}
