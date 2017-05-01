var path = require('path')

module.exports = {
  context: __dirname,     // node exposes __dirname, this is not webpack function. context helps us run webpack from anywhere in our project
  entry: path.join(__dirname, '/src/clientApp.jsx'),
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json']
  },
  stats: {      // This is for terminal output. What and how to display error or bundled files
    color: true,
    reasons: true,
    chunks: false
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}
