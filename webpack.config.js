module.exports = {
  entry: './app/app.ts',
  output: {
    fileName: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    preLoaders: [
      {
        test: /\.ts$/,
        exclude: 'node_modules',
        loader: 'tslint-loader'
      }
    ],
    loaders: [
      {
        test: /\.ts$/,
        exclude: 'node_modules',
        loader: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.ts']
  },
};