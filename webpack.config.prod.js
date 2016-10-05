const webpack = require('webpack')

module.exports = {
  entry: [
    './src/main.jsx'
  ],

  output: { // Only used when using command 'webpack', not 'webpack-dev-server'
    path: require('path').resolve('./dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loaders: ['react-hot', 'babel']
      },
      {
        test: /\.scss$/, loaders: ['style', 'css', 'sass']
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.TMDB_API_KEY': `'${process.env.TMDB_API_KEY}'`
    })
  ]
}
