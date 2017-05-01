var path = require('path')

module.exports = {
  context: __dirname,     // node exposes __dirname, this is not webpack function. context helps us run webpack from anywhere in our project
  entry: path.join(__dirname, '/src/clientApp.js'),
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
  module: {     // modules webpack needs to load and perform some tasks before bundling.
    loaders: [
      {
        test: '/\.jsx?$/',     // If any filename passes this regx test, then run it through this loader
        loader: 'babel-loader'    // any file with extension js or jsx will run through babel-loader
      }
    ]
  }
}
