const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'dev/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dev/'),
    publicPath: '/',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader',],
      },
    ],
  },
  devServer: {
    index: 'index.html',
    contentBase: path.resolve(__dirname, 'dev'),
    historyApiFallback: true,
    port: 8080,
  }
}
